(function(){
    angular.module('todo')
        .factory('Task',function(){
            function Task(taskObject){
                this.name = taskObject.name;
                this.dueBy = taskObject.dueBy;
                this.overDue = false;
                this.completed = false;
            }

            Task.prototype=(function(){
                var complete=function(){
                    this.completed=this.completed?false:true;
                }
                var overDueTask=function(){
                    this.overDue=true;
                }
                return {
                    complete:complete,
                    overDueTask:overDueTask
                }
            })();

            return Task;
        })
})()