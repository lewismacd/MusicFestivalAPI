const { convertFestivalData } = require("../services/festivalDataTransformer");

const resolvers = {
  Query: {
    recordLabels: async (_, context, { dataSources }) => {
      return convertFestivalData(
        await dataSources.festivalsDataSource.getFestivals()
      );
    },
  },
};

module.exports = resolvers;
