(function(global){
    var myProfileViewModel,
    app = global.app || global.app || {};

    myProfileViewModel = kendo.data.ObservableObject.extend({

    show:function()
    {
        //alert($('#scrollView').children().css('height'));
    }
        
    });
    app.profileService = {
        viewModel : new myProfileViewModel()
    };
}(window));