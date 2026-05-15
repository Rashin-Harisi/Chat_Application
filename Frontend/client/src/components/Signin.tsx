
const Signin = ({setSingedIn}) => {
  return (
    <div className="w-[80%] h-[80%] m-auto mt-[5%]">
        <div className="w-full h-full flex gap-5 items-center justify-center">
            <button
            onClick={()=>setSingedIn(true )}
            className="border h-15 w-50 rounded-2xl cursor-pointer">
                Signin
            </button>
            <button
            className="border h-15 w-50 rounded-2xl cursor-pointer">
                Signup
            </button>
        </div>
        
    </div>
  )
}

export default Signin