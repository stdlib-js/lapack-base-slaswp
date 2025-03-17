"use strict";var R=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var F=R(function(rr,c){
var H=require('@stdlib/ndarray-base-assert-is-row-major/dist'),J=require('@stdlib/math-base-special-floor/dist'),Q=require('@stdlib/blas-base-sswap/dist').ndarray,_=32;function U(v,r,o,n,a,e,p,u,y,s,l){var i,q,E,w,b,h,f,j,x,t,g,m;if(u>0?i=p-e:i=e-p,i+=1,H([o,n])){for(f=l,j=0,t=e;j<i;j++,t+=u)w=y[f],w!==t&&Q(v,r,n,a+t*o,r,n,a+w*o),f+=s;return r}if(q=J(v/_)*_,q!==0)for(x=0;x<q;x+=_)for(f=l,j=0,t=e;j<i;j++,t+=u){if(w=y[f],w!==t)for(b=a+t*o,h=a+w*o,g=x;g<x+_;g++)m=g*n,E=r[b+m],r[b+m]=r[h+m],r[h+m]=E;f+=s}if(q!==v)for(f=l,j=0,t=e;j<i;j++,t+=u){if(w=y[f],w!==t)for(b=a+t*o,h=a+w*o,g=q;g<v;g++)m=g*n,E=r[b+m],r[b+m]=r[h+m],r[h+m]=E;f+=s}return r}c.exports=U
});var K=R(function(ar,C){
var W=require('@stdlib/blas-base-assert-is-layout/dist'),X=require('@stdlib/math-base-special-max/dist'),B=require('@stdlib/error-tools-fmtprodmsg/dist'),Y=F();function $(v,r,o,n,a,e,p,u){var y,s,l,i,q;if(!W(v))throw new TypeError(B('1zPFx',v));if(v==="row-major"&&n<X(1,r))throw new RangeError(B('1zPG4',r,n));if(u>0)s=1,q=a;else if(u<0)s=-1,q=a+(a-e)*u,y=a,a=e,e=y;else return o;return v==="column-major"?(l=1,i=n):(l=n,i=1),Y(r,o,l,i,0,a,e,s,p,u,q)}C.exports=$
});var S=R(function(er,M){
var L=F();function D(v,r,o,n,a,e,p,u,y,s,l){var i;return u<0?(l+=p*s,s*=-1,i=e,e=p,p=i,u=-1):(l+=e*s,u=1),L(v,r,o,n,a,e,p,u,y,s,l)}M.exports=D
});var z=R(function(ur,Z){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=K(),d=S();N(T,"ndarray",d);Z.exports=T
});var V=require("path").join,P=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),k=z(),O,G=P(V(__dirname,"./native.js"));I(G)?O=k:O=G;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
