import { useState } from 'react';
import './App.css';
import Main from './Components/Main';

function App() {

  var[content,setContent]=useState('')
  var[Title,setTitle]=useState('')
  var[Link,setLink]=useState('')
  var[h1,setH1]=useState('')
  var[space,setSpaceInc]=useState(0)
  var[height,setHeight]=useState(15)
  var[font,setFont]=useState(30)
  var[scaling,setScaling]=useState(1)

  // left Alignment Function
  const left=()=>{
    setContent('left')
  }
  //  right Alignment Function
  const right=()=>{
    setContent('right')
  }
  //  center Alignment Function
  const center=()=>{
    setContent('center')
  }
  // Magnify Text Function
  const magnify=()=>{
    setContent('magnify')
  }
  // Highlight title Function
  const title=()=>{
    setTitle('markTitle')
  }
  // highlight link function
  const link=()=>{
    setLink('markLinks')
  }
  // readable font function
  const readable=()=>{
    setH1('h1 h2 h3 p a')
  }
  // spacing Increment Function
  var spacingStyleInc={letterSpacing: space+'px'};
  const spacingInc=()=>{
    setSpaceInc(space+1)
  }
  // spacing Decrement Function
  const spacingDec=()=>{
    setSpaceInc(space-1)
  }
  // lineHeight Increment Function
  var heightStyleInc={lineHeight: height+'px'}
  const heightInc=()=>{
    setHeight(height+1)
  }
  // lineHeight Decrement Function
  const heightDec=()=>{
    setHeight(height-1)
  }
  // fontSize increment function
  var fontStyleInc={fontSize:font+'px'}
  const fontInc=()=>{
    setFont(font+1)
  }
  // fontSize decrement function
  const fontDec=()=>{
    setFont(font-1)
  }
  // scalingIncrement function
  var scalingStyleInc={transform:'scale('+scaling+')'}
  const scalingInc=()=>{
    setScaling(scaling+0.1)
  }
  // scaling Decrement function
  const scalingDec=()=>{
    setScaling(scaling-0.1)
  }
  return (
  <Main scalingStyleInc={scalingStyleInc} scalingInc={scalingInc} scalingDec={scalingDec} fontInc={fontInc} fontDec={fontDec} fontStyleInc={fontStyleInc} heightDec={heightDec} heightInc={heightInc} heightStyleInc={heightStyleInc} spacingStyleInc={spacingStyleInc} spacingDec={spacingDec} spacingInc={spacingInc} readable={readable} h1={h1} link={link} Link={Link} left={left} right={right} content={content} center={center} magnify={magnify} title={title} Title={Title}/>
  );
}

export default App;