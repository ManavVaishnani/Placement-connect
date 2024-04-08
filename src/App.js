import React from "react";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from"./login";
import ProfileForm from "./personalProfile";
import Remarks from "./Admin/remarksForStudents";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/career' element={<ProfileForm />} />
        <Route path='/remarks' element={<Remarks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
