const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYWJkb2FsaTEwNyIsImEiOiJja3g0aTkwbG4wZWNwMndvNXd3Y3U3Z3RlIn0.1BVRDLrfXs4gIDq4iEkByw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        // } else if (body.features.length === 0) {
        //     callback('Unable to find location. Try another search.', undefined)
        }else if(body.error){
            callback('this place can not find ', undefined)
        }else if(body.features.length===0){
            callback('we can not find this address',undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode