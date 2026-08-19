import "./header.css"
export default function Header() {
    return (
        <header className="header">

        <div className="logo">
        <img src="/imagens/tier11.png" alt="tier logo" className="logo-img" />
        </div>

        <nav className="menu">
        <Link href="/" className="linknav"> Inicio </Link>
        <Link href="/Inicial/sobre" className="linknav"> Sobre </Link>
        <Link href="/Inicial/contato" className="linknav"> Contato </Link>
        </nav>
        </header>
        
    )
}
