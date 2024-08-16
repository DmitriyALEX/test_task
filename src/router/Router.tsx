import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import Layout from '../components/layout'
import RocketDetailsPage from '../pages/RocketDetailsPage/RocketDetailsPage'
import SavedPage from '../pages/SavedPage/SavedPage'

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/:id" element={<RocketDetailsPage />} />
                    <Route path="/saved" element={<SavedPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
