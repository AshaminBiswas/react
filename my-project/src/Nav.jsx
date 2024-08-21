import React from 'react'
import { useEffect } from 'react'




function Nav({ color }) {
    useEffect(() => {
        alert("color was changed")
    }, [color])

    return (
        <div>
            <p> i am nav bar my color is {color} </p>
        </div>
    )
}

export default Nav
