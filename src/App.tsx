import { ThemeControl } from 'components'
import './styles/index.css'
import { MainRouter } from 'routes'

function App() {
  return (
    <>
      <div className='h-[100vh] w-[100vw]'>
        <ThemeControl />
        <h1 className='text-center font-normal'>This is code base project</h1>
        <MainRouter />
      </div>
    </>
  )
}

export default App
