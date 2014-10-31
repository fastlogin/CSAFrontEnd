
/*************Insert Function Name*************/
$(document).ready(function(){
  if($(window).width() > 768){
           $(window).stellar();
          $('#head1').stellar();
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
   }
   else{
    $('#icons').stop(true,false).animate({
      opacity: 0.0
    },300)
   }
   },250))
  /********************************************/

  /*************Cheesy Fam Click*************/

$(document).ready(function(){
  var notclicked = true;
  $('#famclick').click(function(){
    if(notclicked){
    $('#famclick').textillate({ loop: true, in:{effect:'bounceInUp'} , out:{effect:'hinge'}});
    notclicked = false;
  }
  else{
    $('#famclick').textillate({ loop: false });
    notclicked = true;
  }
  })
})

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
        $('#socialwin').slideToggle(500);
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
        $('#mndswin').slideToggle(500);
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
        $('#mafwin').slideToggle(500);
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
        $('#semiwin').slideToggle(500);
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
        $('#chinawin').slideToggle(500);
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
        $('#gwin').slideToggle(500);
      })
    })


