import { CompletionItemKind } from "vscode"

export const owlComponentAttributes = [
    "t-if",
    "t-else",
    "t-elif",
    "t-foreach",
    "t-as",
    "t-key",
    "t-esc",
    "t-out",
    "t-props",
    "t-set",
    "t-value",
    "t-portal",
    "t-slot-scope",
    "t-log",
].map(label => ({
    label: label,
    insertText: label + '=""',
    kind: CompletionItemKind.Property,
}));

export const owlElementAttributes = [
    "t-component",
    "t-att",
    "t-tag",
    "t-model",
].map(label => ({
    label: label,
    insertText: label + '=""',
    kind: CompletionItemKind.Property,
}));

owlElementAttributes.push(...owlComponentAttributes);

/**
To generate this list, run the following snippet on https://developer.mozilla.org/fr/docs/Web/Events

(function () {
  const events = [...document.querySelectorAll(".section-content li a")]
    .map(e => e.childNodes[0])
    .filter(n => n.nodeType === 3 && n.textContent.toLowerCase() == n.textContent)
    .map(n => "t-on-" + n.textContent.trim());
  return JSON.stringify([...new Set(events)], null, 2);
}())
*/
export const events = [
    "t-on-abort",
    "t-on-ended",
    "t-on-addtrack",
    "t-on-change",
    "t-on-removetrack",
    "t-on-messageerror",
    "t-on-message",
    "t-on-animationcancel",
    "t-on-animationend",
    "t-on-animationiteration",
    "t-on-animationstart",
    "t-on-copy",
    "t-on-cut",
    "t-on-dragend",
    "t-on-dragenter",
    "t-on-dragleave",
    "t-on-dragover",
    "t-on-dragstart",
    "t-on-drag",
    "t-on-drop",
    "t-on-fullscreenchange",
    "t-on-fullscreenerror",
    "t-on-gotpointercapture",
    "t-on-keydown",
    "t-on-keypress",
    "t-on-keyup",
    "t-on-lostpointercapture",
    "t-on-paste",
    "t-on-pointercancel",
    "t-on-pointerdown",
    "t-on-pointerenter",
    "t-on-pointerleave",
    "t-on-pointerlockchange",
    "t-on-pointerlockerror",
    "t-on-pointermove",
    "t-on-pointerout",
    "t-on-pointerover",
    "t-on-pointerup",
    "t-on-readystatechange",
    "t-on-scroll",
    "t-on-selectionchange",
    "t-on-selectstart",
    "t-on-touchcancel",
    "t-on-touchend",
    "t-on-touchmove",
    "t-on-touchstart",
    "t-on-transitioncancel",
    "t-on-transitionend",
    "t-on-transitionrun",
    "t-on-transitionstart",
    "t-on-visibilitychange",
    "t-on-wheel",
    "t-on-afterscriptexecute",
    "t-on-auxclick",
    "t-on-beforescriptexecute",
    "t-on-blur",
    "t-on-click",
    "t-on-compositionend",
    "t-on-compositionstart",
    "t-on-compositionupdate",
    "t-on-contextmenu",
    "t-on-dblclick",
    "t-on-error",
    "t-on-focusin",
    "t-on-focusout",
    "t-on-focus",
    "t-on-gesturechange",
    "t-on-gestureend",
    "t-on-gesturestart",
    "t-on-mousedown",
    "t-on-mouseenter",
    "t-on-mouseleave",
    "t-on-mousemove",
    "t-on-mouseout",
    "t-on-mouseover",
    "t-on-mouseup",
    "t-on-mousewheel",
    "t-on-overflow",
    "t-on-select",
    "t-on-show",
    "t-on-underflow",
    "t-on-webkitmouseforcechanged",
    "t-on-webkitmouseforcedown",
    "t-on-webkitmouseforceup",
    "t-on-webkitmouseforcewillbegin",
    "t-on-open",
    "t-on-loadend",
    "t-on-loadstart",
    "t-on-load",
    "t-on-progress",
    "t-on-webglcontextcreationerror",
    "t-on-webglcontextlost",
    "t-on-webglcontextrestored",
    "t-on-toggle",
    "t-on-cancel",
    "t-on-close",
    "t-on-beforeinput",
    "t-on-input",
    "t-on-formdata",
    "t-on-reset",
    "t-on-submit",
    "t-on-invalid",
    "t-on-search",
    "t-on-canplaythrough",
    "t-on-canplay",
    "t-on-durationchange",
    "t-on-emptied",
    "t-on-loadeddata",
    "t-on-loadedmetadata",
    "t-on-pause",
    "t-on-playing",
    "t-on-play",
    "t-on-ratechange",
    "t-on-seeked",
    "t-on-seeking",
    "t-on-stalled",
    "t-on-suspend",
    "t-on-timeupdate",
    "t-on-volumechange",
    "t-on-waiting",
    "t-on-slotchange",
    "t-on-cuechange",
    "t-on-enterpictureinpicture",
    "t-on-leavepictureinpicture",
    "t-on-versionchange",
    "t-on-blocked",
    "t-on-upgradeneeded",
    "t-on-success",
    "t-on-complete",
    "t-on-devicechange",
    "t-on-mute",
    "t-on-unmute",
    "t-on-merchantvalidation",
    "t-on-paymentmethodchange",
    "t-on-shippingaddresschange",
    "t-on-shippingoptionchange",
    "t-on-payerdetailchange",
    "t-on-resourcetimingbufferfull",
    "t-on-resize",
    "t-on-bufferedamountlow",
    "t-on-closing",
    "t-on-tonechange",
    "t-on-gatheringstatechange",
    "t-on-selectedcandidatepairchange",
    "t-on-statechange",
    "t-on-addstream",
    "t-on-connectionstatechange",
    "t-on-datachannel",
    "t-on-icecandidateerror",
    "t-on-icecandidate",
    "t-on-iceconnectionstatechange",
    "t-on-icegatheringstatechange",
    "t-on-negotiationneeded",
    "t-on-removestream",
    "t-on-signalingstatechange",
    "t-on-track",
    "t-on-audioprocess",
    "t-on-activate",
    "t-on-contentdelete",
    "t-on-install",
    "t-on-notificationclick",
    "t-on-pushsubscriptionchange",
    "t-on-push",
    "t-on-connect",
    "t-on-audioend",
    "t-on-audiostart",
    "t-on-end",
    "t-on-nomatch",
    "t-on-result",
    "t-on-soundend",
    "t-on-soundstart",
    "t-on-speechend",
    "t-on-speechstart",
    "t-on-start",
    "t-on-voiceschanged",
    "t-on-boundary",
    "t-on-mark",
    "t-on-resume",
    "t-on-unload",
    "t-on-afterprint",
    "t-on-appinstalled",
    "t-on-beforeprint",
    "t-on-beforeunload",
    "t-on-devicemotion",
    "t-on-deviceorientation",
    "t-on-gamepadconnected",
    "t-on-gamepaddisconnected",
    "t-on-hashchange",
    "t-on-languagechange",
    "t-on-offline",
    "t-on-online",
    "t-on-orientationchange",
    "t-on-pagehide",
    "t-on-pageshow",
    "t-on-popstate",
    "t-on-rejectionhandled",
    "t-on-storage",
    "t-on-unhandledrejection",
    "t-on-vrdisplayactivate",
    "t-on-vrdisplayblur",
    "t-on-vrdisplayconnect",
    "t-on-vrdisplaydeactivate",
    "t-on-vrdisplaydisconnect",
    "t-on-vrdisplayfocus",
    "t-on-vrdisplaypointerrestricted",
    "t-on-vrdisplaypointerunrestricted",
    "t-on-vrdisplaypresentchange",
    "t-on-timeout",
    "t-on-inputsourceschange",
    "t-on-selectend",
    "t-on-squeezeend",
    "t-on-squeezestart",
    "t-on-squeeze"
].map(label => ({
    label: label,
    insertText: label + '=""',
    kind: CompletionItemKind.Property,
}))


/**
To generate the elements list, run the following snippet on https://developer.mozilla.org/en-US/docs/Web/HTML/Element

(function () {
  const names = [...document.querySelectorAll("section:not([aria-labelledby='obsolete_and_deprecated_elements']) td:nth-child(1)")]
  .flatMap(n => n.innerText.split(","))
  .map(n => n.trim().replace("<", "").replace(">", ""))
  return JSON.stringify([...new Set(names)], null, 2);
})()
*/
export const elements = [
    "t",
    "link",
    "meta",
    "style",
    "title",
    "body",
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    "search",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "menu",
    "ol",
    "p",
    "pre",
    "ul",
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "area",
    "audio",
    "img",
    "map",
    "track",
    "video",
    "embed",
    "iframe",
    "object",
    "picture",
    "portal",
    "source",
    "svg",
    "math",
    "canvas",
    "noscript",
    "script",
    "del",
    "ins",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "button",
    "datalist",
    "fieldset",
    "form",
    "input",
    "label",
    "legend",
    "meter",
    "optgroup",
    "option",
    "output",
    "progress",
    "select",
    "textarea",
    "details",
    "dialog",
    "summary",
].map(label => ({
    label: label,
    insertText: label,
    kind: CompletionItemKind.Property,
}));
