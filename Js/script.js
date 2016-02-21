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

                SF.$infoSection = $("#info")
                SF.$terrorism = $("#terror");
                SF.$mainCategories = $("#mainCategories");

            }(); //--- end setElements

            var setEvents = function () {
                var count = 0;
                //--- mainCategories "buttons"

                //Lager alle 12 hovedkategoriene
                for (i = 0; i < 12; i++) {
                    //Printer ut bare de 6 første
                    if (count < 6) {
                        count++;
                        var $categories = $("<h2>");
                        $categories
                            .html(UTOYA_INFO_MODULE.getList()[i].ord)
                            .addClass(UTOYA_INFO_MODULE.getList()[i].id)
                    };
                    $("#mainCategories").append($categories);
                };

                $(document).on("mouseenter", "#mainCategories", function () {
                    $(this)
                        .css({
                            "cursor": "pointer"
                        })
                });
                
                // Knapper før Funnet gjerningsmann START
                
                $(document).on("mouseenter", ".terrorism", function() {
                 //  $("#infoSection").append($infoDiv); 
                    SF.info(SF.infoList, 'TERRORISME' );
                });
                
                 $(document).on("mouseleave", ".terrorism", function() {
                     //Tømmer section
                     $("#infoSection").empty();
                });
                
                   
                $(document).on("mouseenter", ".attack", function() {
                 //  $("#infoSection").append($infoDiv); 
                    SF.info(SF.infoList, 'ANGREP' );
                });
                
                 $(document).on("mouseleave", ".attack", function() {
                     //Tømmer section
                     $("#infoSection").empty();
                });
                
                   
                $(document).on("mouseenter", ".ekstremist", function() {
                 //  $("#infoSection").append($infoDiv); 
                    SF.info(SF.infoList, 'EKSTREMIST' );
                });
                
                 $(document).on("mouseleave", ".ekstremist", function() {
                     //Tømmer section
                     $("#infoSection").empty();
                });
                
                   
                $(document).on("mouseenter", ".radical", function() {
                 //  $("#infoSection").append($infoDiv); 
                    SF.info(SF.infoList, 'RADIKAL' );
                });
                
                 $(document).on("mouseleave", ".radical", function() {
                     //Tømmer section
                     $("#infoSection").empty();
                });
                
                   
                $(document).on("mouseenter", ".terrorist", function() {
                 //  $("#infoSection").append($infoDiv); 
                    SF.info(SF.infoList, 'TERRORIST' );
                });
                
                 $(document).on("mouseleave", ".terrorist", function() {
                     //Tømmer section
                     $("#infoSection").empty();
                });
                   
                $(document).on("mouseenter", ".muslim", function() {
                 //  $("#infoSection").append($infoDiv); 
                    SF.info(SF.infoList, 'MUSLIM' );
                });
                
                 $(document).on("mouseleave", ".muslim", function() {
                     //Tømmer section
                     $("#infoSection").empty();
                });// Knapper før Funnet gjerningsmann END

// Knapper etter funnet gjerningsmann START
                $(".terrorism").click(function () {
                    $(this)
                        .html(UTOYA_INFO_MODULE.getList()[6].ord)
                    
                    $("#infoSection").empty();
                    SF.info(SF.infoList, 'TRAGEDIE');

                });
                
                $(".attack").click(function () {
                    $(this)
                        .html(UTOYA_INFO_MODULE.getList()[7].ord)
                    
                    $("#infoSection").empty();
                    SF.info(SF.infoList, 'KATASTROFE');

                });
                $(".ekstremist").click(function () {
                    $(this)
                        .html(UTOYA_INFO_MODULE.getList()[8].ord)
                    
                    $("#infoSection").empty();
                    SF.info(SF.infoList, 'UMENNESKELIG');

                });
                
                $(".radical").click(function () {
                    $(this)
                        .html(UTOYA_INFO_MODULE.getList()[9].ord)
                    
                    $("#infoSection").empty();
                    SF.info(SF.infoList, 'GALSKAP');

                });
                
                $(".terrorist").click(function () {
                    $(this)
                        .html(UTOYA_INFO_MODULE.getList()[10].ord)
                    
                    $("#infoSection").empty();
                    SF.info(SF.infoList, 'DRAPSMANN');

                });
                
                $(".muslim").click(function () {
                    $(this)
                        .html(UTOYA_INFO_MODULE.getList()[11].ord)
                    
                    $("#infoSection").empty();
                    SF.info(SF.infoList, 'KRISTEN');

                });
            
                $("#sideNote").on("mouseenter", function(){
                   $(this)
                        .animate({"opacity": "1"})
                });
                
            
                 $("#sideNote").on("mouseleave", function(){
                   $(this)
                        .animate({"opacity": "0.2"})
                });
                
                
                



            }(); // ----- end setEvents

        }, //---- end init: function



        info: function (list, category) {
            
            $.each(list, function (i) {
        
             if(list[i].ord.toUpperCase().trim() == category.toUpperCase().trim()){
                 
                
                var $infoDiv = $("<div>");
                $infoDiv
                    .html("<div>" + "<h2>" + list[i].ord + "</h2><h3>" + list[i].uttalelse + "</h3><h3>" + list[i].ord_beskrivelse + "</h3><h3>" + list[i].bruk1 + "</h3><h3>" + list[i].bruk2 + "</h3><h3>" + list[i].bruk3 + "</h3><h3>" + list[i].beskrivelse + "</h3><img src=" + list[i].tweets_src + "></img></div>")
                    //.attr("id", i)
                    
                $("#infoSection").append($infoDiv);
                
                
                }
                

            });


        }, //end Info function

        mainCatCreat: function (infoList) {



        }

    }; //---- end SIDEFUNCTIONALITY

    SITEFUNCTIONALITY.init();
    //SITEFUNCTIONALITY.info(UTOYA_INFO_MODULE.getList());