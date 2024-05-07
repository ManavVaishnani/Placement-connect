import React, { useState, useEffect } from "react";

export const Contact = () => {
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

  const fetchPersonalData = () => {
    const id = localStorage.getItem('student_id');
    fetch('http://localhost:5000/api/get_contact_info?id=' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setContactData({
          ...contactData,
          charusatmail: data['charusat_email'],
          permail: data['personal_email'],
          cno: data['contact_no'],
          pno: data['parent_no'],
          padd: data['address'],
          pcity: data['city'],
          pin: data['pincode']
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {
    fetchPersonalData();
  }, []);

  const handleSave = () => {
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value
    });
  };

  return (
    <div className="contact mt-1 ml-10 flex">
      <div className="flex flex-col">
        <div className="flex mb-4">
          <label htmlFor="charusatmail" className="block text-lg mr-4">Charusat Mail:</label>
          <input type="mail" id="charusatmail" name="charusatmail" placeholder="21CS0XX@charusat.edu.in"
            onChange={handleChange} value={contactData.charusatmail} className="border-b border-purple-500 text-lg px-2 py-1" required />
        </div>

        <div className="flex mb-4">
          <label htmlFor="permail" className="block text-lg mr-4">Personal Mail:</label>
          <input type="mail" id="permail" name="permail" placeholder="xyz@gmail.com"
            onChange={handleChange} value={contactData.permail} className="border-b border-purple-500 text-lg px-2 py-1" required />
        </div>

        <div className="flex mb-4">
          <label htmlFor="cno" className="block text-lg mr-4">Contact No. :</label>
          <input type="tel" id="cno" name="cno" placeholder="+91 xxxxxxxxx"
            onChange={handleChange} value={contactData.cno} className="border-b border-purple-500 text-lg px-2 py-1" required />
        </div>

        <div className="flex mb-4">
          <label htmlFor="pno" className="block text-lg mr-4">Parent No. :</label>
          <input type="tel" id="pno" name="pno" placeholder="+91 xxxxxxxxx"
            onChange={handleChange} value={contactData.pno} className="border-b border-purple-500 text-lg px-2 py-1" required />
        </div>

        <div className="flex mb-4">
          <label htmlFor="padd" className="block text-lg mr-4">Permanent Address:</label>
          <input type="text" name="padd" id="padd" placeholder=""
            onChange={handleChange} value={contactData.padd} className="border-b border-purple-500 text-lg px-2 py-1" required />
        </div>

        <div className="flex mb-4">
          <label htmlFor="pcity" className="block text-lg mr-4">Permanent City:</label>
          <input type="text" name="pcity" id="pcity" placeholder=""
            onChange={handleChange} value={contactData.pcity} className="border-b border-purple-500 text-lg px-2 py-1" required />
            
        </div>

        <div className="flex mb-4">
          <label htmlFor="pin" className="block text-lg mr-4">PIN Code:</label>
          <input type="text" name="pin" id="pin" placeholder="362001"
            onChange={handleChange} value={contactData.pin} className="border-b border-purple-500 text-lg px-2 py-1" required />
        </div>

         <div className="flex mb-4">
        <button className="contactsave bg-purple-500 text-white rounded-lg px-8 py-3 mr-1" onClick={handleSave}>Save</button>
      </div>
    </div>
    </div>
  );
}

export default Contact;
