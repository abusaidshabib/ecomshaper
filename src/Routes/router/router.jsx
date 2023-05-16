import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home";
import Table from "../../Page/Table";
import PostData from "../../Page/PostData";
import UpdateData from "../../Page/UpdateData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/medicine",
        element: <Table></Table>,
      },
      {
        path: "/post",
        element: <PostData></PostData>,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://api-abusaidshabib.vercel.app/medicine/${params.id}`),
        element: <UpdateData></UpdateData>,
      },
    ],
  },
]);

export default router;
