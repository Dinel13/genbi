const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Pendaftar {
        id: ID!,
        jenisBeasiswa : String!,
        lolosBerkas : Boolean!,
        lolosWawancara : Boolean!,
        nilaiWawancara1 : String!,
        nilaiWawancara2 : String!,
        agama: String!,
        alamatAyah: String!,
        alamatIbu: String!,
        alamatWali: String!,
        alumni: String!,
        alumniJabatan: String!,
        alumniThn: String!,
        anakKe: String!,
        angkatan: String!,
        arahan:  Boolean,
        bergenbi: String!,
        cita: String!,
        darah: String!,
        email: String!,
        fakultas: String!,
        foto: String!,
        genbi: String!,
        gender: String!,
        hobby: String!,
        ikatan: String,
        instagram: String!,
        ipk: String!,
        kampus: String!,
        kelemahan: String!,
        kontribusi:Boolean!,
        kosan: String!,
        ktm: String!,
        ktp: String!,
        lulus: String!,
        mampu: String!,
        minat: String!,
        motif: String!,
        nama: String!,
        namaAyah: String!,
        namaIbu: String!,
        namaWali: String!,
        nilai: String!,
        nim: String!,
        nomorHp: String!,
        nomorWa: String!,
        organisasi: String!,
        pangilan: String!,
        pantas: String!,
        pekerjaanAyah: String!,
        pekerjaanIbu: String!,
        pekerjaanWali: String!,
        penghasilanAyah: String!,
        penghasilanIbu: String!,
        penghasilanWali: String!,
        prestasi: String!,
        prodi: String!,
        rekomendasi: String!,
        rekomendasi2: String!,
        rekening: String!,
        rencana: String!,
        saran: String!,
        saudara: String!,
        semester: String!,
        showWali: String!,
        siapMengurus: String!,
        skil: String!,
        sks: String!,
        sosial: String!,
        suku: String!,
        tangalLahir: String!,
        teleponAyah: String!,
        teleponIbu: String!,
        tempatLahir: String!,
        thnLulus: String,
        toeflNilai: String!,
        toeflFile : String!,
        usia: String!,
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        pendaftar: Pendaftar!
        token : String!
        userId : String!
    }

    type AuthData { 
        token : String!
        userId : String!
        name : String!
        email : String!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type Admin {
        _id: ID!
        name: String!
        email: String!
        password: String
        token : String!
        admin : String!
    }

    type AdminData { 
        admin : String!
        adminId : String!
        name : String!
    }

    type isSudahMendaftar { 
        isRegister : Boolean!
    }

    type Pendaftars {
        pendaftar : [Pendaftar]
    }

    input  AdminInputData {
        email: String!
        name: String!
        password: String!
    }

    input pendaftarInputData {
        agama: String,
        alamatAyah: String,
        alamatIbu: String,
        alamatWali: String,
        alumni: String,
        alumniJabatan: String,
        alumniThn: String,
        anakKe: String,
        angkatan: String,
        arahan:  Boolean,
        bergenbi: String,
        cita: String,
        darah: String,
        fakultas: String,
        foto: String,
        genbi: String,
        gender: String,
        hobby: String,
        ikatan: String,
        instagram: String,
        ipk: String,
        jenisBeasiswa : String!,
        kampus: String,
        kelemahan: String,
        kontribusi:Boolean,
        kosan: String,
        ktm: String,
        ktp: String,
        lulus: String,
        mampu: String,
        minat: String,
        motif: String,
        nama: String,
        namaAyah: String,
        namaIbu: String,
        namaWali: String,
        nilai: String,
        nim: String,
        nomorHp: String,
        nomorWa: String,
        organisasi: String,
        pangilan: String,
        pantas: String,
        pekerjaanAyah: String,
        pekerjaanIbu: String,
        pekerjaanWali: String,
        penghasilanAyah: String,
        penghasilanIbu: String,
        penghasilanWali: String,
        prestasi: String,
        prodi: String,
        rekomendasi: String,
        rekomendasi2: String,
        rekening: String,
        rencana: String,
        saran: String,
        saudara: String,
        semester: String,
        showWali: String,
        siapMengurus: String,
        skil: String,
        sks: String,
        sosial: String,
        suku: String,
        tangalLahir: String,
        teleponAyah: String,
        teleponIbu: String,
        teleponWali: String,
        tempatLahir: String,
        thnLulus: String,
        toeflNilai: String,
        toeflFile : String,
        usia: String,
    }

    input pendaftarAndAdminData {
        pendaftarId : String!
        adminId : String!
        terima : String!
    }

    input nilaiWawancaraData {
        pendaftarId : String!
        adminId : String!
        untuk : String!
        nilai : String!
    }

    type RootQuery {
        login(email : String!, password : String!): AuthData!
        loginAdmin(email : String!, password : String!): AdminData!
        userIsRegister(userId : String!): Pendaftar!
        pendaftar(pendaftarId : String!): Pendaftar!
        pendaftars(adminId : String!, kampus : String!, jenis : String): [Pendaftar!]
        lolosBerkases(adminId : String!, kampus : String!, jenis : String): [Pendaftar!]
        lolosWawancaras(adminId : String!, kampus : String!, jenis : String): [Pendaftar!]
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createAdmin(adminInput: AdminInputData): Admin!
        createPendaftar(pendaftarInput: pendaftarInputData): Pendaftar!
        lolosBerkas(pendaftarAndAdminInput: pendaftarAndAdminData): Pendaftar!
        addNilaiWawancara(nilaiWawancaraInput: nilaiWawancaraData): Pendaftar!
        lolosWawancara(pendaftarAndAdminInput: pendaftarAndAdminData): Pendaftar!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);


// tanda saeru ! berarti required