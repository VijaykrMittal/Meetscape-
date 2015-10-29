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
            $('.morehide').hide();
        },
        
        profEdit:function()
        {
            alert("edit Profile");
        },
        
        profEditbyDrawer : function()
        {
           // alert("edit Profile");
            app.apps.navigate('views/dashboard.html');
        },
        
        moveToMeet:function()
        {
            app.apps.navigate('views/meet.html');
        },
        
        moveToSearch:function()
        {
            app.apps.navigate('views/search.html');
        },
        
        moveToNearby:function()
        {
            app.apps.navigate('views/nearby.html');
        },
        
        moveToRequest:function()
        {
            app.apps.navigate('views/request.html');
        },
        
        moveToFavourite:function()
        {
            //app.apps.navigate('views/favourite.html');
            app.apps.navigate('views/favoriteView.html');
            
        },
        
        moveToviewedMe:function()
        {
            app.apps.navigate('views/viewedMe.html');
        },
        
        moveToMore:function()
        {
            $('.morehide').slideToggle();
        },
        
        moveToSetting:function()
        {
            app.apps.navigate('views/setting.html');
        },
        
        moveToContact:function()
        {
            app.apps.navigate('views/contact.html');
        },
        
        moveToRatetheapp:function()
        {
           // app.apps.navigate('views/viewedMe.html');
        },
        
        moveToPrivacypolicy:function()
        {
            app.apps.navigate('views/privacy_policy.html');
        },
        
        moveToTermsCond:function()
        {
            app.apps.navigate('views/terms_condition.html');
        },
        
        moveToSignout:function()
        {
            app.apps.navigate('views/login.html');
        },
        
        moveToInbox:function()
        {
            app.apps.navigate('views/message.html');
        }
        
    });
    app.profileService = {
        viewModel : new myProfileViewModel()
    };
}(window));