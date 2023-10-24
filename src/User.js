import React,{useEffect, useState} from 'react'

const User = () => {
    const [data,setData] = useState(10)
    const [count,setCount] = useState(100)
    useEffect(() => {
        console.warn("useEffect")
    },[count])
    
    return (
    <>
      <div className="App">
        <h1>count={count} data={data}</h1>
        <button onClick={() => setCount(count+1)}>Update</button>
        <button onClick={() => setData(data+1)}>Update</button>
      </div>
    </>
  )
}
export default User;
