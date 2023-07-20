const express = require('express');
const app = express();

app.use(express.static('public'));

// make index.html the default page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})