import Home from "./pages/Home"



function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
        <div className="ml-[260px] mr-[260px]">
            <Home />
        </div>
        
    )
}
export default App
