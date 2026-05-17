import type { User } from '../types/user'

type Props = {
    data: User,
    isLast : boolean,
}
const User_Card = ({data, isLast} : Props) => {
  const len = data.messages.length;

  return (
    <div className={`h-20 w-full ${isLast ? "" : "border-b border-gray-200"} flex`}>
      <div className='w-[20%] flex items-center justify-center'>
        <img src={data.image} alt={data.name} className='w-10 h-10 rounded-full bg-gray-200'/>
      </div>
      <div className='w-[80%]'>
        <div className='flex justify-between items text-sm mt-2'>
          <p>{data.name ? data.name : data.username}</p>
          <p className='text-gray-300'>{data.messages[len -1].date}</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='text-gray-400'>{data.messages[len -1].content}</p>
          </div>
          <div className=' flex justify-center items-center'>
            <div className={`w-4 h-4 rounded-full ${data.messages[len -1].seen ?  "" : 'bg-green-400'}`}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User_Card