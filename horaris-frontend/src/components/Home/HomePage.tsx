import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBell, FaBook, FaEnvelope } from 'react-icons/fa';
import './HomePage.css';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/'); // Redireciona de volta para a página de login
    };

    return (
        <div className="home-container">
            <header className="header">
                <h1 className="header-title">Painel da Faculdade</h1>
                <button onClick={handleLogout} className="logout-button">
                    Sair
                </button>
            </header>
            
            <div className="grid-container">
                <div className="grid-item courses" onClick={() => navigate('/cursos')}>
                    <FaBook className="icon" />
                    <h2>Cursos</h2>
                    <p>Veja todos os seus cursos.</p>
                </div>
                
                <div className="grid-item profile" onClick={() => navigate('/perfil')}>
                    <FaUser className="icon" />
                    <h2>Perfil</h2>
                    <p>Atualize suas informações.</p>
                </div>
                
                <div className="grid-item notifications" onClick={() => navigate('/notificacoes')}>
                    <FaBell className="icon" />
                    <h2>Notificações</h2>
                    <p>Veja suas notificações recentes.</p>
                </div>
                
                <div className="grid-item messages" onClick={() => navigate('/mensagens')}>
                    <FaEnvelope className="icon" />
                    <h2>Mensagens</h2>
                    <p>Confira suas mensagens.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
