(function(window){var svgSprite='<svg><symbol id="icon-62" viewBox="0 0 1024 1024"><path d="M512.015 130.161C265.109 130.161 65 296.933 65 502.687c0 102.92 50.085 196.079 131.034 263.495L171.981 893.84l107.097-73.164c67.853 34.559 147.593 54.537 232.937 54.537C758.891 875.213 959 708.412 959 502.687 959 296.933 758.891 130.161 512.015 130.161zM512.015 845.412c-77.66 0-153.53-17.736-219.418-51.293l-15.745-8.018-62.265 42.533 13.969-74.152-13.445-11.205c-77.587-64.607-120.31-150.053-120.31-240.59 0-188.977 187.158-342.726 417.214-342.726 230.041 0 417.185 153.749 417.185 342.726S742.056 845.412 512.015 845.412z"  ></path><path d="M318.308 482.199c-16.458 0-29.801 13.314-29.801 29.802 0 16.457 13.343 29.8 29.801 29.8s29.801-13.344 29.801-29.8C348.109 495.513 334.766 482.199 318.308 482.199z"  ></path><path d="M512.015 482.199c-16.458 0-29.801 13.314-29.801 29.802 0 16.457 13.344 29.8 29.801 29.8 16.457 0 29.801-13.344 29.801-29.8C541.815 495.513 528.472 482.199 512.015 482.199z"  ></path><path d="M705.691 482.199c-16.457 0-29.801 13.314-29.801 29.802 0 16.457 13.344 29.8 29.801 29.8 16.458 0 29.802-13.344 29.802-29.8C735.493 495.513 722.149 482.199 705.691 482.199z"  ></path></symbol><symbol id="icon-tuichu" viewBox="0 0 1024 1024"><path d="M684.750971 190.921307l0 65.015759C788.010753 315.674613 857.49836 427.311179 857.49836 555.187615c0 190.802604-154.707524 345.489662-345.497848 345.489662-190.81386 0-345.478406-154.687058-345.478406-345.489662 0-127.878482 69.471235-239.518119 172.727946-299.254641l0-65.016783C203.072557 255.607562 108.931456 394.401652 108.931456 555.187615c0 222.604914 180.441629 403.068032 403.069055 403.068032 222.604914 0 403.067009-180.463118 403.067009-403.068032C915.06752 394.405745 820.92028 255.614725 684.750971 190.921307zM512.000512 526.392802c31.79003 0 57.589626-29.459962 57.589626-65.804728L569.590138 131.550105c0-36.346813-25.799596-65.805752-57.589626-65.805752-31.792077 0-57.56916 29.459962-57.56916 65.805752l0 329.036945C454.431352 496.931816 480.207411 526.392802 512.000512 526.392802z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)