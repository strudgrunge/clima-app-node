const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    //console.log(encodedUrl); //Preparacion de la direccion
    //antes de llamar al servicio

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        //Con ese argumento se reconocen las peticiones de dos palabras como seguras y realiza la peticion ingresada
        headers: { 'x-rapidapi-key': 'ef02cc7262msh44f0c8f5bb8cb76p15338ejsnffe2f3b4d46b' }
    }); //Instancia de la peticion

    //Ejecucion
    instance.get()
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    //Se crean propiedadaes para direccion
    //latitud y longitud con los valores de las
    //variables direccion, lat y lngs


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}