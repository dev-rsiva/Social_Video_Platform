import "./App.css";
import Head from "./components/Head.js";
import Body from "./components/Body.js";
import { Provider } from "react-redux";
import store from "./utills/store.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage.js";
import MainContainer from "./components/MainContainer.js";
import { Outlet } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          { path: "/", element: <MainContainer /> },
          { path: "/watch", element: <WatchPage /> },
          { path: "/results", element: <MainContainer /> },
        ],
      },
    ],
  },
]);

function AppLayout() {
  return (
    <div>
      <Head />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <AppLayout />
      </RouterProvider>
    </Provider>
  );
}

export default App;
