import React from 'react'

const HOC = (Component,para1,para2,data) => {
    const Myfunction= ()=>{
        return (
        <>
        <Component parameter1={para1} parameter2={para2}/>
        {data}
        </>
        )
    }
    return Myfunction
}

export default HOC