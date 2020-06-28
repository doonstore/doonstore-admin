declare function require(name:string);
const GOOGLE_SERVICES_JSON = require('./google-services.json');

export const environment = {
    production: false,
    firestore: GOOGLE_SERVICES_JSON
};
