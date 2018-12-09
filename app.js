'use strict';

let googleTrends = require('./node_modules/google-trends-api/lib/google-trends-api.min.js');
const gtrendsRepository = require('./model/GtrendsRepository');

/***********************Load Input Data***************************/


    gtrendsRepository.loadDataFromJsonFiles().then(data =>
    {
        let Keywords;
        for(let i=0;i<data.length;i++)
        {
            Keywords=[data[i].City,data[i].Region,data[i].State];
            if(data[i].Region===null)
                Keywords=[data[i].City,data[i].State];
           // console.log(Keywords);
            googleTrends.interestOverTime({keyword: Keywords,startTime:new Date('1-Sep-18'),endTime:new Date('30-Nov-18')}).then(function(results){
gtrendsRepository.saveDataToJsonFile(JSON.parse(results));
            });

            }

    }).catch(function(err){
        console.error('Oh no there was an error', err);});
 //gtrendsRepository.saveDataToJsonFile("]");

/* ****** Interest over time - Set a custom timezone ***************/

// googleTrends.interestOverTime({
//   keyword: 'Valentines Day',
//   timezone: new Date().getTimezoneOffset() / 60,
// }, function(err, results) {
//   if (err) console.log('oh no error!', err);
//   else console.log(results);
// });

/* ****** Interest over time - Comparing multiple keywords *********/
// googleTrends.interestOverTime({keyword: ['Valentines Day', 'Christmas Day']})
// .then((res) => {
//   console.log('this is res', res);
// })
// .catch((err) => {
//   console.log('got the error', err);
// })

/* ******************* Interest by region **************************/

// googleTrends.interestByRegion({
//   keyword: 'Donald Trump',
//   startTime: new Date('2017-02-01'),
//   endTime: new Date('2017-02-06'),
//   resolution: 'CITY',
// })
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })

// googleTrends.interestByRegion({
//   keyword: 'Donald Trump',
//   startTime: new Date('2017-02-01'),
//   endTime: new Date('2017-02-06'),
//   geo: 'US-CA',
// })
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })

/* ******************* Related queries **************************/

// googleTrends.relatedQueries({keyword: 'Westminster Dog Show'})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// })

/* ******************* Related topics **************************/

// googleTrends.relatedTopics({
//   keyword: 'Chipotle',
//   startTime: new Date('2015-01-01'),
//   endTime: new Date('2017-02-10'),
// })
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err);
// });
