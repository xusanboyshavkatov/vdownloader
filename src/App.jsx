import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading'
import Videbox from './Videbox';


const App = () => {
  let [Api, SetApi] = useState([])
  let [inputrul, Setinputurl] = useState('')
  const urlinput = useRef(null);
  const [Load, SetLoad] = useState("")
  const [Load2, SetLoad2] = useState("")


  function yukla() {
    const inputValue = urlinput.current.value;
    if (inputValue === "") {

    }
    else (

      Setinputurl(`https://insta-dl.hazex.workers.dev/?url=${inputValue}`)
    )
  }

  useEffect(() => {

    if (inputrul) {
      SetLoad(true)
      axios.get(inputrul)
        .then(response => {
          SetApi(response.data.result);
          SetLoad(false);
          SetLoad2(true)
        })
    }

  }, [inputrul]);

  return (
    <div className='wrap'>
      <div className="urlinput">
        <input type="text" placeholder='Video havolasini bu yerga yozing' ref={urlinput} />
        <button className='btnyukla' onClick={yukla}>Yuklash</button>
      </div>
      <br />


      {Load ? (
        <Loading /> // Yuklanayotgan holatda Loading komponentini ko'rsatish
      ) : Load2 ? <Videbox videotitle="Nimadur" videoSrc={Api.url} videourl={Api.url} videoduration={Api.duration} videoquality={Api.quality} videoextension={Api.extension} videoformattedSize={Api.formattedSize}></Videbox> : ""}



    </div>
  )
}

export default App