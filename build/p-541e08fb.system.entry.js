System.register(["./p-d172bdbf.system.js"],(function(r){"use strict";var t,e,s,i;return{setters:[function(r){t=r.r;e=r.h;s=r.H;i=r.g}],execute:function(){var o=":host{display:block;width:100%}@-webkit-keyframes circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes circular-dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:100, 200;stroke-dashoffset:-15}to{stroke-dasharray:100, 200;stroke-dashoffset:-120}}@keyframes circular-dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:100, 200;stroke-dashoffset:-15}to{stroke-dasharray:100, 200;stroke-dashoffset:-120}}.circle_progress{margin:0 auto}.circle_progress_svg{-webkit-animation:circular-rotate 1.4s linear infinite;animation:circular-rotate 1.4s linear infinite}.circle_progress_circle{stroke-linecap:round;-webkit-animation:circular-dash 1.4s ease-in-out infinite;animation:circular-dash 1.4s ease-in-out infinite;stroke-dasharray:80, 200;stroke-dashoffset:0;stroke:rgb(var(--peculiar-color-primary-rgb))}.circle_progress_backdrop{stroke:rgb(var(--peculiar-color-grey_3-rgb))}";var a=r("peculiar_circular_progress",function(){function r(r){t(this,r);this.size=24;this.width=4;this.box=50}r.prototype.render=function(){return e(s,null,e("div",{class:"circle_progress",style:{width:this.size+"px",height:this.size+"px"}},e("svg",{class:"circle_progress_svg",viewBox:"0 0 "+this.box+" "+this.box},e("circle",{class:"circle_progress_backdrop",cx:this.box/2,cy:this.box/2,r:this.box/2-5,fill:"none",style:{strokeWidth:this.width+"px"}}),e("circle",{class:"circle_progress_circle",cx:this.box/2,cy:this.box/2,r:this.box/2-5,fill:"none",style:{strokeWidth:this.width+"px"}}))))};return r}());a.style=o;var n=":host{display:inline-block}::slotted(mark){background-color:rgba(var(--peculiar-color-attention-rgb), 0.4)}";var c=r("peculiar_highlight_words",function(){function r(r){t(this,r);this.tag="mark"}r.prototype.componentDidLoad=function(){this.handleHighlightSearch()};r.prototype.componentDidUpdate=function(){this.handleHighlightSearch()};r.prototype.handleHighlightSearch=function(){var r=this.resetHighlightSearch(this.host.innerHTML);var t=r;if(this.search){var e=new RegExp("("+this.search+")","gi");t=r.replace(e,"<"+this.tag+">$1</"+this.tag+">")}this.host.innerHTML=t};r.prototype.resetHighlightSearch=function(r){var t=new RegExp("</?"+this.tag+">","g");return r.replace(t,"")};r.prototype.render=function(){return e(s,null,e("slot",null))};Object.defineProperty(r.prototype,"host",{get:function(){return i(this)},enumerable:true,configurable:true});return r}());c.style=n}}}));