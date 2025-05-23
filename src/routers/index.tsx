import ProtectedAuthProvider from "@/components/ProtectedAuthProvider";
import AppLayout from "@/layout/AppLayout";
import {
  Job,
  JobListing,
  Landing,
  MyJobs,
  OnBoarding,
  PostJob,
  SavedJobs,
  Auth,
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
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedAuthProvider>
            <OnBoarding />,
          </ProtectedAuthProvider>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedAuthProvider>
            <JobListing />
          </ProtectedAuthProvider>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedAuthProvider>
            <Job />
          </ProtectedAuthProvider>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedAuthProvider>
            <PostJob />
          </ProtectedAuthProvider>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedAuthProvider>
            <SavedJobs />
          </ProtectedAuthProvider>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedAuthProvider>
            <MyJobs />
          </ProtectedAuthProvider>
        ),
      },
    ],
  },
]);

export default routers;
