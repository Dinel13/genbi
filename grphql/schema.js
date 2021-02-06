const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Pendaftar {
        _id: ID!,
        jenisBeasiswa : String!,
        lolosBerkas : Boolean!,
        lolosWawancara : Boolean!,
        nilaiWawancara1 : String!,
        nilaiWawancara2 : String!,
        agama: String!,
        alamatAyah: String!,
        alamatIbu: String!,
        anakKe: String!,
        angkatan: String!,
        arahan:  Boolean,
        cita: String!,
        darah: String!,
        fakultas: String!,
        genbi: String!,
        gender: String!,
        hobby: String!,
        instagram: String!,
        ipk: String!,
        kampus: String!,
        kontribusi:Boolean!,
        kosan: String!,
        ktm: String!,
        lulus: String!,
        mampu: String!,
        minat: String!,
        motif: String!,
        nama: String!,
        namaAyah: String!,
        namaIbu: String!,
        nilai: String!,
        nim: String!,
        nomorHp: String!,
        nomorWa: String!,
        organisasi: String!,
        pangilan: String!,
        pantas: String!,
        pekerjaanAyah: String!,
        pekerjaanIbu: String!,
        penghasilanAyah: String!,
        penghasilanIbu: String!,
        prestasi: String!,
        prodi: String!,
        rekomendasi: String!,
        rencana: String!,
        saudara: String!,
        showWali: String!,
        siapMengurus: String!,
        skil: String!,
        suku: String!,
        tangalLahir: String!,
        teleponAyah: String!,
        teleponIbu: String!,
        tempatLahir: String!,
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        pendaftar: Pendaftar!
        token : String!
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
        anakKe: String,
        angkatan: String,
        arahan:  Boolean,
        cita: String,
        darah: String,
        fakultas: String,
        genbi: String,
        gender: String,
        hobby: String,
        instagram: String,
        ipk: String,
        jenisBeasiswa : String!,
        kampus: String,
        kontribusi:Boolean,
        kosan: String,
        ktm: String,
        lulus: String,
        mampu: String,
        minat: String,
        motif: String,
        nama: String,
        namaAyah: String,
        namaIbu: String,
        nilai: String,
        nim: String,
        nomorHp: String,
        nomorWa: String,
        organisasi: String,
        pangilan: String,
        pantas: String,
        pekerjaanAyah: String,
        pekerjaanIbu: String,
        penghasilanAyah: String,
        penghasilanIbu: String,
        prestasi: String,
        prodi: String,
        rekomendasi: String,
        rencana: String,
        saudara: String,
        showWali: String,
        siapMengurus: String,
        skil: String,
        suku: String,
        tangalLahir: String,
        teleponAyah: String,
        teleponIbu: String,
        tempatLahir: String,
    }

    type RootQuery {
        login(email : String!, password : String!): AuthData!
        loginAdmin(email : String!, password : String!): AdminData!
        userIsRegister(userId : String!): isSudahMendaftar!
        pendaftar(pendaftarId : String!): Pendaftar!
        pendaftars(adminId : String!, kampus : String!, jenis : String): [Pendaftar!]
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createAdmin(adminInput: AdminInputData): Admin!
        createPendaftar(pendaftarInput: pendaftarInputData): Pendaftar!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);


// tanda saeru ! berarti required