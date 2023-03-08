import logo from './logo.svg';
import './App.css';
import './css/main.css';
import Resources from './components/Resources';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import Root from './components/root';

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={<Root/>}>
  <Route path="/html" element={<Resources category={'HTML'}/>}/>
  <Route path="/css" element={<Resources category={'CSS'}/>}/>
  <Route path="/javascript" element={<Resources category={'JavaScript'}/>}/>
  <Route path="/react" element={<Resources category={'React'}/>}/>
  <Route path="/sanity" element={<Resources category={'Sanity and headless CMS'}/>}/>
</Route>
))
function App() {
  return (
    <RouterProvider router={router}>
  </RouterProvider>
    
  );
}

export default App;
