//Install express server
const express = require('express');
const path = require('path');
const host = '0.0.0.0';
const port = process.env.PORT || '4200';

const app = express();

// Redirect all frontend traffic to HTTPS except requests for localhost.
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;
app.use(redirectToHTTPS([/localhost:4200/]));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/magic-item-tool'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/magic-item-tool/index.html'));
});

// Start our frontend
app.listen(port, host, function() {
  console.log("Frontend now listening on " + host + ":" + port + "/");
});
