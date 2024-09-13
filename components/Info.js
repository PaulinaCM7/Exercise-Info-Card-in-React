import React from "react"

export default function Info(){
    return(
        <div className="info">
            <img src="./images/infophoto.png"/>
            <h1 className="info--name">Laura Smith</h1>
            <h3 className="info--title">Frontend Developer</h3>
            <h5 className="info--website">laurasmith.website</h5>
            <div className="info--buttons">
                <button className="info--email"><i class="fas fa-envelope"></i>Email</button>
                <button className="info--linkedin"><i class="fab fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}