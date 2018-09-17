import { join } from 'path';
import express from 'express';
import routes from './routes';
import stateRouting from './middleware/routing.mw';

const CLIENT_PATH = join(__dirname, '../../client');

let app = express();

app.use(express.static(CLIENT_PATH));       // serve up client files automatically
app.use(express.json());                    // set up body parser for api requests

app.use('/api', routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;        // use environment variable
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});