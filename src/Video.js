import React, { useRef, useState } from 'react'
import './Video.css';
import VideoFooter from './VideoFooter';
 

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }  
    };
  return (
    <div className='video'>
      <video
      onClick={handleVideoPress} 
      className='video__player'
      loop
      ref={videoRef}
      src='https://v16m-webapp.tiktokcdn-us.com/a6d68aa89879ef0c821a97297a7e82d7/624f5fe5/video/tos/useast5/tos-useast5-ve-0068c002-tx/3b0e4f02f6374839bea80db0a62cafaa/?a=1988&br=6044&bt=3022&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7Th8z3SDXq&l=2022040716041601011313507813013FF9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anZ2Omk6ZjpoPDMzZzczNEApNzo0ODZmOzs4N2dpMzo8aGdzZDZicjRnXjJgLS1kMS9zcy02Ml8zYzFhYjBgMl42MF46Yw%3D%3D&vl=&vr='></video>
    
    <VideoFooter />
      {/* {video footer} */}
      {/* {video sidebar} */}
    </div>
  )
}

export default Video
