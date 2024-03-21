import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/error-page";
import { Detail } from "../pages/detail/index";
import PetList from "../pages/default/index";
import MineDetail from "../pages/mine/index";
import AboutUs from "../pages/about-us";
import Start from "../pages/guide/start";
import FAQ from "../pages/guide/faq";
import Blog from "../pages/guide/blog";
import Compete from "../pages/competition";

import React from "react";

export const BaseRouter = createBrowserRouter([
  {
    path: "/",
    element: <PetList />,
    errorElement: <ErrorPage />,
  }
  ,{
    path: "detail/:petId",
    element:<Detail/>
  }
  ,{
    path: "mine",
    element: <MineDetail />,
    errorElement: <ErrorPage />,
  }
  ,{
    path: "about",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  }
   ,{
    path: "start",
    element: <Start />,
    errorElement: <ErrorPage />,
   }
  ,{
    path: "faq",
    element: <FAQ />,
    errorElement: <ErrorPage />,
      }
   ,{
    path: "blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
   }
  ,{
    path: "compete",
    element: <Compete />,
    errorElement: <ErrorPage />,
  }
]);
