(function(){
    angular.module('todo')
        .directive('dateTimePicker',[function(){
            return {
                restrict:'E',
                templateUrl:'app/date-time.html',
                link:function(scope,ele,attr,ngModelCtrl){
                    $("#datetimepicker1").datetimepicker({
                        minDate : moment()
                    });
                },
                bindToController: {
                    dateTime: "=value"
                },
                controller:['$interval','$scope',function($interval,$scope){
                    this.$onInit = function () {
                        console.log(this.dateTime.dueBy); // logs your item object
                    };
                    var updateTime=(function(){
                        this.dateTime.dueBy=moment().format("MM/DD/YYYY h:mm A");
                        console.log( this.dateTime);
                    }).bind(this);
                    //$interval(updateTime,60000);
                }],
                controllerAs:'ctrl'
            }
        }])
})()