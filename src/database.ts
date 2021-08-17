import {createConnection} from 'typeorm';


const connectionDB = createConnection({

    type: 'postgres',
    host: 'localhost',
    database: 'Auth_Users',
    port: 5432,
    username: 'postgres',
    password: 'S14151612139',
    entities: [
        __dirname + './models/*.ts'
    ],
    cli: {
        "migrationsDir": "/src/migrations"
    }

}).then(connection => {
    console.log("Database is connected to:", connection.options.database);
}).catch(error => console.log(error));

export default connectionDB;