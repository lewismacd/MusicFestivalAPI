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

// const typeDefs = gql`
//   type Festival {
//     name: String
//     bands: [Band]
//   }

//   type recordLabel {
//       name: String
//       bands: [band]
//   }
//   type Band {
//     name: String
//     recordLabel: String
//     festivals: [Festival]
//   }

//   type Query {
//     bands: [Band]!
//     festivals: [Festival]!
//     recordLabels: [recordLabel]!
//   }
// `;

module.exports = typeDefs;