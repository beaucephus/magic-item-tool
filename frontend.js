//Install express server
const express = require('express');
const forceDomain = require('forcedomain');
const path = require('path');
const host = '0.0.0.0';
const port = process.env.PORT || '4200';
const app = express();

// Redirect non-www domain requests to www. domains.
app.use(forceDomain({
  hostname: 'www.magicitemtool.com',
  protocol: 'https',
  excludeRule: /[a-zA-Z0-9][a-zA-Z0-9-]+\.herokuapp\.com/i
}));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/magic-item-tool'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/magic-item-tool/index.html'));
});

// Start our frontend
app.listen(port, host, function() {
  console.log("Frontend now listening on " + host + ":" + port + "/");
});
