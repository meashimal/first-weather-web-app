// pk.7cfb1dc4ead6395b16bdde49e28ba97f

// https://us1.locationiq.com/v1/search.php?key=pk.7cfb1dc4ead6395b16bdde49e28ba97f&q=Kathmandu&format=json

const got = require('got');

const getlatlong = (address, callback) => {
    const requrl = 'https://us1.locationiq.com/v1/search.php?key=pk.7cfb1dc4ead6395b16bdde49e28ba97f&q='+ address +'&format=json';

    (async () => {
        try {
            const response = await got.post(requrl,{responseType: 'json'});            
            const lat = response.body[0].lat;
            const long = response.body[0].lon;
            const city = address;
            callback(lat, long, city);
            //=> '<!doctype html> ...'
        } catch (error) {
            console.log("error");
            callback(error);
            //=> 'Internal server error ...'
        }
    })();

}


module.exports = getlatlong;

// getlatlong("kathmandu",(lat, long) => {
//     console.log(lat);
//     console.log(long);
// });
