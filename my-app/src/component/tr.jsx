export const Trdata=({deleteData,data})=>{

return(
    <>
    <tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.address}</td>
      <td>{data.department}</td>
      <td>{data.salary}</td>
      <td>{data.maritalState}</td>
      <td><button onClick={()=>deleteData(data.id)}>delete</button></td>
    </tr>
    </>
)

}