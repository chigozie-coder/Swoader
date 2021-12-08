
class Swoader {
    constructor(color,size,Bg){
        this.color = color || "white";
        this.bg = Bg || "rgb(0,0,0,.6)";
        this.size = size || 100;
    }
    start(){
     this.loadcon=document.createElement("div");
        
   this.styles=document.createElement("style");
    this.styles.innerHTML=`@keyframes rotate{
        100%{transform:rotate(360deg);}
    }
     @keyframes textanime {
        100%{opacity:0.4;};
        }
   `
          this.loadcon.innerHTML="<div id='loader'></div><div id='lotext'></div>";
        setTimeout(()=>{
            document.body.appendChild(this.loadcon);
            document.body.appendChild(this.styles);
            this.addStyles();
        },2);
    }
    addText(text){
        setTimeout(()=>{
        this.lotext = document.getElementById('lotext');
        this.lotext.innerHTML = text;
        this.addStyles()
        },2)
    }
    animateText(){
        setTimeout(()=>{this.lotext.style.animation = "textanime 1s alternate infinite"},2)
    }
    
    displayOnlyText(){
        setTimeout(()=>{this.loader = document.getElementById('loader')
        this.loader.style.display = "none"
    },2)
    }
   addStyles(){
        
        this.loadcon.style.width="100vw";
        this.loadcon.style.height="100vh";    
        this.loadcon.style.backgroundColor=this.bg; 
        this.loadcon.style.justifyContent="center";
        this.loadcon.style.alignItems= "center";
        this.loadcon.style.position="fixed";
        this.loadcon.style.display="flex";
        this.loadcon.style.flexDirection="column";
        this.loadcon.style.top="0";
        this.loadcon.style.left="0";
        this.loader = document.getElementById('loader');
        this.loader=document.getElementById("loader");
        this.loader.style.width=this.size+"px";
        this.loader.style.height=this.size+"px";
        this.loader.style.borderRadius="50%";
        this.loader.style.border='20px solid '+ this.color;
        this.loader.style.borderLeftColor ="transparent";
        this.loader.style.borderRightColor = "transparent";
        this.loader.style.animation = 'rotate 800ms linear infinite'
        this.lotext = document.getElementById('lotext');
        this.lotext.style.fontSize = this.size/2;
        this.lotext.style.fontFamily = "courier";
        this.lotext.style.color = "white";
        this.lotext.style.fontWeight = "bolder";
    }
    
    
    removeWhenLoaded(time){
       setTimeout(()=>{
         this.loadcon.style.display = "none";
       },time)
    }
    removeWhenWindowLoaded(){
        window.onload=()=>{
        setTimeout(()=>{
            this.loadcon.style.display="none";
        },3)
        }
    }
}
