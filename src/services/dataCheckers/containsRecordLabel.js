//TBC
function containsRecordLabel(recordLabels, recordLabel) {
    for (let label of recordLabels) {
        if (label.label == recordLabel){
            return true
        }
    }
}

module.exports = {containsRecordLabel}