import React, { useEffect, useState } from 'react'
import { useEventUserMutation } from '../../services/admin'

const Test = () => {
    const event_id = 38
    const [resInfo, response] = useEventUserMutation(event_id)
    console.log(response,'responser')
    
    useEffect(() => {
        if (response.isSuccess) {
            console.log(response)
        }
    },[response])


    // const [user, setUser] = useState([]);
    // const formdata = new FormData()
    // formdata.append('event_id',36)

    

    // const collectData = async () => {
    //     // console.log(name, email, password);
    //     let result = await fetch('http://localhost:5000/eventuser', {
    //         method: 'post',
    //         body: 37,
    //         // body: JSON.stringify({ 37 }),
    //         headers: {
    //             'content-Type': 'application/json',
    //         }
    //     });

    //     result = await result.json()
    //     console.log(result);
    //     // localStorage.setItem("user", JSON.stringify(result));
    //     // if (result) {
    //     //     navigate("/");
    //     // }
    // }
    // useEffect(() => {
    //     collectData()
    // },[collectData])


  return (
    <div>Test</div>
  )
}

export default Test