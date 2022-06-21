import ItemDetailContainer from "./SingleProduct/ItemDetailContainer"
import ItemListContainer from "./GridProducts/ItemListContainer";
import { Route, Routes } from "react-router-dom";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/categoria/:categoria" element={<ItemListContainer/>}></Route>
                <Route path="/producto/:id" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </main>
    );
};

export default Main;