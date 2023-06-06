const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
    category: String!
  }

  type Query {
    getProduct(id: ID!): Product
    getAllProducts: [Product]
  }

  type Mutation {
    createProduct(name: String!, price: Float!, description: String, category: String!): Product
    updateProduct(id: ID!, name: String!, price: Float!, description: String, category: String!): Product
    deleteProduct(id: ID!): Boolean
  }
`;

const resolvers = {
  Query: {
    getProduct: (parent, args) => {
      // Logique pour récupérer un produit spécifique
    },
    getAllProducts: () => {
      // Logique pour récupérer tous les produits
    },
  },
  Mutation: {
    createProduct: (parent, args) => {
      // Logique pour créer un produit
    },
    updateProduct: (parent, args) => {
      // Logique pour mettre à jour un produit
    },
    deleteProduct: (parent, args) => {
      // Logique pour supprimer un produit
    },
  },
};

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 3020 }, () => {
    console.log(`Server ready at http://localhost:3020${server.graphqlPath}`);
  });
}

startServer().catch((err) => {
  console.error(err);
});
