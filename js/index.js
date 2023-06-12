function rePosition(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/750;
    if(width<=750){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}
rePosition();
window.onresize = function(){
    rePosition();
};


 // 点击応募する
 $('.wrap_footer').click(function(){
	$(' .masked').css('display','block');
	$('.part1_tc_email').css('display','block');
    $('.tc_email_bg').css('display','block');
  })
  $('.part1_tc_email .closed').click(function(){
	$('.part1_tc_email').css('display','none');
    $('.tc_email_bg').css('display','none');
	$('.masked').css('display','none');
  })
