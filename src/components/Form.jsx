import React,{useState} from 'react'

const Form = () => {
    const [name , setName] = useState('')
    const [age , setAge] = useState('')
    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')

  return (
    <div className='flex items-center justify-center min-h-screen flex-col' >
      <label>NAME</label>
      <input type="text" value={name} onChange={(event)=>{
        setName(event.target.value)
      }}/>
      <br />
      <label>AGE</label>
      <input type="number" value={age} onChange={(event)=>{
        setAge(event.target.value)
      }}/>
      <br />
      <label>EMAIL</label>
      <input type="email" value={email} onChange={(event)=>{
        setEmail(event.target.value)
      }}/>
      <br />
      <label>MESSAGE</label>
      <input type="text" value={message} onChange={(event)=>{
        setMessage(event.target.value)
      }}/>
      <br />
      <button className='bg-blue-500 text-white pt-[5px] pb-[5px] pl-[10px] pr-[10px] rounded text-center'>SEND</button>
    </div>
  )
}

export default Form
