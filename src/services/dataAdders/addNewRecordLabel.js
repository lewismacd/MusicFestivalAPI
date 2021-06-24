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

module.exports = {addNewRecordLabel}