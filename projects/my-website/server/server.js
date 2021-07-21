const path = require('path'); //core node module
const express = require('express') //npm module

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(process.env.PORT, () => console.log(`Server is up on port ${process.env.PORT}.`));