var API,global=this;if(API){(function(){var J=API,B=J.setAttribute,M=J.getAttribute,N=J.removeAttribute,K=J.addClass,Q=J.removeClass,F=J.hasClass,I=J.elementUniqueId;var L,C,E,P,A={};var D,O;var H=function(R){if(/^(true|false)$/.test(R)){return R=="true"}return R};if(B){J.getControlRole=function(R,S){return M(R,"role")};J.setControlRole=function(R,S){B(R,"role",S)};J.getWaiProperty=P=function(S,R){return M(S,"aria-"+R)};J.setWaiProperty=E=function(S,R,T){B(S,"aria-"+R,T)};L=function(S,R,T){E(S,R,T.toString())};C=function(S,R){return H(P(S,R))};J.removeWaiProperty=function(S,R){N(S,"aria-"+R)}}else{L=function(S,R,T){if(!A[R]){A[R]={}}A[R][I(S)]=T.toString()};C=function(S,R){if(!A[R]){A[R]={}}return H(A[R][I(S)])}}J.setControlState=L;J.getControlState=C;if(K||L){D=function(R){var S=new RegExp("\\s+\\("+R+"\\)");return function(U,T){if(typeof T=="undefined"){T=true}if(K){if(T){K(U,R)}else{Q(U,R)}}if(L){L(U,R,T)}if(typeof U.title=="string"&&U.title){U.title=U.title.replace(S,"");if(T){U.title+=" ("+R+")"}}}};O=function(R){return function(S){if(F){return F(S,R)}return C(S,R)}};J.disableControl=D("disabled");J.pressControl=D("pressed");J.checkControl=D("checked");J.selectControl=D("selected");J.isControlDisabled=O("disabled");J.isControlPressed=O("pressed");J.isControlChecked=O("checked");J.isControlSelected=O("selected")}var G;if(Function.prototype.call){G=function(U,V,T,S,R){return U.call(V,T,S,R)}}else{G=function(V,W,U,T,S){W._mylibWidgetCallTemp=V;var R=W._mylibWidgetCallTemp(U,T,S);delete W._mylibWidgetCallTemp;return R}}J.callInContext=G;if(J.attachDocumentReadyListener){J.attachDocumentReadyListener(function(){var X,a=API;var Z=a.setStyle,e=a.findProprietaryStyle,W=a.showElement,V,b,T,d,U;if(e){d=e("userSelect")}if(d&&Z){U=function(g,f){if(typeof f=="undefined"){f=true}Z(g,d,f?"none":"")}}else{if(B&&(typeof global.document.expando=="undefined"||global.document.expando)){U=function(g,f){if(typeof f=="undefined"){f=true}B(g,"unselectable",f?"on":"off")}}}API.makeElementUnselectable=U;if(W){if(e&&(V=e("transition"))){b=V+"Property";T=V+"Duration";X=function(j,f,i,l){if(!i){i={}}var h=i.keyClassName;var g=i.useCSSTransitions;var k=i.ondone||l;if(V){if(typeof g=="undefined"){g=!!i.effects}}if(g){j.style[T]=((i.duration||0)/1000)+"s"}else{g=false}if(f||typeof f=="undefined"){j.style.visibility="hidden"}if(K){if(g){Q(j,"animated");if(h){Q(j,h)}K(j,"animated")}else{if(F(j,"animated")){Q(j,"animated");if(T){j.style[T]="0s"}}}}if(g&&h){K(j,h)}global.setTimeout(function(){W(j,f,{removeOnHide:true,effects:g?null:i.effects,duration:i.duration,ease:i.ease,fps:i.fps},function(){if(g&&Q){Q(j,"animated")}if(k){k(j,f)}});L(j,"hidden",f);if(k&&!W.async){k(j,f)}},1)}}else{X=function(h,f,g,i){W(h,f,g,i);L(h,"hidden",f)}}X.async=W.async}a.showControl=X;var R=a.attachDrag,c=a.detachDrag;if(R){var S=function(g,h,f){return function(){if(K){K(g,"dragging");if(h){G(h,f,g)}}}};var Y=function(g,h,f){return function(){if(Q){Q(g,"dragging")}if(h){G(h,f,g)}}};a.attachDragToControl=function(g,h,f){if(!f){f={}}R(g,h,{ghost:false,ondragstart:S(g,f.ondragstart,f.callbackContext||API),ondrop:Y(g,f.ondragstart,f.callbackContext||API)})};a.detachDragFromControl=function(f,g){c(f,g)}}a=null})}J=null})()}