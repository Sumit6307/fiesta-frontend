// import Footer from "../components/Footer"
import Navbar2 from "../components/Navbar2"

export default function HomePage() {
    return (
        <div>
            <Navbar2 />




            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-6xl font-bold text-gray-800">Welcome to the Home Page</h1>
                <p className="text-xl text-gray-600 mt-4">This is a simple Home Page</p>
            </div>
            {/* <Footer /> */}
        </div>
    )
}