(function(global){
    var requestViewModel,
        app = global.app = global.app || {};
    
    requestViewModel = kendo.data.ObservableObject.extend({
        
        acceptRequestlistData:'',
        matchedlistData:'',
        sentRequestlistData:'',
        defaultAPI :true,
        show:function()
        {
            $('.acceptrequest,.tabstripchild1').css('background','#D5DE23');
            
            if(app.requestService.viewModel.defaultAPI === true)
            {
               // alert("true");
                app.requestService.viewModel.acceptRequestAPI_Call();
                app.requestService.viewModel.defaultAPI = false;
            }
            else
            {
              //  alert("false");
            }
            
        },
        
        acceptRequestAPI_Call : function()
        {
            var data = [{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'}];
            app.requestService.viewModel.setacceptRequestData(data);
        },
        
        matchedAPI_Call : function()
        {
            var data = [{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'}];
            app.requestService.viewModel.setmatchData(data);
        },
        
        sentRequestAPI_Call :function()
        {
            var data = [{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'}];
            app.requestService.viewModel.setSentRequestData(data);
        },
        
        setacceptRequestData  :function(data)
        {
            this.set('acceptRequestlistData',data);
        },
        
        setmatchData  :function(data)
        {
            this.set('matchedlistData',data);
        },
        
        setSentRequestData : function(data)
        {
            this.set('sentRequestlistData',data);
        },
        
        searchCall:function()
        {
            alert("Search Call");
        },
        
        getmessagesData:function(e)
        {
           // console.log(e);
          //  console.log(e['target'][0]['attributes']['data-id']['value']);
            
            if(e['target'][0]['attributes']['data-id']['value'] === 'acceptrequest')
            {
                $('#acceptRequest').show();
                $('#matchedData').hide();
                $('#sentRequest').hide();
                $('.acceptrequest,.tabstripchild1').css('background','#D5DE23');
                $('.matchedBtn,.tabstripchild2').css('background','none');
                $('.sendrequestBtn,.tabstripchild0').css('background','none');
                app.requestService.viewModel.acceptRequestAPI_Call();
            }
            else if(e['target'][0]['attributes']['data-id']['value'] === 'matched')
            {
                app.requestService.viewModel.matchedAPI_Call();
                $('#acceptRequest').hide();
                $('#matchedData').show();
                $('#sentRequest').hide();
                $('.matchedBtn,.tabstripchild2').css('background','#D5DE23');
                $('.acceptrequest,.tabstripchild1').css('background','none');
                $('.sendrequestBtn,.tabstripchild0').css('background','none');
            }
            else
            {
                app.requestService.viewModel.sentRequestAPI_Call();
                $('#acceptRequest').hide();
                $('#matchedData').hide();
                $('#sentRequest').show();
                $('.matchedBtn,.tabstripchild2').css('background','none');
                $('.acceptrequest,.tabstripchild1').css('background','none');
                $('.sendrequestBtn,.tabstripchild0').css('background','#D5DE23');
            }
        },
        
        listItemSelect:function()
        {
            alert("call");
        }
    });
    app.requestService = {
        viewModel:new requestViewModel()
    };
})(window);