// ==UserScript==
// @name         I can't beleive it's not 1.4
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Making 3.0 look like 1.4
// @author       infinitytec
// @match        https://llk.github.io/scratch-gui/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        GM_addStyle
// @updateURL    https://github.com/infinitytec/I-Cant-Beleive-Its-Not-1.4/raw/master/not1-4.user.js
// ==/UserScript==

(function() {
    'use strict';
    //From NickyNouse
    // inject 2.0 stylesheet
    var style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'https://mrjacobbloom.github.io/scratch-themes-resources/2/style.css');
    document.head.appendChild(style);
    // import @comp09's filters from tjvr/scratchblocks
    fetch('https://mrjacobbloom.github.io/scratch-themes-resources/2/filters.svg').then(function(response) {
        return response.text();
    }).then(function(response) {
        var doc = new DOMParser().parseFromString(response, 'image/svg+xml');
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.appendChild(document.importNode(doc.documentElement.firstElementChild, true));
        document.body.appendChild(svg);
    });
    //Reposition everything
    GM_addStyle("html {overflow-y: hidden;}");
    GM_addStyle(".gui_body-wrapper_-N0sA {height: calc(100% - 2rem);}");
    GM_addStyle(".blocklyMainBackground{fill:url(#lines) !important;} .blocklyFlyoutBackground{background: #7C8083 !important; fill: #7C8083 !important; background-color: #7C8083 !important;}");
    GM_addStyle(".blocklyText {font-size: 10pt;}");
    GM_addStyle(".gui_stage-menu-wrapper_W5Ler {border-radius: 10px 10px 0px 0px;border: 1px solid #D0D1D2; margin-left: 0.5rem;margin-right: 0.5rem;margin-top: 5px; } .gui_body-wrapper_-N0sA{background-color: #C0C3C6;}");
    GM_addStyle(".blocklyFlyout, .blocks_blocks_C530M .injectionDiv, .injectionDiv, .sprite-selector_scroll-wrapper_3NNnc, .stage_stage_1fD7k, .blocklyToolboxDiv, .stage-selector_header_2GVr1, .gui_stage-menu-wrapper_W5Ler, .sprite-info_sprite-info_3EyZh, .menu-bar_menu-bar_JcuHF {box-shadow: inset 2px 2px 5px #4d4d4d; border: 3px inset; border-color: #C0C3C6 #9c9ea2 #9c9ea2 #C0C3C6; background: #959A9F; }");
    GM_addStyle(".stage_stage-wrapper_eRRuk {border-radius: 0px; border: 1px inset #D0D1D2;}");
    GM_addStyle(".target-pane_stage-selector-wrapper_qekSW {position: relative;right: 85%;}");
    GM_addStyle(".sprite-selector_sprite-selector_2KgCX {position: relative;left: 16.5%;}");
    GM_addStyle(".sprite-selector_scroll-wrapper_3NNnc, .stage-selector_stage-selector_3oWOr, .blocklyFlyoutBackground, .blocklyToolboxDiv, .scratchCategoryMenu{background: #7C8083; fill: #7C8083; background-color: #7C8083; opacity: 1;}");
    GM_addStyle(".gui_tab_27Unf {background-color: #F2F2F2; border: 2px outset #B9D7E5; ");
    GM_addStyle(".controls_controls-container_2xinB {position: relative; left: 80%; font-style: bold;");
    GM_addStyle(" .gui_tab_27Unf.gui_is-selected_sHAiu { color: black; background-color: #B9D7E5;}");
    GM_addStyle(".menu-bar_menu-bar_JcuHF {height: 2.3rem; background-color: #808080; border-radius: 10px;}");
    GM_addStyle(".menu-bar_menu-item_2lssx {padding: 0 .5rem;line-height: 2rem; color: #4F4F4F;}");
    GM_addStyle(".menu-bar_scratch-logo_2uReV {height: 2rem; padding: 0.3rem 0; filter: contrast(100%) saturate(0%);}");
    GM_addStyle(".language-selector_language-select_8Vfnm {height: 1.5rem; background: rgba(255, 255, 255, 0.1); border: 1px solid transparent; color: #4F4F4F;}");
    GM_addStyle(".icon-button_container_278u5 {color: #9C9EA2;} .scratchCategoryMenu {background: transparent; background-color: transparent;}");
    GM_addStyle(".icon-button_container_278u5 {filter: saturate(0%);}");
    GM_addStyle(".icon-button_container_278u5:hover {color: #007BE7 !important; -webkit-transform: scale(1.0);-ms-transform: scale(1.0);transform: scale(1.0);filter: saturate(100%);}");
    GM_addStyle(".monitor_monitor_11Vhm {background: #B6B6B6; border: 1.5px solid #9C9EA2;} .monitor_value_3Yexa { box-shadow: inset .5px .5px 2px #4d4d4d; border: 1px solid white;} .injectionDiv {background-color: #C0C3C6;} .blocks_blocks_C530M .blocklyFlyout {border-right: 10px ridge #959A9F;} ");
    //Add some HTML
    $("body").append ( `
<svg><defs>
<pattern id="lines" patternUnits="userSpaceOnUse" width="84" height="84">
            <image xlink:href="http://i.cubeupload.com/VYRbSZ.png" x="0" y="0"
                width="84" height="84" /><!-- Image from Scratch 1.4-->
        </pattern></defs></svg>
` );
    })();
