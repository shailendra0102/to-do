(function(){
    angular.module('todo')
        .factory('Task',function(){
            function Task(taskObject){
                this.name = taskObject.name;
                this.dueBy = taskObject.dueBy;
                this.completed = false;
            }

            Task.prototype=(function(){
                var complete=function(){
                    this.completed=true;
                }
                return {
                    complete:complete
                }
            })();

            return Task;
        })
})()