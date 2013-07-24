!function(a,b,c){function d(a,b,c,d,e,f,g,h,i){var k=!1;g=!0===g&&!0===h,b=b||{},b.original||(b.original={},k=!0),b.properties=b.properties||{},b.secondary=b.secondary||{},h=b.meta;for(var l=b.original,m=b.properties,n=b.secondary,o=j.length-1;o>=0;o--){var p=j[o]+"transition-property",q=j[o]+"transition-duration",r=j[o]+"transition-timing-function";c=g?j[o]+"transform":c,k&&(l[p]=a.css(p)||"",l[q]=a.css(q)||"",l[r]=a.css(r)||""),n[c]=g?(!0===i||!0===t&&!1!==i)&&s?"translate3d("+h.left+"px, "+h.top+"px, 0)":"translate("+h.left+"px,"+h.top+"px)":f,m[p]=(m[p]?m[p]+",":"")+c,m[q]=(m[q]?m[q]+",":"")+d+"ms",m[r]=(m[r]?m[r]+",":"")+e}return b}function e(a){for(var b in a)return!1;return!0}function f(a){return parseFloat(a.replace(a.match(/\D+$/),""))}function g(a){var b=!0;return a.each(function(a,c){return b=b&&c.ownerDocument}),b}var h="top right bottom left opacity height width".split(" "),i=["top","right","bottom","left"],j=["-webkit-","-moz-","-o-",""],k=["avoidTransforms","useTranslate3d","leaveTransforms"],l=/^([+-]=)?([\d+-.]+)(.*)$/,m=/([A-Z])/g,n={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},o=null,p=!1,q=(document.body||document.documentElement).style,r=void 0!==q.WebkitTransition||void 0!==q.MozTransition||void 0!==q.OTransition||void 0!==q.transition,s="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,t=s;a.expr&&a.expr.filters&&(o=a.expr.filters.animated,a.expr.filters.animated=function(b){return a(b).data("events")&&a(b).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?!0:o.call(this,b)}),a.extend({toggle3DByDefault:function(){return t=!t},toggleDisabledByDefault:function(){return p=!p},setDisabledByDefault:function(a){return p=a}}),a.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),b={x:0,y:0};if(a)for(var c=j.length-1;c>=0;c--){var d=a.getPropertyValue(j[c]+"transform");if(d&&/matrix/i.test(d)){a=d.replace(/^matrix\(/i,"").split(/, |\)$/g),b={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return b},a.fn.animate=function(c,m,o,q){c=c||{};var s,t=!("undefined"!=typeof c.bottom||"undefined"!=typeof c.right),u=a.speed(m,o,q),v=this,w=0,x=function(){w--,0===w&&"function"==typeof u.complete&&u.complete.apply(v,arguments)};if(!(s=!0===("undefined"!=typeof c.avoidCSSTransitions?c.avoidCSSTransitions:p))&&!(s=!r)&&!(s=e(c))){var y;a:{for(y in c)if(!("width"!=y&&"height"!=y||"show"!=c[y]&&"hide"!=c[y]&&"toggle"!=c[y])){y=!0;break a}y=!1}s=y||0>=u.duration||!0===a.fn.animate.defaults.avoidTransforms&&!1!==c.avoidTransforms}return s?b.apply(this,arguments):this[!0===u.queue?"queue":"each"](function(){var m,o=a(this),p=a.extend({},u),q=function(b){var d=o.data("jQe")||{original:{}},e={};if(2==b.eventPhase){if(!0!==c.leaveTransforms){for(b=j.length-1;b>=0;b--)e[j[b]+"transform"]="";if(t&&"undefined"!=typeof d.meta){b=0;for(var f;f=i[b];++b)e[f]=d.meta[f+"_o"]+"px",a(this).css(f,e[f])}}o.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(d.original).css(e).data("jQe",null),"hide"===c.opacity&&o.css({display:"none",opacity:""}),x.call(this)}},r={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},s={},r=r[p.easing||"swing"]?r[p.easing||"swing"]:p.easing||"swing";for(m in c)if(-1===a.inArray(m,k)){var v,y=-1<a.inArray(m,i),z=o,A=c[m],B=m,C=y&&!0!==c.avoidTransforms;if("d"==B)v=void 0;else if(g(z)){var D=l.exec(A);v="auto"===z.css(B)?0:z.css(B),v="string"==typeof v?f(v):v,"string"==typeof A&&f(A);var C=!0===C?0:v,E=z.is(":hidden"),F=z.translation();"left"==B&&(C=parseInt(v,10)+F.x),"right"==B&&(C=parseInt(v,10)+F.x),"top"==B&&(C=parseInt(v,10)+F.y),"bottom"==B&&(C=parseInt(v,10)+F.y),D||"show"!=A?!D&&"hide"==A&&(C=0):(C=1,E&&z.css({display:"LI"==z.context.tagName?"list-item":"block",opacity:0})),D?(z=parseFloat(D[2]),D[1]&&(z=("-="===D[1]?-1:1)*z+parseInt(C,10)),v=z):v=C}else v=void 0;if((D=!0!==c.avoidTransforms)&&(D=m,z=v,A=o,g(A)?(B=-1<a.inArray(D,h),"width"!=D&&"height"!=D&&"opacity"!=D||parseFloat(z)!==parseFloat(A.css(D))||(B=!1),D=B):D=!1),D){D=o,z=m,A=p.duration,B=r,v=y&&!0===c.avoidTransforms?v+"px":v;var y=y&&!0!==c.avoidTransforms,C=t,E=!0===c.useTranslate3d,F=(F=D.data("jQe"))&&!e(F)?F:a.extend(!0,{},n),G=v;if(-1<a.inArray(z,i)){var H=F.meta,I=f(D.css(z))||0,J=z+"_o",G=v-I;H[z]=G,H[J]="auto"==D.css(z)?0+G:I+G||0,F.meta=H,C&&0===G&&(G=0-H[J],H[z]=G,H[J]=0)}D.data("jQe",d(D,F,z,A,B,G,y,C,E))}else s[m]=c[m]}if(o.unbind("webkitTransitionEnd oTransitionEnd transitionend"),!(m=o.data("jQe"))||e(m)||e(m.secondary))p.queue=!1;else{w++,o.css(m.properties);var K=m.secondary;setTimeout(function(){o.bind("webkitTransitionEnd oTransitionEnd transitionend",q).css(K)})}return e(s)||(w++,b.apply(o,[s,{duration:p.duration,easing:a.easing[p.easing]?p.easing:a.easing.swing?"swing":"linear",complete:x,queue:p.queue}])),!0})},a.fn.animate.defaults={},a.fn.stop=function(b,d,f){return r?(b&&this.queue([]),this.each(function(){var g=a(this),h=g.data("jQe");if(h&&!e(h)){var i,k={};if(d){if(k=h.secondary,!f&&void 0!==typeof h.meta.left_o||void 0!==typeof h.meta.top_o)for(k.left=void 0!==typeof h.meta.left_o?h.meta.left_o:"auto",k.top=void 0!==typeof h.meta.top_o?h.meta.top_o:"auto",i=j.length-1;i>=0;i--)k[j[i]+"transform"]=""}else if(!e(h.secondary)){var l=window.getComputedStyle(g[0],null);if(l)for(var n in h.secondary)if(h.secondary.hasOwnProperty(n)&&(n=n.replace(m,"-$1").toLowerCase(),k[n]=l.getPropertyValue(n),!f&&/matrix/i.test(k[n])))for(i=k[n].replace(/^matrix\(/i,"").split(/, |\)$/g),k.left=parseFloat(i[4])+parseFloat(g.css("left"))+"px"||"auto",k.top=parseFloat(i[5])+parseFloat(g.css("top"))+"px"||"auto",i=j.length-1;i>=0;i--)k[j[i]+"transform"]=""}g.unbind("webkitTransitionEnd oTransitionEnd transitionend"),g.css(h.original).css(k).data("jQe",null)}else c.apply(g,[b,d])}),this):c.apply(this,[b,d])}}(jQuery,jQuery.fn.animate,jQuery.fn.stop);var images=3,currentBackground=Math.floor(Math.random()*images+1);$("header").addClass("background-"+currentBackground),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),function(){var a=/\blang(?:uage)?-(?!\*)(\w+)\b/i,b=self.Prism={util:{type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},clone:function(a){var c=b.util.type(a);switch(c){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=b.util.clone(a[e]));return d;case"Array":return a.slice()}return a}},languages:{extend:function(a,c){var d=b.util.clone(b.languages[a]);for(var e in c)d[e]=c[e];return d},insertBefore:function(a,c,d,e){e=e||b.languages;var f=e[a],g={};for(var h in f)if(f.hasOwnProperty(h)){if(h==c)for(var i in d)d.hasOwnProperty(i)&&(g[i]=d[i]);g[h]=f[h]}return e[a]=g},DFS:function(a,c){for(var d in a)c.call(a,d,a[d]),"Object"===b.util.type(a)&&b.languages.DFS(a[d],c)}},highlightAll:function(a,c){for(var d,e=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),f=0;d=e[f++];)b.highlightElement(d,a===!0,c)},highlightElement:function(d,e,f){for(var g,h,i=d;i&&!a.test(i.className);)i=i.parentNode;if(i&&(g=(i.className.match(a)||[,""])[1],h=b.languages[g]),h){d.className=d.className.replace(a,"").replace(/\s+/g," ")+" language-"+g,i=d.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(a,"").replace(/\s+/g," ")+" language-"+g);var j=d.textContent;if(j){j=j.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var k={element:d,language:g,grammar:h,code:j};if(b.hooks.run("before-highlight",k),e&&self.Worker){var l=new Worker(b.filename);l.onmessage=function(a){k.highlightedCode=c.stringify(JSON.parse(a.data),g),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(k.element),b.hooks.run("after-highlight",k)},l.postMessage(JSON.stringify({language:k.language,code:k.code}))}else k.highlightedCode=b.highlight(k.code,k.grammar,k.language),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(d),b.hooks.run("after-highlight",k)}}},highlight:function(a,d,e){return c.stringify(b.tokenize(a,d),e)},tokenize:function(a,c){var d=b.Token,e=[a],f=c.rest;if(f){for(var g in f)c[g]=f[g];delete c.rest}a:for(var g in c)if(c.hasOwnProperty(g)&&c[g]){var h=c[g],i=h.inside,j=!!h.lookbehind,k=0;h=h.pattern||h;for(var l=0;l<e.length;l++){var m=e[l];if(e.length>a.length)break a;if(!(m instanceof d)){h.lastIndex=0;var n=h.exec(m);if(n){j&&(k=n[1].length);var o=n.index-1+k,n=n[0].slice(k),p=n.length,q=o+p,r=m.slice(0,o+1),s=m.slice(q+1),t=[l,1];r&&t.push(r);var u=new d(g,i?b.tokenize(n,i):n);t.push(u),s&&t.push(s),Array.prototype.splice.apply(e,t)}}}}return e},hooks:{all:{},add:function(a,c){var d=b.hooks.all;d[a]=d[a]||[],d[a].push(c)},run:function(a,c){var d=b.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(c)}}},c=b.Token=function(a,b){this.type=a,this.content=b};if(c.stringify=function(a,d,e){if("string"==typeof a)return a;if("[object Array]"==Object.prototype.toString.call(a))return a.map(function(b){return c.stringify(b,d,a)}).join("");var f={type:a.type,content:c.stringify(a.content,d,e),tag:"span",classes:["token",a.type],attributes:{},language:d,parent:e};"comment"==f.type&&(f.attributes.spellcheck="true"),b.hooks.run("wrap",f);var g="";for(var h in f.attributes)g+=h+'="'+(f.attributes[h]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+g+">"+f.content+"</"+f.tag+">"},!self.document)return self.addEventListener("message",function(a){var c=JSON.parse(a.data),d=c.language,e=c.code;self.postMessage(JSON.stringify(b.tokenize(e,b.languages[d]))),self.close()},!1),void 0;var d=document.getElementsByTagName("script");d=d[d.length-1],d&&(b.filename=d.src,document.addEventListener&&!d.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",b.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),Prism.languages.coffeescript=Prism.languages.extend("javascript",{"block-comment":/([#]{3}\s*\r?\n(.*\s*\r*\n*)\s*?\r?\n[#]{3})/g,comment:/(\s|^)([#]{1}[^#^\r^\n]{2,}?(\r?\n|$))/g,keyword:/\b(this|window|delete|class|extends|namespace|extend|ar|let|if|else|while|do|for|each|of|return|in|instanceof|new|with|typeof|try|catch|finally|null|undefined|break|continue)\b/g}),Prism.languages.insertBefore("coffeescript","keyword",{"function":{pattern:/[a-z|A-z]+\s*[:|=]\s*(\([.|a-z\s|,|:|{|}|\"|\'|=]*\))?\s*-&gt;/gi,inside:{"function-name":/[_?a-z-|A-Z-]+(\s*[:|=])| @[_?$?a-z-|A-Z-]+(\s*)| /g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g}},"attr-name":/[_?a-z-|A-Z-]+(\s*:)| @[_?$?a-z-|A-Z-]+(\s*)| /g}),Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},atrule:/@[\w-]+(?=\s+(\(|\{|;))/gi,url:/([-a-z]+-)*url(?=\()/gi,selector:/([^@;\{\}\(\)]?([^@;\{\}\(\)]|&amp;|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm}),Prism.languages.insertBefore("scss","atrule",{keyword:/@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return)|(?=@for\s+\$[-_\w]+\s)+from/i}),Prism.languages.insertBefore("scss","property",{variable:/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i}),Prism.languages.insertBefore("scss","ignore",{placeholder:/%[-_\w]+/i,statement:/\B!(default|optional)\b/gi,"boolean":/\b(true|false)\b/g,"null":/\b(null)\b/g,operator:/\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g}),Prism.languages.bash=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])(#.*?(\r?\n|$))/g,lookbehind:!0},string:{pattern:/("|')(\\?[\s\S])*?\1/g,inside:{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/g}},keyword:/\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/g}),Prism.languages.insertBefore("bash","keyword",{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/g}),Prism.languages.insertBefore("bash","comment",{important:/(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/g}),Prism.languages.python={comment:{pattern:/(^|[^\\])#.*?(\r?\n|$)/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,keyword:/\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,"boolean":/\b(True|False)\b/g,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.hooks.add("after-highlight",function(a){var b=a.element.parentNode;if(b&&/pre/i.test(b.nodeName)&&-1!==b.className.indexOf("line-numbers")){var c,d=1+a.code.split("\n").length;lines=new Array(d),lines=lines.join("<span></span>"),c=document.createElement("span"),c.className="line-numbers-rows",c.innerHTML=lines,b.hasAttribute("data-start")&&(b.style.counterReset="linenumber "+(parseInt(b.getAttribute("data-start"),10)-1)),a.element.appendChild(c)}}),$('a[href^="#"]').on("click",function(a){if(!$(this).parent().hasClass("slider-control")){a.preventDefault();var b=this.hash,c=$(b);$("html, body").stop().animate({scrollTop:c.offset()?c.offset().top:0},400,"easeInOutQuart",function(){window.location.hash=b})}}),$("#social-links").find("a[href]").each(function(a,b){var c={"twitter.com":'<i class="icon-twitter"></i>',"github.com":'<i class="icon-github"></i>',"dribbble.com":'<i class="icon-dribbble"></i>',"facebook.com":'<i class="icon-facebook"></i>',"plus.google.com":'<i class="icon-gplus"></i>',"linkedin.com":'<i class="icon-linkedin"></i>'},d=b.href.split("/")[2];for(var e in c)if(-1!==d.indexOf(e)){$(b).html(c[e]);break}});