import "./App.css";
import DetailsView from "./pages/DetailsView";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ListView from "./pages/ListView";
import ErrorView from "./pages/ErrorView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorView />}>
      <Route path="" element={<ListView />} />
      <Route path="details/:id" element={<DetailsView />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
