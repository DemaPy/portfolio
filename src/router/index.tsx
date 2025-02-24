import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";


const routes = createRoutesFromElements(
    <Route path="/">
        <Route index element={<Home />} />
    </Route>
)


export const router = createBrowserRouter(routes)