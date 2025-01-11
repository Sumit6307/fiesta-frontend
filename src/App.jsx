import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Page404 from "./pages/Page404"
import HomePage from './pages/HomePage'
import Card from "./components/Card"



export default function App () {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/login" element={<Signin />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/card" element={<Card />} />
                </Routes>
            </Router>
        </>
    )
}