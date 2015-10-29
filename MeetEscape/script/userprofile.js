(function(global){
    var userProfileViewModel,
    app = global.app = global.app || {};

    userProfileViewModel = kendo.data.ObservableObject.extend({

        show:function()
        {
            //$('#slider2').html('');
            app.userProfileService.viewModel.createSliderView();
            $('#slider2').unbind();
            
        },
        
        createSliderView:function()
        {
            $('#sliderPicDv').html('');
            var html = "";

            html = '<ul id="slider2">';
            html+='<li><img src="styles/images/img1.png" /></li>';
            html+='<li><img src="styles/images/img2.png" /></li>';
            html+='<li><img src="styles/images/img3.png" /></li>';
            html+='</ul>';
            $('#sliderPicDv').html(html);
            $('#slider2').bxSlider({
                infiniteLoop: false,
            });
        },

        likeProfile:function()
        {
           // alert("like");
        },

        removeProfile:function()
        {
           // alert("remove");
        }
        
    });
    app.userProfileService = {
        viewModel : new userProfileViewModel()
    };
}(window));