const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const access = 'pk.eyJ1IjoiZXZhbjE3MTUiLCJhIjoiY2toa3IzZXp6MG04bTJzcDl2ajNmd25rbiJ9.XjzogR6sGzKoSRrzRdDVXA';

/**
 * @param {string} address
 * @returns {Promise<{latitude: number, longitude: number, location: string}>}
 */
const geocode = async (address) => {
    //encodeURIComponent is used for a location search that contains special characters that means something in a URL structure. Ex: ? becomes %3F
    const url = mapbox + encodeURIComponent(address) + '.json?access_token=' + access + '&limit=1';
    const res = await fetch(url);
    const body = await res.json();

    if (body.features.length === 0) {
        throw new Error('Unable to find location. Try another search.');
    }

    return {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
    };
};

export { geocode };
