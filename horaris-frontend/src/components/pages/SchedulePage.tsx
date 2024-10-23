import React from 'react';
import './SchedulePage.css'; // Adicione um CSS específico para a página, se necessário

const SchedulePage: React.FC = () => {
    // Exemplo de dados da grade
    const schedules = [
        { semester: '1º Semestre', courses: ['Matemática', 'Português', 'História'] },
        { semester: '2º Semestre', courses: ['Física', 'Química', 'Geografia'] },
        { semester: '3º Semestre', courses: ['Biologia', 'Literatura', 'Educação Física'] },
    ];

    return (
        <div className="schedule-container">
            <h1>Grade de Cursos</h1>
            {schedules.length > 0 ? (
                schedules.map((schedule, index) => (
                    <div key={index} className="semester">
                        <h3>{schedule.semester}</h3>
                        <ul>
                            {schedule.courses.map((course, i) => (
                                <li key={i}>{course}</li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p>Não há grades disponíveis.</p> // Mensagem caso não haja grades
            )}
        </div>
    );
};

export default SchedulePage;
