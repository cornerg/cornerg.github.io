import './WorkNav.css';
import React from 'react';
import {WorkCategory} from "../../models/types";
import {workCategories} from "../../views/work/Work";

interface WorkNavProps {active: WorkCategory, setCategory: React.Dispatch<React.SetStateAction<WorkCategory>>}
export default function WorkNav({active, setCategory}: WorkNavProps) {
    const [hovering, setHovering] = React.useState<WorkCategory | null>(null);

    return (
        <div className={"workNav"}>
            {workCategories.map((category) => {
                const words = category.title.match(/\w/g) ?? ["wtf"];
                const categoryId = `category-${words.join("")}`;
                return (
                    <div
                        key={categoryId}
                        id={categoryId}
                        className={`category${category === active ? " activeCategory" : ""}`}
                        style={{backgroundImage: `url(${category.background})`}}
                        onClick={() => {setCategory(category)}}
                        onMouseEnter={() => {setHovering(category)}}
                        onMouseLeave={() => {setHovering(null)}}
                    >
                        <div className={"categoryOverlay"} style={{background: `${category.color}${hovering === category && active !== category ? "80" : "54"}`}}/>
                        {category.icon}
                        <h2 className={"categoryName"}>{category.title}</h2>

                    </div>
                )
            })}
        </div>
    )
}