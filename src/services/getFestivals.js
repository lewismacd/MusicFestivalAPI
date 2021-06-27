const { RESTDataSource } = require("apollo-datasource-rest");
class FestivalDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FESTIVAL_ENDPOINT;
  }
  async getFestivals() {
    console.log(this.baseURL);
    return this.get(`/api/v1/festivals`);
  }
}

module.exports = { FestivalDataSource };
