//This function takes festival data from https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals
//which is organised by festival names with band data under each festival and converts it to a list of
//record labels with their bands and what festivals those bands have been to .....
const { expectedResponse } = require('../services/getFestivals');

const festivals = expectedResponse; // the response from the backend
//console.log(festivals);
let recordLabels = []

for (let festival of festivals) {
	for (let band of festival.bands) {
     if (!containsRecordLabel(band.recordLabel)) {
        // add new record label to `recordLabels`
        addNewRecordLabel(band, festival.name);
        console.log(recordLabels);
     } else {
        // add band to existing label in `recordLabels` if band not already present
        if (!containsBand(band.recordLabel, band.name)){
            addBandToExistingLabel(band.recordLabel, band, festival.name);
        }
        // add festival to existing band if festival not already present
        else if (!containsFestival(band.recordLabel, band.name, festival.name)){
            addFestivalToExistingBand(band.recordLabel, band, festival.name);
        }
    }
  }
}

function containsRecordLabel(recordLabel) {
    for (let label of recordLabels) {
        if (label.label == recordLabel){
            return true
        }
    }
}

function containsBand(recordLabel, band){
    for (let label of recordLabels) {
        if (label.label == recordLabel){
            for(let i of label.bands){
                if (i.name == band.name){
                    return true
                }
            }
        }
    }
}

function containsFestival(recordLabel, band, festival){
    for (let label of recordLabels) {
        if (label.label == recordLabel){
            for(let i of label.bands){
                if (i.name == band.name){                  
                    for (let j of i.festivals){
                        if (j.name == festival){
                            return true
                        }
                    }
                }
            }
        }
    }
}

function addNewRecordLabel(band, festivalName) {
    console.log(festivalName);
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

function addBandToExistingLabel(recordLabel, band, festivalName){
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

function addFestivalToExistingBand(recordLabel, band, festivalName){
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

// console.log(recordLabels[0].bands.festivals);
// console.log(recordLabels[1].bands[0].festivals);
// console.log(recordLabels[2]);
// console.log(recordLabels[5]);
// console.log(recordLabels[5].bands[0].festivals);

//module.exports = { recordLabels };