import { useState, useEffect } from 'react'

interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [audioRef])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Audio playback prevented:', error.message)
        })
      }
    }
  }
  

  return (
    <div className="music-player">
      <audio 
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        crossOrigin="anonymous"
      >
        {/* Thêm file nhạc vào thư mục public với tên: birthday-music.mp3 */}
        <source src="/birthday-music.mp3" type="audio/mpeg" />
        <source src="/birthday-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      <button className="music-toggle" onClick={toggleMusic} title="Bật/Tắt nhạc nền">
        {isPlaying ? '🎵 Đang phát nhạc' : '🔇 Bật nhạc nền'}
      </button>
    </div>
  )
}

export default MusicPlayer
