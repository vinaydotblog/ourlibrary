if(this.API&&typeof this.API=="object"&&this.API.ajax&&this.API.Requester&&this.API.log){(function(){var C;var K=global.API;var I=K.log;var O=K.error;var R=K.warn;var S,U,H,N;var Q={};var E={};var D=["success","fail","cancel","send"];var P=["error","start","finish","groupstart","groupfinish"];S=U=H=N=0;function J(Y,c,b,W){var Z=c.id();var V=c.group();var X=["Request ",Y,((V)?" group="+V:""),((Z)?" ID="+Z:"")];if(!W){X=X.concat([" status=",b.status])}I(X.join(""))}function F(W,V,X){I(["Session ",W,((V)?" group="+V:""),((X)?" ID="+X:"")].join(""))}function G(X,Y,V,W){if(typeof X=="function"){X.apply(W||Y,V)}}function A(Y,X,W){var V=E[X.id()];G(V["on"+Y],X,W,V.context)}function T(X,W,V){G(Q["on"+X],K.ajax,V,K.ajax.callbackContext)}var B={onsuccess:function(V,W){S++;J("Successful",this,V);A("success",this,[V,W])},onfail:function(V){U++;J("Failed",this,V);A("fail",this,[V])},oncancel:function(V){H++;J("Canceled",this,V,true);A("cancel",this,[V])},onsend:function(X,Y){var W=this.id();var V=this.group();I(["Sending ",Y,((V)?" group="+V:""),((W)?" ID="+W:"")].join(""));A("send",this,[X,Y])},onstart:function(W,V){F("Started",V,W);T("start",this,[W,V])},onfinish:function(W,V){F("Finished",V,W);T("finish",this,[W,V])},ongroupstart:function(W,V){F("Group Started",V,W);T("groupstart",this,[W,V])},ongroupfinish:function(W,V){F("Group Finished",V,W);T("groupfinish",this,[W,V])},onerror:function(W,V,X,Z,Y){N++;O(["ERROR sending to",Y,Z,((V)?" group="+V:""),((W)?" ID="+W:"")].join(" "));T("error",this,[W,V,X,Z,Y])}};K.resetTotals=function(){S=U=H=N=0;I("Ajax totals reset")};K.logTotals=function(){I(["Succeeded: "+S,"Failed: "+U,"Canceled: "+H,"Errored: "+N].join(", "))};K.getTotals=function(){return{successes:S,failures:U,cancels:H,errors:N}};function L(W){var Y=W.id();var V=D.length;var X=E[Y];if(X){return false}X={};while(V--){if(W["on"+D[V]]){X["on"+D[V]]=W["on"+D[V]]}}X.context=W.callbackContext;E[Y]=X;return true}function M(){var V=P.length,W=K.ajax;while(V--){if(W["on"+P[V]]){Q["on"+P[V]]=W["on"+P[V]]}}Q.context=W.callbackContext}K.monitorRequest=function(V){if(V.id()){if(L(V)){V.bindToObject(B,false);I("Monitoring Ajax requester ID="+V.id())}else{R("Requester already monitored.")}}};K.monitorSession=function(V){if(!C){I("Saving Ajax session");M();I("Binding Ajax monitor");K.ajax.bindToObject(B,false);I("Monitoring Ajax activity");C=true}else{R("Ajax activity already monitored.")}}})()}