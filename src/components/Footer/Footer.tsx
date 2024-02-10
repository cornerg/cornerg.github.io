import "./Footer.css";
import React from "react";
import {Close} from "../../utilities/icons";

type photoCredit = {name: string, userLink: string, image: string, imageLink: string}
const photoCredits: Array<photoCredit> = [
    {name: "Lukas Blazek", userLink: "https://unsplash.com/@goumbik", image: "categ1-webapps.jpg", imageLink: "https://unsplash.com/photos/turned-on-black-and-grey-laptop-computer-mcSDtbWXUZU"},
    {name: "Fili Santillán", userLink: "https://unsplash.com/@filisantillan", image: "categ2-codepens.jpg", imageLink: "https://unsplash.com/photos/black-flat-screen-computer-monitor-on-brown-wooden-desk-qp51FQhBnS0"},
    {name: "Scott Graham", userLink: "https://unsplash.com/@homajob", image: "categ3-wireframes.jpg", imageLink: "https://unsplash.com/photos/person-holding-pencil-near-laptop-computer-5fNmWej4tAA"},
    {name: "Bastian Riccardi", userLink: "https://unsplash.com/@shutter_speed_", image: "categ4-logos.jpg", imageLink: "https://unsplash.com/photos/a-group-of-colorful-dice-PSCxb6qpiFg"},
    {name: "Ayush Bharshankar", userLink: "https://unsplash.com/@ayushxb", image: "categ5-3dmodels.jpg", imageLink: "https://unsplash.com/photos/brown-doughnut-on-white-table-S2XSvVyUxpo"},
    {name: "Indra Projects", userLink: "https://unsplash.com/@indraprojects", image: "categ6-photography.jpg", imageLink: "https://unsplash.com/photos/a-camera-sitting-on-top-of-a-wooden-bench-NBr-ZtwWUbc"},
    {name: "Sigmund", userLink: "https://unsplash.com/@sigmund", image: "aboutDesigner.jpg", imageLink: "https://unsplash.com/photos/white-printer-paper-on-white-table-4UGmm3WRUoQ"},
    {name: "Christina @ wocintechchat.com", userLink: "https://unsplash.com/@wocintechchat", image: "aboutDeveloper.jpg", imageLink: "https://unsplash.com/photos/shallow-focus-photo-of-person-using-macbook-6Dv3pe-JnSg"},
    {name: "Firmbee.com", userLink: "https://unsplash.com/@firmbee", image: "aboutLearner.jpg", imageLink: "https://unsplash.com/photos/person-writing-on-white-paper-gcsNOsPEXfs"},
]

export default function Footer() {
    const [showCredits, setShowCredits] = React.useState(false);

    function togglePopup(newState: boolean) {
        console.log("togglePopup")
        const popup = document.getElementById("creditsPopup");

        if(popup) {
            if (newState) {
                popup.style.display = "flex"
                setTimeout(() => {
                    if (popup) {
                        popup.style.opacity = "1";
                    }
                }, 30);
            } else {
                popup.style.opacity = "0"
                setTimeout(() => {
                    popup.style.display = "none"
                }, 230)
            }
        }
    }

    function navigate(address: string) {
        window.open(address, "_blank");
    }


    return <>
        <div className={"footer"}>
            <p>website by <strong>Jesse Ramey</strong></p>
            <p className={"buttonCredits"} onClick={() => {togglePopup(!showCredits)}}>Photo credits</p>
        </div>
        <div className={"popupBackground"} id={"creditsPopup"} onClick={() => {togglePopup(false)}}>
            <div className={"popupCredits"} onClick={(event) => {event.stopPropagation()}}>
                <div className={"popupHead"}>
                    <h2 className={"popupTitle"}>Thanks to These Photographers</h2>
                    <Close className={"popupCloseCredits"} onClick={() => {togglePopup(false)}}/>
                </div>
                <hr />
                <div className={"creditsList"}>
                    {photoCredits.map((credit, index) => {
                        return <div className={"credit"} key={`credit-${index}`}>
                            <p onClick={() => {navigate(credit.imageLink)}}><strong>{credit.image}</strong>:</p>
                            <p onClick={() => {navigate(credit.userLink)}}>{credit.name}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
}