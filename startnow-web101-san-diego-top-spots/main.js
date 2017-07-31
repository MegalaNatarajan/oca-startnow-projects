
$(document).ready(function() {
// write your code here
 $.getJSON("data.json", function(data) {       
    var name;
    var description;
    var location;
    //var tbl_row ='<tr>';
        $.each(data.top_spots, function (index, spots) {
        var tbl_row ='<tr>';
         name = spots.name;
         description = spots.description;
         location = spots.location;
          tbl_row += "<td>" + name + "</td>";
          tbl_row += "<td>" + description + "</td>";
          tbl_row += '<td><a id="google_maps" class="btn btn-primary btn-sm" href="https://www.google.com/maps?q='+location +'">Open in Google Maps' + '</a></td>';
          tbl_row += '</tr>';
          $("#t-body").append(tbl_row);
        });
        
         

});
});
