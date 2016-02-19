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
                $("#terrorism").innerHTML() {
                    
                }
                
                document.getElementById("terrorism").innerHTML = UTOYA_INFO_MODULE.getList()[0].ord;
                document.getElementById("attack").innerHTML = UTOYA_INFO_MODULE.getList()[1].ord;
                document.getElementById("ekstremist").innerHTML = UTOYA_INFO_MODULE.getList()[2].ord;
                document.getElementById("radical").innerHTML = UTOYA_INFO_MODULE.getList()[3].ord;
                document.getElementById("terrorist").innerHTML = UTOYA_INFO_MODULE.getList()[4].ord;
                document.getElementById("muslim").innerHTML = UTOYA_INFO_MODULE.getList()[5].ord;
                
                
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
        
        mainCatCreate: function() {
            
            
        },//---- end mainCatCreate function
        
     info: function (list) {
         
        //Tømmer sectionen
        $("#infoSection").empty();
     
        for (i = 0; i < list.length; i++) {
          
            if (wantedInfo === list[i].ord()) {
                var $infoDiv = $("<div>");
                $infoDiv
                    .html("<div>" + "<h2>" + list[i].ord + "</h2><h3>" + list[i].uttalelse + "</h3><h3>" + list[i].ord_beskrivelse + "</h3><h3>" + list[i].beskrivelse + "</h3></div>")
                    .attr("id", i)

                $("#infoSection").append($infoDiv);
            }// end if statement
        };// end for løkke


    }//end Info function

}; //---- end SIDEFUNCTIONALITY

SITEFUNCTIONALITY.init();