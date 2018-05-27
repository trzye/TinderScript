// ==UserScript==
// @name         Tinder for Desktop. Automates profile browsing!
// @namespace    https://greasyfork.org/en/scripts/36887/versions/new
// @version      1.6
// @description  When using Tinder on desktop there is need to manually open each new candidates profiles and browse their photos. This script automates it! Just enjoy swaping with just left and right arrows :)
// @author       https://github.com/trzye
// @license      Do What The F*ck You Want To Public License
// @match        tinder.com
// @match        tinder.com/app/recs
// @match        tinder.com/app/recs/profile
// @match        tinder.com/app/matches
// @grant        none
// ==/UserScript==

let isOn = true;
let startupInterval = window.setInterval(startup, 1750);

function startup(){
    let navElement = document.getElementsByTagName("nav")[0];
    if(navElement != undefined){
        window.setInterval(tinderscript, 1750);
        let button = document.createElement("button");
        button.innerHTML = "Click HERE to turn ON/OFF TinderScript";
        button.onclick = function(){isOn = !isOn;};
        navElement.appendChild(button);
        navElement.insertBefore(button, navElement.firstChild);
        window.clearInterval(startupInterval);
    }
}

function tinderscript() {
    let element = document.querySelectorAll("[class*=sendMessageForm__input]")[0];
    if(!element && isOn){
        element = document.querySelectorAll("[class*=recCard__openProfile]")[0];
        if(element !== undefined) {
            element.click();
        }
        else {
           element = document.querySelectorAll("[class*=pageButton]")[1];
           if(element !== undefined) {
               element.click();
           }
        }
    }
}
