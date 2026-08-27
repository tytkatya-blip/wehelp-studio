import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../layout/SiteLayout'
import { CasesPage } from '../pages/CasesPage'
import { HomePage } from '../pages/HomePage'
import { WhoWeArePage } from '../pages/WhoWeArePage'

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="who-we-are" element={<WhoWeArePage />} />
        <Route path="cases" element={<CasesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
