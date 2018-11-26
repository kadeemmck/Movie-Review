$(document).ready(function (){
    console.log("ready!");

$("#button").click(function(){
    const name = $("#navbar-query").val()
    console.log(name)
    // const image = document.createElement("IMG")
       apikey = "17fbb028415e4b549cc47921c90a3e8f"

    const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + name +  '&api-key=' + apikey
    console.log(url)
   
   
   

    $.ajax({
        url: url,

        success: function (data) {
            console.log(data)

            console.log(data.summary_short)

            const title = data.results[0].display_title
            $("#title").html(title)

            const summary = data.results[0].summary_short
            $("#summary").html(summary)

            const rating = data.results[0].mpaa_rating
            $("#rating").html("rating" + rating)

            const image = document.createElement("IMG")
            moviepic = data.results[0].multimedia.src
            image.src = moviepic
            $("#moviePic").html(image)
            M.toast({html: 'searching'})
      
            for(i=20;i<data.length;i++ )
            
            document.write()


        },
        error: function (request, error) {


            console.log(error)
            console.log(request)
            M.toast({html: 'typo'})

    
        }
         

       })          
            
       
   

});
      
})

