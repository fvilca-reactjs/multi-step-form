import React, { useState, useEffect } from 'react'
import FormPersonalDetail from './FormPersonalDetail'
import FormUserDetail from './FormUserDetail'
import Confirm from './Confirm'
import Success from './Success'


const UserForm = () => {

    const [step, setStep] = useState(0)
    const [userData, setUserData] = useState({
        firstName: 'Fil', lastName: 'Vilca', email: '',
        occupation: '', city: 'Aqp', bio: ''
    })

    const nextStep = () => { setStep(step + 1) }
    const prevStep = () => { setStep(step - 1) }
    const handleChange = (evt) => {
        setUserData(
            {
                [evt.target.name]: evt.target.value
            }
        )
    }

    const array_ui = [
        <FormUserDetail step={step} nextStep={nextStep} handleChange {...userData} />,
        <FormPersonalDetail step={step} nextStep={nextStep} prevStep={prevStep} {...userData} />,
        <Confirm step={step} nextStep={nextStep} prevStep={prevStep} {...userData} />,
        <Success />
    ]

    return (
        <>
            <h1> Register Data</h1>
            {array_ui[step]}
        </>

    )
}

export default UserForm