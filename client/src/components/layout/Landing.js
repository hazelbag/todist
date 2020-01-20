import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

class Landing extends Component {

    componentDidMount() {
        // axios.get('/api/auth')
        // .then(response => {
        //     console.log(response)
        // })
        fetch('/api/auth')
            .then(response => console.log(response))
    }

    onGoogleLinkClick = () => {
        axios.get('/api/auth/', (res, req) => {
            res.redirect('/login')
        })
    }

    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>ToDo APP</b> built using login/auth with the{" "}
                            <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
                            scratch
                        </h4>
                        <br />
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <BrowserRouter>
                                        <a
                                            href="/register"
                                            style={{
                                                width: "140px",
                                                borderRadius: "3px",
                                                letterSpacing: "1.5px"
                                            }}
                                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                        >
                                            Register
                                            </a>
                                    </BrowserRouter>
                                    <br />
                                    <br />
                                </div>
                                <div className="col-4">
                                    <BrowserRouter>
                                        <a
                                            href="/login"
                                            style={{
                                                width: "140px",
                                                borderRadius: "3px",
                                                letterSpacing: "1.5px"
                                            }}
                                            className="btn btn-large waves-effect waves-light hoverable green white-text"
                                        >
                                            Log In
                                            </a>
                                        <br />
                                        <br />
                                    </BrowserRouter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;