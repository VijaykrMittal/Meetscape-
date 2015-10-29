(function(global){
    var favoriteViewModel,
    app = global.app = global.app || {};

    favoriteViewModel = kendo.data.ObservableObject.extend({
        
        myfavoritelistData:'',
        whoFavoritelistData:'',
        defaultAPI :true,
        show:function()
        {
            $('.myfavorite,.tabstripchild1').css('background','#D5DE23');
            $('.whoFavorite,.tabstripchild2').css('background','#fff');
            
            if(app.myfavoriteService.viewModel.defaultAPI === true)
            {
               // alert("true");
                app.myfavoriteService.viewModel.messagesAPI_Call();
                app.myfavoriteService.viewModel.defaultAPI = false;
            }
            else
            {
              //  alert("false");
            }
            
        },
        
        messagesAPI_Call : function()
        {
            var data = [{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'},{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'},{'name':'Nikol','loc':'Florida','url':'styles/images/img3.png'},{'name':'Danim','loc':'Florida','url':'styles/images/img1.png'}];
            app.myfavoriteService.viewModel.setMessageData(data);
        },
        
        sendmessagesAPI_Call : function()
        {
            var data = [{'name':'Dave Michalle','loc':'Florida','url':'styles/images/img1.png'},{'name':'Eaddy Martin','loc':'Florida','url':'styles/images/img2.png'}];
            app.myfavoriteService.viewModel.setSendMessageData(data);
        },
        
        setMessageData  :function(data)
        {
            this.set('myfavoritelistData',data);
        },
        
        setSendMessageData  :function(data)
        {
            this.set('whoFavoritelistData',data);
        },
        
        searchCall:function()
        {
           // alert("Search Call");
        },
        
        getmessagesData:function(e)
        {
           // console.log(e);
          //  console.log(e['target'][0]['attributes']['data-id']['value']);
            if(e['target'][0]['attributes']['data-id']['value'] === 'myfavorite')
            {
                $('#myfavoriteData').show();
                $('#whoFavoriteData').hide();
                $('.myfavorite,.tabstripchild1').css('background','#D5DE23');
                $('.whoFavorite,.tabstripchild2').css('background','none');
            }
            else
            {
                app.myfavoriteService.viewModel.sendmessagesAPI_Call();
                $('#myfavoriteData').hide();
                $('#whoFavoriteData').show();
                $('.whoFavorite,.tabstripchild2').css('background','#D5DE23');
                $('.myfavorite,.tabstripchild1').css('background','none');
            }
        },
        
        listItemSelect:function(e)
        {
            //console.log(e);
            alert(e['currentTarget']['attributes']['data-name']['value'])
        }
    });
    app.myfavoriteService = {
        viewModel : new favoriteViewModel()
    };
})(window);