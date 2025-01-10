import LandingPage from "./pages/LandingPage"
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"



export default function App () {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    
                </Routes>
            </Router>
        </>
    )
}