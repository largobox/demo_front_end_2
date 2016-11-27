  var limit_0   = 4750,
      limit_1   = 4920,
      limit_2   = 5250,
      limit_2_1 = 5850,
      limit_3   = 6275,
      limit_4   = 6420,
      limit_5   = 6515;          

  var pencilViewParts = $('.pencil_form li'),      
  pencil_form_part  = []

  for (var i = 0; i < 12; i++) {
    pencil_form_part.push(7770 + i*30);
  }

$(window).scroll(function(){

  var s = $(this).scrollTop();
  // console.log(s);


  if (s <= limit_0) {
    $('.pencil_board').css({
      'transform' : 'translate(0px, '+ (-150) +'px)'
    });

    $('.pencil_body').css({
      'transform' : 'translate(0px, '+ (-480) +'px)'
    });

    $('.pencil_battery').css({
      'transform' : 'translate(0px, '+ (-1100) +'px)'
    });

    $('.pencil_sensor').css({
      'transform' : 'translate(0px, '+ (-1140) +'px)'
    });

    $('.pencil_tip').css({
      'transform' : 'translate(0px, '+ (-1190) +'px)'
    });        
  }
  else if (s > limit_0 && s <= limit_1) { 
    $('.pencil_board').css({
      'transform' : 'translate(0px, '+ (-160+s-limit_0) +'px)'
    });

    $('.pencil_body').css({
      'transform' : 'translate(0px, '+ (-480+s-limit_0) +'px)'
    });

    $('.pencil_battery').css({
      'transform' : 'translate(0px, '+ (-1100+s-limit_0) +'px)'
    });

    $('.pencil_sensor').css({
      'transform' : 'translate(0px, '+ (-1140+s-limit_0) +'px)'
    });

    $('.pencil_tip').css({
      'transform' : 'translate(0px, '+ (-1190+s-limit_0) +'px)'
    }); 
  }
  else if (s > limit_1 && s <= limit_2) { 
    $('.pencil_body').css({
      'transform' : 'translate(0px, '+ (-480+s-limit_0) +'px)'
    });

    $('.pencil_battery').css({
      'transform' : 'translate(0px, '+ (-1100+s-limit_0) +'px)'
    });

    $('.pencil_sensor').css({
      'transform' : 'translate(0px, '+ (-1140+s-limit_0) +'px)'
    });

    $('.pencil_tip').css({
      'transform' : 'translate(0px, '+ (-1190+s-limit_0) +'px)'
    }); 
  }
  else if (s > limit_2 && s <= limit_2_1) {   // need some another issue
    $('.pencil_battery').css({
      'transform' : 'translate(0px, '+ (-410) +'px)'
    });

    $('.pencil_sensor').css({
      'transform' : 'translate(0px, '+ (-500) +'px)'
    });

    $('.pencil_tip').css({
      'transform' : 'translate(0px, '+ (-648) +'px)'
    }); 
  }
  else if (s > limit_2_1 && s <= limit_3) { 
    $('.pencil_battery').css({
      'transform' : 'translate(0px, '+ (-1510+s-limit_0) +'px)'
    });

    $('.pencil_sensor').css({
      'transform' : 'translate(0px, '+ (-1600+s-limit_0) +'px)'
    });

    $('.pencil_tip').css({
      'transform' : 'translate(0px, '+ (-1748+s-limit_0) +'px)'
    });

  }  
  else if (s > limit_3 && s <= limit_4) {
    $('.pencil_sensor').css({
      'transform' : 'translate(0px, '+ (-1330+0.8*(s-limit_0)) +'px)'
    });

    $('.pencil_tip').css({
      'transform' : 'translate(0px, '+ (-1748+s-limit_0) +'px)'
    }); 
  }
  else if (s > limit_4 && s <= limit_5) { 
    $('.pencil_tip').css({
      'transform' : 'translate(0px, '+ (-1748+s-limit_0) +'px)'
    }); 
  }       


// -------------------------------------------------------------


  var txt_part_1 = $('.pencil_eraser');

  if (s > limit_0) {
    txt_part_1.find('h3').css({
      'opacity': 1
    });
    txt_part_1.find('p').css({
      'opacity': 1
    });
  } else {
    txt_part_1.find('h3').css({
      'opacity': 0
    });
    txt_part_1.find('p').css({
      'opacity': 0
    });  
  }

  var txt_part_2 = $('.pencil_board');

  if (s > limit_0+200) {
    txt_part_2.find('h3').css({
      'opacity': 1
    });
    txt_part_2.find('p').css({
      'opacity': 1
    });
  } else {
    txt_part_2.find('h3').css({
      'opacity': 0
    });
    txt_part_2.find('p').css({
      'opacity': 0
    });  
  }

  var txt_part_3 = $('.pencil_body');

  if (s > limit_2) {
    txt_part_3.find('h3').css({
      'opacity': 1
    });
    txt_part_3.find('p').css({
      'opacity': 1
    });
  } else {
    txt_part_3.find('h3').css({
      'opacity': 0
    });
    txt_part_3.find('p').css({
      'opacity': 0
    });  
  }

  var txt_part_4 = $('.pencil_battery');

  if (s > limit_3) {
    txt_part_4.find('h3').css({
      'opacity': 1
    });
    txt_part_4.find('p').css({
      'opacity': 1
    });
  } else {
    txt_part_4.find('h3').css({
      'opacity': 0
    });
    txt_part_4.find('p').css({
      'opacity': 0
    });  
  } 

  var txt_part_5 = $('.pencil_sensor');

  if (s > limit_4) {
    txt_part_5.find('h3').css({
      'opacity': 1
    });
    txt_part_5.find('p').css({
      'opacity': 1
    });
  } else {
    txt_part_5.find('h3').css({
      'opacity': 0
    });
    txt_part_5.find('p').css({
      'opacity': 0
    });  
  }

  var txt_part_6 = $('.pencil_tip');

  if (s > limit_5) {
    txt_part_6.find('h3').css({
      'opacity': 1
    });
    txt_part_6.find('p').css({
      'opacity': 1
    });
  } else {
    txt_part_6.find('h3').css({
      'opacity': 0
    });
    txt_part_6.find('p').css({
      'opacity': 0
    });  
  }
// bad
  // if ( s < pencil_form_part[0] ) {
  //   pencilViewParts.eq(0).addClass('active');
  //   pencilViewParts.eq(1).removeClass('active');
  // } else if ( pencil_form_part[0] <= s && s < pencil_form_part[1] ) {
  //   pencilViewParts.eq(0).removeClass('active');
  //   pencilViewParts.eq(1).addClass('active');  
  //   pencilViewParts.eq(2).removeClass('active');
  // } else if ( pencil_form_part[1] <= s && s < pencil_form_part[2] ) {
  //   pencilViewParts.eq(1).removeClass('active');
  //   pencilViewParts.eq(2).addClass('active');  
  //   pencilViewParts.eq(3).removeClass('active');
  // }  else if ( pencil_form_part[2] <= s && s < pencil_form_part[3] ) {
  //   pencilViewParts.eq(2).removeClass('active');
  //   pencilViewParts.eq(3).addClass('active');  
  //   pencilViewParts.eq(4).removeClass('active');
  // } else if ( pencil_form_part[3] <= s && s < pencil_form_part[4] ) {
  //   pencilViewParts.eq(3).removeClass('active');
  //   pencilViewParts.eq(4).addClass('active');  
  //   pencilViewParts.eq(5).removeClass('active');
  // } else if ( pencil_form_part[4] <= s && s < pencil_form_part[5] ) {
  //   pencilViewParts.eq(4).removeClass('active');
  //   pencilViewParts.eq(5).addClass('active');  
  //   pencilViewParts.eq(6).removeClass('active');
  // } else if ( pencil_form_part[5] <= s && s < pencil_form_part[6] ) {
  //   pencilViewParts.eq(5).removeClass('active');
  //   pencilViewParts.eq(6).addClass('active');  
  //   pencilViewParts.eq(7).removeClass('active');
  // } else if ( pencil_form_part[6] <= s && s < pencil_form_part[7] ) {
  //   pencilViewParts.eq(6).removeClass('active');
  //   pencilViewParts.eq(7).addClass('active');  
  //   pencilViewParts.eq(8).removeClass('active');
  // } else if ( pencil_form_part[7] <= s && s < pencil_form_part[8] ) {
  //   pencilViewParts.eq(7).removeClass('active');
  //   pencilViewParts.eq(8).addClass('active');  
  //   pencilViewParts.eq(9).removeClass('active');
  // } else if ( pencil_form_part[9] <= s && s < pencil_form_part[10] ) {
  //   pencilViewParts.eq(8).removeClass('active');
  //   pencilViewParts.eq(9).addClass('active');  
  //   pencilViewParts.eq(10).removeClass('active');
  // } else if ( pencil_form_part[10] <= s && s < pencil_form_part[11] ) {
  //   pencilViewParts.eq(9).removeClass('active');
  //   pencilViewParts.eq(10).addClass('active');
  // } else if ( s >= pencil_form_part[11] ) {
  //   pencilViewParts.eq(10).addClass('active');
  // }

});
