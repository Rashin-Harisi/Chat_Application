import type { User } from '../types/user'

type Props = {
    data: User,
}
const User_Card = ({data} : Props) => {
  return (
    <p className='text-red-400 border-b border-gray-200 h-15 w-full'>
      {data.name}
    </p>
  )
}

export default User_Card