import { createBrowserRouter } from "react-router";
import WatchedList from "../components/WatchedList";
import Header from "../components/Header";
import Add from "../components/Add";
import App from "../App";
import Watched from "../components/Watched";

const router=createBrowserRouter([
    {
        path:"/",
      element:<App/>,
        children:[
          {
            path:"/",
          element:<WatchedList/>
          },{
            path:"/add",
          element:<Add/>
          }
          ,
        {
          path:"/watched",
          element:<Watched/>
        }
        ]

    },{

    }
])
export default router;