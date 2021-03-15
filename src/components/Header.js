import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className='header-wraper'>
            <div className="main-info">
                <h1>the sucess is behind hard workings</h1>
                <Typed
                    className='typed-text'
                    strings={['web Design', 'web Development', 'React', 'Machin learning']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="/" className='btn-main-offer'>Contact Me</a>
            </div>
        </div>
    )
}

export default Header
