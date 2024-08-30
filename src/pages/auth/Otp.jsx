import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const Otp = () => {

    const [otp, setOtp] = useState('');
    
    return (
        <div className='main-container padding'>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
            />

            <button className='bg-red-400 text-white w-50 h-50'>submit</button>
        </div>
    )
}

export default Otp