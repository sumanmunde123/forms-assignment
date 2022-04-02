import axios from "axios";
import {useEffect, useState}from "react"
import { Trdata } from "./tr";
export const Forms =()=>{
    const [formData,setFormdata]= useState({});
    const [creat,setCreat]=useState([]);


 useEffect(()=>{
     get()
 },[])

  const handle =(e)=>{
      const {id,value}=e.target;

   setFormdata({
       ...formData,
       [id]:value,
   });
  };

  const submit=(e)=>{
 

  axios.post(" http://localhost:3001/users" ,formData).then(()=>{
      alert("user succesfully signup");
// console.log(formData)
  });
  };

 const get=(e)=>{
    axios.get(" http://localhost:3001/users" ,formData).then((res)=>{
        setCreat(res.data)
    })
 }

 const deleteData=(id)=>{
 const res = creat.filter((el) =>{
    return el.id !=id
})
   setCreat([...res])
 }

  return (
      <div>
         <form onSubmit={submit}>
          <h3> employee details</h3>
          <input type="text"  id="name" onChange={handle} placeholder="enter username"/>
          <input type="Number"  id="age" onChange={handle} placeholder="enter your age"/>
          <input type="descrption" id="address" onChange={handle} placeholder="enter adress"/>
          <select type="department" id="department" onChange={handle} placeholder="department">
          <option>--</option>
             <option>student</option>
             <option>Instructional Associate</option>
             <option>founder</option>
          </select>
          <input type="text" id="salary" onChange={handle} placeholder="salary"/>
          <input type="checkbox" id="maritalState" onChange={handle} placeholder="maritalState"/>
      <input type="submit" value={"Create user"} />
      </form>
   <table id="tabi">
       <thead>
           <tr>
               <th>name</th>
               <th>age</th>
               <th>address</th>
               <th>department</th>
               <th>salary</th>
               <th>maritalState</th>
               <th>delete</th>
           </tr>
       </thead>
    <tbody>
        {creat.map((e)=>(<Trdata data={e} key={e.id} deleteData={deleteData}/>))}
    </tbody>
   </table>

      </div>
  )
}