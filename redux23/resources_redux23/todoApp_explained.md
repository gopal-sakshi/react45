TodoApp is the entry component for our app. It renders 4 components
    header              simpleText - just ignore
    AddTodo
    TodoList 
    VisibilityFilters 

`AddTodo`
- input field to enter new <todo>
- add to the list upon clicking button

`TodoList`
- component that renders the whole list of todos:
- whole/filtered list is rendered ===> when one of the VisibilityFilters is selected.

`Todo`
- component that renders a single todo item:
- shows that a todo is completed by crossing it out.
- dispatches the action to toggle the todo's complete status upon onClick.



