(function(){
    angular.module('todo')
        .controller('ListController',[function(){
            this.toDOList=[
                {
                    name: 'Pending Task 1',
                    dueBy: '04/27/2017 11:30 AM'
                },
                {
                    name: 'Pending Task 2',
                    dueBy: '04/27/2017 11:40 AM'
                },
                {
                    name: 'Pending Task 3',
                    dueBy: '04/27/2017 11:50 AM'
                },
                {
                    name: 'Pending Task 4',
                    dueBy: '04/27/2017 12:00 PM'
                },
                {
                    name: 'Pending Task 5',
                    dueBy: '04/27/2017 12:10 PM'
                }
            ]
        }])
})();