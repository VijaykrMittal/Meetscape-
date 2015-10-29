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
           // alert("hi");
            app.apps.navigate('views/create_profile.html');
        }
    });
    
    app.signupService = {
        viewModel : new signupViewModel()
    };
})(window);