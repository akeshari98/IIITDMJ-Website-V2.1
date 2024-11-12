import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// redux store
import { Provider } from "react-redux";
import store from "./app/store";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import SignUpMessage from "./pages/test/SignUpMessage";

//more pages
import BoardOfGoverners from "./pages/more/administration/boardofgoverners";
import FinanceCommittee from "./pages/more/administration/financecommittee";
import GeneralAdministartion from "./pages/more/administration/generaladministration";
import OtherAdministration from "./pages/more/administration/otheradministration";
import Senate from "./pages/more/administration/senate";
import BuildingWorksCommittee from "./pages/more/administration/buildingworkscommittee";
import AdministrativeStructure from "./pages/more/administration/administrativestructure";
import BOGminutes from "./pages/more/administration/bogminutes";
import BOGagenda from "./pages/more/administration/bogagenda";
import FCminutes from "./pages/more/administration/fcminutes";
import FCagenda from "./pages/more/administration/fcagenda";
import Senateminutes from "./pages/more/administration/senateminutes";
import Senateagenda from "./pages/more/administration/senateagenda";
import Buildingminutes from "./pages/more/administration/buildingminutes";
import Buildingagenda from "./pages/more/administration/buildingagenda";
import DeanAcademics from "./pages/more/deans/deanacademics";
import DeanStudents from "./pages/more/deans/deanstudents";
import Club from "./pages/more/Club";
import Event from "./pages/more/Event";
import Gallery from "./pages/more/Gallery";
import News from "./pages/more/News";
import Saptadhara from "./pages/more/Saptadhara";
import Step from "./pages/more/Step";
import StudentCorner from "./pages/more/StudentCorner";
import ResearchStaff from "./pages/more/people/researchstaff";
import OfficeAdministration from "./pages/more/people/officeadministration";
import Staff from "./pages/more/people/staff";
import PrimaryHealthCentre from "./pages/more/facilities/primaryhealthcentre";
import ShopsInCampus from "./pages/more/facilities/shopsincampus";
import GymKhana from "./pages/more/students/gymkhana";
import Activities from "./pages/more/students/activities";
import Hostels from "./pages/more/students/hostels";
import Counselling from "./pages/more/students/counselling";
import AnnualReport from "./pages/more/Footer/annualreport";
import AnnualAccount from "./pages/more/Footer/annualaccounts";
import Accessibility from "./pages/more/Footer/accessibility";
import ContactUs from "./pages/more/Footer/contact";
import Grievance from "./pages/more/Footer/grievanceandredressalcell";
import Scholarship from "./pages/more/Footer/scholarship";
import PressReleases from "./pages/more/Footer/pressreleases";
import MapsAndDirections from "./pages/more/Footer/mapsanddirections";

//academics
import Convocation from "./pages/more/academics/convocation";
import Curriculum from "./pages/more/academics/curriculum";
import FeeStructure from "./pages/more/academics/feestructure";
import IntegratedMasters from "./pages/more/academics/integratedmasters";
import OfferedPrograms from "./pages/more/academics/offeredprograms";
import PartTimePrograms from "./pages/more/academics/parttimeprograms";
import PgPrograms from "./pages/more/academics/pgprograms";
import PhdPrograms from "./pages/more/academics/phdprograms";
import UgPrograms from "./pages/more/academics/ugprograms";
import UsefulInformation from "./pages/more/academics/usefulinformation";
import InternalCirculars from "./pages/more/academics/internalcirculars";
import ExternalCirculars from "./pages/more/academics/externalcirculars";

// student
import StudentDashboard from "./modules/student/pages/Dashboard";
import StudentHome from "./modules/student/pages/Home";
import Document from "./modules/student/pages/Document";
import Exam from "./modules/student/pages/Exam";
import Payment from "./modules/student/pages/Payment";
import Report from "./modules/student/pages/Report";

// admin
import AdminDashboard from "./modules/admin/pages/Dashboard";
import Main from "./modules/admin/pages/Main";
import Student from "./modules/admin/pages/Student";
import Faculty from "./modules/admin/pages/Faculty";
import Notice from "./modules/admin/pages/Notice";
import Feedback from "./modules/admin/pages/Feedback";
import Department from "./modules/admin/pages/Department";
import Error from "./modules/admin/pages/Error";
// import Gallery from "./modules/admin/pages/Gallery";

// errors
import NotFound from "./errors/Error_404";
import NetworkIssue from "./errors/NetworkIssue";

//  Courses
import Bca from "./pages/Bca";
import Business from "./pages/Business";
import Bcom from "./pages/Bcom";
import Verification from "./modules/admin/components/Verification";
import { isCompositeComponent } from "react-dom/test-utils";

