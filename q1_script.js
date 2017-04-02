$( document ).ready(function() {
   //begin with new search button hidden & search button visible
   $("#newsearch").hide();
   $( "#searchButton" ).click(function() {
      var inputBoxValue = $("#inputText").val();
      $("#newsearch").show();
      //click search & new search button now visible search button hidden
      $.ajax({
        url: "http://thesaurus.altervista.org/thesaurus/v1?word="+inputBoxValue+"&language=en_US&output=json&key=j3GwrH2zlUqmdr7rzCqb",
        success: function(data){
           if (data.length !== 0) {
             output = "";
             //separate the response by list
             for (var i=0; i < data.response.length; i++) {
               var word1 = data.response[i].list.synonyms;
               //separate array of synonyms
               var separate = word1.split("|");
               for (var j=0; j < separate.length; j++) {
                  var single = separate[j];
                  $('#wordlist').append("<li>"+ single + "</li>");
               }
            }
         } else $("#wordlist").html("empty data");
      },
      error: function(xhr, status, error){
         $("#wordlist").html(error + "Word not found, please try again.");
      }
   });
   $("#newsearch").click(function(){
      $("#wordlist").empty();
      $(function(){
         $('#inputText').val('');
         $("#newsearch").hide();
      });
   });
});
});
