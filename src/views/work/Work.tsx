import './Work.css';
import React from 'react';
import WorkNav from "../../components/WorkNav/WorkNav";
import WorkDetails from "../../components/workDetails/WorkDetails";
import {WorkObject, WorkCategory} from "../../models/types";
import {WebDev, CodePen, Wireframe, Icons, Modeling, Photography} from "../../utilities/icons";

export const workCategories: Array<WorkCategory> = [
    {
        title: "Development",
        background: "/work/categories/categ1-webapps.jpg",
        color: "#BFBF00",
        icon: <WebDev className={"categoryIcon"}/>,
        works: [
            {
                title: "Homent Time Tracking Desktop App",
                date: 1726412400000,
                preview: "/work/development/HomentTimeTracking/devTimerPreview.jpg",
                description: "In a work project, the client wanted time tracking. This was initially planned to be a browser extension until I pointed out the limitations of extensions, and it was decided we should make a desktop app. As the only person with extensive JavaScript and coding knowledge in the low-code agency, it fell to me to create the desktop application using Electron. The app has fully featured time tracking, with an always-on-screen widget.",
                images: ["/work/development/HomentTimeTracking/devTimer1.png", "/work/development/HomentTimeTracking/devTimer2.png", "/work/development/HomentTimeTracking/devTimer3.png", "/work/development/HomentTimeTracking/devTimer4.png", "/work/development/HomentTimeTracking/devTimerWidget.png"],
                codePenEmbed: null
            },
            {
                title: "Poképlanner",
                date: 1726412400000,
                preview: "/work/development/PokePlanner/PokePlanner-1.jpg",
                description: "As one of my early React projects, this app was created using almost entirely vanilla React and JavaScript. The purpose of the app is to allow players of Pokémon games to plan a team of up to six members by searching and filtering through a full Pokédex and selecting the desired Pokémon. This functional app shows what types your team has coverage for, and recommends types that would cover the most of your remaining weaknesses.",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Homent",
                date: 1687276800000,
                preview: "/work/development/Homent/devHomentPreview.jpg",
                description: "Initially an internal project, Homent is a project management platform for agencies. I was the primary developer for the projects first year, building most of the app's front-end and database design, as well as providing direction for others working on the project. The project includes a companion app I was responsible for building in Electron to allow users to track time spent working on individual tasks.",
                images: ["/work/development/Homent/devHomentLanding.png", "/work/development/Homent/devHomentDashboard.jpg", "/work/development/Homent/devHomentPermissions.jpg", "/work/development/Homent/devHomentProfile.jpg", "/work/development/Homent/devHomentTiming.jpg"],
                codePenEmbed: null
            },
            {
                title: "Invoice Management App",
                date: 1726412400000,
                preview: "/work/development/InvoiceManager/devInvoicerPreview.jpg",
                description: "Another client app, this was intended for internal use by the client for managing invoices more easily by leveraging AI in conjunction with a custom platform. The client always submitted the invoice info from their own clients as an email, so this platform uses Vertex AI to extract the invoice data and, upon approval, adds it to their financial software. I lead the UI design and AI functionality for this app.",
                images: ["/work/development/InvoiceManager/devInvoicerCompare.png", "/work/development/InvoiceManager/devInvoicerList.png", "/work/development/InvoiceManager/devInvoicerInfo.png"],
                codePenEmbed: null
            },
            {
                title: "ParaScope",
                date: 1687276600000,
                preview: "/work/development/ParaScope/ParaScope-1.png",
                description: "Prior to working on an internal project, we were feeling a need for certain organization and project management tools, so I took the liberty to design my own starting point based on what I felt we needed. What was actually built turned out to be very different from this, but aspects were used as inspiration in both design and functionality.",
                images: ["/work/development/ParaScope/ParaScope-1.png", "/work/development/ParaScope/ParaScope-2.png", "/work/development/ParaScope/ParaScope-3.png", "/work/development/ParaScope/ParaScope-4.png", "/work/development/ParaScope/ParaScope-5.png"],
                codePenEmbed: null
            },
        ]
    },
    {
        title: "Code Pens",
        background: "/work/categories/categ2-codepens.jpg",
        color: "#47CF73",
        icon: <CodePen className={"categoryIcon"}/>,
        works: [
            {
                title: "Spinner Selector",
                date: 1699120800000,
                preview: "/work/previews/penSpinner.jpg",
                description: "Some colleagues were working on a spinner element for a client project and were struggling with how to make it dynamic. Their first attempt was to simply rotate a static svg, but this would require a new svg for any changes made to the list of options. Although I was not part of the project, in my time I decided to challenge myself to solve the issue using no SVGs for the visuals. This was designed based on the functionality desired by the client.",
                images: [],
                codePenEmbed: `<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="MWLbOeQ" data-user="jessiguess"></p>`
            },
            {
                title: "Reactive Shine Button",
                date: 1696042800000,
                preview: "/work/previews/penShineButton.jpg",
                description: "I've always enjoyed satisfying modern CSS button design; the creativity you can express with such a simple feature leads to no end of ways to entice users to take action. In this pen, I was trying to make a reactive button that would glow or shimmer based on where your cursor was. This functionality could be used in many other ways as well, such as reactive shadows or reactive offsets.",
                images: [],
                codePenEmbed: `<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="rNormXo" data-user="jessiguess"></p>`
            },
            {
                title: "Scanline Textbox",
                date: 1694574000000,
                preview: "/work/previews/penScanTextbox.jpg",
                description: "For a personal project, I was hoping to achieve a sci-fi feel with the UI. An aspect I had envisioned early on was vertically-panning scanlines as seen in a lot of sci-fi holograms and displays. The following CodePen \"Scanlines Overlay\" was where I started with the idea, and I then expanded it to a responsive content box I could use for text or images. This box uses an infinite CSS animation to pan a linear gradient, meaning it requires no images and is highly customizable.",
                images: [],
                codePenEmbed: `<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="bGOWraG" data-user="jessiguess"></p>`
            },
            {
                title: "Scanline Overlay",
                date: 1693018800000,
                preview: "/work/previews/penScanOverlay.jpg",
                description: "I had started a personal project and had the idea of making it in a visual style of a sci-fi holographic display. One of the main ideas I had going into the project was panning scanlines as seen in a lot of sci-fi movies in holograms. I didn't want to resort to using images and wanted the result to be responsive and adjustable to various sizes. To achieve this, I use a repeating linear gradient to render the lines themselves on an overlay, then use a CSS animation to pan them.",
                images: [],
                codePenEmbed: `<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="VwqvNKM" data-user="jessiguess"></p>`
            },
            {
                title: "Pokeball Loading Animation",
                date: 1698202800000,
                preview: "/work/previews/penPokeball.jpg",
                description: "This is a loading animation that would play in the middle of the screen for the brief period a web app takes to fetch data. In the PokePlanner project, the most efficient method to load all the necessary data was to fetch all data from the database once on page load, and store it in localStorage so it wouldn't need to be fetched again, even after a refresh. This doesn't take more than a second or so, but did justify a loading animation, so I decided to make a fitting one using pure CSS; no SVGs.",
                images: [],
                codePenEmbed: `<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="NWoqOOo" data-user="jessiguess"></p>`
            }
        ]
    },
    {
        title: "UI Design",
        background: "/work/categories/categ3-wireframes.jpg",
        color: "#6200D1",
        icon: <Wireframe className={"categoryIcon"}/>,
        works: [
            {
                title: "VaxPass App",
                date: 1635373455000,
                preview: "/work/wireframes/VaxPass/wireframesVPNSPreview.jpg",
                description: "During the peak of the pandemic, outside of work I was asked if I could design the UI for a potential mobile app to better handle storing people's vaccination status, with an emphasis on ease of use to quickly access your information when it was routinely needed for entering businesses. This app was designed with accessibility in mind, featuring light and dark modes of all pages, and a clear step-by-step guide through the brief process.",
                images: ["/work/wireframes/VaxPass/wireframesVPNSSplash.png", "/work/wireframes/VaxPass/wireframesVPNSStart.png", "/work/wireframes/VaxPass/wireframesVPNSStartDark.png", "/work/wireframes/VaxPass/wireframesVPNSInfo.png"],
                codePenEmbed: null
            },
            {
                title: "NSCC Website Concept",
                date: 1610576655000,
                preview: "/work/wireframes/NSCC/wireframesNSCCPreview.png",
                description: "During my graphic design course, one of my tasks towards the end of the course was to redesign the website for the college with a few stipulations. This was the resulting wireframe.",
                images: ["/work/wireframes/NSCC/wireframesNSCCPage1.png", "/work/wireframes/NSCC/wireframesNSCCPage2.png", "/work/wireframes/NSCC/wireframesNSCCMobile.png"],
                codePenEmbed: null
            },
            {
                title: "G915 Promotional Email",
                date: 1644963855000,
                preview: "/work/wireframes/G915/wireframesG915Preview.png",
                description: "As a demonstration for another company, I was asked to create a concept for a promotional email for a product I've used before. As I get emails from this brand already, I decided to try making an on-brand advertisement email for the keyboard I use. Some copy and imagery was used from their webpage, but the design and layout is entirely customized.",
                images: ["/work/wireframes/G915/wireframesG915Desktop.jpg", "/work/wireframes/G915/wireframesG915Mobile.jpg"],
                codePenEmbed: null
            },
            {
                title: "Weather App",
                date: 1613773455000,
                preview: "/work/wireframes/Weather/wireframesWeatherPreview.png",
                description: "Earlier in my career, I felt the urge to exercise making mobile-aimed interfaces and decided to make a simple UI for a weather application. All of the icons are custom-made, and although not all are shown in the wireframe, I created a full set of stylistically-matching weather icons for all weather events.",
                images: ["/work/wireframes/Weather/wireframesWeatherRain.png"],
                codePenEmbed: null
            }
        ]
    },
    {
        title: "Logos & Icons",
        background: "/work/categories/categ4-logos.jpg",
        color: "#7B7B7B",
        icon: <Icons className={"categoryIcon"}/>,
        works: [
            {
                title: "Balloon Framework",
                date: 1701815055000,
                preview: "/work/logosAndIcons/BalloonFramework/iconsBFPreview.png",
                description: "",
                images: ["/work/logosAndIcons/BalloonFramework/iconsBFSave.svg", "/work/logosAndIcons/BalloonFramework/iconsBFSettings.svg", "/work/logosAndIcons/BalloonFramework/iconsBFEnvelope.svg", "/work/logosAndIcons/BalloonFramework/iconsBFSend.svg"],
                codePenEmbed: null
            },
            {
                title: "Section Types",
                date: 1699050255000,
                preview: "/work/logosAndIcons/sectionType/iconsSectionsPreview.png",
                description: "",
                images: ["/work/logosAndIcons/SectionType/iconsSectionQuiz.svg", "/work/logosAndIcons/SectionType/iconsSectionChoices.svg", "/work/logosAndIcons/SectionType/iconsSectionFile.svg", "/work/logosAndIcons/SectionType/iconsSectionCode.svg", "/work/logosAndIcons/SectionType/iconsSectionVideo.svg", "/work/logosAndIcons/SectionType/iconsSectionText.svg", "/work/logosAndIcons/SectionType/iconsSectionCheck.svg", "/work/logosAndIcons/SectionType/iconsSectionLong.svg", "/work/logosAndIcons/SectionType/iconsSectionEmbed.svg", "/work/logosAndIcons/SectionType/iconsSectionImage.svg"],
                codePenEmbed: null
            },
            {
                title: "Switch Transfer Tool",
                date: 1680819855000,
                preview: "/work/logosAndIcons/iconsSTTPreview.png",
                description: "",
                images: ["/work/logosAndIcons/iconsSTTLarge.png"],
                codePenEmbed: null
            },
            {
                title: "Events",
                date: 1661120655000,
                preview: "/work/logosAndIcons/Events/iconsEventsPreview.png",
                description: "",
                images: ["/work/logosAndIcons/Events/iconsEventsSentFile.svg", "/work/logosAndIcons/Events/iconsEventsBeforeDate.svg", "/work/logosAndIcons/Events/iconsEventsUrgentMail.svg", "/work/logosAndIcons/Events/iconsEventsAfterTime.svg", "/work/logosAndIcons/Events/iconsEventsAfterDate.svg", ],
                codePenEmbed: null
            },
            {
                title: "Financial App",
                date: 1665008655000,
                preview: "/work/logosAndIcons/FinancialApp/iconsFinancialPreview.png",
                description: "",
                images: ["/work/logosAndIcons/FinancialApp/iconsFinancialPermissions.svg", "/work/logosAndIcons/FinancialApp/iconsFinancialAccount.svg", "/work/logosAndIcons/FinancialApp/iconsFinancialBell.svg", "/work/logosAndIcons/FinancialApp/iconsFinancialContacts.svg", "/work/logosAndIcons/FinancialApp/iconsFinancialForms.svg", "/work/logosAndIcons/FinancialApp/iconsFinancialFormComplete.svg", "/work/logosAndIcons/FinancialApp/iconsFinancialTyping.svg", "/work/logosAndIcons/FinancialApp/iconsFinancialSendMail.svg", "/work/logosAndIcons/FinancialApp/iconsFinancialLock.svg", "/work/logosAndIcons/FinancialApp/iconsFinancialUserSearch.svg"],
                codePenEmbed: null
            },
            {
                title: "Heart Medical",
                date: 1595024655000,
                preview: "/work/logosAndIcons/iconsHeartPreview.png",
                description: "",
                images: ["/work/logosAndIcons/iconsHeartLarge.png"],
                codePenEmbed: null
            },
            {
                title: "ParaScope",
                date: 1665699855000,
                preview: "/work/logosAndIcons/ParaScope/iconsParascopePreview.png",
                description: "",
                images: ["/work/logosAndIcons/ParaScope/iconsParascopeBulb.svg", "/work/logosAndIcons/ParaScope/iconsParascopeWiki.svg", "/work/logosAndIcons/ParaScope/iconsParascopeWorking.svg", "/work/logosAndIcons/ParaScope/iconsParascopeProjects.svg", "/work/logosAndIcons/ParaScope/iconsParascopeAdd.svg"],
                codePenEmbed: null
            },
            {
                title: "Back in Business",
                date: 1592605455000,
                preview: "/work/logosAndIcons/iconsBiBPreview.png",
                description: "",
                images: ["/work/logosAndIcons/iconsBiBLarge.png"],
                codePenEmbed: null
            },
            {
                title: "Homent",
                date:  1694557455000,
                preview: "/work/logosAndIcons/Homent/iconsHomentPreview.png",
                description: "",
                images: ["/work/logosAndIcons/Homent/iconsHomentFolder.svg", "/work/logosAndIcons/Homent/iconsHomentViewUser.svg", "/work/logosAndIcons/Homent/iconsHomentAudio.svg", "/work/logosAndIcons/Homent/iconsHomentVideo.svg", "/work/logosAndIcons/Homent/iconsHomentImage.svg"],
                codePenEmbed: null
            },
        ]
    },
    {
        title: "3D Models",
        background: "/work/categories/categ5-3dmodels.jpg",
        color: "#E1790D",
        icon: <Modeling className={"categoryIcon"}/>,
        works: [
            {
                title: "Small Room",
                date: 1616106255000,
                preview: "/work/models/modelBedroomPreview.png",
                description: "",
                images: ["/work/models/modelBedroom1.png", "/work/models/modelBedroom2.png", "/work/models/modelBedroom3.png", "/work/models/modelBedroom4.png"],
                codePenEmbed: null
            },
            {
                title: "Light Bulb",
                date: 1612736655000,
                preview: "/work/models/modelBulb.png",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Battery",
                date: 1617488655000,
                preview: "/work/models/modelBattery.png",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Campbell's",
                date: 1601677455000,
                preview: "/work/models/modelCampbells.png",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Master Sword",
                date: 1604269455000,
                preview: "/work/models/modelSword.png",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Pokeball",
                date: 1599949455000,
                preview: "/work/models/modelPokeball.png",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "SpinZ Logo",
                date: 1605911055000,
                preview: "/work/models/modelSpinz.png",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Gold Coin",
                date: 1601677455000,
                preview: "/work/models/modelCoin.png",
                description: "",
                images: [],
                codePenEmbed: null
            },
        ]
    },
    {
        title: "Photography",
        background: "/work/categories/categ6-photography.jpg",
        color: "#02A7C4",
        icon: <Photography className={"categoryIcon"}/>,
        works: [
            {
                title: "Black Capped Chickadee",
                date: 1619631880000,
                preview: "/work/photography/photoBlackCappedChickadee.jpg",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Spring Blossoms",
                date: 1618076680000,
                preview: "/work/photography/photoButtercups.jpg",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Girder Graffiti",
                date: 1621100680000,
                preview: "/work/photography/photoGirderGraffiti.jpg",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Railroad",
                date: 1621100690000,
                preview: "/work/photography/photoRailroad.jpg",
                description: "",
                images: [],
                codePenEmbed: null
            },
            {
                title: "Stumped",
                date: 1621100700000,
                preview: "/work/photography/photoStumped.jpg",
                description: "",
                images: [],
                codePenEmbed: null
            }
        ]
    }
]

