import React from 'react'
import {Play, UsersThree, House, MagnifyingGlass, Books} from '@phosphor-icons/react'
export default function App() {
  return (
    
    <div className='bg-zinc-900 text-zinc-50 h-screen flex flex-col'>
      <div className='flex flex-1 overflow-hidden'>
        <aside className='w-96 bg-zinc-950 p-6'>
          Sidebar
        </aside>
        <main className='flex-1 p-5 overflow-y-auto'>
          Main
        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 flex p-6 items-center justify-center'>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </footer>
    </div>

  )
}