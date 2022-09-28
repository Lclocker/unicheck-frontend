import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Menu from "../pages/Menu";
import SchoolClass from "../pages/SchoolClass";
import Subjects from "../pages/Subjects";
import SchoolClassDetail from "../pages/SchoolClassDetail";
import Students from "../pages/Students";
import Professors from "../pages/Professors/professors";


const Private = ({ Item }) => {
  const {signed} = useAuth();
  return signed > 0 ? <Item /> : <Signin />;
};

const  RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/schoolClass" element={<SchoolClass />}/>
          <Route path="/subjects" element={<Subjects />}/>
          <Route path="/schoolClassDetails/:id" element={<SchoolClassDetail />}/>
          <Route path="/students" element={<Students />}/>
          <Route path="/professors" element={<Professors />}/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;