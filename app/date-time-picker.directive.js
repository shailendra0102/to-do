(function(){
    angular.module('todo')
        .directive('dateTimePicker',[function(){
            return {
                restrict:'E',
                templateUrl:'app/date-time.html',
                scope:{},
                bindToController: {
                    dateTime:'=value'
                },                
                controller:['$interval','$scope',function($interval,$scope){
                    // this.$onInit = function () {
                    //     this.dateTime.dueBy=moment().format("MM/DD/YYYY h:mm A");
                    // };

                    $("#datetimepicker1").datetimepicker({
                        minDate : moment(),
                        ignoreReadonly: true
                    }).on('dp.change', function(e){ 
                         $scope.$apply(function() {
                            this.dateTime.dueBy=moment(e.date).format("MM/DD/YYYY h:mm A");
                        }.bind(this));                       
                        
                    }.bind(this))
                    
                }],
                controllerAs:'ctrl'
            }
        }])
})()