# turing
Pure JavaScript HTML generator. You write JavaScript, we return HTML. No templates.

This:

```javascript
div(
  label({"for": "rendering-method-dropdown"}, "How do you want to render your UI?"),
  select(
    {id: "rendering-method-dropdown"},
    option({value: "react"}, "React"),
    option({value: "turing"}, "Turing"),
  )
)
```

Returns this:

```html
<div>
  <label for="rendering-method-dropdown">"How do you want to render your UI?"</label>
  <select id="rendering-method-dropdown">
    <option value="react">React</option>
    <option value="turing">Turing</option>
  </select>
</div>
```

How you'd call it in practice:

```javascript
const div = useTag("div");
const label = useTag("label");
const select = useTag("select");
const option = useTag("option");

const container = document.getElementById("my-container-element");
container.innerHTML = div(
  label({"for": "rendering-method-dropdown"}, "How do you want to render your UI?"),
  select(
    {id: "rendering-method-dropdown"},
    option({value: "react"}, "React"),
    option({value: "turing"}, "Turing"),
  )
);
```

As of this writing, the implementation is 23 lines of unobfuscated,
uncompressed, readable JavaScript -- see for yourself. The implementation is
less than half the length of the README.

You can do anything in Turing that you can do in JavaScript because it is
JavaScript -- pure JavaScript.

It supports everything that HTML supports because HTML is just tags and attributes.
And you tell Turing what tags you need.
