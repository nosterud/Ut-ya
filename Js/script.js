    var SITEFUNCTIONALITY = {

    //Array
    getList: [],
    
    //HTML-objekter
    $terrorism: null,
    $mainCategories: null,
    $infoSection: null,    

    init: function () {
    

        this.infoList = UTOYA_INFO_MODULE.getList();
        
            var SF = SITEFUNCTIONALITY;

            var setElements = function () {
                
                SF.$infoSection =$("#info")
                SF.$terrorism = $("#terror");
                SF.$mainCategories = $("#mainCategories");

            }(); //--- end setElements

            var setEvents = function () {

                //$(document).ready(function () {
                  //  SF.$mainCatCreate();
                //});
                
                //--- mainCategories "buttons"
                for (i = 0; i < 6; i++){
                    var $categories = $("<h2>");
                    $categories
                        .html(UTOYA_INFO_MODULE.getList()[i].ord)
                    
                        $("#mainCategories").append($categories);
                    
                };
                
                    
                
                $(document).on("mouseenter", "#mainCategories", function () {
                    $(this)
                        .css({
                        "cursor": "pointer" 
                    })
                });
                
                $("#terrorism").click(function(){
                
                    document.getElementById("terrorism").innerHTML = UTOYA_INFO_MODULE.getList()[6].ord;
                    
                    document.getElementById("infoSection").innerHTML = UTOYA_INFO_MODULE.getList()[0].info;
                    
                    
                    //SF.info(SF.getList);
                    
                });
                        
                

            }(); // ----- end setEvents

        }, //---- end init: function
        
        
     info: function (list) {
<<<<<<< HEAD
      //  $.each(list, function(i){
            $.each(this, function(ord, uttalelse, ord_beskrivelse, bruk){
=======
        $.each(list, function(i){
             //  console.log(ord + uttalelse + ord_beskrivelse + bruk);
>>>>>>> origin/master
                var $infoDiv = $("<div>");
              $infoDiv
                  .html("<div>" + "<h2>" + list[i].ord + "</h2><h3>" + list[i].uttalelse + "</h3><h3>" + list[i].ord_beskrivelse + "</h3><h3>" + list[i].beskrivelse + "</h3></div>")
                .attr("id", i)

              $("#infoSection").append($infoDiv);
<<<<<<< HEAD
            });
      //  }); 
=======
        }); 
>>>>>>> origin/master
        
         
        //Tømmer sectionen
       // $("#infoSection").empty();
     
      //  for (i = 0; i < list.length; i++) {
          
          
       //     }// end if statement
     //   };// end for løkke


    },//end Info function

    mainCatCreat: function(infoList) {
            
        
        
    }
        
}; //---- end SIDEFUNCTIONALITY

SITEFUNCTIONALITY.init();
SITEFUNCTIONALITY.info(UTOYA_INFO_MODULE.getList());