import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import swal from 'sweetalert'
import './Form.css'
import TextError from './TextError'
import Select from './Select'
import * as Yup from 'yup'
import Headers from './Headers'


const FormBox = (props) =>  {

    const { control, ...rest} = props;

    const dropdownOptions1 = [
        { key: 'Select Criteria Series', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' },

    ]

    const dropdownOptions2 = [
        { key: 'Select Category Series', value: '' },
        { key: 'Category 1', value: 'category1' },
        { key: 'Category 2', value: 'category2' },
        { key: 'Category 3', value: 'category3' },

    ]

    const initialValues = {
        tscNum:'',
        control:'',
        selectOption1: '',
        selectOption2:''
    }

    const validationSchema  = Yup.object({
        tscNum: Yup.string().required('tscNum is required'),
        control: Yup.string().required('Control is required'),
        selectOption1: Yup.string().required('Required'),
        selectOption2: Yup.string().required('Required')
    })

    const onSubmit = values => {
        swal({
            title: "Success",
            text: "Form is Submitted Successfully",
            icon: "success",
            button: "Ok"
          });
        console.log('Form data', values);
    }
   

  return (
    <Formik 
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={onSubmit}
       >
        <div className='Container'>
            <Headers />
            <Form>
                <div>
                    <label htmlFor='num'>TSC Number</label>
                    <Field
                        type='text'
                        id='num'
                        name='tscNum'
                        placeholder='Enter TSC Number'
                    />
                       <ErrorMessage 
                          name='tscNum' 
                          component={TextError}   
                        />
                </div>
                <br />
                <div>
                    <label htmlFor='control'>Control</label>
                    <Field 
                        type='text'
                        id='control'
                        name='control'
                        placeholder='Enter Control'
                    />
                       <ErrorMessage 
                          name='control' 
                          component={TextError} 
                        />
                </div>
                <br />
                <div>
                    <Select 
                       {...rest}
                       control='select'
                       label='Criteria Series'
                       name="selectOption1"
                       options={dropdownOptions1}
                    />
                </div>
                <br />
                <div>
                   <Select 
                       {...rest}
                       control='select'
                       label='Category Series'
                       name="selectOption2"
                       options={dropdownOptions2}
                    />
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
            </Form>
        </div>
    </Formik>
  )
}

export default FormBox