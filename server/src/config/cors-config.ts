import * as env from 'dotenv';
env.config();

let allowedOrigins: string[] | [];

if (process.env.NODE_ENV === 'development') {
    allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];
} else {
    allowedOrigins = ['https://arielbehar.onrender.com', 'https://www.arielbehar.com/', 'https://arielbehar.herokuapp.com/'];
}
export default allowedOrigins;