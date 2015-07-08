angular.module('app', []);
angular.module('app').controller('selectionSort', function ($scope){

  $scope.vida =  function (array) {
    for (var i = 0; i<=array.length -2; i++){
      var eleito = array[i];
      var menor = array[i+1];
      var pos = i+1;
    
      for (var j=i+2; j<=array.length;j++){
        if(array[j] < menor){
          console.log(array);
          menor = array[j];
          pos = j;
          console.log(array);
        }
      }
      if (parseInt(menor) < parseInt(eleito)) {
        console.log(array);
        array[i] = array[pos];
        array[pos]=eleito;
        console.log(array);
      }
    } 
   
     alert(array);
    
};
});