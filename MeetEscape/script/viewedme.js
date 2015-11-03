(function(global){
    var viewedmeViewModel,
    app = global.app = global.app || {};

    viewedmeViewModel = kendo.data.ObservableObject.extend({
        
        viewedmelistData:'',
        
        show:function()
        {
            var data = [{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/img1.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img1.png'}];
            app.viewedmeService.viewModel.setSearchData(data);
        },
        
        setSearchData  :function(data)
        {
            this.set('viewedmelistData',data);
        },
        
        filterCall:function()
        {
           // alert("filter Call");
            app.apps.navigate('views/filter.html');
        },
        
        listItemSelect:function(e)
        {
            //console.log(e);
            //alert(e['currentTarget']['attributes']['data-name']['value'])
        }
    });
    app.viewedmeService = {
        viewModel : new viewedmeViewModel()
    };
})(window);