// $(document).ready(function(){
//     $(".container").click(function(e){
//         var el = this;
//         // var clickY = parseInt(e.pageY - $(this).position().top);
//         // var clickX = parseInt(e.pageX - $(this).position().left);
        
//         // console.log("X "+clickX+" Y "+clickY)
//         // console.log("X "+e.pageX +" Y "+e.pageY)
//         var containerWidth = $(this).width()
//         var containerHeight = $(this).height()
//         var clickX = parseInt(getRandomWithRange(containerWidth*0.35, containerWidth*0.65))
//         var clickY = parseInt(getRandomWithRange(containerHeight*0.15, containerHeight*0.85))
//         $(el).append("<svg><circle cx='" + clickX + "' cy = '"+ clickY +"' fill = '#FFF'></circle></svg>")
//         $(el).find("svg").css({
//             position: "absolute",
//             "z-index": "-1000",
//             top:"0px",
//             lef:"0px",
//             width: "100%",
//             height: "100vh"
//         }).find("circle").css({
//             r: $(el).outerWidth() / 1.2,
//             transition: "1s all ease-out",
//             opacity: 0
//         })

//         setTimeout(()=>{
//             $(el).find("svg").remove();
//         },750)
//     })
// });

// function getRandomWithRange(min, max) {
//     return Math.random() * (max - min) + min;
//   }