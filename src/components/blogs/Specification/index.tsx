import { User2 } from 'lucide-react'
import React from 'react'

const Specification = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <User2 className='w-24 h-24 rounded-full shadow-lg' />
        <h1 className='text-2xl font-bold'>Latest Version</h1>
        <p>v5.0.200.1000653</p>
    </div>
  )
}

export default Specification