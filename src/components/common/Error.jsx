import React from 'react'
import SEO from '../SEO'

const Error = () => {
  return (
    <div className='flex min-h-[calc(100vh-9rem)] gap-3 items-center justify-center'>
      <SEO title={'404 Not Found | Roopa Infrastructure'} description={'Page not found.'}/>
        <p>404</p>
        <div className='h-[2rem] border-1'></div>
        <p>Page Not Found</p>
    </div>
  )
}

export default Error