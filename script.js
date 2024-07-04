var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "10% 95%",
    end: "70% 70%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')

tl.to("#halfOrange",{
    top:"160%",
    left: "22%"
}, 'orange')

tl.to("#fullOrange",{
    width: "20%",
    top:"162%",
    right: "10%"
}, 'orange')

tl.to("#leaf1",{
    top:"110%",
    rotate: "130deg",
    left: "80%"
}, 'orange')

tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "20% 90%",
    end: "90% 90%",
    scrub: true,
    // markers: true,
}})


tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    right: "100%",
}, 'ca')


tl2.from("#sprite",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#halfOrange",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"20%",
    top: "210%",
    left: "41%",
}, 'ca')

