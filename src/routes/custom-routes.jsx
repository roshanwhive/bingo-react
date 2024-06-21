import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";

const About = () => {
  return <h2>About Page</h2>;
};

const Contact = () => {
  return <h2>Contact Page</h2>;
};

const AppRoutes = () => {
  const mainRoutes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
  ]);

  return mainRoutes;
};

export default AppRoutes;
