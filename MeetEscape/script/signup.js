(function(global){
    var signupViewModel,
        app = global.app = global.app || {};
    
    signupViewModel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
            //alert("sdsdsd");
        },
        
        successVerfCode:function()
        {
            app.apps.navigate('views/dashboard.html');
        }
    });
    
    app.signupService = {
        viewModel : new signupViewModel()
    };
})(window);