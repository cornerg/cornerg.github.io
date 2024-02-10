import React from 'react';
import './Header.css';
import {Logo, Star, ShootingStar, HamburgerMenu} from '../../utilities/icons';
import {Link} from 'react-router-dom';
import {ROUTES} from "../../views/routes";
import {AccessData} from "../../contexts/contexts";
import ButtonContact from "../ButtonContact/ButtonContact";

export default function Header() {
    const [mouseOver, setMouseOver] = React.useState<HTMLElement | null>(null);
    const [navOutTimeouts, setNavOutTimeouts] = React.useState<Array<NodeJS.Timeout>>([]);
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    const {reduceMotion, setReduceMotion} = React.useContext(AccessData);

    function moveUnderline(optionId: string | null) {
        if(navOutTimeouts && navOutTimeouts.length > 0) {
            for(let timer of navOutTimeouts) {
                clearTimeout(timer);
            }
        }
        let underline = document.getElementById("navLine");
        let option = null;
        if(!underline) {return}

        if(optionId) {
            option = document.getElementById(optionId);
            if(!mouseOver) {
                underline.style.left = `${option?.offsetLeft}px`;
                underline.style.display = "inline";
            }
            underline.style.width = `${option?.clientWidth}px`
            underline.style.left = `${option?.offsetLeft}px`;
            setMouseOver(document.getElementById(optionId));

        } else {
            let timers = [];
            timers.push(setTimeout(() => {
                setMouseOver(null)
                setNavOutTimeouts([...navOutTimeouts, setTimeout(() => {
                    if(underline) {
                        underline.style.display = "none";
                    }
                }, 800)])

            }, 200));
            setNavOutTimeouts(timers);
        }
    }

    function toggleMenu(newState: boolean) {
        console.log("Toggle Menu")
        setShowMobileMenu(newState);
    }

    function clickReduceMotion() {
        localStorage.setItem("JRD-ReduceMotion", !reduceMotion ? "true" : "false");
        setReduceMotion(!reduceMotion);
    }

    console.log()

    return <>
        <div className={"mobileMenu"} style={showMobileMenu ? {top: "72px", opacity: "1"} : {top: "-0", opacity: "0"}}>
            {Object.entries(ROUTES).filter(page => page[1].path !== "/").map(([index, page]) => {
                let pageId = `navLinkM${page.title}`;
                return <Link key={pageId} className={`navLink${window.location.href.includes(page.path) ? " activeNavLink" : ""}`} onClick={() => {toggleMenu(false)}} to={page.path} id={pageId}>{page.title}</Link>
            })}
        </div>
        <header>
            <div className={"headerLeft"}>
                <HamburgerMenu className={"buttonMenu"} onClick={() => {toggleMenu(!showMobileMenu)}}/>
                <Link className={"headerLogo"} to={ROUTES.Home.path}>
                    <Logo/>
                    <p className={"siteName"}>JR Dev</p>
                </Link>
                <div className={"nav"}>
                    <div className={"navUnderline"} id={"navLine"} style={!mouseOver ? {opacity: "0"} :
                        {opacity: "1", top: mouseOver.offsetTop + mouseOver.clientHeight}}/>
                        {Object.entries(ROUTES).filter(page => page[1].path !== "/").map(([index, page]) => {
                            let pageId = `navLink${page.title}`;
                            return <Link key={pageId} className={`navLink${window.location.href.includes(page.path) ? " activeNavLink" : ""}`} to={page.path} id={pageId} onMouseEnter={() => {moveUnderline(pageId)}} onMouseLeave={() => {moveUnderline(null)}}>{page.title}</Link>
                        }
                    )}
                </div>
            </div>
            <div className={"headerRight"}>
                <ButtonContact/>
                <div className={"headerIconButton"} onClick={() => {clickReduceMotion()}}>
                    {reduceMotion ? <Star className={"iconWhite"}/> : <ShootingStar className={"iconWhite"}/>}
                    <p className={"helpText"}>Reduce motion</p>
                </div>
            </div>
        </header>
    </>
}