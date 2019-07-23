//Install express server
const express = require('express');
const path = require('path');
const host = '0.0.0.0';
const port = process.env.PORT || '8080';

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/magic-item-tool'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/magic-item-tool/index.html'));
});

// Start our frontend
app.listen(port, host, function() {
  console.log("Frontend now listening on http://" + host + ":" + port + "/");
});
