//This function takes festival data from https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals
//which is organised by festival names with band data under each festival and converts it to a list of
//record labels with their bands and what festivals those bands have been to .....
const { expectedResponse } = require('../services/getFestivals');

function createRecordLabelList() {
    var recordLabelsList = []
    for (let i = 0; i < expectedResponse.length; i++) { 
        var bands = expectedResponse[i].bands;      
        for (let j = 0; j < bands.length; j++){
            var recordLabel = bands[j].recordLabel;
            if (!(recordLabelsList.includes(recordLabel)) && recordLabel != "" && recordLabel != undefined) {
                recordLabelsList.push(recordLabel);              
            } 
        }
    }
    recordLabelsList.sort();
    recordLabelsList.push("");
    return recordLabelsList;
 } 

 console.log(createRecordLabelList());

 function createLabelBandMap(){
    var myMap = new Map();
    for (let i = 0; i < expectedResponse.length; i++) { 
       var bands = expectedResponse[i].bands;      
       var festivalName = expectedResponse[i].name;
       for (let j = 0; j < bands.length; j++){
         var bandName = bands[j].name;
         var recordLabel = bands[j].recordLabel;
         if (!(myMap.has(recordLabel))){
            myMap[recordLabel] = [[bandName],[festivalName]];
            console.log("hellothere");
         } else{
             console.log("WE HERE");
             console.log("WE HERE");
             console.log("WE HERE");
             console.log("WE HERE");
             console.log("WE HERE");
             console.log("WE HERE");
             console.log("WE HERE");
             myMap[recordLabel][0];
         }
        }
    }
    return myMap;
 }


console.log(createLabelBandMap());

//  function createBandDict(){
//     var bandAndFestivalDict = []
//     for (let i = 0; i < expectedResponse.length; i++) { 
//        var bands = expectedResponse[i].bands;      
//        var festivalName = expectedResponse[i].name;
//        for (let j = 0; j < bands.length; j++){
//            var bandName = bands[j].name;
//            if (!(bandAndFestivalDict.includes(bandName))){
//                bandAndFestivalDict.push(
//                {
//                    bandName: [festivalName]
//                }
//                )
//            }
//        }
//    }
//    return bandAndFestivalDict;
// }



// function createLabelBandsDict(){

// }

// function createBandsFestivalsDict(){

// }


//  console.log(createRecordLabelList());
//  var recordLabelsList = createRecordLabelList();

// function createRecordLabelMap() {
//     var recordLabelMap = new Map();
//     for (let j = 0; j < bands.length; j++){
//         recordLabelMap[recordLabelsList[j]] = [[],[]];
//     }
//     return recordLabelMap;
// }

// console.log(createRecordLabelMap());



// function createLabelBandMap(){
//     var myMap = new Map();
//     for (let i = 0; i < expectedResponse.length; i++) { 
//        var bands = expectedResponse[i].bands;      
//        var festivalName = expectedResponse[i].name;
//        for (let j = 0; j < bands.length; j++){
//          var bandName = bands[j].name;
//          var recordLabel = bands[j].recordLabel;
//          if (!(myMap.has(recordLabel))){
//             myMap[recordLabel] = [[bandName],[festivalName]];
//          }
//         }
//     }
//     return myMap;
//  }

// //console.log(createLabelBandMap());






// function createRecordLabelMap(){
//     var recordLabelMap = new Map();
    
//     return recordLabelMap;
// }

//  //console.log(createRecordLabelMap());


//  function createBandAndFestivalMap(){
//     var myMap = new Map();
//     for (let i = 0; i < expectedResponse.length; i++) { 
//        var bands = expectedResponse[i].bands;      
//        var festivalName = expectedResponse[i].name;
//        for (let j = 0; j < bands.length; j++){
//            var bandName = bands[j].name;
//            var recordLabel = bands[j].recordLabel;
//            if (!(myMap.has(bandName))){
//                myMap[recordLabel] = [[bandName],[festivalName]];
//            }
//            else{
               
//            }
//        }
//    }
//    return myMap;
// }




// //  function createBandAndFestivalDict(){
// //      var bandAndFestivalDict = []
// //      for (let i = 0; i < expectedResponse.length; i++) { 
// //         var bands = expectedResponse[i].bands;      
// //         var festivalName = expectedResponse[i].name;
// //         for (let j = 0; j < bands.length; j++){
// //             var bandName = bands[j].name;
// //             if (!(bandAndFestivalDict.includes(bandName))){
// //                 bandAndFestivalDict.push(
// //                 {
// //                     bandName: [festivalName]
// //                 }
// //                 )
// //             }
// //         }
// //     }
// //     return bandAndFestivalDict;
// //  }



// // const recordLabelsList = createRecordLabelList();
// // recordLabelsList.sort();
// // console.log(recordLabelsList);

// // const map = createBandAndFestivalMap();
// // console.log(map);



// // recordLabelsList = []
// // mydict = []

// // for (let i = 0; i < expectedResponse.length; i++) { 
// //     var festivalName = expectedResponse[i].name;
// //     var bands = expectedResponse[i].bands
// //     for (let j = 0; j < bands.length; j++){
// //         //IF RECORDLABEL IN DICT, ADD BAND AND FESTIVAL UNDER RECORD LABEL
// //         //ELSE ADD RECORDLABEL TO DICT WITH BAND AND FESTIVAL
// //         var bandName = bands[j].name;
// //         var recordLabel = bands[j].recordLabel;
// //         if (!(recordLabelsList.includes(recordLabel))) {
// //             recordLabelsList += recordLabel;
// //             mydict.push({
// //                 "label":   recordLabel, 
// //                 "bands":   [
// //                     {
// //                         "name": bandName,
// //                         "festivals": [
// //                             {
// //                                 "name": festivalName
// //                             }
// //                         ]
// //                     }
// //                 ]
// //             }); 
// //         } 
// //         else {
            
// //             //Check if band is already under the recordLabel,
// //             //if it isn't add it + festival, if it is then
// //             //add the festival
// //         }
// //     }
// // }

// // console.log(mydict);
// // console.log(mydict[1]);
// // console.log(mydict[1].bands);
// // console.log(mydict[1].bands.festivals);

// // //EXPORT