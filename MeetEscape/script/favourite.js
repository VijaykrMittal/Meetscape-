(function(global){
    var favouriteViewModel,
    app = global.app = global.app || {};

    favouriteViewModel = kendo.data.ObservableObject.extend({
        
        messagelistData:'',
        sendmessagelistData:'',
        defaultAPI :true,
        show:function()
        {
            $('.messageBtn,.tabstripchild1').css('background','#D5DE23');
            
            if(app.messageService.viewModel.defaultAPI === true)
            {
               // alert("true");
                app.favouriteService.viewModel.messagesAPI_Call();
                app.favouriteService.viewModel.defaultAPI = false;
            }
            else
            {
              //  alert("false");
            }
            
        },
        
        messagesAPI_Call : function()
        {
            var data = [{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'}];
            app.favouriteService.viewModel.setMessageData(data);
        },
        
        sendmessagesAPI_Call : function()
        {
            var data = [{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'}];
            app.favouriteService.viewModel.setSendMessageData(data);
        },
        
        setMessageData  :function(data)
        {
            this.set('messagelistData',data);
        },
        
        setSendMessageData  :function(data)
        {
            this.set('sendmessagelistData',data);
        },
        
        searchCall:function()
        {
            alert("Search Call");
        },
        
        getmessagesData:function(e)
        {
           // console.log(e);
          //  console.log(e['target'][0]['attributes']['data-id']['value']);
            
            if(e['target'][0]['attributes']['data-id']['value'] === 'message')
            {
                $('#messageData').show();
                $('#sendmessageData').hide();
                $('.messageBtn,.tabstripchild1').css('background','#D5DE23');
                $('.sendmessageBtn,.tabstripchild2').css('background','none');
            }
            else
            {
                app.favouriteService.viewModel.sendmessagesAPI_Call();
                $('#messageData').hide();
                $('#sendmessageData').show();
                $('.sendmessageBtn,.tabstripchild2').css('background','#D5DE23');
                $('.messageBtn,.tabstripchild1').css('background','none');
            }
        },
        
        listItemSelect:function(e)
        {
            //console.log(e);
            alert(e['currentTarget']['attributes']['data-name']['value'])
        }
    });
    app.favouriteService = {
        viewModel : new favouriteViewModel()
    };
})(window);