//Footer
import RTI from "./pages/more/Footer/RTI";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: loader,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/bca",
        element: <Bca />,
      },
      {
        path: "/courses/bba",
        element: <Business />,
      },
      {
        path: "/courses/bcom",
        element: <Bcom />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot",
        element: <Forgot />,
      },

      // more pages
      {
        path: "/club",
        element: <Club />,
      },
      {
        path: "/boardofgoverners",
        element: <BoardOfGoverners />,
      },
      {
        path: "/financecommittee",
        element: <FinanceCommittee />,
      },
      {
        path: "/generaladministration",
        element: <GeneralAdministartion />,
      },
      {
        path: "/otheradministration",
        element: <OtherAdministration />,
      },
      {
        path: "/senate",
        element: <Senate />,
      },
      {
        path: "/buildingworkscommittee",
        element: <BuildingWorksCommittee />,
      },
      {
        path: "/administrativestructure",
        element: <AdministrativeStructure />,
      },
      {
        path: "/bogminutes",
        element: <BOGminutes />,
      },
      {
        path: "/bogagenda",
        element: <BOGagenda />,
      },
      {
        path: "/fcminutes",
        element: <FCminutes />,
      },
      {
        path: "/fcagenda",
        element: <FCagenda />,
      },
      {
        path: "/senateminutes",
        element: <Senateminutes />,
      },
      {
        path: "/senateagenda",
        element: <Senateagenda />,
      },
      {
        path: "/buildingminutes",
        element: <Buildingminutes />,
      },
      {
        path: "/buildingagenda",
        element: <Buildingagenda />,
      },
      {
        path: "/deanacademics",
        element: <DeanAcademics />,
      },
      {
        path: "/deanstudents",
        element: <DeanStudents />,
      },
      {
        path: "/researchstaff",
        element: <ResearchStaff />,
      },
      {
        path: "/officeadministration",
        element: <OfficeAdministration />,
      },
      {
        path: "/primaryhealthcentre",
        element: <PrimaryHealthCentre />,
      },
      {
        path: "/shopsincampus",
        element: <ShopsInCampus />,
      },
      {
        path: "/gymkhana",
        element: <GymKhana />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/hostels",
        element: <Hostels />,
      },
      {
        path: "/counselling",
        element: <Counselling />,
      },
      {
        path: "/annualreport",
        element: <AnnualReport />,
      },
      {
        path: "/annualaccount",
        element: <AnnualAccount />,
      },
      {
        path: "/accessibility",
        element: <Accessibility />,
      },
      {
        path: "/grievanceandredressalcell",
        element: <Grievance />,
      },
      {
        path: "/scholarship",
        element: <Scholarship />,
      },
      {
        path: "/pressreleases",
        element: <PressReleases />,
      },
      {
        path: "/mapsanddirections",
        element: <MapsAndDirections />,
      },
      {
        path: "/internalcirculars",
        element: <InternalCirculars />,
      },
      {
        path: "/externalcirculars",
        element: <ExternalCirculars />,
      },
      {
        path: "/staff",
        element: <Staff />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/saptadhara",
        element: <Saptadhara />,
      },
      {
        path: "/step",
        element: <Step />,
      },
      {
        path: "/student-corner",
        element: <StudentCorner />,
      },
      {
        path: "/rti",
        element: <RTI />,
      },
      {
        path: "/gymkhana",
        element: <GymKhana />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/hostels",
        element: <Hostels />,
      },
      {
        path: "/counselling",
        element: <Counselling />,
      },
      //academics
      {
        path: "/convocation",
        element: <Convocation />,
      },
      {
        path: "/curriculum",
        element: <Curriculum />,
      },
      {
        path: "/feestructure",
        element: <FeeStructure />,
      },
      {
        path: "/integratedmasters",
        element: <IntegratedMasters />,
      },
      {
        path: "/offeredprograms",
        element: <OfferedPrograms />,
      },
      {
        path: "/parttimeprograms",
        element: <PartTimePrograms />,
      },
      {
        path: "/pgprograms",
        element: <PgPrograms />,
      },
      {
        path: "/phdprograms",
        element: <PhdPrograms />,
      },
      {
        path: "/ugprograms",
        element: <UgPrograms />,
      },
      {
        path: "/usefulinformation",
        element: <UsefulInformation />,
      },
      {
        path: "/internalcirculars",
        element: <InternalCirculars />,
      },
      {
        path: "/externalcirculars",
        element: <ExternalCirculars />,
      },
    ],
  },
  {
    path: "/signupmessage",
    element: <SignUpMessage />,
  },
  {
    path: "/student",
    element: <StudentDashboard />,
    children: [
      {
        path: "",
        element: <StudentHome />,
      },
      {
        path: "documents",
        element: <Document />,
      },
      {
        path: "reports",
        element: <Report />,
      },
      {
        path: "exams",
        element: <Exam />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        index: "admin",
        element: <Main />,
      },
      {
        path: "student",
        element: <Student />,
      },
      {
        path: "student/verify",
        element: <Verification />,
      },
      {
        path: "faculty",
        element: <Faculty />,
        // loader: facultyLoader,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "feedback",
        element: <Feedback />,
        // loader: loadData,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "error",
        element: <Error />,
      },
    ],
  },
  {
    path: "/network",
    element: <NetworkIssue />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
