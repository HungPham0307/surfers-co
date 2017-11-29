$(document).ready(function() {

  function activeTab(obj) {
    //xoa class active
    $('.content-text-slide li a').removeClass('active');

    //add class active vao tab hien tai
    $(obj).addClass('active');

    //lay id de hien detail

    var id = $(obj).attr('href');

    //an tab dang hien thi
    $('.tab-content').hide();

    //hien thi detail tab dc active
    $(id).show();
  }

  activeTab($('.content-text-slide li:first-child a'));

  $('.content-text-slide li a').click(function(){
    activeTab(this);
    return false;
  });


  function activeImg(obj) {
    //xoa class active
    $('.list-image-slide li img').removeClass('active-images');
    //add class active vao img hien tai
    $(obj).addClass('active-images');

    //lay id de hien anh dc click
    var id = $(obj).attr('alt');

    //an het anh dang hien thi
    $('.content-image-slide').hide();

    //hien thi anh dc active
    $(id).css('display', 'inline-block');
  }

  activeImg($('.list-image-slide li:first-child img'));

  $('.list-image-slide li img').click(function(){
    activeImg(this);
    return false;
  });



})