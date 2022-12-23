import React from 'react'

const ScalingComponent = ({parameter1,parameter2}) => {
  return (
  <div style={{display:'flex',flexDirection:'row',margin:'2%'}}>
    <div className='scaling'>
      <label><i class='fas fa-expand-arrows-alt'></i>Content scaling</label>
      <div className='iconDiv'>
        <button className='iconBtn' onClick={parameter2}><i class='fas fa-angle-down'></i></button>
        <div>&nbsp; Default &nbsp;</div>
        <button className='iconBtn' onClick={parameter1}><i class='fas fa-angle-up'></i></button>
      </div>
    </div>
  </div>
  )
}

 
export default ScalingComponent
