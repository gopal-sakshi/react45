React is declarative instead of imperative
`declarative programming` is when your code shows what you want to happen.
`Imperative programming` your code shows exactly how to do what you want to happen.


```js
// IMPERATIVE
const root = document.getElementById('root')
const container = document.createElement('section')
const title = document.createElement('h1')
container.id = 'new'
title.innerText = 'Welcome to Our Page!'
container.appenedChild(title)
root.appendChild(container)
```


```js
// DECLARATIVE
function Title() (
	return (
		<section id="welcome">
			<h1>Welcome to Our Page</h1>
		</section>
	)
);
React.DOM.render(<Title />, documentgetElementById("root"));
```

<!-- ----------------------------------------------------------------------------- -->

```js
// IMPERATIVE
const string = "difference between declarative and imperative in react.js";
var urlFriendly = "";
for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      urlFriendly += "-";
    } else {
      urlFriendly += string[i];
    }
}

// DECLARATIVE
urlFriendly = string.replace(/ /g, "-");

/*
    Using string.replace is a way of describing what’s supposed to happen: spaces in the string should be replaced.
    The details of how spaces are dealt with are abstracted away inside the replace function.
    In a declarative program, the syntax itself describes what should happen, and 
        the details of how things happen are ABSTRACTED AWAY

*/

```