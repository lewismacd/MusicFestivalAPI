const { gql } = require('apollo-server');

const typeDefs = gql`
  
  type RecordLabel {
    name: String
    bands: [Band]
  }

  type Band {
    name: String
    festivals: [Festival]
  }

  type Festival{
      name: String
  }

  type Query {
    recordLabels: [RecordLabel]!
    bands: [Band]!
  }
`;

module.exports = typeDefs;