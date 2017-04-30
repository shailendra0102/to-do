(function(){
    angular.module('todo')
    .directive('validDate',function(){
        return {
            restrict:'A',
            require:'ngModel',
            link:function(scope,ele,attr,ctrl){
                ctrl.$formatters.push(function(value){
                    console.log('formatter '+ value)
                })
                ctrl.$parsers.push(function(value){
                    console.log('parser '+ value)
                })
            }
        }
    })
})();