import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import { indextemplate } from './indexTemplate';
import { StaticRouter } from 'react-router-dom/server';
import App from '../shared/App';

const app = express();

app.use('/static/', express.static('./dist/client'));

app.get('*', (req, res) => {
    res.send(
        indextemplate(ReactDom.renderToString(
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        )),
    );
});

app.listen(3000, () => {
    console.log("server started on localhost:3000");
});