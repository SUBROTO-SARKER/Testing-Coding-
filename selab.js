$(document).ready(function(){
    var apiKey = "563492ad6f91700001000001b9f7c1e2015c4bab89e46aa93555069d"
    $('.button').click(function(event){
        event.preventDefault()
        var searchD = $('.search-data').val()
        dataStr = searchD.toString()
        imageSearching(dataStr)
    })

    function imageSearching(dataStr){
        $.ajax({
            method: 'GET',
            beforeSend: function(xhr){
                xhr.setRequestHeader("Authorization", apiKey)
            },
            url:"https://api.pexels.com/v1/search?query="+dataStr+"&per_page=3",
			
            success: function(data){
                var images = '';
                images.id = "newImage";
                for (let i = 0; i < data.photos.length; i++){
                    
                    link = data.photos[i].src.original;
                    // alert(link)
                    images = `
                        <img id="newImage" style="width: 200px; height: 250px;" src="${link}"/>
                    `
                    $('.mergedImage').append(images)
                }
                console.log(data)
            },
            error: function(error){
                console.log(error)
            }
        })
    }
})