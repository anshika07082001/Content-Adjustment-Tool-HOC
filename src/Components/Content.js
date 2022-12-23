import React from 'react'

const Content = (props) => {
    return (
    <div className={`content ${props.content} `}>
        <h1 className={`${props.Title} ${props.h1}`} style={props.fontStyleInc}>Title 1</h1>
        <h3 className={` ${props.Title} ${props.h1}`} style={props.scalingStyleInc}>H3 Font</h3>
        <a href='k' className={` ${props.Link} ${props.h1}`}>W3 Schools</a>
        <p className={props.h1} style={{...props.spacingStyleInc,...props.heightStyleInc}}>lorem hsdsd jsdhs kxcjc jhfdf kjhdf vkvcxv fkdfjdsf vhdhdf vjvcxv kdfdsf kjfdfhdf sdkfdf We've cooked up some examples of how you could use the “circle-half-stroke” icon in your projects, whether they're apps, interfaces, or print designs.</p>
        <p className={props.h1} style={{...props.spacingStyleInc,...props.heightStyleInc}}>lorem We've cooked up some examples of how you could use the “circle-half-stroke” icon in your projects, whether they're apps, interfaces, or print designs.</p>
        <a href='m' className={` ${props.Link} ${props.h1}`}>W3 Schools</a>
    </div>
    )
}

export default Content