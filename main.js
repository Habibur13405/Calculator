  function insertNumber(number){
    var plusNumber = $("#display").val();
    
    $("#display").val(plusNumber + number)
  }
  
  function allClear(){
    $("#display").val('');
  }
  
  function calculate(){
    var results = eval($("#display").val());
    $("#display").val(results);
  }
  
  function deleteNumber(){
    var presidentval = $("#display").val();
    if(presidentval!=''){
      $("#display").val($("#display").val().slice(0,-1))
    }
  }
