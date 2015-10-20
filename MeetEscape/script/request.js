(function(global){
    var requestViewModel,
        app = global.app = global.app || {};
    
    requestViewModel = kendo.data.ObservableObject.extend({
        
        show : function()
        {
           // alert("request Show");
        },
        
        searchCall : function()
        {
            alert("search");
        }
    });
    app.requestService = {
        viewModel:new requestViewModel()
    };
})(window);