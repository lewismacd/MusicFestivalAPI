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

module.exports = {addFestivalToExistingBand}