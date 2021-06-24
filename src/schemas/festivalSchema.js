const { gql } = require('apollo-server');

const typeDefs = gql`
  type Festival {
    name: String
    bands: [Band]
  }

  type Band {
    name: String
    recordLabel: String
  }

  type recordLabel {
    name: String
    bands: [Band]
  }

  type Query {
    festivals: [Festival]!
    recordLabels: [recordLabel]!
    bands: [Band]!
  }
`;

module.exports = typeDefs;