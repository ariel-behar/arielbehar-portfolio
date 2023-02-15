import cors from 'cors';
import express, { Application } from 'express';
import logger from 'morgan/index.js'

import routes from './routes/routes.js';

const PORT = process.env.PORT || '3030';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST']
}));


app.use(logger('dev'))

app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
})