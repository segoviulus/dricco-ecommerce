import TopBarDegrade from './components//NavBar/TopBarDegrade';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom';

// Fragment <> </> para no utilizar etiquetas, en este caso ya tengo BrowserRouter
const App = () => {
    
return (
        <BrowserRouter>
        <TopBarDegrade/>
        <NavBar/>
        <Main/>
        </BrowserRouter>
)
}

export default App;