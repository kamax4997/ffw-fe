import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from 'app/@core/layout'
import Dashboard from 'app/pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
