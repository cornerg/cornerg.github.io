import React from 'react';
import './Hero.css';
import {ReactComponent as DeveloperOutline} from "../../utilities/hero/bigText-developer-outline.svg";
import {ReactComponent as DeveloperFill} from "../../utilities/hero/bigText-developer-fill.svg";
import {ReactComponent as AndOutline} from "../../utilities/hero/bigText-and-outline.svg";
import {ReactComponent as AndFill} from "../../utilities/hero/bigText-and-fill.svg";
import {ReactComponent as DesignerOutline} from "../../utilities/hero/bigText-designer-outline.svg";
import {ReactComponent as DesignerFill} from "../../utilities/hero/bigText-designer-fill.svg";
import {AccessData} from "../../contexts/contexts";

export default function Hero() {

    let {reduceMotion} = React.useContext(AccessData);

    const vp = React.useRef({width: window.innerWidth, height: window.innerHeight});
    const texts = React.useRef<any>()


    let moveDebounceTimer = React.useRef<NodeJS.Timeout>();
    let lastMoveEvent: null | React.MouseEvent = null;

    function moveDebounce(event: React.MouseEvent) {
        lastMoveEvent = event;

        if(!moveDebounceTimer.current) {
            moveDebounceTimer.current = setTimeout(() => {if(lastMoveEvent) {adjustText(lastMoveEvent)}}, 30);
        }
    }

    function adjustText(event: React.MouseEvent) {
        if(!texts.current) {
            const outlineDev = document.getElementById("outlineDev");
            const outlineAnd = document.getElementById("outlineAnd");
            const outlineDes = document.getElementById("outlineDes");
            const outlineTexts = [outlineDev, outlineAnd, outlineDes];

            const fillDev = document.getElementById("fillDev");
            const fillAnd = document.getElementById("fillAnd");
            const fillDes = document.getElementById("fillDes");
            const fillTexts = [fillDev, fillAnd, fillDes];

            texts.current = {outlines: outlineTexts, fills: fillTexts};
        }

        for(let text of texts.current.outlines) {
            if(text) {
                text.style.right = `${(event.clientX - (vp.current.width / 2)) / vp.current.width}vw`;
                text.style.top = `${(0 - (event.clientY - (vp.current.height / 2)) / vp.current.height) * 2}vh`;
            }
        }
        for(let text of texts.current.fills) {
            if(text) {
                text.style.left = `${(event.clientX - (vp.current.width / 2)) / vp.current.width}vw`;
                text.style.top = `${((event.clientY - (vp.current.height / 2)) / vp.current.height) * 2}vh`;
            }
        }

        moveDebounceTimer.current = undefined;
    }

    return (
        <div className={"heroMain"} onMouseMove={
            (event) => {
                if(!reduceMotion) {moveDebounce(event)}
            }
        }>
            <div className={"heroTitle"}>
                <div className={"heroTitleRow heroTitleDeveloper"} id={"heroTitleTop"}>
                    <DeveloperOutline className={"heroText outlineText"} id={"outlineDev"}/>
                    <DeveloperFill className={"heroText fillText"} id={"fillDev"}/>
                </div>
                <div className={`heroTitleRow heroTitleAnd`}>
                    <AndOutline className={"heroText outlineText"} id={"outlineAnd"}/>
                    <AndFill className={"heroText fillText"} id={"fillAnd"}/>
                </div>
                <div className={"heroTitleRow heroTitleDesigner"} id={"heroTitleBottom"}>
                    <DesignerOutline className={"heroText outlineText"} id={"outlineDes"}/>
                    <DesignerFill className={"heroText fillText"} id={"fillDes"}/>
                </div>
            </div>
            <div className={"heroImage"}/>
        </div>
    )
}