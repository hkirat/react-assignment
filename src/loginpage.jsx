import "./login.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
let mailid ="prathameshpatil2323@gmail.com";
let password1 = "hp@12345";
function LoginPage(){
    const[logged , setlogged] = useState(false);
    const[email,setEmail]=useState("");
    const[pass,setpassword]=useState("");
    const navigate = useNavigate();
    function checkauthentication() {
    console.log("here in cheak");
        if(mailid===email&&pass===password1){
            console.log("validated");
            setlogged(true);
            console.log(navigate);
        }
        else{
            console.log("not-validated");
        }

    }

    function getEmail() {
        console.log(document.getElementById("typeEmailX").value);
        setEmail(document.getElementById("typeEmailX").value);
    }

    function getPassword() {
        console.log(document.getElementById("typePasswordX").value);
        setpassword(document.getElementById("typePasswordX").value);
    }

    return(
        <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" >
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={getEmail} value={email}/>
                                            <label className="form-label" htmlFor="typeEmailX" >Email</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={getPassword} value={pass}/>
                                            <label className="form-label" htmlFor="typePasswordX" >Password</label>
                                        </div>

                                        <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#">Forgot password?</a></p>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={checkauthentication}>Login</button>

                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                            <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                        </div>

                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account?
                                            <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default LoginPage;