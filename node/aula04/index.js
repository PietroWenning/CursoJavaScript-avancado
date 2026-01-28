const fs = require('fs').promises
const path = require('path')

fs.readdir('./')
 .then(file => console.log(file))
 .catch(e => console.log(e))
