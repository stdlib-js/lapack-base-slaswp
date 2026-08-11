"use strict";var E=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var _=E(function(er,F){
var H=require('@stdlib/ndarray-base-assert-is-row-major/dist'),J=require('@stdlib/math-base-special-floor/dist'),Q=require('@stdlib/blas-base-sswap/dist').ndarray,M=32;function U(i,r,u,n,a,e,p,v,y,s,l){var o,m,x,w,R,b,f,j,h,t,g,q;if(v>0?o=p-e:o=e-p,o+=1,H([u,n])){for(f=l,j=0,t=e;j<o;j++,t+=v)w=y[f],w!==t&&Q(i,r,n,a+t*u,r,n,a+w*u),f+=s;return r}if(m=J(i/M)*M,m!==0)for(h=0;h<m;h+=M)for(f=l,j=0,t=e;j<o;j++,t+=v){if(w=y[f],w!==t)for(R=a+t*u,b=a+w*u,g=h;g<h+M;g++)q=g*n,x=r[R+q],r[R+q]=r[b+q],r[b+q]=x;f+=s}if(m!==i)for(f=l,j=0,t=e;j<o;j++,t+=v){if(w=y[f],w!==t)for(R=a+t*u,b=a+w*u,g=m;g<i;g++)q=g*n,x=r[R+q],r[R+q]=r[b+q],r[b+q]=x;f+=s}return r}F.exports=U
});var K=E(function(ur,B){
var W=require('@stdlib/blas-base-assert-is-layout/dist'),X=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),Y=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),$=require('@stdlib/math-base-special-max/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),L=_();function D(i,r,u,n,a,e,p,v){var y,s,l,o,m;if(!W(i))throw new TypeError(O('1zPFx',i));if(X(i)&&n<$(1,r))throw new RangeError(O('1zPG4',r,n));if(v>0)s=1,m=a;else if(v<0)s=-1,m=a+(a-e)*v,y=a,a=e,e=y;else return u;return Y(i)?(l=1,o=n):(l=n,o=1),L(r,u,l,o,0,a,e,s,p,v,m)}B.exports=D
});var T=E(function(vr,S){
var N=_();function d(i,r,u,n,a,e,p,v,y,s,l){var o;return v<0?(l+=p*s,s*=-1,o=e,e=p,p=o,v=-1):(l+=e*s,v=1),N(i,r,u,n,a,e,p,v,y,s,l)}S.exports=d
});var z=E(function(ir,c){
var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=K(),P=T();V(Z,"ndarray",P);c.exports=Z
});var I=require("path").join,k=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),rr=z(),C,G=k(I(__dirname,"./native.js"));A(G)?C=rr:C=G;module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
