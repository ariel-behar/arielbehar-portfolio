import path from 'path'
import { fileURLToPath } from 'url';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import logger from 'morgan/index.js'

import routes from './routes/routes.js';
import allowedOrigins from './config/cors-config.js';

const PORT = process.env.PORT || 3030;

const app: Application = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname + '/public')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: allowedOrigins,
    methods: 'GET'
}));

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'))
}

app.use("/api", routes)

app.get('*', (req: Request, res: Response) => {
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
})