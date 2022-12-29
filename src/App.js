import "./App.css";
import { authRoute } from "./routing/allRoutes";
import RoutePathComponent from "./shared/Route/RoutePathComponent";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Setting from "./component/SettingComponent/SettingComponent";
import QuestionChoice from "./component/QuestionChoiceComponent/QuestionChoice";
import Dashboard from "./pages/dashboard/Dashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import SideNavBar from "./component/SideNavBar/SideNavBar";
import DashboardComponent from "./component/DashboardComponent/DashboardComponent";
import { dashboardcardData } from "./utils/fakedata/fakedata";
import { sideNavData } from "./utils/sideNavData/sideNavData";
import TeacherComponent from "./component/TeacherComponent/TeacherComponent";
import TopicComponent from "./component/TopicComponent/TopicComponent";
import QuestionAnswer from "./component/QuestionAnswer/QuestionAnswer";
import ResultComponent from "./component/ResultComponent/ResultComponent";
function App() {
  return (
    <div className="App">
      {/* {authRoute.map((each, index) => (
        <RoutePathComponent
          path={each?.path}
          component={each?.component}
          id={index}
        />
      ))} */}
      <Routes>
        <Route path="/" element={<Login />} />
       
       
      </Routes>
      <SideNavBar sideNavData={sideNavData} role="ADMIN">
        <Routes>
        <Route path="/dashboard" element={<DashboardComponent data={dashboardcardData}/>} />
        <Route path="/teacher" element={<TeacherComponent/>} />
        <Route path="/question-choice" element={<QuestionChoice/>} />
        <Route path="/topic" element={<TopicComponent/>}/>
        <Route path="/question-answer" element={<QuestionAnswer/>}/>
        <Route path="/result" element={<ResultComponent/>}/>
        <Route path="/setting" element={<Setting/>}/>
        </Routes>
      
      </SideNavBar>
     
    </div>
  );
}

export default App;
