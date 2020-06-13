import React from 'react'

const Confirm = ({ firstName, lastName, email, occupation, city, bio, nextStep, prevStep }) => {
    return (
        <>
            <h1>Confirm</h1>
            <label>Firts Name: <span>{firstName}</span></label><br />
            <label>Last Name: <span>{lastName}</span></label><br />
            <label>email: <span>{email}</span></label><br />
            <label>occupation: <span>{occupation}</span></label><br />
            <label>City: <span>{city}</span></label><br />
            <label>Bio: <span>{bio}</span></label><br />
            <container-button>
                <button onClick={nextStep} className="with-border-green">Continue</button>
                <button onClick={prevStep} className="with-border-red">Back</button>
            </container-button>
            
        </>
    )
}

export default Confirm
