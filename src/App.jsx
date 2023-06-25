import React from 'react'

const App = () => {
  return (
<div className=''>
<main className="h-screen flex items-center justify-center ">
      <form className='bg-white rounded-lg w-2/3 font-mono flex'>

        <div className='flex-1 text-gray-700 p-5'>
          <h1 className='text-3xl pb-2 '>Lets Get Started 👋</h1>
          <p className='text-lg text-gray-500'>
            Jion our E-learning Plateform today and unlock over 500+ courses and digital assets ready to download
          </p>

          <div className='mt-6'>


            <div className='pb-4'>
              <label htmlFor='name' className='block font-mono font-bold text-sm pb-2' >
                Name
              </label>
              <input type='text' name='name' placeholder='Enter your Name' className='border-2 px-5 py-2 border-gray-500 rounded-md  w-10/12 focus:border-teal-500 focus:ring-teal-500'></input>

            </div>



            <div className='pb-4'>
              <label htmlFor='email' className='block font-mono font-bold text-sm pb-2' >
                Email
              </label>
              <input type='text'
                name='email'
                placeholder='Enter your Email'
                className='border-2 border-gray-500 rounded-md w-10/12 focus:border-teal-600 px-5 py-2 focus:ring-teal-600'></input>

            </div>



            <div className='pb-4'>
              <label htmlFor='country' className='block font-mono font-bold text-sm pb-2' >
                Country
              </label>
              <select name='country' className='border-2 border-gray-500 rounded-md px-5 py-2  w-10/12 focus:border-teal-600 focus:ring-teal-600'>
                <option>United States</option>
                <option>Dubai</option>
                <option>Pakistan</option>
              </select>

            </div>
            <div className='pb-4'>
            <label htmlFor='country' className='block font-mono font-bold text-sm pb-2' >
              Terms of the services
            </label>
          <div className='flex'>
          <input type='checkbox' name='terms' value="checked" className='h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500'></input>

          <p className='text-sm font-bold text-gray-500'>
          I am agree to the term and services that my data will be taken and sold
          
          </p>
          </div>

          </div>
      </div>

<button type='submit' className='text-center w-full bg-teal-500 text-white px-3 py-1'>Start Learing today</button>
  </div>
        <div className='w1/2 h-full'>
<img src='https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80' height="100%"></img>
        </div>
      </form>
    </main>
</div> 
  )
}

export default App