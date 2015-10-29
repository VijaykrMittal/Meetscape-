var app = (function(global){
    
    apps  = new kendo.mobile.Application(document.body,
                                         {
                                            skin:'flat',
        									initial:'views/login.html'
                                            // initial:'views/dashboard.html'
                                            // initial:'views/nearby.html'
                                           //initial:'views/userprofile.html'
                                           //  initial:'views/request.html'
                                            //  initial:'views/contact.html'
                                           //     initial:'views/setting.html'
                                            //    initial:'views/terms_condition.html'
                                            //     initial:'views/privacy_policy.html'
                                             //initial:'views/meet.html'
                                            //  initial:'views/addInterest.html'
                                            // initial:'views/report_user.html'
                                            // initial:'views/notification.html'
                                            //  initial:'views/search.html'
                                             //  initial:'views/viewedMe.html'
                                             //  initial:'views/message.html'
                                            //  initial:'views/favourite.html'
                                            // initial:'views/visitor.html'
                                            // initial:'views/create_profile.html'
    									 }
    );
    
    return{
        apps:apps
    }
}(window));