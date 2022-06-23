import ItemDetailContainer from "./SingleProduct/ItemDetailContainer"
import ItemListContainer from "./GridProducts/ItemListContainer";
import Cart from "./Cart/Cart"
import { Route, Routes } from "react-router-dom";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/categoria/:categoria" element={<ItemListContainer/>}></Route>
                <Route path="/producto/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </main>
    );
};

export default Main;