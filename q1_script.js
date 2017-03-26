$( document ).ready(function() {
   $("#newsearch").hide();
   $( "#searchButton" ).click(function() {
      var inputBoxValue = $("#inputText").val();
      $("#newsearch").show();
      $.ajax({
        url: "http://thesaurus.altervista.org/thesaurus/v1?word="+inputBoxValue+"&language=en_US&output=json&key=j3GwrH2zlUqmdr7rzCqb",
        success: function(data){
          if (data.length != 0) {
            output = "";

            for (var i=0; i < data.response.length; i++) {
            var word1 = data.response[i].list.synonyms;
         //   var wordsplit = word1.synonyms.split('|');
            $('#wordlist').append("<li>"+ word1+ "</li>");
            }
         } else $("#wordlist").html("empty data");
      },
      error: function(xhr, status, error){
         $("#wordlist").html(error + ". Please try again.");
      }
   });
   $("#newsearch").click(function(){
      $("#wordlist").empty();
      $(function(){
         $('#inputText').val('');
         $("#newsearch").hide();
      });
   })
});
});
