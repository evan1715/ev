const weatherstack = 'http://api.weatherstack.com/current?access_key=';
const access = '8084de13b9137fc0a77272d776798647';

/**
 * @param {number} latitude
 * @param {number} longitude
 * @returns {Promise<string>}
 */
const forecast = async (latitude, longitude) => {
    const url = weatherstack + access + '&query=' + latitude + ',' + longitude + '&units=f';
    const res = await fetch(url);
    const body = await res.json();

    if (body.error) {
        throw new Error('Unable to find location. Try another search.');
    }

    const cr = body.current;

    return (
        cr.weather_descriptions[0] +
        '. It is currently ' +
        cr.temperature +
        'F degrees out at. It feels like ' +
        cr.feelslike +
        'F degrees. Humidity is at ' +
        cr.humidity +
        '% with a ' +
        cr.precip +
        '% chance of raining.'
    );
};

export { forecast };
