// ==UserScript==
// @name         Website - Fake window.open
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Empêche l’ouverture des pubs tout en simulant un window.open valide
// @author       iokza -> https://www.youtube.com/channel/UC8ibOHZ1rAJVdWEyUT89eMA     &       https://discord.gg/ZCWNrM5qku
// @match        https://cinepulse.cx/*
// @match        https://movix.rodeo/*
// @match        https://nakios.art/*
// @match        https://webflix.lol/*
// @match        https://purstream.art/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.open = function () {
        console.log('window.open bloqué (onglet simulé)');

        // Faux objet "window" pour ne pas casser le script du site
        return {
            closed: false,
            close: () => {},
            focus: () => {}
        };
    };
})();
