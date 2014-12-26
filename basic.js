
/*************Insert Function Name*************/
$(document).ready(function(){
  if($(window).width() > 768){
           $(window).stellar();
          $('#familyhead').stellar();
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



   /*************Insert Function Name*************/
   $(document).ready(function(){
    var clicked = false;
    $('#f1').click(function(){
      $('#famcont1').slideToggle(500);
      $('#juicetext').slideToggle(500);      
    })
   })

   $(document).ready(function(){
    $('#f2').click(function(){
      $('#famcont2').slideToggle(500);
      $('#dumptext').slideToggle(500);  
    })
   })

   $(document).ready(function(){
    $('#f3').click(function(){
      $('#famcont3').slideToggle(500);
      $('#yellowtext').slideToggle(500);  
    })
   })

   $(document).ready(function(){
    $('#f4').click(function(){
      $('#famcont4').slideToggle(500);
      $('#wantext').slideToggle(500);  
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
      $('body').scrollTo('#familyhead',{duration:800,offset:-50});
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
