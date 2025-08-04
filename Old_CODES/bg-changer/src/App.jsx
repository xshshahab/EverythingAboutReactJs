import React, { useState } from 'react'

const App = () => {

  const [color, setColor] = useState("black")

  const data = [
    {
      id: "red",
      name: "Red",
      color: "red"
    },
    {
      id: "green",
      name: "Green",
      color: "green"
    },
    {
      id: "blue",
      name: "Blue",
      color: "blue"
    },
    {
      id: "yellow",
      name: "Yellow",
      color: "yellow"
    },
    {
      id: "purple",
      name: "Purple",
      color: "purple"
    },
    {
      id: "orange",
      name: "Orange",
      color: "orange"
    },
    {
      id: "white",
      name: "White",
      color: "white"
    },
    {
      id: "maroon",
      name: "Maroon",
      color: "maroon"
    },
    {
      id: "pink",
      name: "Pink",
      color: "pink"
    },
    {
      id: "olive",
      name: "Olive",
      color: "olive"
    }
  ];

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen py-10 text-white' style={{ backgroundColor: color }}>
      <h1 className='mb-8 text-5xl font-extrabold text-center text-white/20 md:text-9xl'>Bg Changer App</h1>
      <div id="bottom-nav" className='fixed inset-x-0 flex flex-wrap justify-center bottom-10'>
        <div id="bottom-body" className='flex flex-wrap gap-4 px-3 py-2 border rounded-full shadow-xl border-zinc-900 backdrop-blur-lg bg-zinc-900' >
          {
            data.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setColor(item.color)}
                  id={item.id}
                  style={{ background: item.color }}
                  className="p-2 px-5 font-medium text-black shadow-lg outline-none cursor-pointer rounded-xl"
                >
                  {item.name}
                </button>
              )
            })
          }

          <button
            onClick={() => setColor("black")}
            id="maroon"
            style={{ background: "black" }}
            className="p-2 px-5 shadow-lg outline-none cursor-pointer rounded-xl"
          >
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
