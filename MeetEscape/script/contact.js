(function(global){
    var contactViewModel,
        app = global.app = global.app || {};
    
    contactViewModel = kendo.data.ObservableObject.extend({
        
        show : function()
        {
           // alert("contact Show");
        },
    });
    app.contactService = {
        viewModel:new contactViewModel()
    };
})(window);