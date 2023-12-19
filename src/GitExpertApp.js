import React, { useState } from 'react'
import AppCategory from './components/AppCategory'
import { GifGrid } from './components/GifGrid'

function GitExpertApp() {
  
  const [categories,setCategories] = useState(['One Punch'])

  return (
    <>
    <h2>GitExpertApp</h2>
    <AppCategory setCategories = {setCategories}/>
    <hr/>
    
    <ol>
        {
            categories.map((category)=>(
                <GifGrid
                   key={category} 
                   category = {category}
                />
            ))
        }
    </ol>
    </>
  )
}

export default GitExpertApp