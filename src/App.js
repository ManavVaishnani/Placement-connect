import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from"./login";
import ProfileForm from "./personalProfile";
import Admin_ProfileForm from "./Admin/AddSection";
// import Remarks from "./remarksForStudents";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/career' element={<ProfileForm />} />
        <Route path='/add' element={<Admin_ProfileForm/>}/>
        {/* <Route path='/remarks' element={<Remarks/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
