const { logger } = require('../../logger.js')

// Functions for pushing recordLabels/bands/festivals to our converted data object
function addNewRecordLabel (recordLabels, band, festivalName) {
  recordLabels.push({
    label: band.recordLabel,
    bands: [
      {
        name: band.name,
        festivals: [
          {
            name: festivalName
          }
        ]
      }
    ]
  })
}

function addBandToExistingLabel (recordLabels, recordLabel, band, festivalName) {
  for (const label of recordLabels) {
    if (label.label === recordLabel) {
      label.bands.push({
        name: band.name,
        festivals: [
          {
            name: festivalName
          }
        ]
      })
    }
  }
  logger.warn('Record label already exists, potential data checker issue.')
}

function addFestivalToExistingBand (
  recordLabels,
  recordLabel,
  band,
  festivalName
) {
  for (const label of recordLabels) {
    if (label.label === recordLabel) {
      for (const currentBand of label.bands) {
        if (currentBand.name === band.name) {
          currentBand.festivals.push({
            name: festivalName
          })
        }
      }
    }
  }
}

module.exports = {
  addNewRecordLabel,
  addBandToExistingLabel,
  addFestivalToExistingBand
}
