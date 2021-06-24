const { expectedResponse } = require('../services/getFestivals');

const resolvers = {
    Query: {    
      festivals() {            
        return expectedResponse;
      },
      recordLabels() {
        //need to transform data from given API
        return expectedResponse;
      },   
    }
  };

  module.exports = resolvers;