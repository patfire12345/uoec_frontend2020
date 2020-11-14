import React from 'react'

function SignUp() {

    const signin = async () => {

    
        const response = await fetch("https://uoec-project-api.herokuapp.com/api/auth/google",
            {
                method: "GET", 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        );

        if(!response.ok) {
            throw new Error(response.messages)
        }

    }
    return (
        <div>
           {signin} 
        </div>
    )
}

export default SignUp;
