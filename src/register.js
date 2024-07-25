import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Register(){
    return(
    <>
    <div className="container1">
    <div className="container">
        <form>
            <div className="form-group">
                <label for="username">Email</label>
                <input type="email" className="form-control" id="username" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
                <label for="password">Confirm Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
                <Link to="/">
                <button type="submit" className="btn">Submit</button></Link>
            </div>
        </form>
    </div></div>
    
    </>
    )
    }
    
    export default Register;