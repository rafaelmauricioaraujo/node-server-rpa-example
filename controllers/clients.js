const Client = require('../models/clients');
module.exports = app => {
    app.get('/clients', (req, res) => {
        Client.list(res);
    });

    app.get('/clients/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Client.findById(id, res);
    });

    app.post('/clients', (req, res) => {
        const client = req.body;
        Client.add(client, res);
    });

    app.patch('/clients/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        Client.update(id, values, res);

    });

    app.delete('/clients/:id', (req, res)=> {
        const id = parseInt(req.params.id);
        Client.delete(id, res);
    });
};