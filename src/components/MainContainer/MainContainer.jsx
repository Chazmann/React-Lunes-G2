import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import NotFound from '../Error/NotFound'
const MainContainer = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
       

                    <Route path="*" element={<NotFound />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainContainer