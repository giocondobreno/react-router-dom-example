import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Photos } from '../pages/Photos'
import { Psd } from '../pages/Psd'
import { Vector } from '../pages/Vector'
import { Videos } from '../pages/Videos'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Vector />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/psd" element={<Psd />} />
        <Route path="/Videos" element={<Videos />} />
      </Route>
    </Routes>
  )
}
