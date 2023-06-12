import ReactDOM from 'react-dom/client'
import { MemoHook } from './07-memos/MemoHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <MemoHook />,
  //</React.StrictMode>,
)
