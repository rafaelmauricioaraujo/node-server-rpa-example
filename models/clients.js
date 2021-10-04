const connection = require('../infrastructure/connection');
class Clients {

    findById(id, res) {
        const sql = `SELECT * FROM CLIENT WHERE ID = ${id}`;

        connection.query(sql, (err, result) => {
            const client = result[0]
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(client);
            };
        });
    };

    list(res) {
        const sql = 'SELECT * FROM CLIENT';

        connection.query(sql, (err, result) => {
            if (err) {
                res.status(400).json(err)
            } else {
                res.status(200).json(result);
            };
        });
    };

    add(client, res) {
        const sql = 'INSERT INTO CLIENT SET ?';

        connection.query(sql, client, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json(result);
            };
        });
    };

    update(id, values, res) {
        const sql = 'UPDATE CLIENT SET ? WHERE ID=?';

        connection.query(sql, [values, id], (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        });
    };

    delete(id, res) {
        const sql = 'DELETE FROM CLIENT WHERE ID=?';

        connection.query(sql, id, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json({id});
            };
        });
    };
};

module.exports = new Clients;