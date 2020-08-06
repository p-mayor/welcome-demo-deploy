import React from 'react'
import Clock from '../clock/Clock'

function Welcome(props) {
    return (
        <div className="Welcome">
            Welcome, {props.name}
            <Clock />
        </div>
    );
}

export default Welcome;