import React, { useState, useEffect } from 'react'
import './timeline.css'
import { SkeletonTimeline } from './Skeleton'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

type HistoricMoment = {
  id: number
  year: string
  title: string
  description: string
  icon: string
}
const moments: HistoricMoment[] = [
  { id: 1, year: '1899', title: 'Founded', description: 'FC Barcelona được thành lập bởi Joan Gamper', icon: '🔵🔴' },
  { id: 2, year: '1929', title: 'First LaLiga', description: 'Vô địch LaLiga mùa giải đầu tiên', icon: '🏆' },
  { id: 3, year: '1992', title: 'European Cup', description: 'Vô địch European Cup (Champions League trước đây) lần đầu tiên', icon: '⭐' },
  { id: 4, year: '2006', title: 'Ronaldinho Revival', description: 'Ronaldinho thắp lửa trở lại, đóng góp lớn dẫn đến thành công châu Âu', icon: '🎩' },
  { id: 5, year: '2009', title: 'The Treble', description: 'Pep & Messi - Cú ăn 3: LaLiga, Copa del Rey, Champions League', icon: '🏆⭐' },
  { id: 6, year: '2011', title: 'Tiki-Taka Peak', description: 'Đỉnh cao lối chơi Tiki-Taka - Barcelona thống trị châu Âu', icon: '⚽️' },
  { id: 7, year: '2015', title: 'Champions Again', description: 'Vô địch Champions League thứ 5', icon: '🏆' }
]

const Timeline: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1800)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <section 
      ref={ref}
      className={`timeline-section ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <h3 className="timeline-title">Barça – Historic Moments</h3>
      <p className="timeline-subtitle">From Camp Nou legends to global glory</p>
      
  <div className="timeline">
        {loading ? (
          // Skeleton loading
          <div className="skeleton-timeline-list">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonTimeline key={i} />
            ))}
          </div>
        ) : (
          // Real content - wrap trong div để apply stagger animation
          <>
            <div className="timeline-scroll">
              {moments.map((moment) => (
                <div className="timeline-card" key={moment.id}>
                  <div className="card-top">
                    <div className="card-icon">{moment.icon}</div>
                    <div className="card-year">{moment.year}</div>
                  </div>
                  <h4 className="card-title">{moment.title}</h4>
                  <p className="card-desc">{moment.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {!loading && (
        <div className="barca-moment fade-in-content">
          <div className="barca-icon">🏟️</div>
          <div className="barca-quote">"Mes que un club"</div>
          <div className="barca-author">- Joan Laporta</div>
        </div>
      )}
    </section>
  )
}

export default Timeline
