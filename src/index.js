import { createRoot } from 'react-dom/client'
// Styles
import '@styles/globals.scss'

// App
import App from '@components/App'

const root = createRoot(document.getElementById('root'))
root.render(<App />)

const devMode = process.env.NODE_ENV === 'development'

if (devMode && module && module.hot) {
    module.hot.accept()
}