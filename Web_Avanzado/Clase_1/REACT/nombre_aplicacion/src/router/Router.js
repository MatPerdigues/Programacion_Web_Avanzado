import{BrowserRouter, Router, Routes, Route} from "react-router-dom";
import Home from "../components/Home/Home"

export default function Ruta (){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        
        </BrowserRouter>

    )
}