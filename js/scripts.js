/*
jquery.animate-enhanced plugin v0.99.1
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
*/
(function(c,J,K){function P(a,b,c,f,m,l,h,q,r){var u=!1;h=!0===h&&!0===q;b=b||{};b.original||(b.original={},u=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};q=b.meta;for(var n=b.original,g=b.properties,Q=b.secondary,C=s.length-1;0<=C;C--){var E=s[C]+"transition-property",F=s[C]+"transition-duration",j=s[C]+"transition-timing-function";c=h?s[C]+"transform":c;u&&(n[E]=a.css(E)||"",n[F]=a.css(F)||"",n[j]=a.css(j)||"");Q[c]=h?(!0===r||!0===G&&!1!==r)&&L?"translate3d("+q.left+"px, "+q.top+
"px, 0)":"translate("+q.left+"px,"+q.top+"px)":l;g[E]=(g[E]?g[E]+",":"")+c;g[F]=(g[F]?g[F]+",":"")+f+"ms";g[j]=(g[j]?g[j]+",":"")+m}return b}function A(a){for(var c in a)return!1;return!0}function H(a){return parseFloat(a.replace(a.match(/\D+$/),""))}function M(a){var c=!0;a.each(function(a,f){return c=c&&f.ownerDocument});return c}var R="top right bottom left opacity height width".split(" "),I=["top","right","bottom","left"],s=["-webkit-","-moz-","-o-",""],S=["avoidTransforms","useTranslate3d","leaveTransforms"],
T=/^([+-]=)?([\d+-.]+)(.*)$/,U=/([A-Z])/g,V={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},N=null,B=!1,y=(document.body||document.documentElement).style,O=void 0!==y.WebkitTransition||void 0!==y.MozTransition||void 0!==y.OTransition||void 0!==y.transition,L="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,G=L;c.expr&&c.expr.filters&&(N=c.expr.filters.animated,c.expr.filters.animated=function(a){return c(a).data("events")&&c(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?
!0:N.call(this,a)});c.extend({toggle3DByDefault:function(){return G=!G},toggleDisabledByDefault:function(){return B=!B},setDisabledByDefault:function(a){return B=a}});c.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),c={x:0,y:0};if(a)for(var p=s.length-1;0<=p;p--){var f=a.getPropertyValue(s[p]+"transform");if(f&&/matrix/i.test(f)){a=f.replace(/^matrix\(/i,"").split(/, |\)$/g);c={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return c};c.fn.animate=function(a,
b,p,f){a=a||{};var m=!("undefined"!==typeof a.bottom||"undefined"!==typeof a.right),l=c.speed(b,p,f),h=this,q=0,r=function(){q--;0===q&&"function"===typeof l.complete&&l.complete.apply(h,arguments)},u;if(!(u=!0===("undefined"!==typeof a.avoidCSSTransitions?a.avoidCSSTransitions:B)))if(!(u=!O))if(!(u=A(a))){var n;a:{for(n in a)if(("width"==n||"height"==n)&&("show"==a[n]||"hide"==a[n]||"toggle"==a[n])){n=!0;break a}n=!1}u=n||0>=l.duration||!0===c.fn.animate.defaults.avoidTransforms&&!1!==a.avoidTransforms}return u?
J.apply(this,arguments):this[!0===l.queue?"queue":"each"](function(){var g=c(this),b=c.extend({},l),h=function(b){var f=g.data("jQe")||{original:{}},e={};if(2==b.eventPhase){if(!0!==a.leaveTransforms){for(b=s.length-1;0<=b;b--)e[s[b]+"transform"]="";if(m&&"undefined"!==typeof f.meta){b=0;for(var d;d=I[b];++b)e[d]=f.meta[d+"_o"]+"px",c(this).css(d,e[d])}}g.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(f.original).css(e).data("jQe",null);"hide"===a.opacity&&g.css({display:"none",opacity:""});
r.call(this)}},f={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",
easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",
easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},n={},f=f[b.easing||"swing"]?f[b.easing||"swing"]:b.easing||"swing",j;for(j in a)if(-1===c.inArray(j,S)){var p=-1<c.inArray(j,I),k;var d=g,x=a[j],v=j,t=p&&!0!==
a.avoidTransforms;if("d"==v)k=void 0;else if(M(d)){var e=T.exec(x);k="auto"===d.css(v)?0:d.css(v);k="string"==typeof k?H(k):k;"string"==typeof x&&H(x);var t=!0===t?0:k,u=d.is(":hidden"),w=d.translation();"left"==v&&(t=parseInt(k,10)+w.x);"right"==v&&(t=parseInt(k,10)+w.x);"top"==v&&(t=parseInt(k,10)+w.y);"bottom"==v&&(t=parseInt(k,10)+w.y);!e&&"show"==x?(t=1,u&&d.css({display:"LI"==d.context.tagName?"list-item":"block",opacity:0})):!e&&"hide"==x&&(t=0);e?(d=parseFloat(e[2]),e[1]&&(d=("-="===e[1]?
-1:1)*d+parseInt(t,10)),k=d):k=t}else k=void 0;if(e=!0!==a.avoidTransforms)if(e=j,d=k,x=g,M(x)){v=-1<c.inArray(e,R);if(("width"==e||"height"==e||"opacity"==e)&&parseFloat(d)===parseFloat(x.css(e)))v=!1;e=v}else e=!1;if(e){e=g;d=j;x=b.duration;v=f;k=p&&!0===a.avoidTransforms?k+"px":k;var p=p&&!0!==a.avoidTransforms,t=m,u=!0===a.useTranslate3d,w=(w=e.data("jQe"))&&!A(w)?w:c.extend(!0,{},V),z=k;if(-1<c.inArray(d,I)){var D=w.meta,B=H(e.css(d))||0,y=d+"_o",z=k-B;D[d]=z;D[y]="auto"==e.css(d)?0+z:B+z||0;
w.meta=D;t&&0===z&&(z=0-D[y],D[d]=z,D[y]=0)}e.data("jQe",P(e,w,d,x,v,z,p,t,u))}else n[j]=a[j]}g.unbind("webkitTransitionEnd oTransitionEnd transitionend");if((j=g.data("jQe"))&&!A(j)&&!A(j.secondary)){q++;g.css(j.properties);var G=j.secondary;setTimeout(function(){g.bind("webkitTransitionEnd oTransitionEnd transitionend",h).css(G)})}else b.queue=!1;A(n)||(q++,J.apply(g,[n,{duration:b.duration,easing:c.easing[b.easing]?b.easing:c.easing.swing?"swing":"linear",complete:r,queue:b.queue}]));return!0})};
c.fn.animate.defaults={};c.fn.stop=function(a,b,p){if(!O)return K.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var f=c(this),m=f.data("jQe");if(m&&!A(m)){var l,h={};if(b){if(h=m.secondary,!p&&void 0!==typeof m.meta.left_o||void 0!==typeof m.meta.top_o){h.left=void 0!==typeof m.meta.left_o?m.meta.left_o:"auto";h.top=void 0!==typeof m.meta.top_o?m.meta.top_o:"auto";for(l=s.length-1;0<=l;l--)h[s[l]+"transform"]=""}}else if(!A(m.secondary)){var q=window.getComputedStyle(f[0],null);if(q)for(var r in m.secondary)if(m.secondary.hasOwnProperty(r)&&
(r=r.replace(U,"-$1").toLowerCase(),h[r]=q.getPropertyValue(r),!p&&/matrix/i.test(h[r]))){l=h[r].replace(/^matrix\(/i,"").split(/, |\)$/g);h.left=parseFloat(l[4])+parseFloat(f.css("left"))+"px"||"auto";h.top=parseFloat(l[5])+parseFloat(f.css("top"))+"px"||"auto";for(l=s.length-1;0<=l;l--)h[s[l]+"transform"]=""}}f.unbind("webkitTransitionEnd oTransitionEnd transitionend");f.css(m.original).css(h).data("jQe",null)}else K.apply(f,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);
var images = 3;
var currentBackground = Math.floor(Math.random() * images + 1);

$('header').addClass('background-' + currentBackground);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

// Smooth scrolling for anchor links
$('a[href^="#"]').on('click',function (e) {
    // Prevent conflict with project sliders
    if (!$(this).parent().hasClass('slider-control')) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': ($target.offset()) ? $target.offset().top : 0
        }, 400, 'easeInOutQuart', function () {
            window.location.hash = target;
        });
    }
});