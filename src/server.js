const { ApolloServer, gql } = require('apollo-server-lambda');
const AWS = require('aws-sdk');
const typeDefs = require('./schemas/recordLabelSchema');
const resolvers = require('./resolvers/recordLabelResolver');

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const handler = server.createHandler({
    cors: {
      origin: '*',
      credentials: true,
    },
  });
  
  module.exports.graphqlHandler = handler;
  module.exports.server = server;