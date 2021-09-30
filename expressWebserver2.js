var express = require('express');
var app = express();
 
app.use(express.static('www'))
 
// app.listen(3000);
// Listen to the App Engine-specified port, or 8080 otherwise

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
// [END app]

module.exports = app;
