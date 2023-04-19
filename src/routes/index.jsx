import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/Login";
import OverviewPage from "../pages/main/Overview";

// Route definition
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    // loader: ()=>{
    //   const guarder = localStorage.getItem('userId')
    //   if (!guarder){
    //     return redirect('/welcome')
    //   }
    //   return null
    // },
    children:[
      {
        path:'/',
        name: 'Overview',
        element: <OverviewPage />
      }
    ]
  },
  {
    path:'/login',
    element: <LoginPage />,
    // loader: ()=>{
    //   const guarder = localStorage.getItem('userId')
    //   if (guarder){
    //     return redirect('/')
    //   }
    //   return null
    // },
  }, 
])


export default router