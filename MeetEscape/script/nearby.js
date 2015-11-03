(function(global){
    var nearbyViewModel,
    app = global.app = global.app || {};

    nearbyViewModel = kendo.data.ObservableObject.extend({
        
        nearbylistData:'',
        
        show:function()
        {
            //var data = [{'name':'Dave','age':25,'interest':10,'url':'styles/images/pic.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/pic.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/pic.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/pic.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/pic.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/pic.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/pic.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/pic.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/pic.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/pic.png'},{'name':'Dave Michalle','age':25,'interest':10,'url':'styles/images/pic.png'},{'name':'Eaddy Martin','age':22,'interest':18,'url':'styles/images/img2.png'},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png'},{'name':'Danim','age':30,'interest':7,'url':'styles/images/pic.png'}];
            var data = [{'name':'Dave','age':25,'interest':10,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Eaddy','age':22,'interest':18,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:1,meetStatus:0},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png',statusIcon:'styles/images/red_circle.png',verfy:0,meetStatus:1},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:1,meetStatus:0},{'name':'Dave','age':25,'interest':10,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Eaddy','age':22,'interest':18,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:1,meetStatus:0},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png',statusIcon:'styles/images/red_circle.png',verfy:0,meetStatus:1},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Dave','age':25,'interest':10,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:1,meetStatus:0},{'name':'Eaddy','age':22,'interest':18,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png',statusIcon:'styles/images/green_circle.png',verfy:1,meetStatus:0},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Dave','age':25,'interest':10,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Eaddy','age':22,'interest':18,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:1,meetStatus:0},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img2.png',statusIcon:'styles/images/red_circle.png',verfy:0,meetStatus:1},{'name':'Dave','age':25,'interest':10,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:1,meetStatus:0},{'name':'Eaddy','age':22,'interest':18,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:1,meetStatus:0},{'name':'Dave','age':25,'interest':10,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Eaddy','age':22,'interest':18,'url':'styles/images/img2.png',statusIcon:'styles/images/red_circle.png',verfy:0,meetStatus:1},{'name':'Nikol','age':27,'interest':8,'url':'styles/images/img3.png',statusIcon:'styles/images/green_circle.png',verfy:0,meetStatus:1},{'name':'Danim','age':30,'interest':7,'url':'styles/images/img2.png',statusIcon:'styles/images/green_circle.png',verfy:1,meetStatus:0}];
            app.nearbyService.viewModel.setSearchData(data);
        },
        
        setSearchData  :function(data)
        {
            this.set('nearbylistData',data);
        },
        
        filterCall:function()
        {
            //alert("filter Call");
           // $("#filterView").data("kendoMobileModalView").open();
            app.apps.navigate('views/filter.html');
        },
        
        listItemSelect:function(e)
        {
            //console.log(e);
            //alert(e['currentTarget']['attributes']['data-name']['value']);
            app.apps.navigate('views/userprofile.html');
        }
    });
    app.nearbyService = {
        viewModel : new nearbyViewModel()
    };
})(window);