import "./contato.css"

export default function Contato() {
    return (
        <>
        <div className="inicio">
            <h1>Entre em contato conosco</h1>
            <p>Preencha o formulário abaixo e, em breve, nossa equipe entrará em contato para resolver qualquer problema ou dúvida.</p>
        </div>
        
        <form className="formulario">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="telefone">Telefone:</label>
            <input type="number" id="telefone" name="telefone" required />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>

            <button type="submit">Enviar</button>
        </form>
        </>
    )
}