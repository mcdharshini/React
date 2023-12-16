export default function List()
{
    const animal=["dona","cat","lion","tiger"]
    const result=animal.map((ani,index)=><li key={index}>{index}={ani}</li>)
    return(
        <div>
            <ul type="None">
                {result}
            </ul>
        </div>
    )

}
