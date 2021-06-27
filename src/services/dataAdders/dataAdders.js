function addNewRecordLabel(recordLabels, band, festivalName) {
    recordLabels.push({
        "label": band.recordLabel,
        "bands": [{
            "name": band.name,
            "festivals": [{             
                "name": festivalName,
            }]
        }]
    });
}

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

function addFestivalToExistingBand(recordLabels, recordLabel, band, festivalName){
    for (let label of recordLabels) {
        if (label.label == recordLabel){
            for(let i of label.bands){
                if (i.name == band.name){                  
                    i.festivals.push({
                        "name": festivalName
                    }) 
                }
            }                      
        }
    }
}

module.exports = {addNewRecordLabel, addBandToExistingLabel, addFestivalToExistingBand}