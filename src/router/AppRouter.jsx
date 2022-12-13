import { Routes, Route } from 'react-router-dom'

import { AuthRoutes } from '../auth'
import { JournalRoutes } from '../journal'

export const AppRouter = () => {

  return (
    <Routes>
        {/* Login y registro*/}
        <Route path='/auth/*' element={<AuthRoutes/>} />

        {/* JournalApp */}
        <Route path='/*' element={<JournalRoutes/>}/>
        
    </Routes>
    )
}
