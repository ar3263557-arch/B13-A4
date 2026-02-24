 1) Ans:querySelector* is more flexible, as you can pass it any CSS3 selector, not just simple ones for id, tag, or class.
The performance of querySelector* changes with the size of the DOM that it is invoked on. To be precise, querySelector* calls run in O(n) time and getElement* calls run in O(1) time, where n is the total number of all children of the element or document it is invoked on.
The return types of these calls vary. querySelector and getElementById both return a single element. querySelectorAll and getElementsByName both return NodeLists. The older getElementsByClassName and getElementsByTagName both return HTMLCollections. NodeLists and HTMLCollections are both referred to as collections of elements.
Collections can be "live" or "static". This is NOT reflected in their types. getElements* calls return live collections, and querySelectorAll returns a static collection. The way that I understand it, live collections contain references to elements in the DOM, and static collections contain copies of elements. Take a look at @Jan Feldmann's comments below for a different angle as well. I haven't figured out a good way to incorporate it into my answer but it may be a more accurate understanding.



2) Ans: To create and insert a new element into the DOM using JavaScript, you first create the element, then set its properties, and finally append or insert it into an existing parent element.


3) Ans: Event bubbling is a default JavaScript mechanism where an event triggered on a nested (child) element propagates upward through its ancestors, triggering their respective event handlers in order. It moves from the innermost element to the outermost (document or window). 


4) Ans: Event delegation is a design pattern in JavaScript where a single event listener is attached to a parent element to manage events for all its descendant elements [1, 2]. The listener leverages event bubbling, a process where events triggered on a child element propagate up the Document Object Model (DOM) tree to its ancestors [1, 3]. 


5) Ans :Clicking a link (<a> tag) normally navigates to the URL in its href attribute. Calling preventDefault() on the click event will stop the navigation, allowing JavaScript to, for instance, load content dynamically.
A "submit" button in a form, by default, sends the form data to a server and reloads the page. Using preventDefault() in the submit event handler allows developers to use JavaScript to validate the form or send the data asynchronously (e.g., using Fetch API) without a page refresh.
It does not stop the event from continuing its journey (propagation) through the DOM.