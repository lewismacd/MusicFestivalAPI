const {containsRecordLabel, containsBand, containsFestival} = require('../services/dataCheckers/dataCheckers.js');
const {addNewRecordLabel, addBandToExistingLabel, addFestivalToExistingBand} = require('../services/dataAdders/dataAdders.js');

function convertFestivalData(festivals){
    let recordLabels = []
    for (let festival of festivals) {
        for (let band of festival.bands) {
            if (!containsRecordLabel(recordLabels, band.recordLabel)) {
                // add new record label to `recordLabels` with band
                addNewRecordLabel(recordLabels, band, festival.name);
            } 
            else {
                // add band to existing label in `recordLabels` if band not already present 
                if (!containsBand(recordLabels, band.recordLabel, band.name)){
                    addBandToExistingLabel(recordLabels, band.recordLabel, band, festival.name);
                }
                // add festival to existing band if festival not already present
                else if (!containsFestival(recordLabels, band.recordLabel, band.name, festival.name)){
                    addFestivalToExistingBand(recordLabels, band.recordLabel, band, festival.name);
                }
                else {
                    console.log("Record label and band/festival already present.");
                }
            }
        }
    }
    return recordLabels
}

module.exports = { convertFestivalData };