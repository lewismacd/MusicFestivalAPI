const { expectedResponse } = require('../services/getFestivals');

const resolvers = {
    Query: {    
      festivals() {            
        return expectedResponse;
      },
    }
  };

  module.exports = resolvers;