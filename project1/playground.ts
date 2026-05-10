type Todo = {
  title: String;
};

fetch("abc")
  .then((res) => res.json())
  .then((data) => {
    return data as Todo;
  }).then(todo => {

})
