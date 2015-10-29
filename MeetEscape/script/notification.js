(function(global){
    var notificationViewModel,
    app = global.app = global.app || {};

    notificationViewModel = kendo.data.ObservableObject.extend({
        
        notificationlistData:'',
        
        show:function()
        {
            var data = [{'name':'Dave Michalle','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Eaddy Martin','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img2.png'},{'name':'Nikol','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img3.png'},{'name':'Danim','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Dave Michalle','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Eaddy Martin','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img2.png'},{'name':'Nikol','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img3.png'},{'name':'Danim','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Dave Michalle','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Eaddy Martin','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img2.png'},{'name':'Nikol','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img3.png'},{'name':'Danim','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Dave Michalle','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Eaddy Martin','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img2.png'},{'name':'Nikol','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img3.png'},{'name':'Danim','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Dave Michalle','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Eaddy Martin','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img2.png'},{'name':'Nikol','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img3.png'},{'name':'Danim','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Dave Michalle','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'},{'name':'Eaddy Martin','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img2.png'},{'name':'Nikol','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img3.png'},{'name':'Danim','des':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.','url':'styles/images/img1.png'}];
            app.notificationService.viewModel.setSearchData(data);
        },
        
        setSearchData  :function(data)
        {
            this.set('notificationlistData',data);
        },
        
        searchCall:function()
        {
            //alert("search Call");
        },
        
        listItemSelect:function(e)
        {
            //console.log(e);
            alert(e['currentTarget']['attributes']['data-name']['value'])
        }
    });
    app.notificationService = {
        viewModel : new notificationViewModel()
    };
})(window);