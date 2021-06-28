const { gql } = require('apollo-server')

const typeDefs = gql`
  
  type RecordLabel {
    label: String
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
  }
`

module.exports = typeDefs
