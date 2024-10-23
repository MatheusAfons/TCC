import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Interface para Professor
interface Professor {
    nome: string;
    email: string;
    disponibilidade: string;
}

// Função para adicionar um professor com matérias
export async function addProfessor(professor: Professor, materias: string[]) {
    const novoProfessor = await prisma.professor.create({
        data: {
            nome: professor.nome,
            email: professor.email,
            disponibilidade: professor.disponibilidade
        }
    });
    console.log("Professor adicionado:", novoProfessor);
    return novoProfessor;
}

// Função para listar todos os professores e suas matérias
export async function getProfessores() {
    const professores = await prisma.professor.findMany({
        include: {
            materias: {
                include: {
                    materia: true,
                },
            },
        },
    });
    return professores;
}

// Função para atribuir um professor a uma grade específica
export async function assignProfessorToGrade(professorId: string, gradeId: string) {
    // Atribui o professor à grade selecionada pelo coordenador
    const updatedGrade = await prisma.grade.update({
        where: { id: gradeId },
        data: {
            professor: {
                connect: { id: professorId }, // Conecta o professor à grade
            },
        },
    });
    return updatedGrade;
}
