import React from 'react'

const  Confirm = ({ firstName, lastName, email, occupation,city, bio,nextStep, prevStep }) => {
    return (
        <>
            <h1>Confirm</h1>
            <label>Firts Name: </label><span>{firstName}</span><br/>
            <label>Last Name: </label><span>{lastName}</span><br/>
            <label>email: </label><span>{email}</span><br/>
            <label>occupation: </label><span>{occupation}</span><br/>
            <label>City: </label><span>{city}</span><br/>
            <label>Bio: </label><span>{bio}</span><br/>

            <button onClick={nextStep}>Continue</button>
            <button onClick={prevStep} >Back</button>
        </>
    )
}

export default Confirm
