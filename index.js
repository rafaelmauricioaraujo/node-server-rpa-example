require('dotenv').config();
const customExpress = require('./config/custonExpress.js');
const connection = require('./infrastructure/connection');
const Tables = require('./infrastructure/tables');


connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('database connected');

        Tables.init(connection);
        const app = customExpress();
        app.listen(process.env.PORT, () => {
            console.log('server is listen on port 3000');
        });
    }

});

