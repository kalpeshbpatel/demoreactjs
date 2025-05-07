const express = require('express');
const cors = require('cors');
const app = express();
const http = require("http");


var corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routes")(app);

const server = http.createServer(app);
const PORT = process.env.PORT || 7171;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});