import { useEffect, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

// import { classNames } from '/utils'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
      >
        <BsArrowUpCircle size={30} aria-hidden="true" />
      </button>
    </div>
  )
}

export default ScrollToTop