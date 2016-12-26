

;(function($){
  /*touchstart the title and drag the con moving*/

  var moveX,moveY,startX,startY,i=0,
      ul      =getId("con"),
      div     =getTag(ul,"div"),
      u_div   =$("ul div")
      len     =$("ul div").length,
      w_obj   =getlen($(".wrap")),
      s_obj   =getlen($(".video").eq(0)),
      c_width =w_obj.width*len;


  for(var j=0;j<len;j++){
    u_div.eq(j).css("width",w_obj.width);
    u_div.eq(j).css("height",w_obj.height);
  }

  $("#con").css("width",c_width+"px");

	for(var j=0;j<len;j++){
    var v_width=parseFloat($("ul div").eq(j).children().css("width")),
        v_height=parseFloat($("ul div").eq(j).children().css("height"));
    console.log(w_obj.width,w_obj.height,w_obj.width/w_obj.height);
    console.log(v_width,v_height,v_width/v_height)
        if((w_obj.width/w_obj.height)>=(v_width/v_height)){
          console.log(1);
          $("ul div").eq(j).children().css("width",w_obj.width+"px");
        }else if((w_obj.width/w_obj.height)<(v_width/v_height)){
          console.log(2);
          $("ul div").eq(j).children().attr("height",w_obj.height)
        }
    var v_width=parseFloat($("ul div").eq(j).children().css("width")),
        v_height=parseFloat($("ul div").eq(j).children().css("height"));
    console.log(w_obj.width,w_obj.height,w_obj.width/w_obj.height);
    console.log(v_width,v_height,v_width/v_height)
  }


  // for(var j=0;j<len;j++){
  //   console.log($("ul div").eq(j).children())
  //   var v_width=parseFloat($("ul div").eq(j).children().css("width")),
  //       v_height=parseFloat($("ul div").eq(j).children().css("height"));
  //      console.log(v_width,v_height)
  //      console.log(u_div.eq(j).css("width"));
  //      console.log(u_div.eq(j).css("height"));
  //      console.log($("#con").css("width"));

  // }


  for(var j=0;j<len;j++){
    $("ul div").eq(j).children().attr('src',WebConfig.api_domain+(j+1)+".mp4")
  }


  $("ul div").css("width",w_obj.width+"px");
  console.log($("ul div").css("width"),$("ul div").css("height"))
  $("#con").css("width",c_width+"px");
  console.log(w_obj)
  $(document).on("touchstart","#con",function(event){
    console.log(event.target.parentNode)
    if($(event.target.parentNode).hasClass('active')){
      
      var touchPros = event.touches[0];
      
      startX = touchPros.pageX - event.target.parentNode.parentNode.offsetLeft;
      startY = touchPros.pageY - event.target.parentNode.parentNode.offsetTop;
      console.log(startX,startY)
    }
    return false;
  }).on("touchmove","#con",function(event){

    if($(event.target).hasClass('active')){


      var touchPros = event.touches[0];
      moveX = touchPros.pageX - startX;
      moveY = touchPros.pageY - startY;
      //console.log(moveX)


      $('#con').css('left',moveX);
      }

  }).on("touchend","div",function(event){
    var _this=$(this);
    console.log(_this.children().css("width"))
    var index=_this.index()
    var video=getTag(div[index],"video");
    if(moveX<0){
       console.log("current index:"+index)

       video[0].pause();
       $(".active").removeClass("active");
       
       if(index==len-1){
          index=0;
       }else{
         index=index+1;
       }
       console.log("next index:"+index)
       video=getTag(div[index],"video");
       $("div").eq(index).addClass("active");
       video[0].play();
       $('#con').css('left',-index*w_obj.width+"px");
    }else if(moveX>0){
      console.log("current index:"+index)
       video[0].pause();
       $(".active").removeClass("active");
       if(index==0){
        index=len-1;
       }else{
        index=index-1;
       }
       console.log("prev index:"+index)
       video=getTag(div[index],"video");
       $("div").eq(index).addClass("active");
       video[0].play();
       $('#con').css('left',-index*w_obj.width+"px");
    }else{

    }
  });

  function getTag(obj,tag){
    return obj.getElementsByTagName(tag)
  }
  function getId(id){
    return document.getElementById(id)
  }
  function getlen(obj){
     var sobj    = {width:0,height:0};
     sobj.width  = parseFloat(obj.css("width"));
     sobj.height = parseFloat(obj.css("height"));
     return sobj;
  }
})(Zepto); {}