//Tests to check that adding a new record/band/festival occurs correctly.
const {
  addNewRecordLabel,
  addBandToExistingLabel,
} = require("./dataAdders.js");

const existingRecordLabel = "Record Label 2";
const sampleFestival1 = "Sample Festival 1";
const sampleFestival2 = "Sample Festival 2";
const sampleBand1 = 
{
    "name": "Sample Band 1",
    "recordLabel": "Sample Record Label 1"
}
const sampleBand2 = 
{
    "name": "Sample Band 2",
    "recordLabel": "Record Label 2"
}

//Sample data for Record Adder Test
const sampleNewDataRecordAdder =
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
//Expected result after adding new record
const addNewRecordTestExpectedResult = 
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
//Sample data for Band Adder Test
const sampleNewDataBandAdder =
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
//Expected result after adding new band
const addNewBandTestExpectedResult = 
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
            },
            {
                "name": "Sample Band 2",
                "festivals": [
                    {
                        "name": "Sample Festival 2"
                    }
                ]
            }       
        ]
    }
]

//Check adding new record occurs as expected using sample data
test("Check adding new record occurs as expected, formatted correctly", () => {
  addNewRecordLabel(sampleNewDataRecordAdder, sampleBand1, sampleFestival1);
  expect(sampleNewDataRecordAdder).toEqual(addNewRecordTestExpectedResult);
});

//Check adding new band happens as expected using sample data
test("Check adding new band occurs as expected, formatted correctly", () => {
  addBandToExistingLabel(sampleNewDataBandAdder, existingRecordLabel, sampleBand2, sampleFestival2);
  expect(sampleNewDataBandAdder).toEqual(addNewBandTestExpectedResult);
});
