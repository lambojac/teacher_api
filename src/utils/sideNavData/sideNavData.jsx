import TeacherImage from "../../Assest/Navigation/2-teacher.png";
import QuestionsImage from "../../Assest/Navigation/5-questionnaire.png";
import resultImage from "../../Assest/Navigation/3-resukt.png";

import settingImage from "../../Assest/Navigation/4-settings.png";
import arrowRightImage from "../../Assest/Navigation/arrow_right.png";
import HomeIcon from '@mui/icons-material/Home';

import dashboardImage from "../../Assest/Navigation/1-dashboard.png";

export const sideNavData = [
  {
    label: "Dashboard",
    image: dashboardImage,
    icon:<HomeIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "dashboard",
  },
  {
    label: "Teachers",
    image: TeacherImage,
    icon:<HomeIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "teacher",
  },
  {
    label: "Questions",
    image: QuestionsImage,
    icon:<HomeIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "question-choice",
  },
  {
    label: "Topics",
    image: arrowRightImage,
    icon:<HomeIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "topic",
  },
  {
    label: "Questionnaires",
    image: arrowRightImage,
    icon:<HomeIcon sx={{fontSize:"2em",color:"white"}}/>,
  
    values: "question-answer",
  },
  {
    label: "Results",
    image: resultImage,
    icon:<HomeIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "result",
  },
  {
    label: "Setting",
    image: settingImage,
    width: "2em",
    height: "2em",
    values: "setting",
  },
];
export const sideNavDatas = [
  {
    label: "Dashboard",
    image: dashboardImage,
    width: "2em",
    height: "2em",
    values: "dashboard-teacher",
  },

  {
    label: "Topics",
    image: arrowRightImage,
    width: "2em",
    height: "2em",
    values: "topic-teacher",
  },
  {
    label: "Questionnaires",
    image: QuestionsImage,
    width: "1em",
    heights: "2em",
    values: "question-teacher",
  },

  {
    label: "Results",
    image: resultImage,
    width: "2.5em",
    height: "2.5em",
    values: "result-teacher",
  },
  {
    label: "Setting",
    image: settingImage,
    icon:<HomeIcon sx={{fontSize:"2em",color:"white"}}/>,
    values: "setting-teacher",
  },
];
