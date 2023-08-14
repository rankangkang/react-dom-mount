import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'antd'
import { mount } from 'react-dom-mount'
import MyModal from './Modal'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ReactDom v18</h1>
      <Button onClick={() => {
        const close = mount(<MyModal destroy={() => {
          close()
        }} />)
      }}>
        点击 mount
      </Button>
    </>
  )
}

export default App
