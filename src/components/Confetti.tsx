import { useEffect, useState } from 'react'
import './confetti.css'

interface ConfettiProps {
  trigger: boolean
  onComplete?: () => void
}

const Confetti: React.FC<ConfettiProps> = ({ trigger, onComplete }) => {
  const [particles, setParticles] = useState<number[]>([])

  useEffect(() => {
    if (trigger) {
      // Create 50 confetti particles
      const newParticles = Array.from({ length: 50 }, (_, i) => i)
      setParticles(newParticles)

      // Clear after animation
      const timer = setTimeout(() => {
        setParticles([])
        onComplete?.()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [trigger, onComplete])

  if (particles.length === 0) return null

  return (
    <div className="confetti-container">
      {particles.map((i) => {
        const colors = ['#A50044', '#004D98', '#FFD700', '#FF6B9D', '#00A3E0']
        const color = colors[Math.floor(Math.random() * colors.length)]
        const left = Math.random() * 100
        const animationDelay = Math.random() * 0.3
        const size = 8 + Math.random() * 8

        return (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${left}%`,
              backgroundColor: color,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${animationDelay}s`,
            }}
          />
        )
      })}
    </div>
  )
}

export default Confetti
