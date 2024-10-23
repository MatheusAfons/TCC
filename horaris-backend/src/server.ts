import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import professorRoutes from './Routes/professorRoutes'; // Importa as rotas

const prisma = new PrismaClient();
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Usa as rotas do professor
app.use('/professores', professorRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
