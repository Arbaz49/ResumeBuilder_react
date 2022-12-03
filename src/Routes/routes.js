import App from "../App";
import ResumeDownloadPage from "../Pages/ResumeDownloadPage";
import ResumePage from "../Pages/ResumePage";

 const routes=[
    {
        path: "/",
        element: <App/>
      },
      {
        path: "/resumepage",
        element: <ResumePage/>,
       
      },
      {
       
        path: "/resumedownload",
        element: <ResumeDownloadPage/>,
       
       
      }
]

export default routes