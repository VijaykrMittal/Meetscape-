(function(global){
    var settingViewModel,
        app = global.app = global.app || {};
    
    settingViewModel = kendo.data.ObservableObject.extend({
        
        show : function()
        {
            //alert("Setting Show");
        },
        
        termscondshow:function()
        {
           // alert("terms and condition Show");
        },
        
        policyshow:function()
        {
             alert("Privacy policy Show");
        },
        
        searchCall : function()
        {
            alert("search");
        }
    });
    app.settingService = {
        viewModel:new settingViewModel()
    };
})(window);