// ==UserScript==
// @name To DeepL
// @match *
// @run-at context-menu
// ==/UserScript==

let deepl__selection = getSelection().toString();
const deepl__deeplURL= `https://www.deepl.com/translator#null/`;
const deepl__defaultLang = navigator.language.match(/^(zh-)?\w+/g)[0] || 'en'; // change default language if you want

if (deepl__selection) {
	window.open(`${deepl__deeplURL + deepl__defaultLang}/${encodeURIComponent(deepl__selection).replaceAll("%2F", "\\%2F").replaceAll("%7C", "\\%7C").replaceAll("%5C", "%5C%5C")}`, '_blank');
}
