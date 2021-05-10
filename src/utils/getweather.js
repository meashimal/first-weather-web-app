// weather api : 4203087941f5e7f3f0abfac2c0a6c0ec

// https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=6e16a0dc1b4b446cb9a9f8e7f5032ae8&include=minutely

// https://api.aerisapi.com/observations/39.630661,-105.709282?query=temp:!NULL,wind:!NULL,pressure:!NULL,winddir:!NULL&filter=allstations,hasprecip&fields=id,loc,relativeTo.distanceMI,ob.dateTimeISO,ob.weather,ob.tempF,ob.precipIN,ob.windSpeedMPH,ob.windDir,ob.pressureIN,ob.sunriseISO,ob.sunsetISO&client_id=S61n4PDu8TgE4TSiosMSY&client_secret=vAAUiBNCD94YTmyYP5eYc6XOtMufcEtYzkYzWFhA

const got = require('got');

const getweather = (lat, long, callback) => {

    // lat = 28.209538;
    // long = 83.991402;
    
    const url = 'https://api.weatherbit.io/v2.0/current?lat='+ lat + '&' + 'lon='+ long +'&key=6e16a0dc1b4b446cb9a9f8e7f5032ae8&include=minutely';

    // const url = "https://api.aerisapi.com/observations/"+ lat + "," + long + "?query=temp:!NULL,wind:!NULL,pressure:!NULL,winddir:!NULL&filter=allstations,hasprecip&fields=id,loc,relativeTo.distanceMI,ob.dateTimeISO,ob.weather,ob.tempC,ob.precipIN,ob.windSpeedMPH,ob.windDir,ob.pressureIN,ob.sunriseISO,ob.sunsetISO&client_id=S61n4PDu8TgE4TSiosMSY&client_secret=vAAUiBNCD94YTmyYP5eYc6XOtMufcEtYzkYzWFhA";

    // const url = "https://api.aerisapi.com/observations/39.630661,-105.709282?query=temp:!NULL,wind:!NULL,pressure:!NULL,winddir:!NULL&filter=allstations,hasprecip&fields=id,loc,relativeTo.distanceMI,ob.dateTimeISO,ob.weather,ob.tempC,ob.precipIN,ob.windSpeedMPH,ob.windDir,ob.pressureIN,ob.sunriseISO,ob.sunsetISO&client_id=S61n4PDu8TgE4TSiosMSY&client_secret=vAAUiBNCD94YTmyYP5eYc6XOtMufcEtYzkYzWFhA"

    const got = require('got');
    // console.log(url);

    (async () => {
        try {
            const response = await got.post(url,{responseType:'json'});
            const temp = response.body.data[0].temp;
            callback(temp);
            // console.log(temp);
            //=> '<!doctype html> ...'
        } catch (error) {
            console.log(error);
            //=> 'Internal server error ...'
        }
    })();

}

// getweather();
module.exports = getweather;
