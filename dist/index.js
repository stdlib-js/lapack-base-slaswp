"use strict";var E=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var _=E(function(er,F){
var H=require('@stdlib/ndarray-base-assert-is-row-major/dist'),J=require('@stdlib/math-base-special-floor/dist'),Q=require('@stdlib/blas-base-sswap/dist').ndarray,M=32;function U(v,r,o,n,a,e,p,u,y,s,l){var i,m,x,w,R,b,f,j,h,t,g,q;if(u>0?i=p-e:i=e-p,i+=1,H([o,n])){for(f=l,j=0,t=e;j<i;j++,t+=u)w=y[f],w!==t&&Q(v,r,n,a+t*o,r,n,a+w*o),f+=s;return r}if(m=J(v/M)*M,m!==0)for(h=0;h<m;h+=M)for(f=l,j=0,t=e;j<i;j++,t+=u){if(w=y[f],w!==t)for(R=a+t*o,b=a+w*o,g=h;g<h+M;g++)q=g*n,x=r[R+q],r[R+q]=r[b+q],r[b+q]=x;f+=s}if(m!==v)for(f=l,j=0,t=e;j<i;j++,t+=u){if(w=y[f],w!==t)for(R=a+t*o,b=a+w*o,g=m;g<v;g++)q=g*n,x=r[R+q],r[R+q]=r[b+q],r[b+q]=x;f+=s}return r}F.exports=U
});var K=E(function(ur,B){
var W=require('@stdlib/blas-base-assert-is-layout/dist'),X=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),Y=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),$=require('@stdlib/math-base-special-max/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),L=_();function D(v,r,o,n,a,e,p,u){var y,s,l,i,m;if(!W(v))throw new TypeError(O('1zPFx',v));if(X(v)&&n<$(1,r))throw new RangeError(O('1zPG4',r,n));if(u>0)s=1,m=a;else if(u<0)s=-1,m=a+(a-e)*u,y=a,a=e,e=y;else return o;return Y(v)?(l=1,i=n):(l=n,i=1),L(r,o,l,i,0,a,e,s,p,u,m)}B.exports=D
});var T=E(function(vr,S){
var N=_();function d(v,r,o,n,a,e,p,u,y,s,l){var i;return u<0?(l+=p*s,s*=-1,i=e,e=p,p=i,u=-1):(l+=e*s,u=1),N(v,r,o,n,a,e,p,u,y,s,l)}S.exports=d
});var z=E(function(ir,c){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=K(),P=T();V(Z,"ndarray",P);c.exports=Z
});var I=require("path").join,k=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),rr=z(),C,G=k(I(__dirname,"./native.js"));A(G)?C=rr:C=G;module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
