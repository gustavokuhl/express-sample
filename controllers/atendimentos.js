const ClassExample = require('../models/class-example')

module.exports = app => {
    app.get('class-example/:id', (req, res) => {
        const id = parseInt(req.params.id)
        ClassExample.sampleFunction(res, id)
    })
}