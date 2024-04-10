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
import Demo from "./components/Demo.js";
import Demo2 from "./components/Demo2.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Head />
        <Body />
      </>
    ),
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
      { path: "/results", element: <MainContainer /> },
      {
        path: "/Demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
