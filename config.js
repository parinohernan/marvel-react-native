import md5 from 'md5';
// Toma los valores de la clave pública y provada desde el archivo .env
import { publicKey, privateKey, ts, md5Hash } from '@env';


// Generamos el hash que nos pide la API pasandole como parámetro 
// a la función md5 un string que concatene el ts + privateKey + publicKey
// const hash = md5(`${ts}${publicKey}${privateKey}`);
const hash = md5Hash;
// Exportamos un objeto con los datos necesarios para usar la API
// para que luego podamos importarlo desde cualquier componente
const apiParams = {
  ts,
  apikey: 'a9b3ec5c20fb6a6aa4b09240949d3c4d',
  hash,
	baseURL: 'https://gateway.marvel.com'
};
console.log('public key   ',publicKey);
export default apiParams;