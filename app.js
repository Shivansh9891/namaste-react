const heading = React.createElement(
  "h1",
  { id: "parent" },
  React.createElement("h2", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);
// an element in react is converted when root.render happens , till then its made in an object just like this where first the element goes like (h2) then attributes where id can be given and then filler of what we need to put inside of that tag.
// and it is nested one inside other .

const root = ReactDOM.createRoot(document.getElementById("root"));
// here reactDom is called and not react because this is dom which is going to get rendered
// in real.

root.render(heading);

// rendering the whole stuff in here.