export default function Work() {
    let [openCategory, setOpenCategory] = React.useState<WorkCategory>(workCategories[0]);
    let [openWork, setOpenWork] = React.useState<WorkObject | null>(null);

    React.useEffect(() => {
        if(document) {
            const script = document.createElement('script')
            const body = document.getElementsByTagName('body')[0]
            script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js"
            body.appendChild(script)
        }
    })

    function togglePopup(newState: boolean, showWork: WorkObject | null) {
        setOpenWork(newState ? showWork : null)
        const popup = document.getElementById("workPopup");

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

    return <>
        <div className={"workMain"}>
            <WorkNav active={openCategory} setCategory={setOpenCategory}/>
            <div className={"divider"}>
                <h2 className={"mobileCategName"}>{openCategory.title}</h2>
                <div className={"dividerLine"}/>
            </div>
            <div className={"workList"}>
                {openCategory.works.map((work, index) => {
                    return <div
                        key={`workList-${index}`}
                        className={"workPreview"}
                        onClick={() => {togglePopup(!openWork, work)}}
                        style={{backgroundImage: `url(${work.preview})`}}
                    >
                        <div className={"previewOverlay"} style={{background: `${openCategory.color}53`}}>
                            <h3 className={"previewTitle"}>{work.title}</h3>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div className={"popupBackground"} id={"workPopup"} onClick={() => {togglePopup(false, null)}}>
            <WorkDetails workObj={openWork} togglePopup={togglePopup}/>
        </div>
    </>
}