import TopBarDegrade from './components/TopBarDegrade';
import NavBar from './components/NavBar';
import Categorias from './components/Categorias';
import ItemListContainer from './components/ItemListContainer';

// Fragmento <> </> para no utilizar etiquetas
const App = () => {
    
return (
    <>
        <TopBarDegrade/>
        <NavBar/>
        <ItemListContainer hero="Bienvenidos a la tienda!"/>
    </>
)
}

export default App;