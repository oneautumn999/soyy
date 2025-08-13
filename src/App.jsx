import { BrowserRouter } from 'react-router-dom'
import AppRouter from './route/router'
import Layout from './layout/Layout-Pages'
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  )
}

export default App