function timelineOne() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      scrub: 1,
      // markers: true,
      pin: true,
      end: "bottom -250%",
    },
  });

  tl.to(
    "#circle #btm img",
    {
      scale: 1,
      rotate: "-180deg",
      duration: 1,
      stagger: 0.1,
      ease: Power1,
    },
    "hello"
  )
    .to(
      "#circle #top img",
      {
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#cimage img",
      {
        scale: 0,
        duration: 1,
        stagger: 0.1,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#centerimg h5",
      {
        opacity: 0,
        stagger: 0.1,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#circle",
      {
        scale: 0.6,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#overlay>h1#gallery",
      {
        bottom: "-50%",
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#gola",
      {
        top: "50%",
        scale: 2,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#gola",
      {
        opacity: 0,
        duration: 2.2,
        ease: Power1,
      },
      "hello2"
    )
    .to(
      "#smcircle",
      {
        scale: 0,
        duration: 2,
        ease: Power1,
      },
      "hello2"
    )
    .to(
      "#circle",
      {
        scale: 0,
        duration: 2,
        ease: Power1,
      },
      "hello2"
    )
    .to(
      "#overlay>h1#pf",
      {
        rotate: 0,
        bottom: "2%",
        ease: Power1,
      },
      "hello2"
    )
    .to(
      "#pinkpart",
      {
        top: 0,
        duration: 5,
        ease: Power1,
      },
      "hello2"
    )
    .to("#pinkpart", {
      top: "-50%",
      duration: 3,
      ease: Power1,
    });
}

function timelineTwo() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#second",
      scrub: 1,
      start: "top top",
      // markers: true,
      pin: true,
      end: "bottom -150%",
    },
  });

  tl2
    .to(".circle", {
      top: "50%",
      ease: Power1,
      stagger: 0.1,
    })
    .to(".circle", {
      left: "50%",
      ease: Power1,
      stagger: 0.1,
    })
    .to(".pi", {
      scale: 10,
      ease: Power1,
      stagger: 0.1,
    })
    .to(".pi", {
      background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
      ease: Power1,
    })
    .to(
      "#stop h1",
      {
        left: "-200%",
        duration: 8,
        ease: Power1,
      },
      "a"
    )
    .to(
      "#sbtm #one",
      {
        opacity: 0,
        delay: 3,
        ease: Power1,
      },
      "a"
    )
    .to(
      "#sbtm #two",
      {
        opacity: 1,
        delay: 4,
        duration: 2,
        ease: Power1,
      },
      "a"
    );
}

// background: linear-gradient(to right, #d5a7b4, #b4aad5)
timelineOne();
timelineTwo();
