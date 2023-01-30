import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { RootRoute } from './routes/RootRoute';
import { ErrorPageRoute } from './routes/ErrorPageRoute';
import { ReactToSwapiRoute } from './routes/ReactToSwapiRoute';
import { ReactToExpressToSwapiRoute } from './routes/ReactToExpressToSwapiRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <ErrorPageRoute />,
  },
  {
    path: "/make_react_to_swapi_calls",
    element: <ReactToSwapiRoute />,
    errorElement: <ErrorPageRoute />,
  },
  {
    path: "/make_react_to_express_to_swapi_calls",
    element: <ReactToExpressToSwapiRoute />,
    errorElement: <ErrorPageRoute />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
