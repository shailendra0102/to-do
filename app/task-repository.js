(function(){
    angular.module('todo')
        .service('TaskRepository',['Task',function(Task){

            this.getAllTaskList=function(){
                var taskList = [];
                for(var i=0;i<=10;i++){
                    taskList.push(new Task({name:'Pending Task '+i,dueBy:moment().add('m', 2*i).format('DD/MMM/YYYY h:mm A')}))
                }
                this.TaskList = taskList;
                return this;
            }

            this.addTask = function(taskObject){
                this.TaskList.push({name:taskObject.name,dueBy:moment(taskObject.dueBy).format('DD/MMM/YYYY h:mm A')});
                return this;
            } 

        }])
})();