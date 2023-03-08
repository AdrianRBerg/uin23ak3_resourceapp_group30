import React from 'react';
import resources from "../ressurser.js"

function Kilde(data) {
    let kilde = data.kilde
    let tittel = kilde.title
    let link = kilde.url
    return (<li><a href="{link}">{tittel}</a></li>);
}

function Tekst(prop) {
    let title = ""
    let description = ""
    let sources = []
    resources.forEach(x => {
        if (x.category == prop.name) {
            title = x.category;
            description = x.text;
            x.sources.forEach(y => sources.push(<Kilde kilde={y}/>))
        }
    });
    // console.log(sources)
    return (<div><h1> {title} </h1>
    <p> {description} </p>
    <ul>{sources}</ul></div>);
}
export default Tekst