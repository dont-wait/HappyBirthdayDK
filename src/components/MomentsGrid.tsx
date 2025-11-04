import React, { useState, useEffect } from 'react'
import './moments.css'
import { SkeletonMoment } from './Skeleton'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface Moment {
  id: number
  src: string
  caption: string
}

const moments: Moment[] = [
  { 
    id: 1, 
    src: 'https://i.pinimg.com/originals/71/04/a5/7104a5b41d1ab0876123b3deb3f0a98c.jpg', 
    caption: 'Messi - Phó GOAT 🐐👑' 
  },
  { 
    id: 2, 
    src: 'https://tse4.mm.bing.net/th/id/OIP.NPRBq9T6PHmXdNtAqncB9QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3', 
    caption: 'Camp Nou - Més que un club 💙❤️' 
  },
  { 
    id: 3, 
    src: 'https://www.esquire.com.au/wp-content/uploads/2023/10/Side-by-Side-2023-10-31T102059.690-768x1024.png', 
    caption: 'Messi Ballon d\'Or x7 🏆✨' 
  },
  { 
    id: 4, 
    src: 'https://i.dailymail.co.uk/i/pix/2015/06/04/21/295CC5E500000578-3111539-image-a-25_1433451564126.jpg', 
    caption: 'MSN - Attacking Trio ⚡' 
  },
  {
    id: 5,
    src: 'https://www.foottheball.com/wp-content/uploads/2016/12/messi-ronaldo-696x424.jpg',
    caption: 'RonaldoxMessi ⚽🎯'
  },
  { 
    id: 6, 
    src: 'https://th.bing.com/th/id/OIP.E0JCEdMfY_mohP3sR1kIEQHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', 
    caption: 'Champions League Glory 🏆⭐' 
  },
  { 
    id: 7, 
    src: 'https://th.bing.com/th/id/OIP.7yfM6S0JawLFUK6L4LGgOAHaE8?w=265&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', 
    caption: 'Messi Free Kick Masterclass 🎯🚀' 
  },
  { 
    id: 8, 
    src: 'https://fotografias.larazon.es/clipping/cmsimages01/2024/01/14/62CA8851-4E4E-4A15-81D9-6D1E923668C4/mejores-memes-goleada-real-madrid-barcelona-crueldad-xavi_98.jpg?crop=470,264,x0,y158&width=1900&height=1069&optimize=low&format=webply', 
    caption: 'Barça DNA - La Masia 💙❤️' 
  },
  { 
    id: 9, 
    src: 'https://tse1.mm.bing.net/th/id/OIP.t-7oWnYczH_Qyp4wOfqh6AHaE7?rs=1&pid=ImgDetMain&o=7&rm=3', 
    caption: 'Messi & Iniesta - Legends 👑' 
  },
  { 
    id: 10, 
    src: 'https://statico.sportskeeda.com/editor/2024/09/e8426-17260788868019-1920.jpg', 
    caption: 'Blaugrana Forever ❤️🏆' 
  }
]

const MomentsGrid: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="moments-section" ref={ref}>
      <div className="moments-header">
        <h2 className="moments-title">Barça Moments ❤️</h2>
        <p className="moments-subtitle">Những khoảnh khắc huyền thoại của Messi và Barcelona</p>
      </div>

      {loading ? (
        <div className="moments-grid">
          {[...Array(10)].map((_, i) => (
            <SkeletonMoment key={i} />
          ))}
        </div>
      ) : (
        <div className={`moments-grid ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          {moments.map((moment, index) => (
            <div 
              key={moment.id} 
              className="moment-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={moment.src} 
                alt={moment.caption}
                loading="lazy"
              />
              <div className="moment-caption">
                <p>{moment.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default MomentsGrid
