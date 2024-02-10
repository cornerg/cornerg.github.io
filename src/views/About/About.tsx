import './About.css';
import React, {SyntheticEvent} from 'react';
import {AccessData} from "../../contexts/contexts";
import {card} from "../../models/types";

export default function About() {
    const [currentCard, setCurrentCard] = React.useState(0);
    const [lastScrollPos, setLastScrollPos] = React.useState(0);
    const [blockScroll, setBlockScroll] = React.useState(false);

    let {reduceMotion, setReduceMotion} = React.useContext(AccessData);
    let cards: Array<card> = [
        {index: 0, background: "/about/aboutMe.jpg", title: "Hey, it's me", heading: "Hey there, I'm Jesse.<br /> I design and develop attention-grabbing web apps", body: "I have certification and experience as a graphic designer and web developer. I have spent much of my life exposed to and working with computers, and have a passion for finding creative solutions through clean design and code<br /><br />I differentiate myself through an obsessive attention to detail and expectation for quality in everything I do. I enjoy figuring out how to bring ideas to life and build whatever can be visualized through clever use of fundamental tools."},
        {index: 1, background: "/about/aboutDeveloper.jpg", title: "Developer", heading: "Appealing front-ends, efficient back-ends,<br />with React, Electron, and more", body: "My career with development began from a desire to create the apps I visualized, and that has lead to a passion for building.<br /><br />I've had a basic understanding of HTML and CSS since an early age, and my first job involved working creating apps with low-code platforms like <strong>Bubble.io and Backendless</strong>. This exposed me to the app creation process, but limited what was possible with code.<br /><br />I expanded my development knowledge with online courses, personal projects, and taking on programming tasks at work, which at the time was mostly design. I've taken courses in <strong>HTML, CSS, JavaScript,</strong> and began building full apps with <strong>React.js</strong>, integrating <strong>TypeScript</strong> when possible.<br /><br />At this point I have created countless web apps, developed browser extensions and plugins, and lead the development of a standalone Electron application."},
        {index: 2, background: "/about/aboutDesigner.jpg", title: "Designer", heading: "Fitting, flexible, and accessible interfaces", body: "Beginning with an interest in texture design, I quickly found enjoyment in designing user experiences. Initially with image editors like <strong>PhotoShop</strong>, then transitioning to <strong>Adobe XD</strong>, and now experienced with <strong>Figma</strong> and other visual design software.<br /><br />A good interface is more than just a design that looks nice, but one that is accessible on all devices and is fitting for the app's purpose. With experience designing for modern, classic, and specialized aesthetics has given me an appreciation for all design styles."},
        {index: 3, background: "/about/aboutLearner.jpg", title: "Learner", heading: "Always learning, always improving, always practicing", body: "Though I regularly practice regular development and design to increase my skills with various coding languages and design styles, I always enjoy building new skills and expanding my horizons.<br /><br />Photography, 3D modelling, and video production are some of the things I've been exploring in my spare time, along with learning other languages outside of web development such as C++ for game development. I'm always happy to find opportunities where I can gain new skills or make use of my various other interests."}
    ];

    function handleScroll(event: React.UIEvent<HTMLDivElement, UIEvent>) {
        const target = event.target as HTMLElement;

        if(!blockScroll) {
            setBlockScroll(true);

            if(target.scrollTop > lastScrollPos && currentCard < 3) {
                setCurrentCard(currentCard + 1);
            } else if(target.scrollTop < lastScrollPos && currentCard > 0) {
                setCurrentCard(currentCard - 1);
            } else {
                setTimeout(() => {
                    // @ts-ignore
                    target.scrollTo({top: target.children[0].clientHeight / 2, left: 0, behavior: "instant",})
                    setBlockScroll(false);
                }, 100);
                return;
            }

            setTimeout(() => {
                // @ts-ignore
                target.scrollTo({top: target.children[0].clientHeight / 2, left: 0, behavior: "instant",})
            }, 250)
            setTimeout(() => {
                setLastScrollPos(target.scrollTop);
                setBlockScroll(false);
            }, 300);
        }
    }

    return (
        <div className={"aboutMain"}>
            <div className={"scrollContainer"} onScroll={(event) => {handleScroll(event)}}>
                <div className={"scrollHeight"}/>
            </div>
            <div className={"cardContainer"}>
                <div className={`aboutCard`} style={{backgroundImage: `url(${cards[currentCard].background})`}}>
                    <div className={"cardOverlay"}/>
                    {cards.map((card, index) => {
                        return (
                            <div key={`cardContent-${index}`} className={`cardContent${currentCard === card.index ? " activeContent" : ""}`}>
                                <h2 dangerouslySetInnerHTML={{__html: card.heading}}></h2>
                                <p dangerouslySetInnerHTML={{__html: card.body}}></p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={"aboutNav"}>
                {cards.map((card, index) => {
                    return (
                        <div
                            key={`navEntry-${index}`}
                            className={`navEntry${currentCard === card.index ? " activeEntry" : ""}`}
                            style={{color: currentCard === card.index ? "var(--secondary)" : "var(--body)"}}
                            onClick={() => {setCurrentCard(card.index)}}
                        >
                            <h1>{card.title}</h1>
                            <div className={"dot"} style={{backgroundColor: currentCard === card.index ? "var(--secondary)" : "var(--body)"}}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}