

;(function($){
  /*touchstart the title and drag the con moving*/
  var moveX,moveY,startX,startY,i=0;

  var video=document.getElementsByTagName('video')
  var len=$("video").length;
  var v_width=parseFloat($("video").eq(0).css("width"));
  $("#con").css("width",v_width*len)
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
      console.log(moveX)


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
       _this.removeClass("active");
       
       if(index==len-1){
          index=0;
       }else{
         index=index+1;
       }
       $("video").eq(index).addClass("active");
       video[index].play();
       $('#con').css('left',-index*v_width+"px");
    }else if(moveX>0){
      
       video[index].pause();
       _this.removeClass("active");
       if(index==0){
        index=len-1;
       }else{
        index=index-1;
       }
       $("video").eq(index).addClass("active");
       video[index].play();
       $('#con').css('left',-index*v_width+"px");
    }
  });
})(Zepto); {}