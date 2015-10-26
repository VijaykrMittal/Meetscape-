(function(global){
    var signupViewModel,
        app = global.app = global.app || {};
    
    signupViewModel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
            alert("sdsdsd");
        }
    });
    
    app.signupService = {
        viewModel : new signupViewModel()
    };
})(window);