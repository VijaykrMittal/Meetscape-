(function(global){
    var searchViewModel,
    app = global.app = global.app || {};

    searchViewModel = kendo.data.ObservableObject.extend({
        
        searchlistData:'',
        
        show:function()
        {
            var data = [{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/img1.png','locationimg':'styles/images/location_dark.png'},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png'},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png'},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img4.png','locationimg':'styles/images/location_dark.png'},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/img1.png','locationimg':'styles/images/location_dark.png'},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png'},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png'},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img4.png','locationimg':'styles/images/location_dark.png'},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/img1.png','locationimg':'styles/images/location_dark.png'},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png'},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png'},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img4.png','locationimg':'styles/images/location_dark.png'},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png'},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img4.png','locationimg':'styles/images/location_dark.png'},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img1.png','locationimg':'styles/images/location_dark.png'},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png'},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png'},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img4.png','locationimg':'styles/images/location_dark.png'},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img1.png','locationimg':'styles/images/location_dark.png'},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png'},{'name':'Dave Michalle','place':'Near New Delhi','url':'styles/images/img2.png','locationimg':'styles/images/location_dark.png'},{'name':'Eaddy Martin','place':'Near New Delhi','url':'styles/images/img3.png','locationimg':'styles/images/location_dark.png'},{'name':'Nikol','place':'Near New Delhi','url':'styles/images/img4.png','locationimg':'styles/images/location_dark.png'},{'name':'Danim','place':'Near New Delhi','url':'styles/images/img1.png','locationimg':'styles/images/location_dark.png'}];
            app.searchService.viewModel.setSearchData(data);
        },
        
        setSearchData  :function(data)
        {
            this.set('searchlistData',data);
        },
        
        filterCall:function()
        {
            alert("filter Call");
        },
        
        listItemSelect:function(e)
        {
            //console.log(e);
            alert(e['currentTarget']['attributes']['data-name']['value'])
        }
    });
    app.searchService = {
        viewModel : new searchViewModel()
    };
})(window);