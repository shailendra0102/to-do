(function(){
    angular.module('todo')
        .controller('ListController',['TaskRepository', function(TaskRepository){ 

           this.getAllTaskList = function(){
                this.toDOList = TaskRepository.getAllTaskList().TaskList;   
           }

           this.newTask = function(){
               this.toDOList = TaskRepository.addTask({name:'Tesxt Task',dueBy:moment().format()}).TaskList;
           }

           this.taskModel={};

        }])
})();