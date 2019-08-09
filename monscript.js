
function bigImg(x){
  var b = x;
  var arr = { "HTML" : "html.webp", "Javascript" : "javascript.webp", "CSS": "css.webp" ,
              "jquery" :"jquery.webp","php":"php.webp","sql":"sql.webp","java":"java.webp",
              "c":"c.webp","python":"python.webp"};
  var res = "<img src='img/"+arr[b]+"' alt='valerie lecoeur' style='max-height: 400px;'>";

  $('.modal-body').append(res);
  $('#exampleModalCenter').modal('show');

  $('#exampleModalCenter').on('hide.bs.modal', function (e) {
    $(".modal-body").empty();
    res="";
  })


}
function normalImg(x){

}
