(function(global){
    var favouriteViewModel,
    app = global.app = global.app || {};

    favouriteViewModel = kendo.data.ObservableObject.extend({
        
        visitorlistData:'',
        show:function()
        {
            app.visitorService.viewModel.messagesAPI_Call();
        },
        
        messagesAPI_Call : function()
        {
            var data = [{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png','time':'5 min ago'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png','time':'5 min ago'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png','time':'5 min ago'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png','time':'5 min ago'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png','time':'5 min ago'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png','time':'5 min ago'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png','time':'5 min ago'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png','time':'5 min ago'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png','time':'5 min ago'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png','time':'5 min ago'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png','time':'5 min ago'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png','time':'5 min ago'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png','time':'5 min ago'}];
            app.visitorService.viewModel.setMessageData(data);
        },
        
        setMessageData  :function(data)
        {
            this.set('visitorlistData',data);
        },
        
        searchCall:function()
        {
            alert("Search Call");
        },
        
        listItemSelect:function(e)
        {
            //console.log(e);
            alert(e['currentTarget']['attributes']['data-name']['value'])
        }
    });
    app.visitorService = {
        viewModel : new favouriteViewModel()
    };
})(window);