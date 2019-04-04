
function bigImg(x){
  var b = x;
  var arr = { "HTML" : "html.jpg", "Javascript" : "javascript.jpg", "CSS": "css.jpg" ,
              "jquery" :"jquery.jpg","php":"php.jpg","sql":"sql.jpg","java":"java.jpg",
              "c":"c.jpg","python":"python.jpg"};
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
