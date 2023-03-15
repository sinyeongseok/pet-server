import express from 'express';
const app: express.Application = express();

import apiTest from './test/index';
app.use('/test', apiTest);

export default app;
