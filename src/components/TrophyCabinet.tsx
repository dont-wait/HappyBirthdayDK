import React, { useState, useEffect } from 'react'
import './trophyCabinet.css'
import { SkeletonTrophy } from './Skeleton'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

type Trophy = {
  id: number
  name: string
  count: number
  emoji: string
  years?: string
}

const trophies: Trophy[] = [
  { id: 1, name: 'LaLiga', count: 27, emoji: '🏆', years: 'Latest: 2023-24' },
  { id: 2, name: 'Copa del Rey', count: 31, emoji: '🏆', years: 'Multiple Years' },
  { id: 3, name: 'Champions League', count: 5, emoji: '⭐', years: '1992, 2006, 2009, 2011, 2015' },
  { id: 4, name: 'UEFA Super Cup', count: 5, emoji: '🏆', years: 'Multiple Years' },
  { id: 5, name: 'Supercopa de España', count: 14, emoji: '🏆', years: 'Multiple Years' },
  { id: 6, name: 'FIFA Club World Cup', count: 3, emoji: '🌍', years: '2009, 2011, 2015' }
]

const TrophyCabinet: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  useEffect(() => {
    // Chỉ bắt đầu load khi component visible
    if (isVisible) {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <section 
      ref={ref}
      className={`trophy-cabinet ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <h3 className="trophy-title">🏆 Trophy Cabinet 🏆</h3>
      <p className="trophy-subtitle">Catalan Giants — FC Barcelona</p>
      <p className="trophy-hint" style={{
        fontSize: '0.85rem', 
        opacity: 0.7, 
        textAlign: 'center', 
        marginTop: '5px',
        color: '#FFD700',
        animation: 'pulse 2s infinite'
      }}>
        💡 Click here for trophy rain! 🎉
      </p>
      
      <div className="trophy-grid">
        {loading ? (
          // Skeleton loading state
          Array.from({ length: 6 }).map((_, i) => (
            <SkeletonTrophy key={i} />
          ))
        ) : (
          // Real content with stagger animation from skeleton.css
          trophies.map(trophy => (
            <div className="trophy-item" key={trophy.id}>
              <div className="trophy-emoji">{trophy.emoji}</div>
              <div className="trophy-count">{trophy.count}×</div>
              <div className="trophy-name">{trophy.name}</div>
              {trophy.years && <div className="trophy-years">{trophy.years}</div>}
            </div>
          ))
        )}
      </div>

      {!loading && (
        <div className="treble-section">
          <div className="treble-badge">
            <span className="treble-year">2009</span>
            <span className="treble-text">THE TREBLE</span>
            <span className="treble-desc">LaLiga • Copa del Rey • Champions League</span>
          </div>
        </div>
      )}
    </section>
  )
}

export default TrophyCabinet
