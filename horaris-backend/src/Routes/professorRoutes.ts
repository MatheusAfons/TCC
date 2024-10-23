import { Router } from 'express';
import { addProfessor, getProfessores, assignProfessorToGrade } from '../services/professorService';

const router = Router();

// Rota para adicionar um novo professor
router.post('/add', async (req, res) => {
    const { nome, email, disponibilidade, materias } = req.body;
    try {
        const novoProfessor = await addProfessor({ nome, email, disponibilidade }, materias);
        res.status(201).json(novoProfessor);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar professor.' });
    }
});

// Rota para obter todos os professores
router.get('/all', async (req, res) => {
    try {
        const professores = await getProfessores();
        res.status(200).json(professores);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter professores.' });
    }
});

// Rota para o coordenador atribuir um professor a uma grade
router.post('/assign', async (req, res) => {
    const { professorId, gradeId } = req.body;
    try {
        const updatedGrade = await assignProfessorToGrade(professorId, gradeId);
        res.status(200).json({ message: 'Professor atribuído à grade com sucesso!', updatedGrade });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atribuir professor à grade.' });
    }
});

export default router;
