import React from 'react'

function Signup1() {
  return (
    <div>
    <Header/>
    <div className='signup template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
        <div className='form container p-5 rounded bg-white'>
            <form>
                <h3 className='text-center'>Sign Up</h3>
                <div className='mb-2'>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" placeholder='Enter Last Name' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control' />
                </div>
                <div className='mb-2'>
                    <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                    <label htmlFor="check" className='custom-input-label ms-2'>
                        Remember me
                    </label>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-primary'>Sign</button>
                </div>
                <p className='text-right'>
                    Forgot <a href="">Password?</a><Link to="/signup" className='ms-2'>Sign up</Link>
                </p>

            </form>
        </div>
    </div>
    <Footer/>
</div>
  )
}

export default Signup1
