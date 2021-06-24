//TBC
function containsFestival(recordLabels, recordLabel, band, festival){
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

module.exports = {containsFestival}