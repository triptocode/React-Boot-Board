import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container mt-5" >
            {/* <div className="jumbotron" style={{background:'linear-gradient(to right, #bdc3c7, #2c3e50)'}}> */}
            {/* <div className="jumbotron" style={{background:'bisque'}}> */}
            {/* <div className="jumbotron" style={{background:'#c2f8d2'}}> */}
            {/* <div className="jumbotron" style={{background:'linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)'}}> */}
            <div className="jumbotron" style={{background:'linear-gradient(to left, #403b4a, #e7e9bb)'}}>
           
            
                <h1 className="display-4" style={{color:'blue'}}>Hey! I'm Jenny! </h1>
                <p className="lead" >
                    Korean Web Developer interested in Web, Embeded, AI. 
                </p>
                <h7>Tech Stack used to create this website as follows:</h7><h7 style={{color:'blue'}}><br></br> SpringBoot, React, Nginx, Docker</h7>
                <hr className="my-4" />
                <p>
                    Check out the latest IT posts or share your own.
                </p>
				<Link to="/bbslist">
                {/* <button className="btn btn-primary btn-lg" style={{background:'#42d26d'}}>Go to 'awesome SPA Board'</button> */}
					<button className="btn btn-primary btn-lg" >Go to the awesome SPA Board !</button>
				</Link>
				<br></br><br></br>
                <div className="mt-4">
                    <h3 >👩‍💻Github & Blog</h3>
                    <ul>
                        <li>
							- &nbsp;
                            <a href="https://triptotest02.tistory.com/" target="_blank" rel="noopener noreferrer">My Tech Study Blog</a>
                        </li>
                        <li>
							- &nbsp;
                            <a href="https://github.com/triptocode" target="_blank" rel="noopener noreferrer">My GitHub Repository</a>
                        </li>
                    </ul>
                </div>
				<br></br>
                <div className="mt-4">
                    <h5>📧Get in touch by email</h5>
						- &nbsp;
						<a href="mailto:3580rio@gmail.com">3580rio@gmail.com</a>

                </div>
            </div>
        </div>
    );
}

export default Home;