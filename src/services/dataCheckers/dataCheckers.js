function containsRecordLabel(recordLabels, recordLabel) {
    for (let label of recordLabels) {
        if (label.label == recordLabel){
            return true
        }
    }
}

function containsBand(recordLabels, recordLabel, band){
    for (let label of recordLabels) {
        if (label.label == recordLabel){
            for(let i of label.bands){
                if (i.name == band){
                    return true
                }
            }
        }
    }
}

function containsFestival(recordLabels, recordLabel, band, festival){
    for (let label of recordLabels) {
        if (label.label == recordLabel){
            for(let i of label.bands){
                if (i.name == band){                 
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

module.exports = {containsRecordLabel, containsBand, containsFestival}

