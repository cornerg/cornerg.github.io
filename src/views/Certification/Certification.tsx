import "./Certification.css";
import React from "react";
import {certificate} from "../../models/types";

const certificates: Array<certificate> = [
    {
        title: "Graphic Design Honors Diploma",
        from: "NSCC",
        image: "/certificate/NSCC-Cert.png",
        date: new Date('18 Jun 2021 12:00:00 GMT'),
        link: "/certificate/NSCC-Cert-Full.png",
        description: "A two-year college program at Nova Scotia Community College. The course covers various aspects of web design including UX/UI practices and front-end development, as well as other areas of graphic design including those outside of web and UI, such as print design, logos, iconography, and photography."
    },
    {
        title: "Responsive Web Design",
        from: "FreeCodeCamp",
        image: "/certificate/FCC-Cert-RespWebDes.png",
        date: new Date('01 Jun 2023 12:00:00 GMT'),
        link: "https://freecodecamp.org/certification/JessIGuess/responsive-web-design",
        description: "An online, average 300-hour web development program with Free Code Camp. This program teaches multiple levels of front-end development fundamentals, and involves the creation of several basic websites targeting different skills."
    },
    {
        title: "JavaScript Algorithms & Data Structures",
        from: "FreeCodeCamp",
        image: "/certificate/FCC-Cert-JavaScript.png",
        date: new Date('30 Apr 2023 12:00:00 GMT'),
        link: "https://freecodecamp.org/certification/JessIGuess/javascript-algorithms-and-data-structures",
        description: "An online, average 300-hour JavaScript program with Free Code Camp. Mostly focusing on web development implementations of JavaScript, this course introduces all of the essential functionalities and rules of the coding language, and involves building multiple complex algorithms or functions."
    }
]

export default function Certification() {

    function clickWork(address: string) {
        window.open(address, "_blank");
    }

    return (
        <div className={"certMain"}>
            <div className={"certList"}>
                {certificates.map((cert, index) => {
                    return (
                        <div key={`cert-${index}`} className={"certificate"} onClick={() => {clickWork(cert.link)}}>
                            <div className={"certImage"} style={{backgroundImage: `url("${cert.image}")`}}/>
                            <div className={"certContent"}>
                                <h2>{cert.title}</h2>
                                <p className={"certDate"}>{cert.date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})}</p>
                                <p className={"certDescription"}>{cert.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}