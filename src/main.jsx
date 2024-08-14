import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './App/store.jsx'


createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <App />
    </Provider>

)