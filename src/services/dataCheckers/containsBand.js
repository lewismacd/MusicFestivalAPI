//TBC
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

module.exports = {containsBand}