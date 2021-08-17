import express from 'express'
import RoutesProducts from './routes/products.routes';
import RoutesAccount from './routes/account.routes';

const app = express();




app.use('/products', RoutesProducts);
app.use('/Account', RoutesAccount);



export default app;

