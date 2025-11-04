import { useEffect, useState } from 'react'
import './trophyRain.css'

interface TrophyRainProps {
  trigger: boolean
}

const TrophyRain = ({ trigger }: TrophyRainProps) => {
  const [trophies, setTrophies] = useState<Array<{ id: number; emoji: string; left: string; delay: string }>>([])

  useEffect(() => {
    if (trigger) {
      const trophyEmojis = ['🏆', '⚽', '🥇', '👑', '💙', '❤️', '✨', '🎉']
      const newTrophies = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        emoji: trophyEmojis[Math.floor(Math.random() * trophyEmojis.length)],
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`
      }))
      
      setTrophies(newTrophies)
      
      setTimeout(() => setTrophies([]), 4000)
    }
  }, [trigger])

  return (
    <div className="trophy-rain-container">
      {trophies.map((trophy) => (
        <div
          key={trophy.id}
          className="trophy-rain-item"
          style={{
            left: trophy.left,
            animationDelay: trophy.delay
          }}
        >
          {trophy.emoji}
        </div>
      ))}
    </div>
  )
}

export default TrophyRain
