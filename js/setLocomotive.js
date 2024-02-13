window.addEventListener("load", (event) => {
  
    const scroll = new LocomotiveScroll({

      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction:"horizontal",
      lerp:0.05,
      getSpeed:true,
      multiplier:1,
      tablet:{
        smooth:false,
        direction:"vertical"
      },
      smartphone:{
        smooth:false,
        direction:"vertical"
      }
      
    });




    /* -- funcion de scroll to -- */

    const links = document.querySelectorAll(".gds-links-sections");

    links.forEach(link => {

        link.addEventListener("click",(e)=>{

          
          if(e.target.classList.contains('gds-links-sections')){

            console.log("hola")
           const idElemento =  e.target.getAttribute('gds-scroll-to');

           console.log(idElemento)

            const section = document.querySelector(`${idElemento}`)

            console.log(section)
            scroll.scrollTo(section)
          }


        })
    });




    /* -------------------------- */
  


    let altura = $("#arrowBase")

   
 
  
    const animationToRight = () =>{

        
    }
  
    const animationToLeft = () =>{
  

        
    }
    
    
    
   
  
      let positionActual = "start";
  
      scroll.on("scroll",(e)=>{
  
          console.clear();
          console.log("limite x: " + e.limit.x);
          console.log("posicion x: " + e.scroll.x);
  
          let positionX = e.scroll.x;
          let limitX = e.limit.x;
  
          const start = positionX <= 100;
          const toRight = positionX > 100;
          const toLeft = positionX > (limitX -100);
  
  
          if(positionActual === "start"){
              
  
              if(start){
               
                $(".arrowTransition").css("transition","0s");
                $("#arrow-scroll").css("transition","0s");
                $("#arrowBase").css("visibility","visible");
                $(".arrowTransition").addClass("invisible");
                $(".arrowTransition").css("right","30%");
                $("#arrow-scroll").css("transform","rotate(45deg)");

              }else if(toRight){
  
                  if(toLeft){
                    positionActual = "end";

                    $("#arrow-scroll").css("transform","rotate(-180deg)");
                    $(".arrowTransition").css("right","90%");
                    $("#arrow-scroll").css("left","0");
                     
                  }else{
                    $(".arrowTransition").css("transition","1s");
                    $("#arrow-scroll").removeClass("invisible");
                    $("#arrow-scroll").css("transition","1s");
                    $("#arrowBase").css("visibility","hidden");
                    $(".arrowTransition").removeClass("invisible");
                    $("#arrow-scroll").css("transform","rotate(0)");
                    $(".arrowTransition").css("right","5%"); 
                    $(".arrowTransition").css("width","100px");
                    $("#arrow-scroll").css("left","35px");
                    
                  }
                  
            }
  
  
          }else if(positionActual === "end"){
  
              if(start){
                positionActual = "start";
             
                $(".arrowTransition").css("transition","0s");
                $("#arrow-scroll").css("transition","0s");
                $(".arrowTransition").addClass("invisible");
                $("#arrow-scroll").addClass("invisible");
             }

  
          }
      });
  

  
});