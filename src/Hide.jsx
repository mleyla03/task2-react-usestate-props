import React, { useState } from "react";

export default function Hide({ children }) {


  const [newsText, newsetText] = useState();


  function NewText() {
    newsetText(!newsText);
    
    Swal.fire({
      title: "Text none",
      width: 600,
      padding: '3em',
      color: 'purple',
      
      background: '#fff url(/images/trees.png)',
      backdrop: `
       purple
       
        left top
        no-repeat
      `
    })
  
  }

  let btnClick = newsText ? "Hide " : "Show ";
  


  return (
    <>
      {newsText && children}
     <div className="change">
      <button className="hideshow" onClick={NewText}>{btnClick}</button>
      </div> 
    </>
  );
}