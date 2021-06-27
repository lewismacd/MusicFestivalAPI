//Input sample data, ensure that output is formatted correctly
const {convertFestivalData} = require('./festivalDataTransformer');

test("Verify that sample API data is transformed and formatted correctly", () => {
    const transformedData = convertFestivalData(sampleAPIData);
    expect(transformedData).toEqual(expectedOutput);
});

const sampleAPIData =
[
    {
      "name": "Festival 1",
      "bands": [
        {
          "name": "Band 1",
          "recordLabel": "Record Label 1"
        },
        {
          "name": "Band 2",
          "recordLabel": "Record Label 2"
        }
      ]
    },
    {
      "name": "Festival 2",
      "bands": [
        {
          "name": "Band 3",
          "recordLabel": "Record Label 3"
        },
        {
          "name": "Band 5",
          "recordLabel": "Record Label 1"
        },
        {
            "name": "Band 1",
            "recordLabel": "Record Label 1"
        }
      ]
    },
]

const expectedOutput = 
[
    { 
        "label": 'Record Label 1', 
        "bands": [
            { 
                "name": 'Band 1', 
                "festivals": [ 
                    {
                        "name": "Festival 1"
                    },
                    {
                        "name": "Festival 2"
                    }
                 ] 
            },
            { 
                "name": 'Band 5', 
                "festivals": [ 
                    {
                        "name": "Festival 2"
                    }   
                 ] 
            }
        ]
    },
    { 
        label: 'Record Label 2', 
        bands: [ 
            {
                "name": "Band 2",
                "festivals": [
                    {
                        "name": "Festival 1"
                    }
                ]
            } 
        ] 
    },
    { 
        label: 'Record Label 3', 
        bands: [ 
            {
                "name": "Band 3",
                "festivals": [
                    {
                        "name": "Festival 2"
                    }
                ]
            } 
        ] 
    }
];
