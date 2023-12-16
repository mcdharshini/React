import React from 'react'
export default function List2()
{
    const college=[{id:41, stuName:"Dharshini",age:20 },
                    {id:45, stuName:"Dona Japrin",age:18},]
    const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)
    return(
        <div style={{backgroundColor:"darkviolet"}}>
            <h1>List of Students</h1>
            {display}
        </div>
    )
}