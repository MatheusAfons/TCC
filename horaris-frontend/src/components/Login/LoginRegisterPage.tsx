import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import mockUsers from '../../mockUsers';

const LoginRegisterPage: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false); // Estado para controlar o flip
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isCoordinator, setIsCoordinator] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    
        const user = mockUsers.find(
            (u) => u.email === email && u.senha === senha
        );
    
        if (user) {
            if (user.role === 'coordenador') {
                navigate('/coordinator'); // Redireciona para a página do coordenador
            } else {
                navigate('/home'); // Redireciona para a página do professor
            }
        } else {
            alert('Email ou senha inválidos!');
        }
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de registro
        if (isCoordinator) {
            navigate('/coordinator');
        } else {
            navigate('/home');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className={`relative w-96 h-[30rem]`}>
                <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
                    {/* Lado do Login */}
                    <div className="flip-card-front flex items-center justify-center bg-white p-8 rounded-lg shadow-lg w-full h-full">
                        <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-full">
                            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Login</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Entrar
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsFlipped(true)} // Troca para o lado de registro
                                className="text-blue-600 hover:underline"
                            >
                                Registrar
                            </button>
                        </form>
                    </div>

                    {/* Lado do Registro */}
                    <div className="flip-card-back flex items-center justify-center bg-white p-8 rounded-lg shadow-lg w-full h-full">
                        <form onSubmit={handleRegister} className="flex flex-col space-y-4 w-full">
                            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Registrar</h2>
                            <input
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={isCoordinator}
                                    onChange={(e) => setIsCoordinator(e.target.checked)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="ml-2 text-gray-600">Coordenador</label>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Registrar
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsFlipped(false)} // Troca de volta para o login
                                className="text-blue-600 hover:underline"
                            >
                                Voltar ao Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterPage;
