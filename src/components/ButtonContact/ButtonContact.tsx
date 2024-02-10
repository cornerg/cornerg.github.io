import "./ButtonContact.css";
import React from "react";
import {Envelope, LinkedIn, Dribbble} from "../../utilities/icons";


export default function ButtonContact() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [clickOutAdded, setClickOutAdded] = React.useState(false);
    const [abortController, setAbortController] = React.useState(new AbortController());
    const [abortSignal, setAbortSignal] = React.useState(abortController.signal);
    function clickButton(newState: boolean) {
        let menu = document.getElementById("contactMenu");

        if(newState) {
            setIsOpen(newState);

            setTimeout(() => {
                if(!clickOutAdded) {
                    window.addEventListener("click", (event) => {
                        let menuPos = menu?.getBoundingClientRect();
                        let click = {x: event.clientX, y: event.clientY}
                        if (menuPos && ((click.x < menuPos.left || click.x > menuPos.right) || (click.y < menuPos.top || click.y > menuPos.bottom))) {
                            clickButton(false);
                        }
                    }, { signal: abortSignal })
                    setClickOutAdded(true);
                }

                if(menu) {
                    menu.style.top = "36px";
                    menu.style.opacity = "1";
                }
            }, 30);
        } else {
            if(menu) {
                menu.style.top = "0";
                menu.style.opacity = "0";
            }
            setTimeout(() => {
                if(abortController) {
                    abortController.abort();
                    let newController = new AbortController();
                    let newSignal = newController.signal;
                    setAbortController(newController);
                    setAbortSignal(newSignal);
                    setClickOutAdded(false);
                }
                setIsOpen(newState)
            }, 200);
        }
    }

    function contact(option: string) {
        switch (option) {
            case "email":
                window.open("mailto:hi@jesseramey.ca");
                break;
            case "linkedin":
                window.open("www.linkedin.com/in/jesse-ramey-91b518209", "_blank");
                break;
            case "dribbble":
                window.open("https://dribbble.com/Jesse_Design", "_blank");
                break;
        }
    }


    return (
        <div className={`contactButton${isOpen ? " contactButtonActive" : ""}`} onClick={() => {clickButton(!isOpen)}}>
            Contact Me
            <div id={"contactMenu"} className={"contactDropdown"} style={{display: isOpen ? "flex" : "none"}}>
                <Envelope onClick={() => {contact("email")}} className={"contactIcon iconEnvelope"}/>
                <LinkedIn onClick={() => {contact("linkedin")}} className={"contactIcon iconLinkedIn"}/>
                <Dribbble onClick={() => {contact("dribbble")}} className={"contactIcon iconDribbble"}/>
            </div>
        </div>
    )
}