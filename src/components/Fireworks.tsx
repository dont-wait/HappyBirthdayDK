import { useEffect } from 'react'

const Fireworks = () => {
  useEffect(() => {
    const createFirework = () => {
      const firework = document.createElement('div')
      firework.className = 'firework'
      firework.style.left = Math.random() * 100 + '%'
      firework.style.top = Math.random() * 50 + '%'
      firework.style.animationDelay = Math.random() * 2 + 's'
      
      document.querySelector('.fireworks-container')?.appendChild(firework)

      setTimeout(() => {
        firework.remove()
      }, 2000)
    }

    // Tạo pháo hoa định kỳ
    const interval = setInterval(createFirework, 800)

    return () => clearInterval(interval)
  }, [])

  return <div className="fireworks-container"></div>
}

export default Fireworks
