import { HomePageRoute, ManageRoute, ItemViewRoute } from "./pages";

const routesData = [
  { path: "/", element: <HomePageRoute /> },
  { path: "/manage-types", element: <ManageRoute /> },
  { path: "/:id", element: <ItemViewRoute /> },
];
export default routesData;
