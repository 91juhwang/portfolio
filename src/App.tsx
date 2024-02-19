import Card from './components/Card'

function App() {

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <Card>
          <div className="px-6 py-4">
            <h2 className="text-3xl font-bold mb-2">
              JAMES HWANG
            </h2>
            <p className="text-gray-700 text-base">
              (+1) 646-942-7592
            </p>
            <p className="text-gray-700 text-base">
              91juhwang@gmail.com
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </Card>
      </div>
    </>
  )
}

export default App
