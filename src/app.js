import express from 'express';
import userRoutes from './routes/userRoutes.js'

const app = express();

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));