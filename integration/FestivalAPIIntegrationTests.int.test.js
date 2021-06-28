const { ApolloServer, gql } = require('apollo-server')
const { createTestClient } = require('apollo-server-testing')
const typeDefs = require('../src/schemas/recordLabelSchema')
const resolvers = require('../src/resolvers/recordLabelResolver')
const { FestivalDataSource } = require('../src/services/getFestivals.js')
const nock = require('nock')

const sampleFestivalData = [
  {
    name: 'Festival 1',
    bands: [
      {
        name: 'Band 1',
        recordLabel: 'Record Label 1'
      },
      {
        name: 'Band 2',
        recordLabel: 'Record Label 2'
      }
    ]
  },
  {
    name: 'Festival 2',
    bands: [
      {
        name: 'Band 3',
        recordLabel: 'Record Label 3'
      },
      {
        name: 'Band 1',
        recordLabel: 'Record Label 1'
      }
    ]
  }
]
const expectedLabelData = [
  {
    label: 'Record Label 1',
    bands: [
      {
        name: 'Band 1',
        festivals: [
          {
            name: 'Festival 1'
          },
          {
            name: 'Festival 2'
          }
        ]
      }
    ]
  },
  {
    label: 'Record Label 2',
    bands: [
      {
        name: 'Band 2',
        festivals: [
          {
            name: 'Festival 1'
          }
        ]
      }
    ]
  },
  {
    label: 'Record Label 3',
    bands: [
      {
        name: 'Band 3',
        festivals: [
          {
            name: 'Festival 2'
          }
        ]
      }
    ]
  }
]

process.env.FESTIVAL_ENDPOINT = 'https://festival.api'

// Use nock to intercept and mock API response
nock('https://festival.api')
  .get('/api/v1/festivals')
  .reply(200, sampleFestivalData)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      festivalsDataSource: new FestivalDataSource()
    }
  }
})

const { query } = createTestClient(server)

test('Fetch festivals, transform, and query with GraphQL using mocked API call', async () => {
  const RETURN_LABELS = gql`
    query recordLabels {
      recordLabels {
        label
        bands {
          name
          festivals {
            name
          }
        }
      }
    }
  `

  const {
    data: { recordLabels }
  } = await query({ query: RETURN_LABELS })

  expect(recordLabels).toEqual(expectedLabelData)
})
