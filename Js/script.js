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

                //--- mainCategories "buttons"
                for (i = 0; i < 6; i++) {
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
                
                $(document).on("mouseenter", ".terrorism", function() {
                   alert("kldf"); 
                });

               // $("#terrorism").click(function () {
                    

               // });



            }(); // ----- end setEvents

        }, //---- end init: function


        info: function (list) {
            $.each(list, function (i) {
                var $infoDiv = $("<div>");
                $infoDiv
                    .html("<div>" + "<h2>" + list[i].ord + "</h2><h3>" + list[i].uttalelse + "</h3><h3>" + list[i].ord_beskrivelse + "</h3><h3>" + list[i].bruk1 + "</h3><h3>" + list[i].bruk2 + "</h3><h3>" + list[i].bruk3 + "</h3><h3>" + list[i].beskrivelse + "</h3></div>")
                    .attr("id", i)

                $("#infoSection").append($infoDiv);
            });



            //Tømmer sectionen
            // $("#infoSection").empty();

        }, //end Info function

        mainCatCreat: function (infoList) {



        }

    }; //---- end SIDEFUNCTIONALITY

    SITEFUNCTIONALITY.init();
    SITEFUNCTIONALITY.info(UTOYA_INFO_MODULE.getList());