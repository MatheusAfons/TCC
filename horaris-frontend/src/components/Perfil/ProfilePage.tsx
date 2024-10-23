import React, { useState } from 'react';

const ProfilePage: React.FC = () => {
    const [nome, setNome] = useState("João da Silva");
    const [email, setEmail] = useState("joao@example.com");
    const [senha, setSenha] = useState("");
    const [historico, setHistorico] = useState("Aulas ministradas: 15");
    const [preferencias, setPreferencias] = useState("Receber notificações por e-mail");
    const [modoEscuro, setModoEscuro] = useState(false);
    const [cursos, setCursos] = useState(["Matemática", "Física"]);
    
    const [isEditing, setIsEditing] = useState(false); // Estado de edição

    const handleSave = () => {
        // Lógica para salvar os dados
        console.log({
            nome,
            email,
            senha,
            historico,
            preferencias,
            modoEscuro,
            cursos
        });
        alert("Informações salvas com sucesso!");
        setIsEditing(false); // Desativar o modo de edição após salvar
    };

    const handleEdit = () => {
        setIsEditing(true); // Ativar o modo de edição
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Perfil</h2>

            {/* Informações Pessoais */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Informações Pessoais</h3>
                <label className="block mb-1">Nome:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full p-2 border rounded"
                    disabled={!isEditing} // Desabilitar quando não está em modo de edição
                />
                <label className="block mb-1 mt-4">E-mail:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    disabled={!isEditing}
                />
            </div>

            {/* Configurações de Conta */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Configurações de Conta</h3>
                <label className="block mb-1">Alterar Senha:</label>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="w-full p-2 border rounded"
                    disabled={!isEditing}
                />
            </div>

            {/* Histórico de Atividades */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Histórico de Atividades</h3>
                <textarea
                    value={historico}
                    onChange={(e) => setHistorico(e.target.value)}
                    className="w-full p-2 border rounded"
                    disabled={!isEditing}
                />
            </div>

            {/* Preferências */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Preferências</h3>
                <label className="block mb-1">Notificações:</label>
                <input
                    type="text"
                    value={preferencias}
                    onChange={(e) => setPreferencias(e.target.value)}
                    className="w-full p-2 border rounded"
                    disabled={!isEditing}
                />
                <label className="block mb-2 mt-4">
                    <input
                        type="checkbox"
                        checked={modoEscuro}
                        onChange={(e) => setModoEscuro(e.target.checked)}
                        disabled={!isEditing}
                        className="mr-2"
                    />
                    Modo escuro
                </label>
            </div>

            {/* Seção Acadêmica */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Seção Acadêmica</h3>
                <label className="block mb-1">Aulas que pode ministrar:</label>
                {cursos.map((curso, index) => (
                    <input
                        key={index}
                        type="text"
                        value={curso}
                        onChange={(e) => {
                            const newCursos = [...cursos];
                            newCursos[index] = e.target.value;
                            setCursos(newCursos);
                        }}
                        className="w-full p-2 border rounded mb-2"
                        disabled={!isEditing}
                    />
                ))}
                {isEditing && (
                    <button
                        onClick={() => setCursos([...cursos, ""])}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                        Adicionar Curso
                    </button>
                )}
            </div>

            {/* Botões de Ação */}
            <div className="text-right">
                {!isEditing ? (
                    <button
                        onClick={handleEdit}
                        className="bg-yellow-500 text-white px-6 py-2 rounded"
                    >
                        Editar
                    </button>
                ) : (
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-6 py-2 rounded"
                    >
                        Salvar
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
