import React from "react";

const LogButton = (WrappedComponent, info)=>{
    const clickHandler=(e)=>{
        console.log('Component Log Button')
    }

    return(props)=>{
        return(
            <div>
                <button onClick={clickHandler}>Log...</button>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}
export default LogButton;