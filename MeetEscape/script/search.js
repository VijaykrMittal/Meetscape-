(function(global){
    var searchViewModel,
    app = global.app = global.app || {};

    searchViewModel = kendo.data.ObservableObject.extend({
        
        searchlistData:'',
        
        show:function()
        {
            var data = [{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/pic.png','locationimg':'styles/images/location_dark.png',statusIcon:'styles/images/green_circle.png',cerfImg:'styles/images/certify.png'},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:'styles/images/certify.png'},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'styles/images/red_circle.png',cerfImg:''},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/pic.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'styles/images/red_circle.png',cerfImg:'styles/images/certify.png'},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'styles/images/green_circle.png',cerfImg:'styles/images/certify.png'},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/pic.png','locationimg':'styles/images/location_dark.png',statusIcon:'styles/images/red_circle.png',cerfImg:'styles/images/certify.png'},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/pic.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'styles/images/red_circle.png',cerfImg:'styles/images/certify.png'},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/pic.png','locationimg':'styles/images/location_dark.png',statusIcon:'styles/images/green_circle.png',cerfImg:'styles/images/certify.png'},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'styles/images/green_circle.png',cerfImg:'styles/images/certify.png'},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''},{'name':'Danim','place':'Near New Delhi','url':'styles/images/pic.png','locationimg':'styles/images/location_dark.png',statusIcon:'',cerfImg:''}];
            app.searchService.viewModel.setSearchData(data);
        },
        
        setSearchData  :function(data)
        {
            this.set('searchlistData',data);
        },
        
        filterCall:function()
        {
            //alert("filter Call");
             app.apps.navigate('views/filter.html');
        },
        
        listItemSelect:function(e)
        {
            //console.log(e);
          //  alert(e['currentTarget']['attributes']['data-name']['value'])
        }
    });
    app.searchService = {
        viewModel : new searchViewModel()
    };
})(window);