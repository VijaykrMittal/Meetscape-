(function(global){
    var userProfileViewModel,
    app = global.app || global.app || {};

    userProfileViewModel = kendo.data.ObservableObject.extend({

        show:function()
        {
            $('#slider2').bxSlider({
                infiniteLoop: false,
            });
        },

        likeProfile:function()
        {
            alert("like");
        },

        removeProfile:function()
        {
            alert("remove");
        }
        
    });
    app.userProfileService = {
        viewModel : new userProfileViewModel()
    };
}(window));