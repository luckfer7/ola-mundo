import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';
import MenuLink from './MenuLink';

export default function Menu () {

    

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/sobremim" >
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )

    /* tag Link no lugar da tag ancora
    atributo to no lugar do atributo href.
    são nativos do react-router-dom e impedem o carregamento da pagina quando se clica neles, o que é de fato o que a gente quer quando usamos react 
    Esse é comportamento de uma SPA - Single Page Application*/
    // /* ${styles.linkDestacado} */ mais uma forma de adicionar classes css no react

    //  ${localizacao.pathname === '/' ? styles.linkDestacado : ""} se estivermos no inicio, aplicamos o estilo que sublinha a plavra no inicio. Se estivermos em outra pagina, o sublinhado não aparece.
}