class Tables {
    init(connection) {
        this.connection = connection;
        console.log('tables script');

        this.createClient();
    }

    createClient() {
        const sql = 'CREATE TABLE IF NOT EXISTS CLIENT (ID INT NOT NULL AUTO_INCREMENT, CLIENT VARCHAR(50) NOT NULL, COORDINATES VARCHAR(50), PRIMARY KEY(ID))'

        this.connection.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('table client created');
            }
        })
    }
}

module.exports = new Tables;