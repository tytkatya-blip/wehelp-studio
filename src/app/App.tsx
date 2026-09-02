import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../layout/SiteLayout'
import { HomePage } from '../pages/HomePage'

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
