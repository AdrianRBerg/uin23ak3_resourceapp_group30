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
    if (prop.category != "") {
        resources.forEach(x => {
            if (x.category == prop.category) {
                title = x.category;
                description = x.text;
                x.sources.forEach(y => sources.push(<Kilde kilde={y} />))
            }
        });
    } else {
        title = "Velg en kategori"
        description = "Klikk en av knappene ovenfor for å velge en kategori"
    };
    return (<div><h1> {title} </h1>
        <p> {description} </p>
        <ul>{sources}</ul></div>);
}
export default Tekst