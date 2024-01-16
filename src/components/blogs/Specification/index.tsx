import { User2 } from 'lucide-react'
import React from 'react'

const Specification = (
{title, description, icon}:
{title: string, description: string, icon:any}
) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        {icon}
        {/* <GitGraph className='w-20 h-20 rounded-xl shadow-lg' /> */}
        <h1 className='text-2xl font-bold'>title</h1>
        <p>description</p>
    </div>
  )
}

export default Specification