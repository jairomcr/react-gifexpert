import React from 'react'

export const GifGridItem = ({id,name,email}) => {
  //  console.log(id,name,email);
  return (
    <>
        <li><p>{name}--{email}</p></li> 
    </>
  )
}
