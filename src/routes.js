import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu /> 
      {/* o menu de navegação está aaprecendo em todas as rotas de navegação. */}

      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          
        </Route>

        {/* isso se chama rotas aninhadas. Junto com o outlet no paginapadrão */}

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
      {/* importamos fora do roteador pois ele aparece em todas as paginas do figma. */}
    </BrowserRouter>
  );
}

export default AppRoutes;
