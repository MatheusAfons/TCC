import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegisterPage from './components/Login/LoginRegisterPage'; // Página de login e registro combinados
import HomePage from './components/Home/HomePage';
import CoursesPage from './components/Cursos/CoursesPage';
import ProfilePage from './components/Perfil/ProfilePage';
import NotificationsPage from './components/Notificacao/NotificationsPage';
import MessagesPage from './components/Mensagem/MessagesPage';
import SchedulePage from './components/pages/SchedulePage';
import CoordinatorPage from './components/pages/CoordinatorPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginRegisterPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/cursos" element={<CoursesPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="/notificacoes" element={<NotificationsPage />} />
                <Route path="/mensagens" element={<MessagesPage />} />
                <Route path="/coordinator" element={<CoordinatorPage />} />
                <Route path="/grade" element={<SchedulePage />} />
            </Routes>
        </Router>
    );
};

export default App;
