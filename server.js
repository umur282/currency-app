const express = require('express');
const nodefetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT;
const ACCESS_KEY = process.env.ACCESS_KEY;
const url = 'http://api.currencylayer.com/live' +
            '?access_key=' + ACCESS_KEY +
            '&format=1'

app.use(express.static('./dist/currency-app'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'dist/currency-app/'});
});

app.get('/update', (req, res) => {
  nodefetch(url)
  .then(resp => resp.json())
  .then(resp => res.send(resp))
  .catch(err => console.log(err));
});

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}.`);
});