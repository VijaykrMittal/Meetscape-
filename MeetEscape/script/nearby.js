(function(global){
    var nearbyViewModel,
    app = global.app || global.app || {};

    nearbyViewModel = kendo.data.ObservableObject.extend({
        
        nearbylistData:'',
        
        show:function()
        {
          app.nearbyService.viewModel.setData();
        },
        
        setData:function(janeDoe)
        {
            var html ='';
            for(var i=0;i<30;i++)
            {
                html += '<li>';
                html += '<div class="main" >';
                html += '<div class="imgDv">';
                html += '<img src="styles/images/img1.png"/>';
                html += '</div>';
                html += '<div class="contentDv">';
                html += '<p>Dave Michalle</p>';
                html += '<p><label>Age: <span>30</span></label>&nbsp;&nbsp;<label>Interest: <span class="intrstSpn">10</span></label></p>';
                html += '</div>';
                html += '</li>';
            }
            
            $('#myList').html(html);
        },
    });
    app.nearbyService = {
        viewModel : new nearbyViewModel()
    };
})(window);