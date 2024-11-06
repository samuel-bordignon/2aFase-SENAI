import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Numeros712 from "../pages/Numeros712";
import Pares173 from "../pages/Pares713";
import MinMax715 from "../pages/MinMax715";


const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/numeros712", element: <Numeros712 />},
    {path: "/pares", element: <Pares173 />},
    {path: "/minmax", element: <MinMax715 />}
])

export default router;
