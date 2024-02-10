import './WorkDetails.css';
import React from 'react';
import {ChevronR, ChevronL, Close} from '../../utilities/icons';
import {WorkObject} from "../../models/types";

export default function WorkDetails(props: { workObj: WorkObject | null, togglePopup: Function }) {
    const [openImage, setOpenImage] = React.useState(props?.workObj?.images[0]);

    if(!props.workObj) {
        return null
    }

    const {title, preview, description, date, images, codePenEmbed} = props.workObj;

    const togglePopup = props.togglePopup;

    if(!openImage) {
        if(images[0]) {
            setOpenImage(images[0])
        } else if(preview) {
            setOpenImage(preview)
        }
    } else if(images.length > 0 && !images.includes(openImage)) {
        setOpenImage(images[0]);
    }

    function imageNav(isNext: boolean) {
        if(openImage) {
            let newIndex = images.indexOf(openImage) + (isNext ? 1 : -1);
            setOpenImage(images[newIndex >= images.length ? 0 : (newIndex < 0 ? images.length - 1 : newIndex)]);
        }
    }

    function viewImage(imageURL: string | undefined) {
        if(imageURL) {
            window.open(imageURL, "_blank");
        }
    }

    return (
        <div className={"detailsPopup"} onClick={(event) => {event.stopPropagation()}}>
            <div className={"detailsHead"}>
                <h2 className={"detailsTitle"}>{title}</h2>
                <Close className={"popupCloseDetails"} onClick={() => {togglePopup(false, null)}}/>
            </div>
            <p className={"detailsDate"}>{new Date(date).toLocaleDateString("en-us", {month: "short", day: "numeric", year: "numeric"})}</p>
            <div className={"contentImages"} style={codePenEmbed ? {display: "none"} : {}}>
                <div className={"imageGallery"} style={images.length > 1 ? {} : {display: "none"}}>
                    <div className={"imagePrev"} onClick={() => imageNav(false)}><ChevronL className={"imageNavIcon"}/></div>
                    <div className={"imageList"}>
                        {images.map((image: string, index: number) => {
                            if(image) {
                                return <div
                                    key={`image${index}`}
                                    className={`listImage ${openImage === image ? "currentImage" : ""}`}
                                    onClick={() => {
                                        setOpenImage(image)
                                    }}
                                    style={{
                                        backgroundImage: `URL(${image})`,
                                        backgroundSize: image.split(".")[1].toLowerCase() === "svg" ? "contain" : "cover",
                                        aspectRatio: image.split(".")[1].toLowerCase() === "svg" ? "1" : "16 / 9"
                                    }}
                                />
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    <div className={"imageNext"} onClick={() => {imageNav(true)}}><ChevronR className={"imageNavIcon"}/></div>
                </div>
                <div className={"bigImageContainer"}>
                    <div className={"bigImage"} onClick={() => {viewImage(openImage)}} style={{backgroundImage: `URL(${openImage})`}}/>
                </div>
            </div>
            <div className={"contentCodePen"} style={codePenEmbed ? {} : {display: "none"}}>
                {codePenEmbed ? <div className={"codePenEmbed"} dangerouslySetInnerHTML={{__html: codePenEmbed}}/> : null}
            </div>
            <div className={"contentDescription"} style={description ? {} : {display: "none"}}>
                <p className={"workDescription"}>{description}</p>
            </div>
        </div>
    )
}