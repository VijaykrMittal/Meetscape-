(function(global){
    var myProfileViewModel,
    app = global.app || global.app || {};

    myProfileViewModel = kendo.data.ObservableObject.extend({

    show:function()
    {
        $('#scrollView').children().css('height','350px');
    }
        
    });
    app.profileService = {
        viewModel : new myProfileViewModel()
    };
}(window));