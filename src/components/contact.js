import React from "react";
import './contact.css'
export const Contact = () =>{
    return(
        <div className="contact">
            <div>
                <label htmlFor="charusatmail">Charusat Mail: </label>
                <input type="mail" id="charusatmail" name="charusatmail" placeholder="21CS0XX@charusat.edu.in" required/> <br />
                <label htmlFor="permail">Personal Mail: </label>
                <input type="mail" id="permail" name="permail"  placeholder="xyz@gmail.com" required/><br />
                <label htmlFor="cno">Contact No. : </label>
                <input type="tel" id="cno" name="cno" placeholder="+91 xxxxxxxxx" required/><br/>
                <label htmlFor="pno">Parent No. : </label>
                <input type="tel" id="pno" name="pno" placeholder="+91 xxxxxxxxx" required/><br/>
                <label htmlFor="padd">Permenent Address: </label>
                <input type="text" name="padd" id="padd" placeholder=""required/> <br />
                <label htmlFor="pcity">Permenent City: </label>
                <input type="text" name="pcity" id="pcity" placeholder="" required/> <br />
                <label htmlFor="pin">PIN Code: </label>
                <input type="text" name="pin" id="pin" placeholder="362001" required/> <br />
            </div>
            <div className="next">
                <button className="save">save</button>
            </div>
        </div>
    );
}

export default Contact;