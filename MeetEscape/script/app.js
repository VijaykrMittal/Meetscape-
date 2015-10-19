var app = (function(global){
    
    apps  = new kendo.mobile.Application(document.body,
                                         {
                                            skin:'flat',
        									//initial:'views/login.html'
                                            // initial:'views/dashboard.html'
                                             initial:'views/nearby.html'
    									 }
    );
    
    return{
        apps:apps
    }
}(window));