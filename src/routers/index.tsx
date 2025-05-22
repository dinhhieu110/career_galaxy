import AppLayout from "@/layout/AppLayout";
import {
  Job,
  JobListing,
  Landing,
  MyJobs,
  OnBoarding,
  PostJob,
  SavedJobs,
} from "@/pages";
import { createBrowserRouter } from "react-router-dom";
const routers = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/onboarding",
        element: <OnBoarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:id",
        element: <Job />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-jobs",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ],
  },
]);

export default routers;
