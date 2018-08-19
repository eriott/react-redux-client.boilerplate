//import {match, RouterContext} from 'react-router';
import {StaticRouter} from 'react-router';
import routes from './routes';
import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

const app = express();

app.use((req, res) => {
  const store = configureStore();
  const context = {};
  const markup = ReactDom.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}>
        {routes}
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    req.redirect(301, context.url)
  } else {
    // we're good, send the response
    return res.end(renderHTML(markup));
  }
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});