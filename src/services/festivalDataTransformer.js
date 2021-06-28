const { logger } = require("../logger.js");

const {
  containsRecordLabel,
  containsBand,
  containsFestival,
} = require("../services/dataCheckers/dataCheckers.js");

const {
  addNewRecordLabel,
  addBandToExistingLabel,
  addFestivalToExistingBand,
} = require("../services/dataAdders/dataAdders.js");

const { dynamicSort } = require("./alphabetise.js");

// Take API data and convert to desired format
function convertFestivalData(festivals) {
  logger.info("Festival data conversion commencing.");
  const recordLabels = [];
  for (const festival of festivals) {
    for (const band of festival.bands) {
      if (!containsRecordLabel(recordLabels, band.recordLabel)) {
        // add new record label to `recordLabels` with band
        addNewRecordLabel(recordLabels, band, festival.name);
      } else {
        // add band to existing label in `recordLabels` if band not already present
        if (!containsBand(recordLabels, band.recordLabel, band.name)) {
          addBandToExistingLabel(
            recordLabels,
            band.recordLabel,
            band,
            festival.name
          );
        }
        // add festival to existing band if festival not already present
        else if (
          !containsFestival(
            recordLabels,
            band.recordLabel,
            band.name,
            festival.name
          )
        ) {
          addFestivalToExistingBand(
            recordLabels,
            band.recordLabel,
            band,
            festival.name
          );
        } else {
          logger.warn("Record Label and band/festival already present.");
        }
      }
    }
  }
  recordLabels.sort(dynamicSort("label"));
  logger.info("Conversion and sorting complete.");
  return recordLabels;
}

module.exports = { convertFestivalData };
