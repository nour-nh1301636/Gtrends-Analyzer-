

class GtrendsRepository {
    constructor() {
        this.resultsOut=[];
        this.i=0;
    }
//loading data
async loadDataFromJsonFiles()
    {
        const fs = require('fs-extra')
        const data = await fs.readFile('data/inputs.json')
        const inputs = JSON.parse(data)
        return inputs;
        //console.log(inputs)
       // console.log('Retrieved inputs from json file:' + inputs.length)
    }

         saveDataToJsonFile(results){
            const fout=require('fs-extra');
             let timelineData=results.default.timelineData;
             let time ;
             let formattedtime;
             let formattedAxisTime;
             let value1;
             let value2;
             let value3;
             let resultJSON={};

                      for  (let prop in timelineData)
                     {
                         time=timelineData[prop].time;
                         formattedtime=timelineData[prop].formattedTime;
                         formattedAxisTime=timelineData[prop].formattedAxisTime;
                         value1=timelineData[prop].value[0];
                         value2=timelineData[prop].value[1];
                         value3=timelineData[prop].value[2];
                         resultJSON.time=time;
                         resultJSON.formattedtime=formattedtime;
                         resultJSON.formattedAxisTime=formattedAxisTime;
                         resultJSON.value1=value1;
                         resultJSON.value2=value2;
                         resultJSON.value3=value3;
                        // console.log(JSON.stringify(resultJSON) + this.i);
                        // this.resultsOut[this.i]=resultJSON;

             fout.appendFile("data/outputs.json", JSON.stringify(resultJSON)+",", (err) => {
                 if (err) {
                     console.error(err);
                     return;
                 }
                 console.log("record saved");

             });
         }
            // this.i=+1;
    }


}
module.exports =  new GtrendsRepository();