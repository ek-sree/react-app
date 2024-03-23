import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import ResturantInfo from "./src/components/ResturantInfo";
import Contact from "./src/components/Contact";
import Shimmer from "./src/components/shimmer";
import { useState,useEffect } from "react";
import { UserContext } from "./src/components/utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/redux/appStore";
import Cart from "./src/components/Cart";


const Grocery = lazy(() => import("./src/components/Grocery")); //on demand loading or dynamic importing or dynamic bundling or code spliting or chunking





const App = () => {
  
  const [userName, setuserName] = useState("")

  useEffect(()=>{
    const data = "Sreehari"
    setuserName(data)
  },[])
  
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: 
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantInfo />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
