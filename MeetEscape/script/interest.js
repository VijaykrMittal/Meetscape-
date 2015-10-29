(function(global){
    var interestViewModel,
        app = global.app = global.app || {};
    
    interestViewModel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
            //alert("sdsdsd");
        },
        
        interestSubmit:function()
        {
           // alert("hi");
            app.apps.navigate('views/nearby.html');
        }
    });
    
    app.interestService = {
        viewModel : new interestViewModel()
    };
})(window);