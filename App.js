import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contant from "./src/components/contact";
import ResturantInfo from "./src/components/ResturantInfo";


const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contant/>
      },
      {
        path:"/resturant/:resId",
        element:<ResturantInfo/>
      }
    ],
    errorElement:<Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
