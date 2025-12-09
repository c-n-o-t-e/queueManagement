import { FaUserMinus } from "react-icons/fa"; 

export default function DisplayQueue({ queueData, updateQueue, removeQueue }) {

 const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "text-green-500";
      case "serving":
        return "text-red-500";
      case "completed":
        return "text-yellow-500";
      default:
        return "text-black";
    }
 };
 
  return (
    <div className='p-6 bg-white border border-blue-500 rounded-xl w-1/2'>
      <h1 className="text-2xl text-blue-500 font-bold mb-4">Queue</h1>
      <div className="mt-4">
        {queueData.length === 0 ? (
          <p className="text-gray-500 text-center">No customers in queue</p>
        ) : (
          queueData.map((customer) => (
           <div key={customer.id}
            className="flex justify-between items-center mb-4 p-3 border bg-blue-300 text-white border-blue-500 rounded">
              <div className="">  
               <p><strong className="text-white">Name:</strong> {customer.name}</p>
               <p><strong className="text-white">Gender:</strong> {customer.gender}</p>
               <span
                className={`font-bold mt-2 ${getStatusColor(customer.status)}`}
               >
                {customer.status}
               </span>
              </div> 
             <div className="flex items-center gap-3">
              {customer.status === "waiting" && (
               <span
                 className="boarder p-2 bg-amber-400 rounded-sm"
                 onClick={() => updateQueue(customer.id, "serving")}
                >
                 Serve
                </span>
               )}
               {customer.status === "serving" && (
                   <span
                     className="boarder p-2 bg-amber-400 rounded-sm"
                     onClick={() => updateQueue(customer.id, "completed")}
                   >
                     Complete
                   </span>
                 )}
                 <button
                   className="boarder p-3 bg-red-400 rounded-sm"
                   onClick={() => removeQueue(customer.id)}
                 >
                   <FaUserMinus/>
                 </button>
              
             </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}