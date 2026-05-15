import User_Card from './User';
import data from "../assets/data";
import type { User } from '../types/user';

const Sidbar = () => {
  return (
    <div className=''>
        {data.map((user : User) =>{
           return <User_Card data={user} key={user.id}/>
        })}
    </div>
  )
}

export default Sidbar