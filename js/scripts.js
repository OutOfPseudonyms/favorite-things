$(document).ready(function () {
  $("form#favoriteThings").submit(function (event) {
    event.preventDefault();
    let color = $("input#color").val();
    let classicalElement = $("input#classicalElement").val();
    let chemicalElement = $("input#chemicalElement").val();
    const array1 = [color, classicalElement, chemicalElement];
    let array2 = []
    array2.push(array1[1],array1[0],array1[2]);
  
    $('#results').show();
    $('#array2').text(array2.join());
  })
})