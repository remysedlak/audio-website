import React, { useEffect, useState } from 'react';
import MusicPlayer from '../comps/MusicPlayer';
import AudioVisualizer from '../comps/AudioVisualizer';
import SongOverview from '../comps/SongOverview';

const AudioPage = ({ file }) => {
  const [audioSrc, setAudioSrc] = useState(null);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setAudioSrc(objectUrl);
    }
  }, [file]);

  return( <>
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-black to-purple-500">
      <h1 className="text-3xl sm:text-5xl md:text-5xl 
      lg:text-5xl max-w-full h-full text-center font-bold 
      text-transparent bg-clip-text 
      bg-gradient-to-r from-purple-500 to-white py-4">
        Remy's Audio Hub
      </h1>
      {/* container for live and overview of song */}
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row w-full px-4 h-screen justify-around items-center"> 
        
        {/* {audioSrc && (
          <audio controls src={audioSrc} className="mb-10">
            Your browser does not support the audio element.
          </audio>
        )} */}
        <div className="pr-2 sm:w-full md:w-full lg:w-1/2">
          <h4 className="text-2xl text-center font-bold text- mb-4">Live Song Info</h4>
          <MusicPlayer file={file}/>
        </div>
        <div className="sm:w-full md:w-full lg:w-1/2 pl-2">
          <h4 className="text-2xl text-center font-bold text-white mb-4">Song Overview</h4>
          <SongOverview/>
        </div>
        
    
      </div>
      <p className="text-sm mt-2  opacity-10 text-center pb-2">
          &copy; {new Date().getFullYear()} Remy Sedlak. Feel free to use and share this content.
        </p>
      
      </div>
      </>
    
  );
};

export default AudioPage;