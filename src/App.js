import TopBarDegrade from './components//NavBar/TopBarDegrade';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/GridProducts/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';
import ItemDetailContainer from './components/SingleProduct/ItemDetailContainer';

// Fragment <> </> para no utilizar etiquetas, en este caso ya tengo BrowserRouter
const App = () => {
    
return (
        <BrowserRouter>
        <TopBarDegrade/>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
        </BrowserRouter>
)
}

export default App;