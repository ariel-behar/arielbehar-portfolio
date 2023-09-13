import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import express from 'express';
// import logger from 'morgan/index.js'
import routes from './routes/routes.js';
const PORT = process.env.PORT || 3030;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: ['http://www.arielbehar.com/', 'https://arielbehar.herokuapp.com/', 'http://localhost:3000', 'http://localhost:3001'],
    // origin: 'http://www.arielbehar.com/',
    methods: ['POST', 'GET']
}));
// app.use(logger('dev'))
app.use("/api", routes);
app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map