import express from 'express';
import cors from 'cors';
import usuarioRoutes from './routes/usuarioRoute.js'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api',usuarioRoutes);

app.listen(port,() =>{
    console.log("Escutando on port 3000")
});

