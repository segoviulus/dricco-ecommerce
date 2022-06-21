import TopBarDegrade from './components//NavBar/TopBarDegrade';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/GridProducts/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/SingleProduct/ItemDetailContainer';
import ItemCat from './components/SingleProduct/ItemCat';

// Fragment <> </> para no utilizar etiquetas, en este caso ya tengo BrowserRouter
const App = () => {
    
return (
        <BrowserRouter>
        <TopBarDegrade/>
        <NavBar/>
                <Routes>
                        <Route path='/' element={<ItemListContainer/>} />
                        <Route path='/producto/:id' element={<ItemDetailContainer/>} />
                        <Route path='categoria/:categoria' element={<ItemCat/>} />
                </Routes>
        </BrowserRouter>
)
}

export default App;