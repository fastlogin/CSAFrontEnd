
/*************Insert Function Name*************/
$(document).ready(function(){
  if($(window).width() > 768){
           $(window).stellar();
          $('#fambody').stellar();
        }
})
 /********************************************/


/*************Splash Functions*************/
     $(document).ready(function(){
    $('#splashbutton').mouseover(function(){
      $('#drag').stop(true,true).animate({
        'opacity': '0.6',
      },400)
      $('#reflect').stop(true,true).animate({
        'opacity': '0.8',
      },400)
    })
      }
      )

          $(document).ready(function(){
    $('#splashbutton').mouseout(function(){
      $('#drag').stop(true,true).animate({
        'opacity': '1.0',
      },400)
      $('#reflect').stop(true,true).animate({
        'opacity': '0.0',
      },400)
    })
      }
      )

     $(document).ready(function(){
    $('#splashbutton').click(function(){
      $('#obliterate').fadeToggle(100, function(){
      $('.splash').delay(200).slideToggle(800)
      $('#navbar').delay(500).fadeToggle(800,function(){
        $('#iconsmain').stop(true,true).delay(600).animate({
          'opacity': '1.0'
        },800)
      })
      $('.headtext').textillate({ initialDelay: 1000,in: { effect: 'rollIn' } });


    })})})

 /********************************************/

 /*************Icon to Bar*************/
  $(document).ready(setInterval(function(){
   if($(window).scrollTop() >= 400){
    $('#icons').stop(true,false).animate({
      opacity: 1.0
    },300)
     $('#navborder').stop(true,false).animate({
      opacity: 1.0
    },300)

   }
   else{
    $('#icons').stop(true,false).animate({
      opacity: 0.0
    },300)
    $('#navborder').stop(true,false).animate({
      opacity: 0.0
    },300)
   }
   },250))
  /********************************************/

// $(document).ready(function(){
//   $('#juicebutton').load(function(){
//     var h = $('#juicebutton').height();
//     var w = $('#juicebutton').width();
//     console.log(h);
//     console.log(w);
//   })
//   $('#juicebutton').mouseover(function(){
//     $('#juicebutton').stop(true,false).animate({
//       'height': h * 0.8,
//       'width': w * 0.8
//     },400)
//   })
//   $('#juicebutton').mouseout(function(){
//     $('#juicebutton').stop(true,false).animate({
//       'height': h,
//       'width': w
//     })
//   })
// })

   /*************Insert Function Name*************/
   $(document).ready(function(){

    var juice = false;
    var yellow = false;
    var dumpling = false;
    var wanton = false;

    $('#famback').click(function(){
      $('.fambutton').delay(600).slideToggle(500);   
      $('#famback').fadeToggle(800);
      if(juice){
        $('#famcont1').slideToggle(500);
        juice = false;
      }
      if(yellow){
        $('#famcont2').slideToggle(500);
        yellow = false;
      }
      if(dumpling){
        $('#famcont3').slideToggle(500);
        dumpling = false;
      }
      if(wanton){
        $('#famcont4').slideToggle(500);
        wanton = false;
      }
    })

    $('#juicebutton').click(function(){
      $('.fambutton').slideToggle(500);  
      $('#famcont1').delay(600).slideToggle(500);  
      $('#famback').fadeToggle(800);
      juice = true;
    })

    $('#yfbutton').click(function(){
      $('.fambutton').slideToggle(500);  
      $('#famcont2').delay(600).slideToggle(500);  
      $('#famback').fadeToggle(800);
      yellow = true;
    })

    $('#dumpbutton').click(function(){
      $('.fambutton').slideToggle(500);  
      $('#famcont3').delay(600).slideToggle(500);  
      $('#famback').fadeToggle(800);
      dumpling = true;
    })

    $('#wantonbutton').click(function(){
      $('.fambutton').slideToggle(500);  
      $('#famcont4').delay(600).slideToggle(500);  
      $('#famback').fadeToggle(800);
      wanton = true;
    })

   })
    /********************************************/

    $(document).ready(function(){
      $('#socialscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#socialwin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#socialclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#socialwin').fadeToggle(500);
      })
    })

        $(document).ready(function(){
      $('#mndsscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#mndswin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#mndsclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#mndswin').fadeToggle(500);
      })
    })


    $(document).ready(function(){
      $('#mafscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#mafwin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#mafclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#mafwin').fadeToggle(500);
      })
    })


    $(document).ready(function(){
      $('#semiscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#semiwin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#semiclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#semiwin').fadeToggle(500);
      })
    })


    $(document).ready(function(){
      $('#chinascr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#chinawin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#chinaclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#chinawin').fadeToggle(500);
      })
    })


    $(document).ready(function(){
      $('#gscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#gwin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#gclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#gwin').fadeToggle(500);
      })
    })

/*************Insert Function Name*************/
$(document).ready(function(){
        $('.navbar-nav li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
})

  $(document).ready(function(){
    $('#abou').click(function(){
      $('body').scrollTo('#abouthead',{duration:800,offset:-50});
      })
    })

    $(document).ready(function(){
    $('#fam').click(function(){
      $('body').scrollTo('#famhead',{duration:800,offset:-50});
      })
    })

    $(document).ready(function(){
    $('#eve').click(function(){
      $('body').scrollTo('#events',{duration:800,offset:-50});
      })
    })

        $(document).ready(function(){
    $('#con').click(function(){
      $('body').scrollTo('#contactend',{duration:800,offset:-50});
      })
    })

            $(document).ready(function(){
    $('#hom').click(function(){
      $('body').scrollTo(0,{duration:800});
      })
    })


 /********************************************/
