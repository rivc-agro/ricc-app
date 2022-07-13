import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import { indextemplate } from './indexTemplate';
import { StaticRouter } from 'react-router-dom/server';
import serialize from 'serialize-javascript';
import App from '../shared/App';
import StrapiAPI from '../API/StrapiAPI';
import compression from 'compression';
import helmet from 'helmet';
import axios from 'axios';
const bodyParser = require('body-parser')

const app = express();
app.use(compression());
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
}));
let data = {};


app.use('/send', bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

app.post('/send', (req, res, next) => {
    if (!req.body) return res.sendStatus(400)

    axios.post('https://ricc-it.bitrix24.ru/rest/1/kk9l491xxvs8d6t8/crm.lead.add.json',
        req.body
    )
        .then((e) => {
            res.send(e);
        })
        .catch((error) => {
            res.send(error);
        });
});

app.use('/static/', express.static('./dist/client'));

StrapiAPI.getLogo()
    .then((resp) => {
        data.logo = resp.data[0].attributes.logo.data.attributes.url;
        data.infoEmail = resp.data[0].attributes.infoEmail;
        data.supportEmail = resp.data[0].attributes.supportEmail;
        data.salesEmail = resp.data[0].attributes.salesEmail;
        data.salesPhone = resp.data[0].attributes.salesPhone;
        data.represnative = resp.data[0].attributes.legalRepresentative
    });

StrapiAPI.getIntro()
    .then((resp) => {
        data.heading = resp.data[0].attributes.heading;
    });

StrapiAPI.getIntro()
    .then((resp) => {
        data.description = resp.data[0].attributes.description;
    });

StrapiAPI.getBenefits()
    .then((resp) => {
        const respData = resp.data;
        data.benefits = [];

        respData.map((item, i) => {
            data.benefits.push(
                {
                    id: item.id,
                    iconURL: item.attributes.icon.data[0].attributes.url,
                    iconCaption: item.attributes.icon.data[0].attributes.caption,
                    caption: item.attributes.descr
                }
            )
        });
    });

app.get('*', (req, res) => {
    const markup = ReactDom.renderToStaticMarkup(
        <StaticRouter location={req.url}>
            <App serverData={data} />
        </StaticRouter>
    );

    res.send(
        indextemplate(markup, serialize(data))
    );
});

app.listen(3000, () => {
    console.log("server started on http://localhost:3000");
});