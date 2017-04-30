(function(){
    angular.module('todo')
        .controller('ListController',['TaskRepository', function(TaskRepository){ 

           this.getAllTaskList = function(){
                this.toDOList = TaskRepository.getAllTaskList(); 
           }

           this.newTask = function(){
               if(this.todo.$valid && moment()<moment(this.taskModel.dueBy)){
                console.log(this.taskModel);
                this.toDOList = TaskRepository.addTask({name:this.taskModel.name,dueBy:moment(this.taskModel.dueBy).format()}).TaskList;
                console.log(this.taskModel);
                this.taskModel={};
               }else{
                   alert("Due date time should be in future");
               }
               
           }

           this.completeTask=function(task){
                TaskRepository.completeTask(task);
           }

           this.taskModel={};

        }])
})();