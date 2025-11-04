import React from 'react'
import './skeleton.css'

export const SkeletonCard: React.FC<{ width?: string; height?: string }> = ({ 
  width = '100%', 
  height = '200px' 
}) => (
  <div className="skeleton-card" style={{ width, height }}>
    <div className="skeleton-shimmer"></div>
  </div>
)

export const SkeletonText: React.FC<{ width?: string; lines?: number }> = ({ 
  width = '100%', 
  lines = 1 
}) => (
  <div className="skeleton-text-container">
    {Array.from({ length: lines }).map((_, i) => (
      <div 
        key={i} 
        className="skeleton-text" 
        style={{ 
          width: i === lines - 1 ? '70%' : width 
        }}
      ></div>
    ))}
  </div>
)

export const SkeletonCircle: React.FC<{ size?: string }> = ({ size = '60px' }) => (
  <div className="skeleton-circle" style={{ width: size, height: size }}>
    <div className="skeleton-shimmer"></div>
  </div>
)

export const SkeletonTrophy: React.FC = () => (
  <div className="skeleton-trophy">
    <SkeletonCircle size="80px" />
    <div className="skeleton-text" style={{ width: '60%', margin: '15px auto 10px' }}></div>
    <div className="skeleton-text" style={{ width: '80%', margin: '0 auto' }}></div>
  </div>
)

export const SkeletonTimeline: React.FC = () => (
  <div className="skeleton-timeline-item">
    <div className="skeleton-timeline-dot"></div>
    <div className="skeleton-timeline-content">
      <SkeletonText width="30%" lines={1} />
      <SkeletonText width="100%" lines={2} />
    </div>
  </div>
)

export const SkeletonMoment: React.FC<{ height?: string }> = ({ height = '250px' }) => (
  <div className="skeleton-moment" style={{ height }}>
    <div className="skeleton-shimmer"></div>
  </div>
)
