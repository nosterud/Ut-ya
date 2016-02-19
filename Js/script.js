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
                
                $(document).on("mouseenter", ".terrorism", function() {
                 //  $("#infoSection").append($infoDiv); 
                    SF.info(SF.infoList)
                });
                
                 $(document).on("mouseleave", ".terrorism", function() {
                     //Tømmer section
                     $("#infoSection").empty();
                });


                $(".terrorism").click(function () {
                    alert("klasjld");


                });



            }(); // ----- end setEvents

        }, //---- end init: function


        info: function (list) {
            $.each(list, function (i) {
                console.log(i);
                var $infoDiv = $("<div>");
                $infoDiv
                    .html("<div>" + "<h2>" + list[i].ord + "</h2><h3>" + list[i].uttalelse + "</h3><h3>" + list[i].ord_beskrivelse + "</h3><h3>" + list[i].bruk1 + "</h3><h3>" + list[i].bruk2 + "</h3><h3>" + list[i].bruk3 + "</h3><h3>" + list[i].beskrivelse + "</h3></div>")
                    //.attr("id", i)

                $("#infoSection").append($infoDiv);
            });


        }, //end Info function

        mainCatCreat: function (infoList) {



        }

    }; //---- end SIDEFUNCTIONALITY

    SITEFUNCTIONALITY.init();
    //SITEFUNCTIONALITY.info(UTOYA_INFO_MODULE.getList());