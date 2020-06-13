import React from 'react'

const FormPersonalDetail = ({ occupation, city, bio, nextStep, prevStep, handleChange }) => {
    console.log(city)
    //console.log(userData)
    return (
        <>
            <h1>Personal Detail</h1>
            <label>occupation: <input type="text" onChange={handleChange} name="occupation" value={occupation} /> </label><br />
            <label>city: <input type="text" onChange={handleChange} name="city" value={city} /></label><br />
            <label>bio: <input type="text" onChange={handleChange} name="bio" value={bio} /> </label><br></br>
            <container-button>
                <button onClick={nextStep} className="with-border-green">Continue</button>
                <button onClick={prevStep} className="with-border-red">Back</button>
            </container-button>
        </>
    )
}


export default FormPersonalDetail
