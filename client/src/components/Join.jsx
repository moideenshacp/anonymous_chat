import { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {


  const [name,setName] = useState('')
  const [room,setRoom] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-semibold text-center mb-6 text-blue-400">Join Room</h2>
        <form className="space-y-4" onSubmit={handleSubmit} >
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">Enter Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="room">Enter Room Name</label>
            <input
              type="text"
              id="room"
              placeholder="Room Name"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setRoom(e.target.value)}
            />
          </div>
          
          <Link
            onClick={(e) => (!name || !room) ? e.preventDefault() : null}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-600 rounded text-white font-semibold hover:bg-blue-700 transition duration-200"
            >
              Join
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Join;
