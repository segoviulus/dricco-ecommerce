import TopBarDegrade from './components//NavBar/TopBarDegrade';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContex';


// Fragment <> </> para no utilizar etiquetas, en este caso ya tengo BrowserRouter
const App = () => {
    
return (
        <CartProvider>
        <BrowserRouter>
        <TopBarDegrade/>
        <NavBar/>
        <Main/>
        </BrowserRouter>
        </CartProvider>
)
}

export default App;