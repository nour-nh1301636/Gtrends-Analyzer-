

class GtrendsRepository {
    constructor() {
        //let googleTrends = require('./node_modules/google-trends-api/lib/google-trends-api.min.js');
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
             // fout.exists("data/outputs.json", function(exists) {
                 // if (exists) {
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
                         console.log(resultJSON);
                         this.resultsOut[this.i]=resultJSON;
                     }
             fout.appendFile("data/outputs.json", JSON.stringify(this.resultsOut[this.i]), (err) => {
                 if (err) {
                     console.error(err);
                     return;
                 }
                 console.log("record saved");
                 this.i=+1;
             });


    }
    async EditOutPut(){
        const fs = require('fs-extra');
        const data = await fs.readFile('data/outputs.json');
        const outputs = JSON.parse(data);
        console.log(outputs[0]);
        let timeOutPuts=[];
        let formattedTimeOutPuts=[];
        let formattedAxisTimeOutPuts=[];
        let CvalueOutPuts=[];
        let RvalueOutPuts=[];
        let SvalueOutPuts=[];
        let ResultJSON = {};
        let timelineData;
        let prop;
        let v=0;

         timelineData=data.default.timelineData;
         for  (prop in timelineData)
         {
             //v=0;
             for(let time in timelineData[prop].time)
                 timeOutPuts[v++]= time;
             for(let formattedTime in timelineData[prop].formattedTime)
                 formattedTimeOutPuts[v++]=formattedTime;
             for(let formattedAxisTime in timelineData[prop].formattedAxisTime)
                 formattedAxisTimeOutPuts[v++]=formattedAxisTime;
             for(let value in timelineData[prop].value)
             {
                 CvalueOutPuts[v++]=value[0];
                 RvalueOutPuts[v++]=value[1];
                 SvalueOutPuts[v++]=value[2];
             }

         }

         ResultJSON.Time=timeOutPuts;
         ResultJSON. Formattedtime=formattedTimeOutPuts;
         ResultJSON.FormattedAxisTime=formattedAxisTimeOutPuts;
         RvalueOutPuts.CityValue=CvalueOutPuts;
         RvalueOutPuts.RegionValue=RvalueOutPuts;
         RvalueOutPuts.StateValue=SvalueOutPuts;
             const fout=require('fs-extra');
             let editedData=JSON.stringify(ResultJSON);
             fout.appendFile("data/editedOutPuts.json",editedData,(err) => {
                 if (err) {
                     console.error(err);
                     return;
                 }
                 console.log("File has been created");
             });
         }


}
module.exports =  new GtrendsRepository();