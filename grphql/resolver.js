const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Admin = require("../models/Admin");
const Pendaftar = require("../models/pendaftar");

module.exports = {
  createUser: async function ({ userInput }, req) {
    const errors = [];
    if (!validator.isEmail(userInput.email)) {
      errors.push({ message: "E-Mail is invalid." });
    }
    if (
      validator.isEmpty(userInput.password) ||
      !validator.isLength(userInput.password, { min: 5 })
    ) {
      errors.push({ message: "Password too short!" });
    }
    if (errors.length > 0) {
      const error = new Error("Invalid input.");
      error.data = errors;
      error.code = 422;
      throw error;
    }
    const existingUser = await User.findOne({ email: userInput.email });
    if (existingUser) {
      const error = new Error("User exists already!");
      error.code = 401;
      throw error;
    }
    const hashedPw = await bcrypt.hash(userInput.password, 12);
    const user = new User({
      email: userInput.email,
      name: userInput.name,
      password: hashedPw,
    });
    const createdUser = await user.save();
    const token = jwt.sign(
      {
        userId: createdUser._id.toString(),
        email: createdUser.email,
        admin: false,
      },
      "genbirahasianegara"
    );
    return {
      ...createdUser._doc,
      _id: createdUser._id.toString(),
      token: token,
    };
  },
  login: async function ({ email, password }) {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("User tidak ditemukan");
      error.code = 401;
      throw error;
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Password salah");
      error.code = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
        admin: false,
      },
      "genbirahasianegara"
    );
    return {
      token: token,
      userId: user._id.toString(),
      name: user.name,
      email: user.email,
    };
  },

  //to admin
  createAdmin: async function ({ adminInput }, req) {
    const errors = [];
    if (!validator.isEmail(adminInput.email)) {
      errors.push({ message: "E-Mail is invalid." });
    }
    if (
      validator.isEmpty(adminInput.password) ||
      !validator.isLength(adminInput.password, { min: 5 })
    ) {
      errors.push({ message: "Password too short!" });
    }
    if (errors.length > 0) {
      const error = new Error("Invalid input.");
      error.data = errors;
      error.code = 422;
      throw error;
    }
    const existingUser = await Admin.findOne({ email: adminInput.email });
    if (existingUser) {
      const error = new Error("Admin telah ada!");
      error.code = 401;
      throw error;
    }
    const hashedPw = await bcrypt.hash(adminInput.password, 12);
    const admin = new Admin({
      email: adminInput.email,
      name: adminInput.name,
      password: hashedPw,
    });
    const createdAdmin = await admin.save();
    const token = jwt.sign(
      {
        adminId: createdAdmin._id.toString(),
        email: createdAdmin.email,
        admin: true,
      },
      "genbirahasianegara"
    );
    return {
      ...createdAdmin._doc,
      _id: createdAdmin._id.toString(),
      admin: token,
    };
  },
  loginAdmin: async function ({ email, password }) {
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      const error = new Error("Admin tidak ditemukan");
      error.code = 401;
      throw error;
    }
    const isEqual = await bcrypt.compare(password, admin.password);
    if (!isEqual) {
      const error = new Error("Password salah");
      error.code = 401;
      throw error;
    }
    const token = jwt.sign(
      {
        adminId: admin._id.toString(),
        email: admin.email,
        admin: true,
      },
      "genbirahasianegara"
    );
    return {
      admin: token,
      adminId: admin._id.toString(),
      name: admin.name,
    };
  },
  createPendaftar: async function ({ pendaftarInput }, req) {
    if (!req.isAuth) {
      const error = new Error("Not authenticated!");
      error.code = 401;
      throw error;
    }

    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("Invalid user.");
      error.code = 401;
      throw error;
    }
    const pendaftar = new Pendaftar({
      ...pendaftarInput,
    });
    const createdPendaftar = await pendaftar.save();
    user.pendaftar = createdPendaftar;
    await user.save();
    return {
      ...createdPendaftar._doc,
      _id: createdPendaftar._id.toString(),
      createdAt: createdPendaftar.createdAt.toISOString(),
      updatedAt: createdPendaftar.updatedAt.toISOString(),
    };
  },
  userIsRegister: async function ({ userId }, req) {
    if (!req.isAuth) {
      const error = new Error("Not authenticated!");
      error.code = 401;
      throw error;
    }
    //try to get data pendaftar of user
    try {
      const findUser = await User.findById(userId);
      if (!findUser) {
        const error = new Error("user tidak ditemukan");
        error.code = 404;
        throw error;
      } else {
        //!findUser.pendaftar ? isRegister: false  :  isRegister: true ;
        if (!findUser.pendaftar) {
          const error = new Error("user belum mendaftar");
          error.code = 404;
          throw error;
        } else {
          const pendaftar = await Pendaftar.findById(findUser.pendaftar);
          if (!pendaftar) {
            const error = new Error("pendaftar not found");
            error.code = 404;
            throw error;
          } else {
            return pendaftar;
          }
        }
      }
    } catch (error) {
      throw error;
    }
  },
  pendaftar: async function ({ pendaftarId }, req) {
    if (!req.isAuth || !req.isAdmin) {
      const error = new Error("Not authenticated!");
      error.code = 401;
      throw error;
    }
    const findPendaftar = await Pendaftar.findById(pendaftarId);
    if (!findPendaftar) {
      const error = new Error("pendaftar not found");
      error.code = 404;
      throw error;
    } else {
      return findPendaftar;
    }
  },
  pendaftars: async function ({ adminId, kampus, jenis }, req) {
    if (!req.isAdmin) {
      const error = new Error("anda bukan admin!");
      error.code = 401;
      throw error;
    }
    const findAdmin = await Admin.findById(adminId);
    if (!findAdmin) {
      const error = new Error("admin tidak ditemukan");
      error.code = 404;
      throw error;
    } else {
      const findPendaftar = await Pendaftar.find({
        kampus: kampus,
        jenis: jenis,
      });
      if (!findPendaftar) {
        const error = new Error("pendaftar tidak ditemukan");
        error.code = 404;
        throw error;
      } else {
        return findPendaftar;
      }
    }
  },
  //to fetch all lolosberkas
  lolosBerkases: async function ({ adminId, kampus, jenis }, req) {
    if (!req.isAdmin) {
      const error = new Error("anda bukan admin!");
      error.code = 401;
      throw error;
    }
    const findAdmin = await Admin.findById(adminId);
    if (!findAdmin) {
      const error = new Error("admin tidak ditemukan");
      error.code = 404;
      throw error;
    } else {
      const findPendaftar = await Pendaftar.find({
        kampus: kampus,
        jenis: jenis,
        lolosBerkas: true,
      });
      if (!findPendaftar) {
        const error = new Error("pendaftar tidak ditemukan");
        error.code = 404;
        throw error;
      } else {
        return findPendaftar;
      }
    }
  },
  //to fetch all lolosberkas
  lolosWawancaras: async function ({ adminId, kampus, jenis }, req) {
    if (!req.isAdmin) {
      const error = new Error("anda bukan admin!");
      error.code = 401;
      throw error;
    }
    const findAdmin = await Admin.findById(adminId);
    if (!findAdmin) {
      const error = new Error("admin tidak ditemukan");
      error.code = 404;
      throw error;
    } else {
      const findPendaftar = await Pendaftar.find({
        kampus: kampus,
        jenis: jenis,
        lolosWawancara: true,
      });
      if (!findPendaftar) {
        const error = new Error("pendaftar tidak ditemukan");
        error.code = 404;
        throw error;
      } else {
        return findPendaftar;
      }
    }
  },
  //to make pendaftar lolos berkas or not
  lolosBerkas: async function ({ pendaftarId, adminId, terima }, req) {
    if (!req.isAdmin) {
      const error = new Error("anda bukan admin!");
      error.code = 401;
      throw error;
    }
    try {
      const findAdmin = await Admin.findById(adminId);
      if (!findAdmin) {
        const error = new Error("admin tidak ditemukan");
        error.code = 404;
        throw error;
      } else {
        const findPendaftar = await Pendaftar.findById(pendaftarId);
        if (!findPendaftar) {
          const error = new Error("pendaftar tidak ditemukan");
          error.code = 404;
          throw error;
        } else {
          findPendaftar.lolosBerkas = terima;
          const result = await findPendaftar.save();
          return result;
        }
      }
    } catch (error) {
      throw error;
    }
  },
  //to add nilai Wawancara
  addNilaiWawancara: async function ({ pendaftarId, adminId, untuk, nilai }, req) {
    if (!req.isAdmin) {
      const error = new Error("anda bukan admin!");
      error.code = 401;
      throw error;
    }
    try {
      const findAdmin = await Admin.findById(adminId);
      if (!findAdmin) {
        const error = new Error("admin tidak ditemukan");
        error.code = 404;
        throw error;
      } else {
        const findPendaftar = await Pendaftar.findById(pendaftarId);
        if (!findPendaftar) {
          const error = new Error("pendaftar tidak ditemukan");
          error.code = 404;
          throw error;
        } else {
          if (untuk === "nilaiWawancara1") {
            findPendaftar.nilaiWawancara1 = nilai;
          } else {
            findPendaftar.nilaiWawancara2 = nilai;
          }
          const result = await findPendaftar.save();
          return result;
        }
      }
    } catch (error) {
      throw error;
    }
  },
  //to make pendaftar lolos Wawancara or not
  lolosWawancara: async function ({ pendaftarId, adminId, terima }, req) {
    if (!req.isAdmin) {
      const error = new Error("anda bukan admin!");
      error.code = 401;
      throw error;
    }
    try {
      const findAdmin = await Admin.findById(adminId);
      if (!findAdmin) {
        const error = new Error("admin tidak ditemukan");
        error.code = 404;
        throw error;
      } else {
        const findPendaftar = await Pendaftar.findById(pendaftarId);
        if (!findPendaftar) {
          const error = new Error("pendaftar tidak ditemukan");
          error.code = 404;
          throw error;
        } else {
          findPendaftar.lolosWawancara = terima;
          const result = await findPendaftar.save();
          return result;
        }
      }
    } catch (error) {
      throw error;
    }
  },
};
