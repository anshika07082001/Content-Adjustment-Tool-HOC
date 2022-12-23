import React from 'react';
import HeightComponent from '../ToolComponents/HeightComponent';
import HighlightComponent from '../ToolComponents/HighlightComponent'
import ScalingComponent from '../ToolComponents/ScalingComponent'
import SizeComponent from '../ToolComponents/SizeComponent'
import SpacingComponent from '../ToolComponents/SpacingComponent'
import Content from './Content'
import HOC from './HOC';

const Main = (props) => {
    
    let Hoc1=HOC(ScalingComponent,props.scalingInc,props.scalingDec,<button className='leftBtn' onClick={props.readable}><i class="fa fa-font"></i><br/>Readable Font</button>)
    let Hoc2=HOC(HighlightComponent,props.title,props.link,<button className='leftBtn' onClick={props.magnify}><i class="fa fa-search"></i><br/>Text Magnifier</button>)
    let Hoc3=HOC(SizeComponent,props.fontInc,props.fontDec,<button className='leftBtn' onClick={props.center}><i class='fas fa-align-center'></i><br/>Align Center</button>)
    let Hoc4=HOC(HeightComponent,props.heightInc,props.heightDec,<button className='leftBtn' onClick={props.left}><i class="fa fa-align-left"></i><br/>Align Left</button>)
    let Hoc5=HOC(SpacingComponent,props.spacingInc,props.spacingDec,<button className='leftBtn' onClick={props.right}><i class='fas fa-align-right'></i><br/>Align Right</button>)
    
    return (
    <div className='main'>
        <h2>Content Adjustment Tools</h2>
        <div className='body'>
            <div className='mainLeft'>
                <div className='toolDiv'><Hoc1/></div>
                <div className='toolDiv'><Hoc2/></div>
                <div className='toolDiv'><Hoc3/></div>
                <div className='toolDiv'><Hoc4/></div>
                <div className='toolDiv'><Hoc5/></div>
            </div>
            <Content scalingStyleInc={props.scalingStyleInc} fontStyleInc={props.fontStyleInc} heightStyleInc={props.heightStyleInc} spacingStyleInc={props.spacingStyleInc} content={props.content} h1={props.h1} Title={props.Title} Link={props.Link}/>
        </div>
    </div>
  )
}

export default Main