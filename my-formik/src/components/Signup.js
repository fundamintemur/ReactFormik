import React from 'react'
import { useFormik } from 'formik';
import validations from './validations';

function Signup() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      // firstName:"Mehmet",
      // lastName:"Seven",
      email: "",
      password: "",
      passwordConfirm: ""
      // gender:"female",
      // hobies:[],
      // country:"Turkey",
    },
    onSubmit: (values) => {

      console.log(values);
    },
    validationSchema: validations
  });
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="firstName">First Name</label>
    <input id="firstName" name="firstName" value={values.firstName} placeholder="Jane" onChange={handleChange}/>
    <br/>
    <br/>
     <label htmlFor="lastName">Last Name</label>
     <input id="lastName" name="lastName" value={values.lastName} placeholder="Doe" onChange={handleChange}/>
     <br/>
     <br/> */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
        />
        {errors.email && touched.email && <div className="error">{errors.email}</div>}

        <br />
        <br />
        {/* <span>Male</span>
        <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender==="male"}/>
        <span>Female</span>
         <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender==="female"} />
         <button type="submit">Submit</button>
         <br/>
         <br/>
         <div>
 Football
 <input type="checkbox" name='hobies' value="football" onChange={handleChange} />
</div>

<div>
 Cinema
 <input type="checkbox" name='hobies' value="cinema" onChange={handleChange} />
</div>

<div>
 Photography
 <input type="checkbox" name='hobies' value="photography" onChange={handleChange} />
</div>
<br/>
<br/>
<select name="country" onChange={handleChange} >
 <option value="tr">Turkiye</option>
 <option value="en">England</option>
 <option value="usa">USA</option>
</select>
<br/> */}

        <label htmlFor="password">Şifre</label>
        <input
          id="password"
          name="password"
          type="password" value={values.password} onChange={handleChange} onBlur={handleBlur}
        />
        {errors.password && touched.password && <div className="error">{errors.password}</div>}
        <br />
        <br />
        <label htmlFor="passwordConfirm">Şifre Tekrar</label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password" value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />

        {JSON.stringify(values)}
      </form>
    </div>
  )
}

export default Signup
