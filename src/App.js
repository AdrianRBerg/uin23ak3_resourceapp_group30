import logo from './logo.svg';
import './App.css';
import './css/main.css';
import Resources from './components/Resources';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Resources category={''} />} />
    <Route path="/HTML" element={<Resources category={'HTML'} />} />
    <Route path="/CSS" element={<Resources category={'CSS'} />} />
    <Route path="/JavaScript" element={<Resources category={'JavaScript'} />} />
    <Route path="/React" element={<Resources category={'React'} />} />
    <Route path="/Sanity" element={<Resources category={'Sanity and headless CMS'} />} />
  </Route>
))
function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>

  );
}

export default App;
