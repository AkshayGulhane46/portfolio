import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import '@fontsource/outfit'
import '@fontsource/roboto'

render(<App />, 
document.getElementById('app'))
