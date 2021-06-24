const { recordLabels } = require('../services/festivalDataTransformer');

const resolvers = {
    Query: {    
      recordLabels() {
        return recordLabels;
      },   
    }
  };

  module.exports = resolvers;