import React from 'react'
import "./videobox.css"

const videbox = ({ videotitle, videoSrc, videourl, videoduration, videoquality, videoextension, videoformattedSize }) => {
  const handleDownload = () => {
    fetch(videoSrc)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'video.mp4'; // Fayl nomini bu yerda belgilang
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url); // URL'ni tozalang
      })
      .catch(error => console.error('Video yuklab olishda xatolik:', error));
  };

  return (
    <div className='videobox'>
      <div className="videobox_down">
        <div className="videobox_down_info">
          <h1>Uzunligi: {videoduration}</h1>
          <h1>Sifati: {videoquality}  </h1>
          <h1>Formati: {videoextension} </h1>
          <h1>Hajmi: {videoformattedSize}  </h1>
        </div>
        <a  onClick={handleDownload}>Yuklab olish</a>
      </div>

    </div>
  )
}

export default videbox