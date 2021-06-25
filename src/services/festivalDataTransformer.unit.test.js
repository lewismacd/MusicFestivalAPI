//Input sample data, ensure that output is formatted correctly

test("Verify that sample API data is transformed and formatted correctly", () => {
    const transformedData = convertFestivalData(sampleAPIData);
    expect(transformedData).toEqual(expectedOutput);
});


const sampleAPIData = [];
const expectedOutput = [];
