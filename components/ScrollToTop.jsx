import { useEffect, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

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
    <div className="fixed bottom-2 right-2 pb-[30px] pr-[30px]">
      <button
        type="button"
        onClick={scrollToTop}
        // class="hover:bg-black text-white rounded-full"
      >
        <span class="content-center">
        <BsArrowUpCircle size={30} aria-hidden="true" class="content-center"/> 
        scroll up
        </span>
      </button>
    </div>
  )
}

export default ScrollToTop