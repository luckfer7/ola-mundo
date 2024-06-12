import './Post.css'

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo"
import ReactMarkdown from "react-markdown"
import NaoEncontrada from 'paginas/NaoEncontrada'
import PaginaPadrao from 'componentes/PaginaPadrao'


export default function Post () {

    const parametros = useParams()
    
    /*faz com que a informação digitada na url retorne no console através de um objeto*/ 

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    /* se o post que estou iterando tiver o mesmo id da url, encontramos o post correto. então o métoodo find retorna o post pra constante post*/
    if (!post) {
        return <NaoEncontrada />
    }

    /*esse método find recebe uma função que será executada para cada um dos posts, tbm temos que passar um retorno true or false. No primeiro true ele seleciona aquele post. */

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                            
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo>
                }/>
            </Route>
        </Routes>
        
        //fez com que ao clicar nos cards com os artigos, aparecesse a palavra post e o número correspondente ao card, tanto na tela, quanto na url.
    )
}