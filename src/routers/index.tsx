import { createBrowserRouter } from "react-router-dom";
import HomePageView from "../pages/home/home-page-view";
import PortfolioPageView from "../pages/portfolio/port-page-view";
import ProfilePageView from "../pages/profile/profile-page-view";
import NewsPageView from "../pages/news/news-page-view";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageView/>,
    },
    {
      path: "/portfolio",
      element: <PortfolioPageView/>,
    },
    {
      path: "/profile",
      element: <ProfilePageView/>,
    },
    {
      path: "/news",
      element: <NewsPageView/>,
    },
    {
      path: "/store",
      element: <NewsPageView/>,
    },



]);

export {
    router
}