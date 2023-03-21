function addingEventListener() {
 // Returns a reference to the first object with the specified value of the id attribute(button).
  const input = document.getElementById('button');
  
 // Appends an event listener for events whose type attribute value is type
  input.addEventListener('click', function () {
     alert('I was clicked!');
  })
}