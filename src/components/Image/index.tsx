import { useEffect, useRef, useState } from 'react'

interface LazyImageProps {
  imageUrl: string
  alt: string
}

const LazyImage: React.FC<LazyImageProps> = ({ imageUrl, alt }) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = imageUrl
            observer.unobserve(imgRef.current)
          }
        })
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [imageUrl])

  const handleLoad = () => {
    setLoaded(true)
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-md">
      <img
        ref={imgRef}
        src=""
        alt={alt}
        onLoad={handleLoad}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default LazyImage
