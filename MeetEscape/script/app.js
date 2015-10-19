var app = (function(global){
    
    apps  = new kendo.mobile.Application(document.body,
                                         {
                                            skin:'flat',
        									initial:'views/login.html'
                                            // initial:'views/dashboard.html'
                                            // initial:'views/nearby.html'
                                           //initial:'views/userprofile.html'
                                             
    									 }
    );
    
    return{
        apps:apps
    }
}(window));