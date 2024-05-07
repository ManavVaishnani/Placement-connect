import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from"./login";
import ProfileForm from "./personalProfile";
import Admin_ProfileForm from "./Admin/AddSection";
import Remarks from "./Admin/remarksForStudents";
import FormComponent from "./Admin/addPlacementInfo";
import MyForm from "./Admin/addAnn";
import Material from "./Admin/addMaterial";
import Dashboard from "./Admin/DB";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/career' element={<ProfileForm />} />
        <Route path='/add' element={<Admin_ProfileForm/>}/>
        <Route path='/remarks' element={<Remarks/>}/>
        <Route path='/addplacement' element={<FormComponent/>}/>
        <Route path='/addAn' element={<MyForm/>}/>
        <Route path='/addMa' element={<Material/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
