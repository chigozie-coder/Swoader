class Loader{
    constructor(c,typ,bg){
        this.color=c || "dodgerblue";
        this.thickness=typ || 10;
        this.bgcolor=bg || "white";
        this.time=1;
        this.size=80;
        this.animation="linear";
        this.animationName="spinner";
    }
    activate(){
        this. loads=document.createElement("DIV");
        
   this.css=document.createElement("STYLE");
    this.css.innerHTML=`@keyframes spinner{
        0%{}
        100%{
            transform:rotateZ(720deg)
        }
    }`;
          this.loads.innerHTML="<div id='ball'></div>";
        setTimeout(()=>{
            document.body.appendChild(this.loads);
            document.body.appendChild(this.css);
            this.stylize();
        },2);
    }
    
   stylize(){
       this.loads.style.width="100vw";
this.loads.style.height="100vh";    
this.loads.style.backgroundColor=this.bgcolor; 
this.loads.style. justifyContent="center";
    this.loads.style.alignItems= "center";
    this.loads.style.position="fixed";
this.loads.style.top="0";
this.loads.style.left="0";
this.loads.style.display="flex";
this.loads.style.flexDirection="column";
this.ball=document.getElementById("ball");
this.ball.style.width=this.size+"px";
this.ball.style.height=this.size+"px";
this.ball.style.borderRadius="50%";
this.ball.style.border=`${this.thickness}px solid ${this.color}`;
this.ball.style.borderLeftColor="transparent";

this.ball.style.animation=`${this.animationName} ${this.time}s infinite ${this.animation}`;
   } 
   closeWhenDone(){
       addEventListener("DOMContentLoaded",()=>{
setTimeout(()=>{
    this.loads.style.display="none";},3);
});
   }
   closeCountDown(s){
setTimeout(()=>{
this.loads.style.display="none";
},s);
}
    
    
}
