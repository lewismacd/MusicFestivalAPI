// Functions to check whether record/band/festival already exists in transformed data object

function containsRecordLabel (recordLabels, recordLabel) {
  for (const label of recordLabels) {
    if (label.label === recordLabel) {
      return true
    }
  }
}

function containsBand (recordLabels, recordLabel, band) {
  for (const label of recordLabels) {
    if (label.label === recordLabel) {
      for (const currentBand of label.bands) {
        if (currentBand.name === band) {
          return true
        }
      }
    }
  }
}

function containsFestival (recordLabels, recordLabel, band, festival) {
  for (const label of recordLabels) {
    if (label.label === recordLabel) {
      for (const currentBand of label.bands) {
        if (currentBand.name === band) {
          for (const currentFestival of currentBand.festivals) {
            if (currentFestival.name === festival) {
              return true
            }
          }
        }
      }
    }
  }
}

module.exports = { containsRecordLabel, containsBand, containsFestival }
