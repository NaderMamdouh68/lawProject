import {
  createBrowserRouter,
} from "react-router-dom";

import App from './App.jsx'
import Form from './components/Form/Form.jsx'
import Login from './components/Login/Login .jsx'
import Content from "./components/Content/Content.jsx";
import Profile from "./components/student/Profile.jsx";
import Contact from "./components/student/contact/Contact.jsx";
import ProfileStatus from "./components/student/profliestatus/ProfileStatus.jsx";
import EditProfile from "./components/student/edit/EditProfile.jsx";
import ManagerLogin from "./components/manager/Login/ManagerLogin.jsx";
import StudentList from "./components/manager/manage/studentList/StudentList.jsx";
import Manager from "./components/manager/manage/Manager.jsx";
import ProgramAndDepartment from "./components/manager/manage/ProgramsAndDepartments/ProgramAndDepartment.jsx";
import Show from "./components/manager/manage/show/Show.jsx";
import SuperAdmin from "./components/superAdmin/manage/SuperAdmin.jsx";
import SuperAdminStudentList from "./components/superAdmin/manage/studentList/SuperAdminStudentList.jsx";
import SuperAdminShow from "./components/superAdmin/manage/show/SuperAdminShow.jsx";
import SuperAdminLogin from "./components/superAdmin/Login/SuperAdminLogin.jsx";
import Addm1m2f from "./components/superAdmin/manage/addm1m2f/Add.jsx";
import Restpass from "./components/superAdmin/Login/RestPass.jsx";
import RestPassManager from "./components/manager/Login/RestPassManager.jsx";
import StudentStat from "./components/manager/manage/studentList/StudentStat.jsx";
import Verify from "./components/reset-pass/Verify.jsx";
import Reset from "./components/reset-pass/Reset.jsx";





const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Content />
      },
      {
        path: "/form",
        element: <Form />,
        
      },
      {
        path: "/login",
        element: <Login />,
        
      },
      {
        path: "/Verify",
        element: <Verify />,
        
      },
      {
        path: "/reset/:id",
        element: <Reset />,
        
      },
      {
        path: "/login",
        element: <Login />,
        
      },
      {
        path: "/profile",
        element: <Profile />,
        children:[
          {
              path:"",
              element:<ProfileStatus/>
          },
          {
            path:"/profile/contact",
            element:<Contact/>
          },
          {
            path:"/profile/Edit",
              element:<EditProfile/>
          }
        ]
      },
      {
        path: "/managerLogin",
        element: <ManagerLogin/>,
      },
      {
        path: "/managerLogin/restpass",
        element: <RestPassManager/>,
      },
      
      
      {
        path: "/superadminLogin",
        element: <SuperAdminLogin/>,
      },
      {
        path: "/restpass",
        element: <Restpass/>,
      },
      {
        path: "/manager",
        element: <Manager/>,
        children:[
          {
              path:"",
              element:<StudentList/>
          },
          {
            path:"/manager/programsAndDepartments",
            element:<ProgramAndDepartment/>
          },
          {
            path:"/manager/StudentStatastics",
            element:<StudentStat/>
          },
          {
            path:"/manager/show/:id",
            element:<Show/>
          },
        ]
      },
      {
        path: "SuperAdmin",
        element: <SuperAdmin/>,
        children:[
          {
              path:"",
              element:<SuperAdminStudentList/>
          },
          {
              path:"/SuperAdmin/show/:id",
              element:<SuperAdminShow/>
          },
          {
              path:"/SuperAdmin/add",
              element:<Addm1m2f/>
          },
          
        ]
      },
    ]
  },

]);

export default Router

