import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import productoRoutes from './routes/producto.routes';

// cofing
// creo una instancia de express
const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () =>{
    console.log('Estoy en el puerto '+app.get('port'));
})

// Herramientas extras middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public')));

// rutas
// app.get('/', (req, res)=>{
//     res.send('esta es una ruta de prueba');
// })
app.use('/api/cafeteria',productoRoutes);