import { useState } from "react";
import ChatWindow from "./ChatWindow";
import Sidbar from "./Sidbar";
import Signin from "./Signin";


function Home () {
  const [singedIn, setSignedIn] = useState(false);
  console.log(singedIn)
  return (
    <div className="w-full h-full">
      {singedIn ? 
        (<div className="flex h-full">
          <div className='border-r border-black w-[30%] h-full'>
            <Sidbar/>
          </div>
          <ChatWindow/>
        </div>)
          :
          (
          <div className="w-full h-full">
            <Signin setSingedIn={setSignedIn}/>
          </div>)
        }
    </div>
  )
}
export default Home;