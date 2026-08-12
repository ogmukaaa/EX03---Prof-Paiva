import "./contato.css"

export default function Contato() {
    return (
        <>
        <div className="inicio">
            <h1>Entre em contato conosco</h1>
            <p>Preencha o formulário abaixo e, em breve, nossa equipe entrará em contato para resolver qualquer problema ou dúvida.</p>
        </div>
        
        <form className="formulario">
            <label for="nome">Nome:</label> <br></br>
            <input type="text" id="nome" name="nome" required /> <br></br>
            <label for="nome">Email:</label> <br></br>
            <input type="email" id="nome" name="nome" required /> <br></br>
            <label for="nome">Telefone:</label> <br></br>
            <input type="number" id="nome" name="nome" required />
        </form>
        </>
    )
}