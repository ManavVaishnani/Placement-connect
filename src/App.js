import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from"./login";
import ProfileForm from "./Student/personalProfile";
import Remarks from "./Admin/remarksForStudents";
import FormComponent from "./Admin/AdminComponents/addPlacementInfo";
import MyForm from "./Admin/AdminComponents/addAnn";
import Material from "./Admin/AdminComponents/addMaterial";
import Dashboard from "./Admin/DB";
import AdminDashboard from "./Admin/AdminDB";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/career' element={<ProfileForm />} />
        <Route path='/remarks' element={<Remarks/>}/>
        <Route path='/addplacement' element={<FormComponent/>}/>
        <Route path='/addAn' element={<MyForm/>}/>
        <Route path='/addMa' element={<Material/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admin_dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
