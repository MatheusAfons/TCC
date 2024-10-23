const { assignProfessorToGrade } = require('../services/professorService');

// Controller para atribuir um professor a uma grade específica
exports.assignProfessor = async (req, res) => {
    const { professorId, gradeId } = req.body;  // O coordenador escolhe o professor e a grade
    try {
        const updatedGrade = await assignProfessorToGrade(professorId, gradeId);
        res.status(200).json({ message: 'Professor atribuído à grade com sucesso!', updatedGrade });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atribuir professor à grade.' });
    }
};
