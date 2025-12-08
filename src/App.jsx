import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedGender, setSubmittedGender] = useState("");

  const handleSubmit = () => {
    if (gender === "") alert("Please enter your gender");
    else if (name === "" ) alert("Please enter your name");
    else {
      setSubmittedName(name); 
      setSubmittedGender(gender);
    }
    
  }

  return (
    <div className="bg-blue-500 min-h-screen -mt-10">
      <div className="text-center text-white ">
        <h1 className="text-4xl font-bold mt-10">Queue Management</h1>
        <p className="text-lg">Welcome to the queue management system</p>
      </div> 

      <div className='flex justify-center mt-10 gap-4'>
        <div className='p-6 bg-white border border-blue-500  rounded-xl w-1/4'>
          
          <h1 className="text-2xl text-blue-500 font-bold">
            Add To Queue
          </h1>

          <input
            className='w-full mt-4 mb-4 p-3 border border-blue-500 rounded-xl'
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />
          
          <select
            className="w-full border px-3 py-2 rounded mb-4 border-blue-500"
            onChange={(e) => setGender(e.target.value)} >
            <option>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-xl"
            onClick={handleSubmit}>
            <FaUserPlus/> Add to Queue
          </button>
        </div>

        <div className='p-6 bg-white border border-blue-500  rounded-xl w-1/2'>
          <div className="mt-4">
            <p><strong className="text-blue-500">Name:</strong> {submittedName}</p>
            <p><strong>Gender:</strong> {submittedGender}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
