import { FC, useEffect, useRef, useState } from 'react'

export interface SliderItem {
  body: string
  author: {
    name: string
    handle: string
    imageUrl: string
  }
}

interface SliderProps {
  items: SliderItem[]
  autoPlayInterval?: number // ms
}

const Slider: FC<SliderProps> = ({ items, autoPlayInterval = 5000 }) => {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => setCurrent(prev => (prev + 1) % items.length)
  const prev = () => setCurrent(prev => (prev - 1 + items.length) % items.length)

  useEffect(() => {
    if (autoPlayInterval > 0) {
      timeoutRef.current = setTimeout(next, autoPlayInterval)

      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }

    return () => {}
  }, [current, autoPlayInterval, items.length])

  return (
    <div className='relative w-full max-w-2xl mx-auto'>
      <div className='overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-sm border border-white/20'>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
            aria-hidden={idx !== current}
          >
            <div className='flex items-center gap-x-1 mb-4 justify-center mt-8'>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className='h-4 w-4 text-yellow-300' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
            <blockquote className='text-base leading-6 text-white text-center px-8 min-h-[60px]'>
              <p>&quot;{item.body}&quot;</p>
            </blockquote>
            <div className='mt-6 flex items-center justify-center gap-x-4 mb-8'>
              <img
                className='h-12 w-12 rounded-full ring-2 ring-white/20'
                src={item.author.imageUrl}
                alt={item.author.name}
              />
              <div>
                <div className='font-semibold text-white'>{item.author.name}</div>
                <div className='text-indigo-100'>@{item.author.handle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <button
        className='absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-indigo-600 dark:text-indigo-400 rounded-full p-2 shadow focus:outline-none'
        onClick={prev}
        aria-label='Previous testimonial'
        style={{ zIndex: 2 }}
      >
        <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
        </svg>
      </button>
      <button
        className='absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-indigo-600 dark:text-indigo-400 rounded-full p-2 shadow focus:outline-none'
        onClick={next}
        aria-label='Next testimonial'
        style={{ zIndex: 2 }}
      >
        <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </button>
      {/* Dots */}
      <div className='flex justify-center gap-2 mt-4'>
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === current ? 'bg-indigo-500' : 'bg-indigo-200 dark:bg-indigo-700'} transition-colors`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
