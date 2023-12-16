import React from 'react'
function DisplayName(props)
{
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}
export default function List1()
{
    const family=["Maadhu","chitra","hari","dharshi"]
    const result=family.map((fam)=><li>{fam}</li>)
    return(
        <div>
            <ul>
                {result}
            </ul>
        </div>
    )
}
