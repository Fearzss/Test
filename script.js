function toggleTheme(){
    document.body.classList.toggle("end");
}

const canvas=document.createElement("canvas");
canvas.id="particles";
document.body.appendChild(canvas);
const ctx=canvas.getContext("2d");

function resize(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

let particles=[];
for(let i=0;i<80;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        d:Math.random()*1
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
        p.y+=p.d;
        if(p.y>canvas.height) p.y=0;
    });
    requestAnimationFrame(animate);
}
animate();
