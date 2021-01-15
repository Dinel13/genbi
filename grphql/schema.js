const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Pendaftar {
        _id: ID!
        fakultas: String!
        gender: String!
        nama: String!
        ktm: String!
        createdAt: String!
        updatedAt: String!
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
        admin : String!
    }

    type AdminData { 
        admin : String!
        adminId : String!
        name : String!
    }

    input  AdminInputData {
        email: String!
        name: String!
        password: String!
    }

    input pendaftarInputData {
        fakultas: String!
        gender: String!
        ktm: String!
    }

    type RootQuery {
        login(email : String!, password : String!): AuthData!
        loginAdmin(email : String!, password : String!): AdminData!
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