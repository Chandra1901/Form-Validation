import React, { useState } from 'react'
import swal from 'sweetalert'
import './Form.css'
import Headers from './Headers'

const Form = () =>  {

    const [tsc, setTsc] = useState('');
    const [control, setControl] = useState('');

    const handletcsChange = (e) => {
        setTsc(e.target.value);
    }

    const handleControlChange =(e) => {
        setControl(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        swal({
            title: "Success",
            text: "Form is Submitted Successfully",
            icon: "success",
            button: "Ok"
          });
    }
  return (
    <div className='Container'>
        <Headers />
        <form>
            <div>
                <label>TSC Number</label>
                <input 
                   type='text'
                   placeholder='Enter TSC Number'
                   value={tsc}
                   onChange={handletcsChange}
                />
            </div>
            <br />
            <div>
                <label>Control</label>
                <input 
                   type="text"
                   placeholder='Enter Control'
                   value={control}
                   onChange={handleControlChange}
                />
            </div>
            <br />
             <div>
                 <label>Criteria Series</label>
                 <select>
                     <option value="series">Select Criteria series</option>
                     <option value="react">React</option>
                     <option value="angular">Angular</option>
                     <option value="vue">Vue</option>
                 </select>
             </div>
             <br />
             <div>
                 <label>Category Number</label>
                 <select>
                     <option value="number">Select Category Number</option>
                     <option value="234">234</option>
                     <option value="456">456</option>
                     <option value="789">789</option>
                 </select>
             </div>
             <br /><br />
             <div className='Button'>
               <button className='Btn1'>Cancel</button>
               <button type='submit' onClick={handleSubmit} className='Btn2'>✔ Submit</button>
             </div>
        </form>
    </div>
  )
}

export default Form