const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {

    console.log(request.params);

    return response.json({
        name: "Arnold Schwarzenegger",
        message: "Hasta la vista, babe!"
    });
})

module.exports = routes;