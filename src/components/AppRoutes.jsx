
import Home from "./Home";
import ViewMergeReports from "./ViewMergeReports";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/ViewMergeReports',
      element: <ViewMergeReports/>
  }
];

export default AppRoutes;
