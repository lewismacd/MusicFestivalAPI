
const {RESTDataSource} = require('apollo-datasource-rest');
  class FestivalDataSource extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://eacp.energyaustralia.com.au/codingtest';
    }
    async getFestivals() {
      return this.get(`/api/v1/festivals`);    
    }
  }

module.exports = {FestivalDataSource};