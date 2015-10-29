(function(global){
    var userViewModel,
        app = global.app = global.app || {};
    
    userViewModel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
          //  alert("sdsdsd");
        },
        
        usersubmit:function()
        {
           // alert("hi");
            app.apps.navigate('views/addInterest.html');
        }
    });
    
    app.userService = {
        viewModel : new userViewModel()
    };
})(window);