const tree = {
    todolists: {
        byId : {
            'list1': {
                listid: '1',
                title: 'list1',
                todos : [
                    'todo1', 'todo2', 'todo3'
                ]
                created: '2019-01-01',
                modified: '2019-01-01'
            },
            'list2': {
                listid: '2'
                title: 'list2',
                todos: [
                    'todo4', 'todo5'
                ]
            }
        },
        allIds: ['list1', 'list2']
    },
    todos:{
        byId: {
            'todo1': {
                todoid: 'todo1',
                content: 'todo1content',
                completed: false
            },
            'todo2': {
                todoid: 'todo2',
                content: 'todo2content',
                completed: false
            },
            'todo3': {
                todoid: 'todo3',
                content: 'todo3content',
                completed: false
            },
            'todo4': {
                todoid: 'todo4',
                content: 'todo4content',
                completed: false
            },
            'todo5': {
                todoid: 'todo5',
                content: 'todo5content',
                completed: false
            }
        },
        allIds: ['todo1', 'todo2', 'todo3', 'todo4', 'todo5']
    }
}