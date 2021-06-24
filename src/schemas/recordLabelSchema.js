const { gql } = require('apollo-server');

const typeDefs = gql`
  
  type recordLabel {
    name: String
    bands: [Band]
  }

  type Band {
    name: String
    recordLabel: String
  }

  type Query {
    recordLabels: [recordLabel]!
    bands: [Band]!
  }
`;

module.exports = typeDefs;