import TopBarDegrade from './components/TopBarDegrade';
import NavBar from './components/NavBar';
import Categorias from './components/Categorias';
import {useState} from 'react';
import CardProduct from './components/CardProduct';
import ItemListContainer from './components/ItemListContainer';

// Fragmento <> </> para no utilizar etiquetas
const App = () => {
    
return (
    <>
        <TopBarDegrade/>
        <NavBar/>
        <Categorias/>
        <ItemListContainer/>
    </>
)
}

export default App;