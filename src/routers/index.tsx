import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePageView from "../pages/home/home-page-view";
import PortfolioPageView from "../pages/portfolio/port-page-view";
import ProfilePageView from "../pages/profile/profile-page-view";
import NewsPageView from "../pages/news/news-page-view";
import StorePageView from "../pages/store/store-page-view";
import SearchStorePageView from "../pages/store/part/search-store-page-view";
import CheckoutStorePageView from "../pages/store/part/checkout-store-page-view";
import PageNotFound from "../components/EmptyState/page-not-found";
import PortfolioDetailsPageView from "../pages/portfolio/details/port-details-page-view";
import AnimePageView from "../pages/anime/anime-page-view";
import AnimeDetailsPageView from "../pages/anime/details/anime-detail-page-view";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageView/>,
    },
    {
      path: '/anime',
      element: <AnimePageView/>
    },
    {
      path: '/anime/:id',
      element: <AnimeDetailsPageView/>
    },
    {
      path: "/portfolio",
      element: <PortfolioPageView/>,
    },
    {
      path: "/portfolio/:slug",
      element: <PortfolioDetailsPageView/>,
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
      element: <StorePageView/>,
      errorElement: <PageNotFound/>,
      children: [
        {
          path: "search",
          element: <SearchStorePageView/>,
        },
        {
          path: "checkout",
          element: <CheckoutStorePageView/>,
        },
      ]
    },
    {
      path: "/404",
      element: <PageNotFound/>,
    },
    {
      path: "*",
      element: <Navigate to='/404' replace/>
    }
]);

export {
    router
}