import React from "react";
import "./Cards.css";


const card = (props) => {
    return(
        <div className="Card_wrapper">
        <div>
            <img className="Image" src={props.ImgSrc} alt="News Pic"/>
        </div>
        <h2 className="Title">{props.title}</h2>
        <span className="Time">{props.time}</span>
        <p className="Content">{props.content}</p>
        <h5 className="Source">By: {props.source}</h5>
        <h4 className="Author">Author: <i className="Author_name">{props.author}</i></h4>
        <a href={props.link} target="blank">
            <button className="News_Button">Go to News</button>
        </a>
        </div>
    )
}
export default card;