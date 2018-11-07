const express = require('express')

const template = require('fs').readFileSync(__dirname + '/src/index.html', 'utf-8');

const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const { createBundleRenderer } = require('vue-server-renderer');

const server = express()

const renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
});

server.get('*', (req, res) => {
    const context = { url: req.url }

    renderer.renderToString(context, (err, html) => {
        res.end(html)
    });
});

server.listen(8080, () => console.log("App listening on port 8080!"));