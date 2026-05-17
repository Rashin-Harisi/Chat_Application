import User_Card from './User';
import data from "../assets/data";
import type { User } from '../types/user';

const Sidbar = () => {
  return (
    <div className='h-full flex flex-col'>
      <p className='h-20 border-b border-gray-300 flex items-center justify-center text-xl'>
        Chats
      </p>
      <div className='flex-1 overflow-y-scroll'>
        {data.map((user : User, index :boolean) =>{
          return <User_Card 
          data={user} 
          key={user.id}
          isLast= {index == data.length}/>
        })}
      </div>
    </div>
  )
}

export default Sidbar