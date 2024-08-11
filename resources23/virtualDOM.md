Real DOM is the actual structure represented in the User Interface 
while Virtual DOM is the memory representation of the same.

https://www.reddit.com/r/reactjs/comments/mo4g0t/why_virtual_dom_is_considered_faster_that/?rdt=59984

Some answers



When you do updates to real DOM, each batch of updates has to fit in a single frame. 
If that doesn’t update, browser will rerender the full page. 
Now, when you do complex DOM operations inside side effects (e.g fetch calls), event listeners etc, 
the browser rerenders DOM for all these effects, which as you can imagine is pretty slow.

This is where virtual DOM shines. 
`Virtual DOM is essentially a copy of real DOM that is stored in memory`
So, when you do state updates and React rerenders, 
    the virtual DOM gets updated multiple times instead of the real DOM. 
Since <virtual DOM is in memory, no rerender happens> 
Once the update is complete in Virtual DOM, the “renderer” (i.e react-dom) 
will diff virtual DOM with real DOM and update or remove existing elements or add new elements in batches instead of one by one. 

In conclusion, virtual DOM in itself is slow but it is definitely faster than updating real DOM by hand in an optimized way. 
Of course, one can easily write DOM updates in a way that it is faster than using virtual DOM but it make your code much harder to read. 
On the other hand, React uses the concept of state to make its APIs declarative, 
    which makes it easier to understand the code while also providing a fast way to update real DOM.

=======================================================================================================