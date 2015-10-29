(function(global){
    var loginViewModel,
        app = global.app = global.app || {};
    
    loginViewModel = kendo.data.ObservableObject.extend({
        
        username:'',
        password:'',
        
        loginShow:function()
        {
           // alert("login");
            app.loginService.viewModel.resetLoginFld();
            
            $('#loginClick').click(function(){
                app.loginService.viewModel.loginSubmit();
            });
        },
        
        loginSubmit:function()
        {
           /* var dataParam = [];
            var login_username = this.get('username'),
                login_password = this.get('password');

            dataParam['Username'] = login_username,
            dataParam['Password'] = login_password;
            
            console.log(dataParam);*/
            //app.apps.navigate('views/dashboard.html');
            app.apps.navigate('views/nearby.html');
        },
        
        resetLoginFld : function()
        {
            this.set('username','');
            this.set('password','');
        }
    });
    
    app.loginService = {
        viewModel : new loginViewModel()
    };
})(window);