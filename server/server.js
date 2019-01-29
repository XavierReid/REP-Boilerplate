const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const app = express();

// Server Setup
app.use(express.static('dist')); // For Production
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
