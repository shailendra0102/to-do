(function(){
    angular.module('todo')
        .controller('ListController',['TaskRepository', function(TaskRepository){ 

           this.getAllTaskList = function(){
                this.toDOList = TaskRepository.getAllTaskList().TaskList;   
           }

           this.newTask = function(){
               this.toDOList = TaskRepository.addTask({name:this.taskModel.name,dueBy:moment(this.taskModel.dueBy).format()}).TaskList;
           }

           this.taskModel={
               name:'Test TAsk',
               dueBy: moment().format("MM/DD/YYYY h:mm A")
           };

        }])
})();