import { useState } from "react"

function App() {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      {flipped ? (
        <div className={`flex h-screen items-center justify-center transition bg-black duration-1000`}>
          <div className="text-center">
            <h2 className={`text-4xl font-bold mb-2 text-white duration-800 ease-in`}>
              JAMES HWANG
            </h2>

            <p className="text-white font-bold mt-6">
              LINKEDIN (icon)
            </p>
            <p className="text-white font-bold">
              GITHUB
            </p>

            <p className="text-white font-bold mt-4">
              RESUME
            </p>


            <button
              className="mt-12 text-black font-bold bg-white p-2 hover:bg-gray-400 focus:-translate-y-1 hover:-translate-y-0.5"
              onClick={() => setFlipped(!flipped)}
            >
              SEE MORE
            </button>
          </div>
      </div>
      ) : (
        <div className={`flex h-screen items-center justify-center transition bg-white duration-1000`}>
          <div className="text-center">
            <h2 className={`text-4xl font-bold mb-2 text-black duration-800 ease-in`}>
              JAMES HWANG
            </h2>

            <p className="text-black font-bold mt-6 ">
              91JUHWANG@GMAIL.COM
            </p>
            <p className="text-black font-bold">
              (+1) 646-942-7592
            </p>

            <button
              className="mt-12 text-white font-bold bg-black p-2 focus:-translate-y-1 hover:bg-gray-600 hover:-translate-y-0.5"
              onClick={() => setFlipped(!flipped)}
            >
              SEE MORE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
