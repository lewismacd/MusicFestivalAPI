//This function takes festival data from https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals
//which is organised by festival names with band data under each festival and converts it to a list of
//record labels with their bands and what festivals those bands have been to .....
const { expectedResponse } = require('../services/getFestivals');

mydict = []

for (let i = 0; i < expectedResponse.length; i++) { 
    var festivalName = expectedResponse[i].name;
    var bands = expectedResponse[i].bands
    for (let j = 0; j < bands.length; j++){
        //IF RECORDLABEL IN DICT, ADD BAND AND FESTIVAL UNDER RECORD LABEL
        //ELSE ADD RECORDLABEL TO DICT WITH BAND AND FESTIVAL
        var bandName = bands[j].name;
        var recordLabel = bands[j].recordLabel;
        if (!(recordLabel in mydict)) {
            mydict.push({
                "label":   recordLabel, 
                "bands":   [
                    {
                        "name": bandName,
                        "festivals": [
                            {
                                "name": festivalName
                            }
                        ]
                    }
                ]
            }); 
        } 
        else {
            //Check if band is already under the recordLabel,
            //if it isn't add it + festival, if it is then
            //add the festival
        }
    }
}

console.log(mydict);
console.log(mydict[1]);
console.log(mydict[1].bands);
console.log(mydict[1].bands.festivals);

//EXPORT