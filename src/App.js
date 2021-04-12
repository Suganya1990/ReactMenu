import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menu, setMenu] = useState(items)

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        <div className='section-center'>
          {menu.map((menu) => {
            return <Menu key={menu.id} {...menu} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
