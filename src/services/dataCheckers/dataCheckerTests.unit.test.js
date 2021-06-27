//Tests for checking whether object contains records/bands/festivals
const {
  containsRecordLabel,
  containsBand,
  containsFestival,
} = require("./dataCheckers.js");

const presentLabel = "Record Label 1";
const absentLabel = "Record Label 9";

const presentBand = "Band 2";
const absentBand = "Band 9";

const presentFestival = "Festival 3";
const absentFestival = "Festival 9"

test("containsRecordLabel returns true if record Label is present", () => {
  const containsLabelBool = containsRecordLabel(sampleNewData, presentLabel);
  expect(containsLabelBool).toEqual(true);
});

test("containsRecordLabel returns false if record Label isn't present", () => {
  const containsLabelBool = containsRecordLabel(sampleNewData, absentLabel);
  expect(containsLabelBool).toEqual(undefined);
});

test("containsBand returns true if band is present on a given record label", () => {
  const containsBandBool = containsBand(sampleNewData, presentLabel, presentBand);
  expect(containsBandBool).toEqual(true);
});

test("containsBand returns false if band isn't present", () => {
  const containsBandBool = containsBand(sampleNewData, presentLabel, absentBand);
  expect(containsBandBool).toEqual(undefined);
});

test("containsFestival returns true if festival is present", () => {
  const containsFestivalBool = containsFestival(sampleNewData, presentLabel, presentBand, presentFestival);
  expect(containsFestivalBool).toEqual(true);
});

test("containsFestival returns false if festival isn't present", () => {
  const containsFestivalBool = containsFestival(sampleNewData, presentLabel, presentBand, absentFestival);
  expect(containsFestivalBool).toEqual(undefined);
});

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
