


function navWidthCalculate(obj) {
  var menu = $("#droplinetabs1 .nav");
               var j = menu.index(obj)
               var w = (j == 0) ? 4 : -1;
               menu.each(function(i){
                  if (i < j)
                    w -= $(this).outerWidth()
               })

     return w;
}