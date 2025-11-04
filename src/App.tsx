import { useState, useRef } from 'react'
import './App.css'
import Fireworks from './components/Fireworks'
import MusicPlayer from './components/MusicPlayer'
import MomentsGrid from './components/MomentsGrid'
import Timeline from './components/Timeline'
import TrophyCabinet from './components/TrophyCabinet'
import Confetti from './components/Confetti'
import TrophyRain from './components/TrophyRain'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [started, setStarted] = useState(false)
  const [confettiTrigger, setConfettiTrigger] = useState(false)
  const [logoClicks, setLogoClicks] = useState(0)
  const [easterEggShown, setEasterEggShown] = useState(false)
  const [typingComplete, setTypingComplete] = useState(false)
  const [secretCode, setSecretCode] = useState<number[]>([])
  const [secretRevealed, setSecretRevealed] = useState(false)
  const [trophyRainTrigger, setTrophyRainTrigger] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const SECRET_SEQUENCE = [0, 1, 2, 3] // Click stats in order for secret message

  const handleStart = () => {
    setStarted(true)
    
    // Ensure audio is ready and try to play
    if (audioRef.current) {
      // Reset audio to start
      audioRef.current.currentTime = 0
      
      // Set volume
      audioRef.current.volume = 0.7
      
      // Try to play with promise handling for better Edge compatibility
      const playPromise = audioRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Audio playing successfully')
          })
          .catch((error: Error) => {
            console.log('Autoplay prevented:', error)
            // Show user a message or button to manually start audio
            alert('Nhấn OK để bật nhạc! 🎵')
            // Try again after user interaction
            audioRef.current?.play().catch(e => console.log('Still blocked:', e))
          })
      }
    }
    
    setTimeout(() => {
      setShowContent(true)
      // Start typing animation
      setTimeout(() => setTypingComplete(true), 2000)
    }, 300)
  }

  const triggerConfetti = () => {
    setConfettiTrigger(true)
    setTimeout(() => setConfettiTrigger(false), 100)
  }

  const handleStatClick = (index: number) => {
    triggerConfetti()
    
    // Check secret code
    const newCode = [...secretCode, index]
    setSecretCode(newCode)
    
    if (newCode.length === 4) {
      if (JSON.stringify(newCode) === JSON.stringify(SECRET_SEQUENCE)) {
        setSecretRevealed(true)
        // Triple confetti explosion!
        setTimeout(() => triggerConfetti(), 100)
        setTimeout(() => triggerConfetti(), 300)
        setTimeout(() => triggerConfetti(), 500)
      }
      setSecretCode([]) // Reset after 4 clicks
    }
  }

  const handleLogoClick = () => {
    const newCount = logoClicks + 1
    setLogoClicks(newCount)
    
    if (newCount === 5 && !easterEggShown) {
      setEasterEggShown(true)
      triggerConfetti()
      // Play celebration sound (if available)
      const celebrationAudio = new Audio('/celebration.mp3')
      celebrationAudio.play().catch(() => console.log('Celebration sound not available'))
    }
  }

  return (
    <div className="app">
      {/* Confetti Effect */}
      <Confetti trigger={confettiTrigger} />
      
      {/* Easter Egg Modal */}
      {easterEggShown && (
        <div className="easter-egg-modal" onClick={() => setEasterEggShown(false)}>
          <div className="easter-egg-content">
            <h2 className="easter-egg-title">🎉 BẤT NGỜ! 🎉</h2>
            <p className="easter-egg-text">Bạn đã khám phá Easter Egg!</p>
            <div className="easter-egg-messi">🐐 MESSI PHÓ GOAT 🐐</div>
            <p className="easter-egg-subtitle">Click bất kỳ đâu để đóng</p>
          </div>
        </div>
      )}

      {!started && (
        <div className="splash-screen">
          <div className="splash-content">
            <div className="splash-logo">
              <img src="/dk.jpg" alt="Trần Đăng Khôi" className="splash-logo-img" />
            </div>
            <h1 className="splash-title">🎂 Chúc mừng sinh nhật 🎂</h1>
            <h2 className="splash-subtitle">Trần Đăng Khôi</h2>
            <button className="start-button" onClick={handleStart}>
              🎵 Bắt đầu bữa tiệc Barça! 🎉
            </button>
            <p className="splash-hint">Click để bật nhạc và xem lời chúc</p>
          </div>
        </div>
      )}

      <div className="background-overlay"></div>
      
      <Confetti trigger={confettiTrigger} />
      <TrophyRain trigger={trophyRainTrigger} />
      
      {started && <Fireworks />}
      {started && <MusicPlayer audioRef={audioRef} />}

      {started && (
        <div className={`content ${showContent ? 'show' : ''}`}>
          <div className="club-logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }} title="Click 5 lần để mở Easter Egg!">
            <div className="club-logo">
              <img src="/dk.jpg" alt="Trần Đăng Khôi" className="logo-img" />
            </div>
            {logoClicks > 0 && logoClicks < 5 && (
              <div className="logo-click-counter">{logoClicks}/5</div>
            )}
          </div>

          <h1 className="main-title">
            <span className="title-line1">Chúc mừng sinh nhật</span>
            <span className={`title-name ${typingComplete ? 'typing-complete' : 'typing'}`}>Trần Đăng Khôi</span>
            <span className="title-line2">Visca el Barça!</span>
          </h1>

          <div className="wishes-card">
            <div className="card-header">
              <div className="club-icon">💙❤️</div>
              <h2>Visca el Barça! Visca Messi!</h2>
            </div>
            
            <div className="card-content">
              <p className="wishes-text">
                Chúc <strong>Trần Đăng Khôi</strong> luôn mạnh khỏe, học giỏi và luôn cháy với tình yêu dành cho Barça và Messi - Phó GOAT! 
                🐐💙❤️
              </p>
              <p className="wishes-text">
                Mong em sẽ có một năm rực rỡ như những pha solo thần thánh của Messi, như tinh thần Tiki-Taka bất diệt! ⚽✨
              </p>
              <p className="wishes-signature">
                Cheer you 3000 - Més que un club 💖
              </p>
            </div>

            <div className="stadium-section">
              <div className="stadium-icon">🏟️</div>
              <p className="stadium-text">Camp Nou - Lãnh địa Blaugrana - Nhà của Messi</p>
            </div>
          </div>

          <div className="messi-tribute">
            <h3 className="messi-title">🐐 Lionel Messi - Phó GOAT 🐐</h3>
            <p className="secret-hint" style={{fontSize: '0.8rem', opacity: 0.6, textAlign: 'center', marginBottom: '10px'}}>
              💡 Hint: Click the stats in order from left to right...
            </p>
            <div className="messi-stats">
              <div className="stat-item" onClick={() => handleStatClick(0)}>
                <div className="stat-number">8</div>
                <div className="stat-label">Ballon d'Or</div>
              </div>
              <div className="stat-item" onClick={() => handleStatClick(1)}>
                <div className="stat-number">672</div>
                <div className="stat-label">Goals for Barça</div>
              </div>
              <div className="stat-item" onClick={() => handleStatClick(2)}>
                <div className="stat-number">35</div>
                <div className="stat-label">Trophies</div>
              </div>
              <div className="stat-item" onClick={() => handleStatClick(3)}>
                <div className="stat-number">∞</div>
                <div className="stat-label">Magic Moments</div>
              </div>
            </div>
            <p className="messi-quote">"I have always wanted to play for Barça all my life." - Leo Messi</p>
          </div>

          <div className="legends-section">
            <h3 className="legends-title">Barça Legends Never Die 💙❤️</h3>
            <div className="legends-grid">
              <div className="legend-item" onClick={triggerConfetti}>
                <div className="legend-number">10</div>
                <div className="legend-name">Messi</div>
              </div>
              <div className="legend-item" onClick={triggerConfetti}>
                <div className="legend-number">10</div>
                <div className="legend-name">Ronaldinho</div>
              </div>
              <div className="legend-item" onClick={triggerConfetti}>
                <div className="legend-number">10</div>
                <div className="legend-name">Lamine Yamal</div>
              </div>
              <div className="legend-item" onClick={triggerConfetti}>
                <div className="legend-number">10</div>
                <div className="legend-name">Trần Đăng Khôi</div>
              </div>
            </div>
          </div>

          <div onClick={() => {
            setTrophyRainTrigger(true)
            setTimeout(() => setTrophyRainTrigger(false), 100)
          }} style={{cursor: 'pointer'}}>
            <TrophyCabinet />
          </div>
          <Timeline />
          <MomentsGrid />

          <div className="quotes-section">
            <h3 className="quotes-title">Legendary Quotes 💬</h3>
            <div className="quotes-grid">
              <div className="quote-card">
                <p className="quote-text">"Some people want it to happen, some wish it would happen, others make it happen."</p>
                <p className="quote-author">- Lionel Messi</p>
              </div>
              <div className="quote-card">
                <p className="quote-text">"At Barça we trained every day with the ball. I hardly even took a step running without a ball at my feet."</p>
                <p className="quote-author">- Xavi Hernández</p>
              </div>
              <div className="quote-card">
                <p className="quote-text">"Playing football is very simple, but playing simple football is the hardest thing."</p>
                <p className="quote-author">- Johan Cruyff</p>
              </div>
            </div>
          </div>

          <div className="final-message">
            <div className="final-icon">🎂⚽💙❤️</div>
            <h2 className="final-title">Chúc mừng sinh nhật Trần Đăng Khôi!</h2>
            <p className="final-text">
              Mong em luôn giữ vững niềm tin với Barça và Messi, luôn mạnh mẽ và tràn đầy đam mê!<br/>
              Visca el Barça! Visca Messi! 💙❤️✨
            </p>
          </div>

          <div className="footer">
            <p className="footer-motto">💙❤️ Més que un club 💙❤️</p>
            <p className="footer-year">Est. 1899 | Blaugrana Forever | Messi Era</p>
          </div>
        </div>
      )}

      {/* Secret Message Modal */}
      {secretRevealed && (
        <div className="easter-egg-modal" onClick={() => setSecretRevealed(false)}>
          <div className="easter-egg-content" onClick={(e) => e.stopPropagation()}>
            <div className="easter-egg-icon">🎁✨</div>
            <h2>🎊 SECRET MESSAGE UNLOCKED! 🎊</h2>
            <p style={{fontSize: '1.5rem', margin: '20px 0', color: '#FFD700'}}>
              "Trần Đăng Khôi - Phó GOAT of Vietnam! 🐐🇻🇳"
            </p>
            <p style={{fontSize: '1rem', marginBottom: '20px'}}>
              Bạn đã khám phá được bí mật ẩn giấu! 🎉<br/>
              Ai cũng chỉ là Phó GOAT thôi, vì GOAT thật sự là... TK! 😄👑
            </p>
            <div style={{fontSize: '3rem', margin: '20px 0'}}>
              ⚽💙❤️🏆✨
            </div>
            <button onClick={() => setSecretRevealed(false)} style={{
              padding: '12px 30px',
              fontSize: '1rem',
              background: 'linear-gradient(135deg, #A50044, #004D98)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(255,215,0,0.4)'
            }}>
              Visca Barça! 💙❤️
            </button>
          </div>
        </div>
      )}

      {started && (
        <div className="balloons-container">
          <div className="balloon balloon-maroon"></div>
          <div className="balloon balloon-blue"></div>
          <div className="balloon balloon-maroon"></div>
          <div className="balloon balloon-gold"></div>
          <div className="balloon balloon-blue"></div>
        </div>
      )}
    </div>
  )
}

export default App
