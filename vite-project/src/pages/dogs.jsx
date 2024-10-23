import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Image } from '../components/image';

export const Dogs = () => {
    
    const [ImageURL, setImageURL] = useState();
    const APIURL = "https://random.dog/woof.json"
    

    useEffect(() => {
      axios.get(APIURL).then((response) => {
        setImageURL(response.data["url"])

      });

    }, [])
    



  return (
    <div>
        <Image RandomImage={ImageURL}/>
    </div>
  )
}
