import { useState } from "react";
import { FaUserPlus } from "react-icons/fa"; 

export default function AddQueue({addQueue}) {
 const [name, setName] = useState("");
 const [gender, setGender] = useState("");

  const handleSubmit = () => {
   if (gender === "" || name === "") {
    alert("Please enter your gender and name");
    return;
   } 
   addQueue({name, gender});
   setName("");
   setGender("");
  }
 
  return (
   <form  onSubmit={handleSubmit}>
    <div className='p-6 bg-white border border-blue-500  rounded-xl w-full'>
          
          <h1 className="text-2xl text-blue-500 font-bold">
            Add To Queue
          </h1>

          <input
            className='w-full mt-4 mb-4 p-3 border  border-blue-500 rounded-xl'
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter your name"
          />
          
          <select
            className="w-full border px-3 py-2 rounded mb-4 border-blue-500"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
           >
            <option>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          
          <button
            className="flex gap-1 items-center justify-center w-full bg-blue-500 text-white px-4 py-2 rounded-xl"
            type="submit">
            <FaUserPlus/> Add to Queue
          </button>
        </div>
    </form>
  )
}