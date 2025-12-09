import { useState } from "react";
import AddQueue from "./components/addQueue";
import DisplayQueue from "./components/displayQueue";

export default function App() {
  const [queueData, setQueueData] = useState([]);

  const addQueue = (customer) => {
    setQueueData([...queueData, { ...customer, id: Date.now(), status: "waiting"}])
  } 
  
  const updateQueue = (id, newStatus) => {
    setQueueData(queueData.map((customer) => customer.id === id ? { ...customer, status: newStatus} : customer))
  }

  const removeQueue = (id) => {
    setQueueData(queueData.filter((customer) => customer.id !== id))
  }

  return (
    <div className="bg-blue-500 min-h-screen -mt-10">
      <div className="text-center text-white ">
        <h1 className="text-4xl font-bold mt-10">Queue Management</h1>
        <p className="text-lg">Welcome to the queue management system</p>
      </div> 

      <div className='flex justify-center mt-10 gap-4'>
        <AddQueue addQueue={addQueue} />
        <DisplayQueue
          queueData={queueData}
          updateQueue={updateQueue}
          removeQueue={removeQueue}
        />
      </div>
    </div>
  )
}
