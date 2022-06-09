import express from 'express';
import ReactDom from 'react-dom/server';
import { Header } from '../shared/Header';
import { indextemplate } from './indexTemplate';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indextemplate(ReactDom.renderToString(Header())),
    );
});

app.listen(3000, () => {
    console.log("server started on localhost:3000");
});