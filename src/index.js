import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const store = configureStore()

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
