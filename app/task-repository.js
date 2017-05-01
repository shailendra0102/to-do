(function(){
    angular.module('todo')
        .service('TaskRepository',['Task','$interval','growl',function(Task,$interval,growl){
            var interval;
            this.getAllTaskList=function(){
                this.TaskList = (this.TaskList?this.TaskList:[]);
                return this.TaskList;
            }

            this.addTask = function(taskObject){
                this.TaskList.push(new Task({name:taskObject.name,dueBy:moment(taskObject.dueBy).format('DD/MMM/YYYY h:mm A')}));
                this.TaskList.sort(function(t1,t2){
                    return new Date(t1.dueBy).getTime() - new Date(t2.dueBy).getTime();
                })
                startInterval.call(this);
                filterCompletedTask.call(this);
                return this;
            } 



            this.completeTask =function(task){
                task.complete();
                filterCompletedTask.call(this);
                if(checkForCancelInterval.call(this)){
                    if ($interval.cancel(interval)) {
                        interval = null;
                        //console.log('timer ended');
                    }
                }else{
                    //start timer again
                    startInterval.call(this);
                }                
            }

            function filterCompletedTask(){
                this.TaskList.sort(function(t1,t2){
                     return (t1.completed === t2.completed)? 0 : t1.completed? 1 : -1;
                })
            }

            function startInterval(){
                if(!interval){
                    interval= $interval(checkForOverDues.bind(this),60000);
                    //console.log('timer started');
                }
                
            }

            function checkForOverDues(){
                //console.log('timer is running');
                this.TaskList.filter(function(task){
                    if(!task.completed && moment()>=moment(task.dueBy) && !task.overDue){
                        task.overDueTask();
                        growl.error(task.name + ' is not completed on time.',{title: 'Overdue Task!'});
                    }
                })
                if(checkForCancelInterval.call(this)){
                    if ($interval.cancel(interval)) {
                        interval = null;
                        console.log('timer ended');
                    }
                }
            }

            function checkForCancelInterval(){
                //console.log('checking pending task');
                var pendingTask = this.TaskList.filter(function(task){
                    if(!task.completed && moment(task.dueBy)>moment()){
                        return true;
                    }
                    if(!task.completed && moment()>=moment(task.dueBy)){
                        task.overDueTask();
                    }
                })
                //checkForOverDues.call(this);
               // console.log(pendingTask);
                return pendingTask.length>0?false:true; 
            }

        }])
})();