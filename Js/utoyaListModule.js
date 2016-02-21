var UTOYA_INFO_MODULE = (function () {

    var utoyaOrdListJSON = {
        "utoyaOrdList": [
        //Før gjerningsperson er funnet
            {
                "id": "terrorism",
                "ord": "TERRORISME",
                "uttalelse": "[tæru'rismə]",
                "ord_beskrivelse": "Substantiv maskulin entall/singular.",
                "tweets_src": "bilder/utoyatweetSorg.png",
                "bruk1": "1. Bruk av vold og trusler for å true eller tvinge, spesielt for                          politiske formål.",
                "bruk2": "2. Tilstand av frykt og underkastelse&nbsp; produsert av                                  terrorisme eller terrorisering.",
                "bruk3": "3. En terroristisk metode for å styre eller motstå en                                     regjering.",
                "beskrivelse": "Tidligere var terrorisme ofte assosiert med statlige regimer som skaper ekstrem frykt i en befolkning ved hjelp av brutal voldsanvendelse, slik som Josef Stalins terror mot opposisjonelle i Sovjetunionen og Adolf Hitlers terror overfor jødene under Det tredje riket, og Pol Pots overgrep mot landets egen befolkning i Kambodsja. De alliertes bombing av Dresden samt USAs bruk av atomvåpen i Japan på slutten av den andre verdenskrig er også former for statlig bruk av målbevisst terror."

        },
            {
                "id": "attack",
                "ord": "ANGREP",
                "uttalelse": "['angre:p]",
                "ord_beskrivelse": "Substantiv nøytrum.",
                "tweets_src": "bilder/terroristtweet.png",
                "bruk1": "1. Voldelig overfall.",
                "bruk2": "2. Militær invasjon.",
                "bruk3": "3. Overført det å komme med sterk kritikk.",
                "beskrivelse": "Man skjelner mellom strategisk og taktisk angrep. Strategisk angrep er en vanlig offensiv, en fremrykning for å slå og overvinne fienden. Det munner som regel<br/>ut i taktisk angrep, som omfatter den offensive kamp på selve slagmarken. Angrep gir mulighet for å tilrive seg initiativet og velge det gunstigste tidspunkt, sted og retning m.m. Det har også heldigere moralsk virkning på avdelingene enn defensiv strid",
                "ekstraTekst": "Begrepet &quot;angrep&quot; eller &quot;terroranslag&quot; ble i Dagsrevyen alene brukt 35 ganger før gjerningsmannen 22. juli ble kjent, og kun to ganger i løpet av de første kaotiske timene etter at hans identitet ble offentliggjort."
        },
            {
                "id": "ekstremist",
                "ord": "EKSTREMIST",
                "uttalelse": "[əkstɾəˈmist]",
                "ord_beskrivelse": "Substantiv maskulin",
                "tweets_src": "bilder/ekstremistTweet.png",
                "bruk1": "",
                "bruk2": "",
                "bruk3": "",
                "beskrivelse": "Ekstremisme og ekstrem kommer fra det latinske extremus. Uttrykket kan oversettes med «det ytterste» eller «det fjerneste», eller også «det verste». Det et uttrykk som brukes om ytterliggående holdninger. I dagligtale er bruken av ekstremisme eller prefikset ekstrem- gjerne tilfeldig og usystematisk. Det som oppfattes som «ekstremt» i noen sammenhenger, kan ansees for å være helt normalt i en annen. «Ekstremisme» kan dermed sies å være en mer systematisk gjennomtenkt posisjon, teori eller ideologi hvor ekstreme posisjoner, standpunkter etc. er vesentlige."
        },
            {
                "id": "radical",
                "ord": "RADIKAL",
                "uttalelse": "[radıˈkɑːl]",
                "ord_beskrivelse": "Adjektiv",
                "tweets_src": "bilder/radikalTweet.png",
                "bruk1": "",
                "bruk2": "",
                "bruk3": "",
                "beskrivelse": "En som er radikal, tenderer mot å være revolusjonær. Motsetningen til radikal er dermed konservativ, det å gå inn for en stykkevis og forsiktig endring, basert på det bestående.",
                "ekstraTekst": "Uttrykket radikalisme brukes imidlertid ofte på en nokså utvannet måte, nemlig om en oppfatning som innebærer raskere gradvis endring enn konservative oppfatninger gjør. Personer og grupper som kaller seg radikale er også ofte betinget radikale, eller, potensielt konservative; de kan ønske en grunnleggende endring av eksisterende forhold, men insistere på at den nye ordenen skal komme for å bli. Både kommunister og fascister kan slik sett sees på som betinget radikale."
        },
            {
                "id": "terrorist",
                "ord": "TERRORIST",
                "uttalelse": "[[tæɾu'ɾist]",
                "ord_beskrivelse": "Substantiv maskulin",
                "tweets_src": "bilder/terroristtweet.png",
                "bruk1": "",
                "bruk2": "",
                "bruk3": "",
                "beskrivelse": "Person som bruker terror eller terrorisme som et politisk våpen. Bruken av etiketten &quot;terrorist&quot; er ofte kontroversiell eller subjektiv , ettersom en persons terrorisme kan være en annens &quot; frihetskjemper&quot;, og vice versa, avhengig av noens personlige ideologi og tro. En kynisk definisjon kan være at en terrorist er noen som myrder eller terroriserer flere av dem terroristen kjemper for, enn sine antatte fiender."
        },
            {
                "id": "muslim",
                "ord": "MUSLIM",
                "uttalelse": "[mʉ'sliːm]",
                "ord_beskrivelse": "Substantiv maskulin",
                "tweets_src": "bilder/muslimTweet.png",
                "bruk1": "",
                "bruk2": "",
                "bruk3": "",
                "beskrivelse": "Muslimer tror Gud, Allah på arabisk, gjennom engelen Gabriel åpenbarte den hellige Koranen for Muhammed, og at Muhammed<br/>er Allahs siste profet. Koranen og (for de fleste muslimer) profetens eksempel (Sunnah), danner grunnlaget for islam.",
                "ekstraTekst": "I dag er islam den nest største religionen i verden med mellom 1,3 og 1,7 milliarder tilhengere, og i Norge med ca. 2 % av befolkningen"
        },
        //Etter gjerningsperson er identifisert
            {
                "id": "tradgedy",
                "ord": "TRAGEDIE",
                "uttalelse": "[tɾɑˈgeːdıə]",
                "ord_beskrivelse": "Substantiv maskulin",
                "bruk1": "1. Teater dramaform med tragisk handling, mots. komedie",
                "bruk2": "2. Svært trist hendelse, ulykke.",
                "bruk3": "",
                "tweets_src": "bilder/utoyatweetSorg.png",
                "beskrivelse": "Mediene er altså mer tilbøyelige til å karakterisere terrorangrepene som «tragedier» etter at de fant ut at en hvit nordmann sto bak. Dette er talende, fordi begreper som «katastrofer», «tragedier» og «mareritt» gir bestemte konnotasjoner. De er betegnelser på hendelser som er forferdelige, men de antyder samtidig at det ikke står noen skyldige aktører bak. Ingen kan jo holdes ansvarlig for en naturkatastrofe. Ved å bruke disse betegnelsene toner man altså ned at dette er handlinger utført av en bevisst aktør."
        },
            {
                "ord": "KATASTROFE",
                "uttalelse": "[kɑtɑ'stɾuːfə]",
                "ord_beskrivelse": "Substantiv maskunlin",
                "bruk1": "1. Omfattende og svært alvorlig ulykke.",
                "bruk2": "2. Overført med svekket betydning svært dårlig.",
                "bruk3": "",
                "tweets_src": "bilder/terroristtweet.png",
                "beskrivelse": "Katastrofe brukes om en plutselig, ulykkelig omveltning i et menneskes liv; voldsom, ødeleggende naturbegivenhet.",
                "ekstraTekst": "Begreper som «katastrofer», «tragedier» og «mareritt» gir bestemte konnotasjoner. De er betegnelser på hendelser som er forferdelige, men antyder samtidig at det ikke står noen skyldige aktører bak. Ingen kan jo holdes ansvarlig for en naturkatastrofe."
        },
            {
                "id": "unhuman",
                "ord": "UMENNESKELIG",
                "uttalelse": "[ʉˈmenskəlı]",
                "ord_beskrivelse": "Adjektiv",
                "bruk1": ".1. Som er unormal for mennesker.",
                "bruk2": "2. Som er uegnet for mennesker, nedverdigende.",
                "bruk3": "3. Grusom, brutal, dyrisk",
                "tweets_src": "bilder/ekstremistTweet.png",
                "beskrivelse": "Vi ser at handlingene i perioden etter at identitenen av gjerningsmannen offentliggjøres karakteriseres som «avskyelige», «umenneskelige» og «vanvittige», eller rett og slett som «galskap» – men kun etter at gjerningsmannens nasjonalitet ble offentliggjort. Spesielt bruken av ordene «vanvittige handlinger» og «galskap» er talende. De antyder at den som har gjort dette ikke egentlig er tilregnelig."
        },
            {
                "id": "crazy",
                "ord": "GALSKAP",
                "uttalelse": "[gɑːlskɑːp]",
                "ord_beskrivelse": "Substantiv maskulin",
                "bruk1": "1. Vanvidd, stormannsg- / det er den rene g- / dette er g-",
                "bruk2": "2. Villhet, yrhet, fartsg-",
                "bruk3": "3. Fanteri, gale streker, gjøre mye g-",
                "tweets_src": "bilder/radikalTweet.png",
                "beskrivelse": "Galskap er det å være gal, det vil si det å ikke være tilregnelig, men å oppføre seg tåpelig og meningsløst. Synonymer til galskap kan være vanvidd, mani, demens, psykose, narrestreker og dårskap.",
                "ekstraTekst": "Handlingene i perioden etter at gjerningsmannens identitet offentliggjøres karakteriseres blant annet som «galskap» – men kun etter at gjerningsmannens nasjonalitet ble offentliggjort. Spesielt bruken av ordene «vanvittige handlinger» og «galskap» er talende. De antyder at den som har gjort dette ikke egentlig er tilregnelig."
        },
            {
                "id": "killer",
                "ord": "DRAPSMANN",
                "uttalelse": "[dɾɑːps'mɑn]",
                "ord_beskrivelse": "Substantiv maskulin",
                "bruk1": "Drapsmann m. person som har begått et drap.",
                "bruk2": "",
                "bruk3": "",
                "tweets_src": "bilder/terroristtweet.png",
                "beskrivelse": "Etter gjerningsmannens offentliggjøring blir en annen fortolkningsramme aktivert. Hendelsen omtales fortsatt som grusom, gjerningsmannen karakteriseres som drapsmann og morder – men altså ikke som terrorist, slik man gjorde tidligere på dagen. Betegnelsen «drapsmann» er selvfølgelig svært negativt ladet, men det er mer knyttet til «alminnelig» kriminalitet enn terror. Det kan med andre ord virke som om mediene går fra å tolke hendelsene inn i en terrorramme til å tolke dem i en kriminalitetsramme."
        },
            {
                "id": "christian",
                "ord": "KRISTEN",
                "uttalelse": "['kɾistən]",
                "ord_beskrivelse": "Substantiv maskulin",
                "bruk1": "Betegnelse på en person som bekjenner seg til Kristendommer og Kristus, dvs. som tilhører den kristne religion.",
                "bruk2": "",
                "bruk3": "",
                "tweets_src": "bilder/muslimTweet.png",
                "beskrivelse": "Sett i kristendommens perspektiv er Jesus langt mer enn en profet. Han er frelser, med andre ord en som gjennom en bestemt handling (sin død på korset) har sikret menneskene – forutsatt at de tror han er Messias – det største av alle goder, nemlig det evige liv som gikk tapt gjennom Adams ulydighet."
        },

    ]
    };


    function getList() {
        return utoyaOrdListJSON.utoyaOrdList;
    }

    return {
        getList: getList
    };
}()); // end UTOYA_INFO_MODULE