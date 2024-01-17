//헤더
$(function(){
    $(".a1").hover(function(){
      $(".ul1").css("display","none");
      $(".ul1").css("display","block");
      $(".ul1").css("left","-55px");
      $(".ul1").css("top","40px");
      $(".ul1").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul1").css("display","block");
      $(".ul1").css("display","none");
    });
  });


  $(function(){
    $(".a2").hover(function(){
      $(".ul2").css("display","none");
      $(".ul2").css("display","block");
      $(".ul2").css("left","3px");
      $(".ul2").css("top","40px");
      $(".ul2").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul2").css("display","block");
      $(".ul2").css("display","none");
    });
  });

  $(function(){
    $(".a3").hover(function(){
      $(".ul3").css("display","none");
      $(".ul3").css("display","block");
      $(".ul3").css("left","63px");
      $(".ul3").css("top","40px");
      $(".ul3").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul3").css("display","block");
      $(".ul3").css("display","none");
    });
  });

  $(function(){
    $(".a4").hover(function(){
      $(".ul4").css("display","none");
      $(".ul4").css("display","block");
      $(".ul4").css("left","123px");
      $(".ul4").css("top","40px");
      $(".ul4").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul4").css("display","block");
      $(".ul4").css("display","none");
    });
  });

  $(function(){
    $(".a5").hover(function(){
      $(".ul5").css("display","none");
      $(".ul5").css("display","block");
      $(".ul5").css("left","177px");
      $(".ul5").css("top","40px");
      $(".ul5").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul5").css("display","block");
      $(".ul5").css("display","none");
    });
  });

  $(function(){
    $(".a6").hover(function(){
      $(".ul6").css("display","none");
      $(".ul6").css("display","block");
      $(".ul6").css("left","225px");
      $(".ul6").css("top","40px");
      $(".ul6").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul6").css("display","block");
      $(".ul6").css("display","none");
    });
  });

  $(function(){
    $(".a7").hover(function(){
      $(".ul7").css("display","none");
      $(".ul7").css("display","block");
      $(".ul7").css("left","295px");
      $(".ul7").css("top","40px");
      $(".ul7").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul7").css("display","block");
      $(".ul7").css("display","none");
    });
  });

  $(function(){
    $(".a8").hover(function(){
      $(".ul8").css("display","none");
      $(".ul8").css("display","block");
      $(".ul8").css("left","375px");
      $(".ul8").css("top","40px");
      $(".ul8").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul8").css("display","block");
      $(".ul8").css("display","none");
    });
  });

  $(function(){
    $(".a9").hover(function(){
      $(".ul9").css("display","none");
      $(".ul9").css("display","block");
      $(".ul9").css("left","430px");
      $(".ul9").css("top","40px");
      $(".ul9").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul9").css("display","block");
      $(".ul9").css("display","none");
    });
  });

  $(function(){
    $(".a10").hover(function(){
      $(".ul10").css("display","none");
      $(".ul10").css("display","block");
      $(".ul10").css("left","485px");
      $(".ul10").css("top","40px");
      $(".ul10").css("background-color","rgb(255, 252, 252");
    },function(){
      $(".ul10").css("display","block");
      $(".ul10").css("display","none");
    });
  });


  //옷

  function toggleFavorite(button) {
    button.classList.toggle('favorite-filled');
}

function shakeCart(button) {
    button.classList.add('shake-animation');
    setTimeout(() => {
        button.classList.remove('shake-animation');
    }, 300);
}