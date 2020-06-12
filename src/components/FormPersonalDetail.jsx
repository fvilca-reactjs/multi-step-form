import React from 'react'

const FormPersonalDetail = ({ step,occupation,city, bio, nextStep, prevStep}) => {
    console.log(city)
    //console.log(userData)
    return ( 
        <>
            <h1>Personal Detail</h1>
            <label>occupation: <input type="text" name={occupation} value={occupation}/> </label><br/>
            <label>city: <input type="text" name={city} value={city}/></label><br/>
            <label>bio: <input type="textarea" name={bio} value={bio}/> </label><br></br>
            <button onClick={nextStep}>Continue</button>
            <button onClick={prevStep} >Back</button>
        </>
    )
}


export default  FormPersonalDetail
