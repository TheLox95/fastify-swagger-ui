'use strict'

function indexHtml (opts) {
  return `<!-- HTML for static distribution bundle build -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  <base href="" />
  <title>${opts.theme?.title || 'Swagger UI'}</title>
  <link rel="stylesheet" type="text/css" href="http://34.170.127.205/api/swagger/static/swagger-ui.css" />
  <link rel="stylesheet" type="text/css" href="http://34.170.127.205/api/swagger/static/index.css" />
  ${opts.theme && opts.theme.css ? opts.theme.css.map(css => `<link rel="stylesheet" type="text/css" href="./theme/${css.filename}" />\n`).join('') : ''}
  ${opts.theme && opts.theme.favicon
? opts.theme.favicon.map(favicon => `<link rel="${favicon.rel}" type="${favicon.type}" href="./theme/${favicon.filename}" sizes="${favicon.sizes}" />\n`).join('')
: `
  <link rel="icon" type="image/png" href="http://34.170.127.205/api/swagger/static/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="http://34.170.127.205/api/swagger/static/favicon-16x16.png" sizes="16x16" />
  `}
  </head>
  
  <body>
  <div id="swagger-ui"></div>
  <script src="http://34.170.127.205/api/swagger/static/swagger-ui-bundle.js" charset="UTF-8"> </script>
  <script src="http://34.170.127.205/api/swagger/static/swagger-ui-standalone-preset.js" charset="UTF-8"> </script>
  <script src="http://34.170.127.205/api/swagger/static/swagger-initializer.js" charset="UTF-8"> </script>
  ${opts.theme && opts.theme.js ? opts.theme.js.map(js => `<script src="/theme/${js.filename}" charset="UTF-8"> </script>\n`).join('') : ''}
  </body>
  </html>
  `
}

module.exports = indexHtml
