function addBandToExistingLabel(recordLabels, recordLabel, band, festivalName){
    for (let label of recordLabels) {
        if (label.label == recordLabel){
            label.bands.push({
                "name": band.name,
                "festivals": [{             
                    "name": festivalName,
                }]
            })
        }
    }
}

module.exports = {addBandToExistingLabel}