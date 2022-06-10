import express from 'express';
import ReactDom from 'react-dom/server';
import { indextemplate } from './indexTemplate';
import App from '../shared/App';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indextemplate(ReactDom.renderToString(App())),
    );
});

app.listen(3000, () => {
    console.log("server started on localhost:3000");
});