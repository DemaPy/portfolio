import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Error, Home, Projects } from "../pages";
import Navbar from "@/components/Navigation/Navbar";
import { AnimatePresence } from "framer-motion";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AnimatePresence mode="wait">
        <div key={1}>
          <Navbar />
          <Home />
        </div>
      </AnimatePresence>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <AnimatePresence mode="wait">
        <div key={2}>
          <Navbar />
          <About />
        </div>
      </AnimatePresence>
    ),
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: (
      <AnimatePresence mode="wait">
        <div key={3}>
          <Navbar />
          <Projects />
        </div>
      </AnimatePresence>
    ),
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: (
      <AnimatePresence mode="wait">
        <div key={4}>
          <Navbar />
          <Contact />
        </div>
      </AnimatePresence>
    ),
    errorElement: <Error />,
  },
]);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
