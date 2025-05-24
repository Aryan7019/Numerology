import React from "react";
import { useState } from "react";

function Calculate() {
   const [name, setName] = useState("");
   const [dob, setDob] = useState("");
   const [result, setResult] = useState(null);
 
   const calculateNumerology = () => {
     const nameValue = name.length;
     const dobValue = dob.split("-").reduce((acc, curr) => acc + parseInt(curr), 0);
     setResult(nameValue + dobValue);
   };
 
   return (
     <div className="p-6">
       <h2 className="text-2xl font-semibold">Calculate Your Numbers</h2>
       <div className="mt-4">
         <label className="block">Name:</label>
         <input 
           type="text" 
           value={name} 
           onChange={(e) => setName(e.target.value)} 
           className="border p-2 w-full"
         />
         <label className="block mt-2">Date of Birth:</label>
         <input 
           type="date" 
           value={dob} 
           onChange={(e) => setDob(e.target.value)} 
           className="border p-2 w-full"
         />
         <button onClick={calculateNumerology} className="mt-4 bg-blue-600 text-white px-4 py-2">Calculate</button>
       </div>
       {result && <p className="mt-4">Your Numerology Number is: {result}</p>}
     </div>
   );
 }

 export default Calculate;