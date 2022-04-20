import React from 'react'
function Banner() {
  return (
    <div><div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
    <div className="space-y-5 px-10">
      <h1 className="max-w-xl font-serif text-6xl">
        <span className="underline decoration-black decoration-4">
          Medium
        </span>{' '}
        is a place to write, read and connect
      </h1>
      <h2>
        Its easy and free to post your thinking on any topic and connect
        with millions of readers.
      </h2>
    </div>
    <img
    className="hidden md:inline-flex h-32 lg:h-full"
      src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
      alt="Medium-logo"
    />
  </div></div>
  )
}

export default Banner
