import React, { useContext, useState } from 'react'
import { FoodContext } from '../context/FoodContext';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {

  const [formState, setFormState] = useState('Login');
  const { url, setToken, setAvatarName, loadCartData } = useContext(FoodContext)

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prev) => ({ ...prev, [name]: value }))
  }


  const onLogin = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (formState === "Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      navigate("/")
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      if (localStorage.getItem("token")) {
        let email = data.email;
        let avtar = email.slice(0, 1).toUpperCase()
        localStorage.setItem("avtar", avtar)
        setAvatarName(avtar)
        await loadCartData(localStorage.getItem("token"))
      }
    } else {
      alert(response.data.message)
    }

  }

  return (
    <>
      <div className='w-full flex justify-center items-center mb-20'>
        <div className='w-[80%] p-8 md:w-[50%] md:p-10 lg:w-[40%] lg:p-14 border-[1px] rounded-lg mt-7 '>
          <h1 className='text-xl md:text-3xl font-semibold mb-8'>{formState}</h1>
          <form onSubmit={onLogin} className='flex flex-col gap-5'>
            {formState === 'Signup'
              ? <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input onChange={onChangeHandler} name="name" value={data.name} type="text" className="grow" placeholder="Username" required />
              </label>
              : <></>}
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input onChange={onChangeHandler} name="email" value={data.email} type="email" className="grow" placeholder="Email" required />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
              <input onChange={onChangeHandler} name="password" value={data.password} type="password" className="grow" placeholder='Password' required />
            </label>
            <button type='submit' className='btn bg-orange-600 inline font-semibold text-white text-xl hover:bg-orange-700'>{formState}</button>
            {formState === "Login"
              ? <p className='md:text-[16px] text-sm'>Create an account? <span onClick={() => setFormState("Signup")} className='text-primary cursor-pointer'>Signup here</span></p>
              : <p className='md:text-[16px] text-sm'>Already have an account? <span onClick={() => setFormState("Login")} className='text-primary cursor-pointer'>Login here</span></p>}

            <div className='flex gap-3'>
              <input type="checkbox" name='' id='' required />
              <p className='md:text-[14px] lg:text-[16px] text-sm'>I agree to the terms of use of privacy policy.</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginSignup