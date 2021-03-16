import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className='header-wraper'>
            <div className="main-info">
                <h1>The sucess is behind hard workings</h1>
                <Typed
                    className='typed-text'
                    strings={['web Design', 'web Development', 'React', 'Machin learning']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
