var cur = document.getElementById("cursor");
var blur = document.getElementById("cursor-blur");

var navitems =  document.querySelectorAll("li");

document.addEventListener("mousemove", function(dets){
 cur.style.left = dets.x-10+"px";
 cur.style.top = dets.y-10+"px";
 blur.style.left = dets.x-100+"px";
 blur.style.top = dets.y-100+"px";


})


navitems.forEach(function(element){
    element.addEventListener("mouseenter", function(){
        cur.style.scale= "1.5";
        cur.style.border = "0.5px solid #fff";
        cur.style.backgroundColor= "transparent";
        element.style.color = "gray"
        
    })
    element.addEventListener("mouseleave", function(){
        cur.style.scale= "1";
        cur.style.border = "0px solid #fff";
        cur.style.backgroundColor= "rgba(213, 120, 120, 0.263);";
        element.style.color = "#fff"
        
    })
})

gsap.to("nav",{
    backgroundColor:"#000",
 
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
       start:"top -10.4%",
       end:"top -12%",
       scrub: 1,
    }
})

gsap.to(".content",{
    backgroundColor: "#000" ,
    scrollTrigger:{
        trigger:".content",
        scroller:"body",
        // markers:true,
       start:"top -25%",
       end:"top -100%",
       scrub: 1,
    }
})
gsap.from(".aboutus img , .aboutcontent",{
    y: 90,

  duration: 1,
  scrollTrigger: {
    trigger: ".aboutus",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".cards", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from(".section1 h1", {
    y: 50,
    scrollTrigger: {
      trigger: ".section1 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });