const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
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

    type RootQuery {
        login(email : String!, password : String!): AuthData!
        loginAdmin(email : String!, password : String!): AdminData!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createAdmin(adminInput: AdminInputData): Admin!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);


// tanda saeru ! berarti required