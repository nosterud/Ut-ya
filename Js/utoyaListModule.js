var UTOYA_INFO_MODULE = (function(){

var utoyaOrdListJSON = {
    "utoyaOrdList": [
        //Før gjerningsperson er funnet
        {
            "ord": "TERRORISME",
            "uttalelse": "[tæru'rismə]",
            "ord_beskrivelse": "Substantiv maskulin entall/singular.",
            "tweets_src": "../bilder/utoyatweetSorg.png",
            "bruk": [
                {
                    "1": "1. Bruk av vold og trusler for å true eller tvinge, spesielt for                          politiske formål."
                },
                {
                    "2": "2. Tilstand av frykt og underkastelse&nbsp; produsert av                                  terrorisme eller terrorisering."
                },
                {
                    "3": "3. En terroristisk metode for å styre eller motstå en                                     regjering."
                }
            ],
            "beskrivelse": "Tidligere var terrorisme ofte assosiert med statlige regimer som skaper ekstrem frykt i en befolkning ved hjelp av brutal voldsanvendelse, slik som Josef Stalins terror mot opposisjonelle i Sovjetunionen og Adolf Hitlers terror overfor jødene under Det tredje riket, og Pol Pots overgrep mot landets egen befolkning i Kambodsja. De alliertes bombing av Dresden samt USAs bruk av atomvåpen i Japan på slutten av den andre verdenskrig er også former for statlig bruk av målbevisst terror."

        },
        {
            "ord": "ANGREP",
            "uttalelse": "['angre:p]",
            "ord_beskrivelse": "Substantiv nøytrum.",
            "tweets_src": "../bilder/terroristtweet.png",
            "bruk": [
                {
                    "1": "1. Voldelig overfall."
                },
                {
                    "2": "2. Militær invasjon."
                },
                {
                    "3": "3. Overført det å komme med sterk kritikk."
                }
            ],
            "beskrivelse": "Man skjelner mellom strategisk og taktisk angrep. Strategisk angrep er en vanlig offensiv, en fremrykning for å slå og overvinne fienden. Det munner som regel<br/>ut i taktisk angrep, som omfatter den offensive kamp på selve slagmarken. Angrep gir mulighet for å tilrive seg initiativet og velge det gunstigste tidspunkt, sted og retning m.m. Det har også heldigere moralsk virkning på avdelingene enn defensiv strid",
            "ekstraTekst": "Begrepet &quot;angrep&quot; eller &quot;terroranslag&quot; ble i Dagsrevyen alene brukt 35 ganger før gjerningsmannen 22. juli ble kjent, og kun to ganger i løpet av de første kaotiske timene etter at hans identitet ble offentliggjort."
        },
        {
            "ord": "EKSTREMIST",
            "uttalelse": "[əkstɾəˈmist]",
            "ord_beskrivelse": "Substantiv maskulin",
            "tweets_src": "../bilder/ekstremistTweet.png",
            "bruk": [
                {
                    "1": ""
                },
                {
                    "2": ""
                },
                {
                    "3": ""
                }
            ],
            "beskrivelse": "Ekstremisme og ekstrem kommer fra det latinske extremus. Uttrykket kan oversettes med «det ytterste» eller «det fjerneste», eller også «det verste». Det et uttrykk som brukes om ytterliggående holdninger. I dagligtale er bruken av ekstremisme eller prefikset ekstrem- gjerne tilfeldig og usystematisk. Det som oppfattes som «ekstremt» i noen sammenhenger, kan ansees for å være helt normalt i en annen. «Ekstremisme» kan dermed sies å være en mer systematisk gjennomtenkt posisjon, teori eller ideologi hvor ekstreme posisjoner, standpunkter etc. er vesentlige."
        },
        {
            "ord": "RADIKAL",
            "uttalelse": "[radıˈkɑːl]",
            "ord_beskrivelse": "Adjektiv",
            "tweets_src": "../bilder/radikalTweet.png",
            "bruk": [
                {
                    "1": ""
                },
                {
                    "2": ""
                },
                {
                    "3": ""
                }
            ],
            "beskrivelse": "En som er radikal, tenderer mot å være revolusjonær. Motsetningen til radikal er dermed konservativ, det å gå inn for en stykkevis og forsiktig endring, basert på det bestående.",
            "ekstraTekst": "Uttrykket radikalisme brukes imidlertid ofte på en nokså utvannet måte, nemlig om en oppfatning som innebærer raskere gradvis endring enn konservative oppfatninger gjør. Personer og grupper som kaller seg radikale er også ofte betinget radikale, eller, potensielt konservative; de kan ønske en grunnleggende endring av eksisterende forhold, men insistere på at den nye ordenen skal komme for å bli. Både kommunister og fascister kan slik sett sees på som betinget radikale."
        },
        {
            "ord": "TERRORIST",
            "uttalelse": "[[tæɾu'ɾist]",
            "ord_beskrivelse": "Substantiv maskulin",
            "tweets_src": "../bilder/terroristtweet.png",
            "bruk": [
                {
                    "1": ""
                },
                {
                    "2": ""
                },
                {
                    "3": ""
                }
            ],
            "beskrivelse": "Person som bruker terror eller terrorisme som et politisk våpen. Bruken av etiketten &quot;terrorist&quot; er ofte kontroversiell eller subjektiv , ettersom en persons terrorisme kan være en annens &quot; frihetskjemper&quot;, og vice versa, avhengig av noens personlige ideologi og tro. En kynisk definisjon kan være at en terrorist er noen som myrder eller terroriserer flere av dem terroristen kjemper for, enn sine antatte fiender."
        },
        {
            "ord": "MUSLIM",
            "uttalelse": "[mʉ'sliːm]",
            "ord_beskrivelse": "Substantiv maskulin",
            "tweets_src": "../bilder/muslimTweet.png",
            "bruk": [
                {
                    "1": ""
                },
                {
                    "2": ""
                },
                {
                    "3": ""
                }
            ],
            "beskrivelse": "Muslimer tror Gud, Allah på arabisk, gjennom engelen Gabriel åpenbarte den hellige Koranen for Muhammed, og at Muhammed<br/>er Allahs siste profet. Koranen og (for de fleste muslimer) profetens eksempel (Sunnah), danner grunnlaget for islam.",
            "ekstraTekst": "I dag er islam den nest største religionen i verden med mellom 1,3 og 1,7 milliarder tilhengere, og i Norge med ca. 2 % av befolkningen"
        },
        //Etter gjerningsperson er identifisert
        {
            "ord": "TRAGEDIE",
            "uttalelse": "[tɾɑˈgeːdıə]",
            "ord_beskrivelse": "Substantiv maskulin",
            "bruk": [
                {
                    "1": "1. Teater dramaform med tragisk handling, mots. komedie"
                },
                {
                    "2": "2. Svært trist hendelse, ulykke."
                },
                {
                    "3": ""
                }
            ],
            "beskrivelse": "Mediene er altså mer til­bøye­lige til å karak­te­ri­sere ter­ror­an­gre­pene som «tra­ge­dier» etter at de fant ut at en hvit nord­mann sto bak. Dette er talende, fordi begre­per som «kata­stro­fer», «tra­ge­dier» og «mare­ritt» gir bestemte kon­no­ta­sjo­ner. De er beteg­nel­ser på hen­del­ser som er for­fer­de­lige, men de anty­der sam­ti­dig at det ikke står noen skyl­dige aktø­rer bak. Ingen kan jo hol­des ansvar­lig for en natur­ka­ta­strofe. Ved å bruke disse beteg­nel­sene toner man altså ned at dette er hand­linger utført av en bevisst aktør."
        },
        {
            "ord": "KATASTROFE",
            "uttalelse": "[kɑtɑ'stɾuːfə]",
            "ord_beskrivelse": "Substantiv maskunlin",
            "bruk": [
                {
                    "1": "1. Omfattende og svært alvorlig ulykke."
                },
                {
                    "2": "2. Overført med svekket betydning svært dårlig"
                },
                {
                    "3": ""
                }
            ],
            "beskrivelse": "Katastrofe brukes om en plutselig, ulykkelig omveltning i et menneskes liv; voldsom, ødeleggende naturbegivenhet.",
            "ekstraTekst": "Begreper som «katastrofer», «tragedier» og «mareritt» gir bestemte konnotasjoner. De er betegnelser på hendelser som er forferdelige, men antyder samtidig at det ikke står noen skyldige aktører bak. Ingen kan jo holdes ansvarlig for en naturkatastrofe."
        },
        {
            "ord": "UMENNESKELIG",
            "uttalelse": "[ʉˈmenskəlı]",
            "ord_beskrivelse": "Adjektiv",
            "bruk": [
                {
                    "1": ".1. Som er unormal for mennesker."
                },
                {
                    "2": "2. Som er uegnet for mennesker, nedverdigende."
                },
                {
                    "3": "3. Grusom, brutal, dyrisk"
                }
            ],
            "beskrivelse": "Vi ser at hand­lin­gene i perio­den etter at identitenen av gjerningsmannen offentliggjøres karak­te­ri­se­res som «avskye­lige», «umen­nes­ke­lige» og «van­vit­tige», eller rett og slett som «gal­skap» – men kun etter at gjer­nings­man­nens nasjo­na­li­tet ble offent­lig­gjort. Spe­si­elt bru­ken av ordene «van­vit­tige hand­lin­ger» og «gal­skap» er talende. De anty­der at den som har gjort dette ikke egent­lig er til­reg­ne­lig."
        },
        {
            "ord": "GALSKAP",
            "uttalelse": "[gɑːlskɑːp]",
            "ord_beskrivelse": "Substantiv maskulin",
            "bruk": [
                {
                    "1": "1. Vanvidd, stormannsg- / det er den rene g- / dette er g-"
                },
                {
                    "2": "2. Villhet, yrhet, fartsg-"
                },
                {
                    "3": "3. Fanteri, gale streker, gjøre mye g-"
                }
            ],
            "beskrivelse": "Galskap er det å være gal, det vil si det å ikke være tilregnelig, men å oppføre seg tåpelig og meningsløst. Synonymer til galskap kan være vanvidd, mani, demens, psykose, narrestreker og dårskap.",
            "ekstraTekst": "Hand­lin­gene i perio­den etter at gjerningsmannens identitet offentliggjøres karak­te­ri­se­res blant annet som «gal­skap» – men kun etter at gjer­nings­man­nens nasjo­na­li­tet ble offent­lig­gjort. Spe­si­elt bru­ken av ordene «van­vit­tige hand­lin­ger» og «gal­skap» er talende. De anty­der at den som har gjort dette ikke egent­lig er til­reg­ne­lig."
        },
        {
            "ord": "DRAPSMANN",
            "uttalelse": "[dɾɑːps'mɑn]",
            "ord_beskrivelse": "Substantiv maskulin",
            "bruk": [
                {
                    "1": "Drapsmann m. person som har begått et drap."
                },
                {
                    "2": ""
                },
                {
                    "3": ""
                }
            ],
            "beskrivelse": "Etter gjerningsmannens offentliggjøring blir en annen for­tolk­nings­ramme akti­vert. Hen­del­sen omta­les fort­satt som gru­som, gjer­nings­man­nen karak­te­ri­se­res som draps­mann og mor­der – men altså ikke som ter­ro­rist, slik man gjorde tid­li­gere på dagen. Beteg­nel­sen «draps­mann» er selv­føl­ge­lig svært nega­tivt ladet, men det er mer knyt­tet til «almin­ne­lig» kri­mi­na­li­tet enn ter­ror. Det kan med andre ord virke som om mediene går fra å tolke hen­del­sene inn i en ter­ror­ramme til å tolke dem i en kriminalitetsramme."
        },
        {
            "ord": "KRISTEN",
            "uttalelse": "['kɾistən]",
            "ord_beskrivelse": "Substantiv maskulin",
            "bruk": [
                {
                    "1": "Betegnelse på en person som bekjenner seg til Kristendommer og Kristus, dvs. som tilhører den kristne religion."
                },
                {
                    "2": ""
                },
                {
                    "3": ""
                }
            ],
            "beskrivelse": "Sett i kristendommens perspektiv er Jesus langt mer enn en profet. Han er frelser, med andre ord en som gjennom en bestemt handling (sin død på korset) har sikret menneskene – forutsatt at de tror han er Messias – det største av alle goder, nemlig det evige liv som gikk tapt gjennom Adams ulydighet."
        },

    ]
};


    function getList(){
        return utoyaOrdListJSON.utoyaOrdList;
    }

    return{
        getList: getList
};
}());// end UTOYA_INFO_MODULE
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