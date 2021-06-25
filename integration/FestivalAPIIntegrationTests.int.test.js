//USE NOCK HERE-----

const { ApolloServer, gql } = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const typeDefs = require('../src/schemas/recordLabelSchema');
const resolvers = require('../src/resolvers/recordLabelResolver');
const {FestivalDataSource} = require('../src/services/getFestivals.js');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        festivalsDataSource: new FestivalDataSource(),
      };
    }
  });

const { query } = createTestClient(server);

test('find movie', async () => {
  const RETURN_LABELS = gql`
    query recordLabels {
        recordLabels{
            label
            bands{
                name
                festivals{
                    name
                }   
            }
        }
    }
  `;

  const {
    data: { labels },
  } = await query({ query: RETURN_LABELS });

  expect(labels).toEqual({
    //PUT EXPECTED STUFF HERE
  });
});