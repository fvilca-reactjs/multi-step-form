
import React from 'react'

const FormUserDetail = ({ step, firstName, lastName, email, occupation,city, bio, nextStep, handleChange}) => {
        
    return ( 
        <>
            <h1>User Detail</h1>
            <label>firstName: <input type="text" onChange={()=>handleChange} name={firstName} value={firstName}/> </label><br/>
            <label>LastName: <input type="text" name={lastName} value={lastName}/></label><br/>
            <label>email: <input type="text" name={email} value={email}/> </label><br></br>
            <button onClick={nextStep}>Continue</button>
        </>
    )
}

export default FormUserDetail