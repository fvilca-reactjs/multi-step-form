
import React from 'react'

const FormUserDetail = ({ firstName, lastName, email, occupation,city, bio, nextStep, handleChange}) => {
    

    return ( 
        <>
            <h1>User Detail</h1>
            <label>firstName: <input type="text" onChange={handleChange} name="firstName" value={firstName} /> </label><br/>
            <label>LastName: <input type="text" onChange={handleChange} name="lastName" value={lastName}/></label><br/>
            <label>email: <input type="text" onChange={handleChange} name="email" value={email}/> </label><br></br>
            <button onClick={nextStep} className="with-border-green" >Continue</button>
        </>
    )
}

export default FormUserDetail