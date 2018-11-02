window.onload=function(){
  if (!!$(".products").length){
    //Konfigurační objekt pro samolepky
    let config = {
      "keywords":{ //Wrapper
        "denn":{
          "exceptions":[],
          "class":["+kelviny-bila"]
        },
        "eplá":{
          "exceptions":[],
          "class":["+kelviny-tepla"]
        },
        "vatelnost":{
          "exceptions":[],
          "class":["+stmivatelna"]
        },
        "arva světla nastavitel":{
          "exceptions":[],
          "class":["+bicol", "-kelviny-bila", "-kelviny-tepla", "-kelviny-studena"]
        },
        "tmívatel":{
          //Vyjímky, při kterých se nic nevykoná - Vyjímky se kontrolují v rámci celého stringu, jestliže se našla shoda s keywordem
          "exceptions":["vatelnost ne", "estmivatel"],
          //Seznam css class, které se přidají/odeberou k p-name
          "class":["+stmivatelna"]
        },
        "v010":{
          "exceptions":[],
          "class":["+v010", "-stmivatelna"]
        },
        "rgb":{
          "exceptions": [],
          "class":["+rgb", ]
        },
        "čidl":{
          "exceptions":[],
          "class":["+cidlo"]
        },
        "senzor":{
          "exceptions":[],
          "class":["+cidlo"]
        },
        "bicolor":{
          "exceptions":[],
          "class":["+bicolor"]
        },
        "rgb":{
          "exceptions":[],
          "class":["+rgb", "-kelviny-bila", "-kelviny-tepla", "-kelviny-studena"]
        },
        "s krytím":{
          "exceptions":[],
          "class":["+kryti"]
        },
        "bez krytí":{
          "exceptions":[],
          "class":["+bezkryti"]
        },
        "páska":{
          "exceptions":["lepící"],
          "class":["+stmivatelna"]
        }
      }
    }
    /*
      Syntax:
        Exceptions:
          Pokud je substring obsažen v názvu produktu, neprovede se přidělení/odebrání class (keyword se přeskočí)
        Class:
          "+stmivatelna" => Přidá třídu stmivatelna k názvu produktu p-name
          "-stmivatelna" => Odebere třídu stmivatelna u názvu produktu p-name
          "*stmivatelna" => Přepne třídu stmivatelna u názvu produktu p-name (Jestli tam je, odebere ji, jestli tam není, přidá ji)
    */
    let keywords = Object.keys(config.keywords);
    function stickers(){
       //Převod délky na bool => Jesli se na stránce objevují produkty
        let names = document.querySelectorAll(".p-name"), length = names.length; //Délka cacheovaná, protože při každé iteraci by se musela znova vypočítávat => menší výkon
        for (let i = 0; i < length; i++){
          let result = {}, string = names[i].textContent.trim().toLowerCase(); //Uložení aktuálního názvu do stringu pro jednoduší manipulaci :)
          let parts = string.split(/\s/g); //Rozdělí string po slovech
          //Pro iterace přes rozdělený string
          for (let q = 0; q < parts.length; q++){
            //Iterace přes keywordy
            for (var keyword in config.keywords){
              //Regular Expression testuje výskyt keywordu v názvu ("*" značí, že to může být součástí jiného slova )
              if (RegExp(keyword+'*').test(parts[q])){
                //Finální kontrola, jestli se nenachází v názvu produktu vyjímka asocioavaná k tomuhle keywordu
                if (config.keywords[keyword].exceptions.forEach(function(exc){
                    if(RegExp(exc+"*").test(string)){
                      continue;
                    }
                  })
                  ){
                  console.info("V názvu produktu "+string+" byla nalezena vyjímka, která zabránila přilepení známek");
                  }
                else{
                  //Objekt, který drží informace o tom, které keywordy budou přidány
                  result[keyword] = true;
                  console.log(result);
                }
              }
            }
          }
          for (var word in result){
            config.keywords[word].class.forEach(function(cls){
                if (cls[0] == "+") { $(names[i]).parent().prev().addClass(cls.substring(1)) }
                if (cls[0] == "-") { $(names[i]).parent().prev().removeClass(cls.substring(1)) }
                if (cls[0] == "*") { $(names[i]).parent().prev().toggleClass(cls.substring(1)) }
            });
          }
        }
      }
  }
}
