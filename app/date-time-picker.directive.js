(function(){
    angular.module('todo')
        .directive('dateTimePicker',[function(){
            return {
                restrict:'E',
                templateUrl:'app/date-time.html',
                link:function(scope,ele,attr,ngModelCtrl){
                    $(ele).datetimepicker();
                },
                bindToController: {},
                controller:['$interval','$scope',function($interval,$scope){
                    this.dateTime=moment().format("MM/DD/YYYY h:mm A");
                    $interval(function(){
                        this.dateTime=moment().format("MM/DD/YYYY h:mm A");
                        console.log( this.dateTime);
                    },60000);
                }],
                controllerAs:'ctrl'
            }
        }])
})()