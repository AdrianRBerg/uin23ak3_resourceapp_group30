import React from 'react';

function Layout({}) {
    return(
        <div class="content">
        <header>
            <h1>Ressursarkiv</h1>
        </header>
        <button id="button1" onclick="expandObject('HTML', '#button1', '#button2', '#button3', '#button4', '#button5')">HTML</button>
        <button id="button2" onclick="expandObject('CSS', '#button2', '#button1', '#button3', '#button4', '#button5')">CSS</button>
        <button id="button3" onclick="expandObject('JavaScript', '#button3', '#button2', '#button4', '#button5', '#button1')">JavaScript</button>
        <button id="button4" onclick="expandObject('React', '#button4', '#button2', '#button3', '#button5', '#button1')">React</button>
        <button id="button5" onclick="expandObject('Sanity and headless CMS', '#button5', '#button2', '#button3', '#button4', '#button1')">Sanity & headless CMS</button>

        <section id="startpage">
            <h2>Home</h2>
            <p>
                Velkommen til ressursarkivet, velg et rammeverk å lese om!
            </p>
        </section>
    </div>
    );
}

export default Layout