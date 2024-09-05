import React from 'react'
import { ImCross } from "react-icons/im";

function LoginSignup() {
  return (
      <>
          <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
              <div className='bg-white border'>
              <ImCross className='left-0' />
                  <div>
                      <h1>Login</h1>
                      <form action="">
                          <input type="text" placeholder='Username'/>
                          <input type="text" placeholder='Password' />
                      </form>
                </div>
              </div>
      </div>
      </>
  )
}

export default LoginSignup