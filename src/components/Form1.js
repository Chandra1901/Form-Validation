import React from 'react'
import { useFormik  } from 'formik'
import swal from 'sweetalert'
import './Form.css'
import * as Yup from 'yup'
import Headers from './Headers'

const onSubmit = values => {
    swal({
        title: "Success",
        text: "Form is Submitted Successfully",
        icon: "success",
        button: "Ok"
      });
    console.log('Form data', values);
}

const validationSchema  = Yup.object({
    tscNum: Yup.string().required('tscNum is required'),
    control: Yup.string().required('Control is required')
})

const initialValues = {
    tscNum:'',
    control:'',
}


const Form = () =>  {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema

    })

    
       

  return (
    <div className='Container'>
        <Headers />
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='num'>TSC Number</label>
                <input 
                   type='text'
                   id='num'
                   name='num'
                   placeholder='Enter TSC Number'
                   value={formik.values.tscNum}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                />
                {
                    formik.touched.tscNum && formik.errors.tscNum ? (
                        <div className='error'>
                            {formik.errors.tscNum}
                        </div>
                    ):
                    null
                }
            </div>
            <br />
            <div>
                <label htmlFor='control'>Control</label>
                <input 
                   type='text'
                   id='control'
                   name='control'
                   placeholder='Enter Control'
                   value={formik.values.control}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                />
                 {
                    formik.touched.control && formik.errors.control ? (
                        <div className='error'>
                            {formik.errors.control}
                        </div>
                    ):
                    null
                }
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
               <button 
                  className='Btn1'>
                    Cancel
                </button>
               <button 
                   type='submit' 
                   className='Btn2'>
                    ✔ Submit
                </button>
             </div>
        </form>
    </div>
  )
}

export default Form