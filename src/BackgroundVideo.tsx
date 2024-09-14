import React from 'react';
import './BackgroundVideo.css'; // External CSS for styling the video

const BackgroundVideo: React.FC = () => {
    
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  
  return (
    <div className="video-container">
      {/* Video element */}
      <video
        className="background-video"
        src="/palm_tree_background.mp4" 
        autoPlay
        loop
        muted
        playsInline
        // style={{
        //     transform: `scale(${1 - scrollY / 2000}, ${1 - scrollY / 2000})`, // Scale proportionally
        //     top: `${scrollY * 0.5}px`, // Move video upwards as user scrolls
        //   }}
      />
    </div>
  );
};

export default BackgroundVideo;
