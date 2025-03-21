function init(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();
}
init()

var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove" , function(dets){
gsap.to(crsr,{
  x:dets.x,
  y:dets.y
})
})

var vl = gsap.timeline()
   vl.from("#nav a ", {
     y:-100,
     duration:1.3,  
     stagger:0.5 
   })
   
var tl =gsap.timeline({
  scrollTrigger:{
    trigger:"#page1-part1 h1",
    scroller:".main",
    start:"top 15%",
    end:"0%",
    scrub:true,
  }
})
tl.to("#page1-part1 #left1",{
  x:-80,
} , "tol")
tl.to("#page1-part1 #right1" ,{
  x:100,
} , "tol")
tl.to("#page1-part2 #dev",{
  x:-140,
},"tol")
tl.to("#page1-part1 #line" ,{
  width:"170px"
},"tol")

var rl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    scroller:".main",
    start:"50% 50%",
    end:"90% 50%",
    pin:true,
    scrub:true,   
  }
})
rl.to("#page2 #circle",{
  scale:20,
  duration:1,
})

var cl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
    scroller:".main",
    start:"50% 50%",
    end:"110% 50%",
    scrub:2,
    pin:true
  }
})
cl.
to('#top',{
  top:"-50%"
},'hii')
.to('#bottom',{
  bottom:"-50%"
},'hii')
.to('#top-h',{
  top:"80%"
},'hii')
.to('#bottom-h',{
  bottom:"-20%"
},'hii')
.to('#content',{
  marginTop:"0%"
},'hii')

var gl = gsap.timeline({
  scrollTrigger:{
    trigger:"#top1",
    scroller:".main",
    start:"10% 50%",
    end:"90% 50%",
    scrub:true, 
  }
})
gl.to('#topskill' , {
   gap:"25px"
},hii)

var hl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5",
    scroller:".main",
    start:"20% 50%",
    end:"90% 50%",
    scrub:2,
  }
})
hl.to('#page5-top img' , {
  x:-2000
})


