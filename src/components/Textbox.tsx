import React from 'react'

const Textbox = ({
  xHead = "null",
  xText = "null",
  width = 'w-96',
  height = 'h-60',
  padding = 'p-6'
}) => {
  return (
    <div
      className={`group bg-white border border-gray-500 rounded-2xl shadow-md 
      ${width} ${height} ${padding} 
      flex flex-col justify-start 
      transition-all duration-700 ease-in-out hover:rounded-3xl`}
    >
      <h1 className="
        text-3xl font-serif font-bold mb-4 
        text-gray-800 
        transition-all duration-700 ease-in-out
        group-hover:text-transparent 
        group-hover:bg-clip-text 
        group-hover:bg-gradient-to-r 
        group-hover:from-blue-500 
        group-hover:to-blue-900
      ">
        {xHead}
      </h1>
      <p className="text-base font-mono text-gray-700">{xText}</p>
    </div>
  )
}

export default Textbox
