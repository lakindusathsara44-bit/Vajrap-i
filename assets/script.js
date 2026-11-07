/* Subtle silver-and-gold drifting particles; respects reduced-motion preferences. */
(()=>{'use strict';
 const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const canvas=document.getElementById('particles'); if(!canvas||reduce)return;
 const ctx=canvas.getContext('2d'); if(!ctx)return;
 let w=0,h=0,dpr=1,items=[];
 function resize(){dpr=Math.min(window.devicePixelRatio||1,1.5);w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);items=Array.from({length:Math.min(48,Math.floor(w/22))},()=>({x:Math.random()*w,y:Math.random()*h,r:.45+Math.random()*1.15,v:.12+Math.random()*.35,a:.18+Math.random()*.35,g:Math.random()>.72}));}
 function draw(){ctx.clearRect(0,0,w,h);for(const p of items){ctx.beginPath();ctx.fillStyle=p.g?'rgba(185,155,85,'+p.a+')':'rgba(198,203,210,'+p.a+')';ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();p.y+=p.v;p.x+=Math.sin(p.y*.006)*.12;if(p.y>h+4){p.y=-4;p.x=Math.random()*w;}}requestAnimationFrame(draw);}
 resize();addEventListener('resize',resize,{passive:true});draw();
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
})();