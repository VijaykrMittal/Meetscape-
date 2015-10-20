var app = (function(global){
    
    apps  = new kendo.mobile.Application(document.body,
                                         {
                                            skin:'flat',
        									initial:'views/login.html'
                                            // initial:'views/dashboard.html'
                                            // initial:'views/nearby.html'
                                           //initial:'views/userprofile.html'
                                           //  initial:'views/request.html'
                                           //   initial:'views/contact.html'
                                           //     initial:'views/setting.html'
                                            //    initial:'views/terms_condition.html'
                                            //     initial:'views/privacy_policy.html'
                                            // initial:'views/meet.html'
                                             
    									 }
    );
    
    return{
        apps:apps
    }
}(window));