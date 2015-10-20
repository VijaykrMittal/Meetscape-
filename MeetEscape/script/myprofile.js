(function(global){
    var myProfileViewModel,
    app = global.app = global.app || {};

    myProfileViewModel = kendo.data.ObservableObject.extend({

        show:function()
        {
            //alert($('#scrollView').children().css('height'));
        },
        
        drawerShow : function()
        {
            $(".km-native-scroller").scrollTop(0);
        },
        
        profEditbyDrawer : function()
        {
            alert("edit Profile");
        },
        
        
        
    });
    app.profileService = {
        viewModel : new myProfileViewModel()
    };
}(window));