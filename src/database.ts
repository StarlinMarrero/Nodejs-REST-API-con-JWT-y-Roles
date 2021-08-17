import {createConnection} from 'typeorm'



const connectionDB = async () => {
    await createConnection().then(() => {
        console.log('database connected');
    });
}

connectionDB()