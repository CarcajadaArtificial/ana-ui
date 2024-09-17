# 🍱 Lunchbox

### Warning! This is an incomplete project and it will have breaking changes soon. Expect the version `v1.0.0` to be the first stable and permanent release.

``Hello ( ´ ω ` )ノﾞ`` Welcome to 🍱 Lunchbox. So... you're into Deno 🦕 Fresh
🍋? Damn, me too. I've found myself using nothing but Fresh for most of my web
dev projects. But I'm not that much of a user of existing web component
libraries. Even though I respect these, I'm more of a _do-it-yourself_ kind of
guy. That is why I created Lunchbox, and I couldn't help creating an opinionated
product that is built to have my dream features.

## Ideas behind the library

Alright, so what are these features? Instead of listing what can _technically_
be done with this library, the way to describe it is by its core ideas.

### Based on [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/)

Shoutout to [Brad Frost](https://bradfrost.com/), thank you for this great piece
of work. A popular concept about modularity in design systems is to consider
them inherently hierarchical. In this, I strongly disagree because atoms are of
no less importance than organisms. But I do agree that they have one
fundamentally different characteristic. Atoms are components only made by
nature's _subatomic particles_ a.k.a. pure HTML Elements. Am I stretching too
far with the atomic analogy? You can observe the progress status of all components 
in the [official project](https://github.com/users/CarcajadaArtificial/projects/2).

### Trivial HTML good practices

Component libraries are usually ambiguous about how they handle inner logic,
creating the need to _find out how does it do X_. For example, some might have
only one component for both `<input/>` and `<textarea/>`, which might change
depending on a prop. "Or was it something else? Wait, what was the name of the
class that changes when it's a TextArea?" Having it closer to the HTML Element
logic makes the inner logic of the components really obvious and apparent.

Let's take as an example the `<Input>` component. When using it you're expected
to use the best practices with it, plus additional features. These best
practices are multidisciplinary. The field of UX foments the use of a label and
a contextual error message to guide the user. That gives us the props
`<Input label="" error="" />`. These features are not native to the simple
`<input />` HTEML element, it must work together with other elements. It is in
this next area where the good practices aren't forgotten. Like nesting the input
inside a label element (`<label><input /></label>`). Finally, every visual
element inside the component was designed to maintain a perfect vertical rhythm
for good aesthetic practices even in the aesthetics of the interface.

### Configure anything easily

Let us continue with the example of the `<Input />` component. As a very strict
rule, all components must be able to render a useful default state without any
defined prop. so simply using `<Input />` will create a functional input field
even without a label or anything. Likewise, styles and CSS classes are optional
and can be removed with the universal prop `nostyles`.

Also, additional classes can be appended simply by adding a class to the
component. Having `<Input class="x" />` will add the class `"x"` to the
`<input />` element inside it. Additionally, a reference can be forwarded to the
same element using the universal prop `fref` like this. Having
`<Input fref={inputRef} />` will forward the reference to the `<input />`
element inside it.

Every HTML Element and framework component that make up a particular component
will be called a _"piece"_. Every piece of every component can be referenced
using the universal component `fwd`. This is an oversimplified html code for the
`<Input />` component:

```html
                  <!-- Piece name: -->
<div>             <!-- wrapper     -->
  <label>         <!-- label       -->
    <span></span> <!-- text        -->
    <input />     <!-- input       (default target of the fref and class props) -->
  </label>
  <span></span>  <!-- error       -->
</div>
```

The piece name is used in the CSS classes (`comp-#NAME#_#PIECE#`) and in the
`fwd` prop (`<Input fwd={{ label: {class: 'x'} }}` will add the class `'x'` to
the piece "label").

## Getting started

Deno counts with various ways of importing modules, for example the good ol' url
import:

```ts
import { Button } from 'https://deno.land/x/lunchbox@vX.X.X/mod.ts';
```

But let's be reasonable, almost nobody would do something like this, you would
have to update multiple files and imports whenever the module updates.
Personally, I'm more of an `import_map.json`.

```json
{
  "imports": {
    "lunchbox": "https://deno.land/x/lunchbox@vX.X.X/mod.ts",
    "resin": "https://deno.land/x/resin/mod.ts",
  }
}
```

This way, the usage would be really clean and easier to maintain:

```tsx
import { Button } from 'lunchbox';

export default function () {
  return <Button>Click Me!</Button>;
}
```
