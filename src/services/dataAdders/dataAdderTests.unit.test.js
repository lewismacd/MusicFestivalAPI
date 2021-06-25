//MOVE SAMPLE DATA INTO SEPARATE FILE

const {addNewRecordLabel} = require('./addNewRecordLabel');
const {addBandToExistingLabel} = require('./addBandToExistingLabel');
const {addFestivalToExistingBand} = require('./addFestivalToExistingBand');

const sampleFestival1 = "Sample Festival 1";

const sampleBand1 = 
{
    "name": "Sample Band 1",
    "recordLabel": "Sample Record Label 1"
}

//Check adding new record occurs as expected using sample data
test("Check adding new record occurs as expected, formatted correctly", () => {
    addNewRecordLabel(sampleNewData, sampleBand1, sampleFestival1);
    expect(sampleNewData).toEqual(addNewRecordExpectedResult);
    //Reset data???
});

const addNewRecordExpectedResult = 
[
    {
        "label": "Record Label 1",
        "bands": [
            {
                "name": "Band 1",
                "festivals": [
                    {
                        "name": "Festival 1",
                    }
                ]
            },
            {
                "name": "Band 2",
                "festivals": [
                    {
                        "name": "Festival 2",
                    },
                    {
                        "name": "Festival 3",
                    }

                ]
            }
        ]
    },
    {
        "label": "Record Label 2",
        "bands": [
            {
                "name": "Band 3",
                "festivals": [
                    {
                        "name": "Festival 1"
                    }
                ]
            }
        ]
    },
    {
        "label": "Sample Record Label 1",
        "bands": [
            {
                "name": "Sample Band 1",
                "festivals": [
                    {
                        "name": "Sample Festival 1"
                    }
                ]
            }
        ]
    }
]

//Check adding new band happens as expected using sample data
test("Check adding new band occurs as expected, formatted correctly", () => {
    //TBC
});

const addNewBandTestExpectedResult = [];

//Check adding new festival to band happens as expected using sample data
test("Check adding new festival occurs as expected, formatted correctly", () => {
    //TBC
});

const addNewFestivalTestExpectedResult = [];

//Sample data of a partially complete transformation
const sampleNewData =
[
    {
        "label": "Record Label 1",
        "bands": [
            {
                "name": "Band 1",
                "festivals": [
                    {
                        "name": "Festival 1",
                    }
                ]
            },
            {
                "name": "Band 2",
                "festivals": [
                    {
                        "name": "Festival 2",
                    },
                    {
                        "name": "Festival 3",
                    }

                ]
            }
        ]
    },
    {
        "label": "Record Label 2",
        "bands": [
            {
                "name": "Band 3",
                "festivals": [
                    {
                        "name": "Festival 1"
                    }
                ]
            }
        ]
    }
]

//Reset sample data after each test
const sampleNewDataReset =
[
    {
        "label": "Record Label 1",
        "bands": [
            {
                "name": "Band 1",
                "festivals": [
                    {
                        "name": "Festival 1",
                    }
                ]
            },
            {
                "name": "Band 2",
                "festivals": [
                    {
                        "name": "Festival 2",
                    },
                    {
                        "name": "Festival 3",
                    }

                ]
            }
        ]
    },
    {
        "label": "Record Label 2",
        "bands": [
            {
                "name": "Band 3",
                "festivals": [
                    {
                        "name": "Festival 1"
                    }
                ]
            }
        ]
    }
]