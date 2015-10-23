(function(global){
    var meetViewModel,
        app = global.app = global.app || {};
    
    meetViewModel = kendo.data.ObservableObject.extend({
        
        //searchlistData:'',
        
        show : function()
        {
            var data = [{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'}];
            app.meetService.viewModel.setSearchData(data);
        },
        
        setSearchData  :function(data)
        {
            this.set('searchlistData',data);
        },

        
        hello:function()
        {
          alert("event");  
        },
        
        searchCall : function()
        {
             alert("Search");
        },
        
        filterCall : function()
        {
             alert("Filter");
        },
        
        meetListItemSelect:function(e)
        {
            //console.log(e);
            alert(e['currentTarget']['attributes']['data-name']['value'])
        }
    });
    
    app.meetService = {
        viewModel:new meetViewModel()
    };
})(window);