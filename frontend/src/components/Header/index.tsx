import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMETA</h1>
                    <p>Desenvolvido por <a href="https://www.instagram.com/luanraffaell/">@luanraffaell</a></p>
            </div>
        </header>
    )
}

export default Header