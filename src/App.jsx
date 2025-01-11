import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Page404 from "./pages/Page404"




export default function App () {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/login" element={<Signin />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Router>
        </>
    )
}