import React, { useState } from 'react'
import './giftBox.css'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 })

  const handleOpenGift = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <section 
      ref={ref}
      className={`gift-box-section ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      {!isOpen ? (
        <div className="gift-box-container" onClick={handleOpenGift}>
          <div className="gift-box">
            <div className="gift-lid">
              <div className="gift-ribbon"></div>
            </div>
            <div className="gift-body">
              <div className="gift-ribbon-vertical"></div>
            </div>
            <div className="gift-bow">🎀</div>
          </div>
          <p className="gift-hint">🎁 Click để mở quà bất ngờ! 🎁</p>
          <div className="gift-sparkles">
            <span className="sparkle">✨</span>
            <span className="sparkle">✨</span>
            <span className="sparkle">✨</span>
            <span className="sparkle">✨</span>
          </div>
        </div>
      ) : (
        <div className={`gift-revealed ${imageLoaded ? 'loaded' : 'loading'}`}>
          {!imageLoaded && (
            <div className="gift-skeleton">
              <div className="skeleton-image"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>
          )}
          
          <div className={`gift-content ${imageLoaded ? 'show' : 'hide'}`}>
            <div className="special-image-container">
              <img 
                src="/thgtym.jpg" 
                alt="Special moment" 
                className="special-image"
                onLoad={handleImageLoad}
              />
              <div className="image-frame"></div>
            </div>
            
            <div className="special-message">
              <h2 className="special-title">🎉 Món quà đặc biệt dành cho em! 🎉</h2>
              <p className="special-text">
                Chúc <strong>Trần Đăng Khôi</strong> - Phó GOAT của Việt Nam! 🐐🇻🇳
              </p>
              <p className="special-text">
                Em là niềm tự hào của gia đình, người bạn tuyệt vời và một fan Barça chân chính! 💙❤️
              </p>
              <p className="special-text">
                Mong em luôn giữ vững tinh thần Blaugrana, không bao giờ bỏ cuộc như Messi,
                luôn sáng tạo như Xavi, và dũng cảm như Puyol! ⚽✨
              </p>
              <p className="special-quote">
                "Más que un cumpleaños, es una celebración de tu grandeza!" 🎂🏆
              </p>
              <div className="special-emojis">
                🎂 ⚽ 💙 ❤️ 🏆 ✨ 🐐 👑
              </div>
              <p className="special-signature">
                Hãy luôn nhớ lí do bắt đầu! 💖<br/>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GiftBox
