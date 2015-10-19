(function(global){
    var nearbyViewModel,
    app = global.app || global.app || {};

    nearbyViewModel = kendo.data.ObservableObject.extend({
        
        nearbylistData:'',
        
        show:function()
        {
           // app.nearbyService.viewModel.getnearbyData();
          //  app.nearbyService.viewModel.setData();
            
            
            var viewModel = kendo.observable({
        nearbylistData: new kendo.data.DataSource({
          data: [
            { id: 1, name: "Apples" },
            { id: 2, name: "Oranges" },
            { id: 3, name: "Bananas" }
          ],
          schema: {
            model: {
              fields: {
                id: { type: "number" },
                name: { type: "string" }
              }
            }
          }
        })
      });

      kendo.bind("#example", viewModel);
            
            
        },
        
        getnearbyData : function()
        {/*
            var dataSource = new kendo.data.DataSource({
                data: [
                    { name: "Jane Doe", age: 30 },
                    { name: "John Doe", age: 33 }
                ]
            });
            dataSource.fetch(function(){
                var janeDoe = dataSource.at(0);
                console.log(janeDoe.name); // displays "Jane Doe"
                app.nearbyService.viewModel.setData(janeDoe);
            });*/
        },
        
        setData:function(janeDoe)
        {
            var that = this;
            console.log(janeDoe);
            that.set('nearbylistData',janeDoe);
            /*var html ='';
            for(var i=0;i<30;i++)
            {
                html += '<li data-click="app.nearbyService.viewModel.simpleTst">';
                html += '<div class="main" >';
                html += '<div class="imgDv">';
                html += '<img src="styles/images/img1.png"/>';
                html += '</div>';
                html += '<div class="contentDv">';
                html += '<p>Dave Michalle</p>';
                html += '<p><label>Age: <span>30</span></label>&nbsp;&nbsp;<label>Interest: <span class="intrstSpn">10</span></label></p>';
                html += '</div>';
                html += '</li>';
            }
            
            $('#myList').html(html);*/
        },
        
        simpleTst:function()
        {
           alert("hello"); 
        }
    });
    app.nearbyService = {
        viewModel : new nearbyViewModel()
    };
})(window);