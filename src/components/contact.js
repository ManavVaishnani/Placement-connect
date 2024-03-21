// import React from "react";
import './contact.css'
import React, { useState , useEffect} from "react";
export const Contact = () =>{
        // State to manage input values
    const [contactData, setContactData] = useState({
        id: localStorage.getItem('student_id'),
        charusatmail: "",
        permail: "",
        cno: "",
        pno: "",
        padd: "",
        pcity: "",
        pin: ""
    });
    // Function to fetch personal data from the backend
  const fetchPersonalData = () => {
    const id =localStorage.getItem('student_id');
    fetch('http://localhost:5000/api/get_contact_info?id='+id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          document.getElementById('charusatmail').value = data['charusat_email'];
          document.getElementById('permail').value = data['personal_email'];
          document.getElementById('cno').value = data['contact_no'];
          document.getElementById('pno').value = data['parent_no'];
          document.getElementById('padd').value = data['address'];
          document.getElementById('pcity').value = data['city'];
          document.getElementById('pin').value = data['pincode'];
          setContactData({
            ...contactData,
            ['charusatmail']: data['charusat_email'],
            ['permail']:data['personal_email'],
            ['cno']:data['contact_no'],
            ['pno']:data['parent_no'],
            ['padd']:data['address'],
            ['pcity']:data['city'],
            ['pin']:data['pincode']
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
      
    // Effect to fetch personal data when the component mounts
    useEffect(() => {
      fetchPersonalData();
    }, []);
    const handleSave = () => {
        // Send personalData to backend here
        console.log("Sending data to backend:", contactData);
        // You can use fetch or any other method to send data to the backend
         // Send personalData to backend
         fetch('http://localhost:5000/api/insert_contact_info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert('Data saved successfully');
          // You can do something after successful response from backend
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      };
    // console.log(contactData);
    // Event handler to update input values
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({
        ...contactData,
        [name]: value
    });
    };
    return(
        <div className="contact">
            <div>
                <label htmlFor="charusatmail">Charusat Mail: </label>
                <input type="mail" id="charusatmail" name="charusatmail" placeholder="21CS0XX@charusat.edu.in" 
                onChange={handleChange}
                required/> <br />

                <label htmlFor="permail">Personal Mail: </label>
                <input type="mail" id="permail" name="permail"  placeholder="xyz@gmail.com" 
                onChange={handleChange}
                required/><br />

                <label htmlFor="cno">Contact No. : </label>
                <input type="tel" id="cno" name="cno" placeholder="+91 xxxxxxxxx" 
                onChange={handleChange}
                required/><br/>

                <label htmlFor="pno">Parent No. : </label>
                <input type="tel" id="pno" name="pno" placeholder="+91 xxxxxxxxx" 
                onChange={handleChange}
                required/><br/>

                <label htmlFor="padd">Permenent Address: </label>
                <input type="text" name="padd" id="padd" placeholder=""
                onChange={handleChange}
                required/> <br />

                <label htmlFor="pcity">Permenent City: </label>
                <input type="text" name="pcity" id="pcity" placeholder=""
                onChange={handleChange}
                required/> <br />

                <label htmlFor="pin">PIN Code: </label>
                <input type="text" name="pin" id="pin" placeholder="362001"
                onChange={handleChange}
                required/> <br />
                <div className="next">
                    <button className="save" onClick={handleSave}>save</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;