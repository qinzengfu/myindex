

;(function($){
  /*touchstart the title and drag the con moving*/
  var moveX,moveY,startX,startY,i=0;

  var video=document.getElementsByTagName('video')
  var len=$("video").length;
  var w_width=parseFloat($(".wrap").css("width"));
  var c_width=w_width*len;
  console.log(c_width)
  $("video").css("width",w_width+"px");
  $("#con").css("width",c_width+"px");
  console.log("w_width:"+w_width,"length:"+len,"#con_width:"+ $("#con").css("width"));
  $(document).on("touchstart","#con",function(event){
    if($(event.target).hasClass('active')){
      //console.log(event.target.parentNode.offsetLeft);
      var touchPros = event.touches[0];
      
      startX = touchPros.pageX - event.target.parentNode.offsetLeft;
      startY = touchPros.pageY - event.target.parentNode.offsetTop;
    }
    return false;
  }).on("touchmove","#con",function(event){

    if($(event.target).hasClass('active')){

      console.log($("#con").css("width"));
      console.log($("#con").css("height"));


      var touchPros = event.touches[0];
      moveX = touchPros.pageX - startX;
      moveY = touchPros.pageY - startY;
      //console.log(moveX)


      $('#con').css('left',moveX);
      }

  }).on("touchend","video",function(event){


    console.log($(this))
    var _this=$(this);
    
    var index=_this.index()
    console.log(video[0])
    console.log(video[1])
    if(moveX<0){
       

       video[index].pause();
       $(".active").removeClass("active");
       
       if(index==len-1){
          index=0;
       }else{
         index=index+1;
       }
       $("video").eq(index).addClass("active");
       video[index].play();
       $('#con').css('left',-index*w_width+"px");
       console.log($('#con').css('left'));
    }else if(moveX>0){
      
       video[index].pause();
       $(".active").removeClass("active");
       if(index==0){
        index=len-1;
       }else{
        index=index-1;
       }
       $("video").eq(index).addClass("active");
       video[index].play();
       $('#con').css('left',-index*w_width+"px");
    }
  });
})(Zepto); {}