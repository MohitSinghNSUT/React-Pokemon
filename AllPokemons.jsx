import { useState } from 'react';
import { Box } from './Box';
import { useEffect } from 'react';
export const AllPokemons=({allData,inputChange})=>{
  console.log("all pokemon ",inputChange)
  // console.log("All Data is ",allData)
  if(!allData){
    return(
      <>
      </>
    )
  }
  return(
    <>
    <ul>

    {allData.map((elem, idx) => {
  // console.log("each element", elem["name"],elem["url"]); // log data before returning JSX
  
  return (
    <li key={idx}> 
      <Box url={elem["url"]} inputChange={inputChange} />
    </li>
  );
})}

      </ul>
    </>
  )
}