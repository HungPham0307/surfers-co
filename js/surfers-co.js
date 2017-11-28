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

})