(function(){
    angular.module('todo')
        .filter('completedTask',function(){
            return function(input){
                input.sort(function(t1,t2){
                    if(t1.complete){
                        return 1;
                    }else{
                        return 0;
                    }
                })
                return input;
            }
        })
})();