// mockUsers.ts

interface User {
    id: number;
    nome: string;
    email: string;
    senha: string;
    role: 'coordenador' | 'professor'; // Tipo de usuário
}

const mockUsers: User[] = [
    {
        id: 1,
        nome: 'Admin Teste',
        email: 'coo@teste.com',
        senha: '1', // Use um hash em produção
        role: 'coordenador',
    },
    {
        id: 2,
        nome: 'Professor Teste',
        email: 'pro@teste.com',
        senha: '1', // Use um hash em produção
        role: 'professor',
    },
];

export default mockUsers;
