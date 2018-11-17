import React from "react";
import "./HelloBootstrap.css";


class Footer extends React.Component {



render(){

    return(
    <footer>
<h1>
    Ray's Choice Board
</h1>

<nav>
    <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contribute</a></li>
    </ul>
</nav>

<article>
    <p><span>OUR MISSION</span> is to help non-verbal individuals with developing language.</p>

    <nav class="social">
        <h3>FIND US ON SOCIAL MEDIA</h3>
        <ul>
            <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-slack" aria-hidden="true"></i></a></li>
        </ul>
    </nav>
</article>
</footer>
    )
}
}



// {/* end-footer */}

export default Footer;