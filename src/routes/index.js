import express from  "express";

import users from "./userRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({name: "Renan"})
    })

    app.use(
        express.json(),
        users
    )
}

export default routes