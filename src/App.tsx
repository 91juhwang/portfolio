import Card from './components/Card'

function App() {

  return (
    <>
      <div>
        <Card heading='JAMES HWANG' body=''>
        <p className="text-gray-700 text-base">
          df
        </p>
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
