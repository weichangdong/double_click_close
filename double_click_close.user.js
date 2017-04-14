// ==UserScript==
// @name         double_click_close
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  double click to close current window
// @author       wcd
// @include        *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("dblclick", function() {
       // alert('wcd');
     //   window.opener=null;
        open(location, '_self').close();
	window.open('','_self');
        window.close();
       // netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite");
     //   window.open('','_self');
     //   window.close();
    });
    /*
    $("*").dblclick(function(){
        window.opener=null;
        window.close();
        open(location, '_self').close();
    });
    */
})();
