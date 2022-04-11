# 🍋 Lemon Design

A React component library based on Tailwind CSS

**Beta**

[View components here →](https://main--624787b9a7abe6004a647008.chromatic.com)

### Installation

Install through the package manager of your choice

```sh
npm install lemon-design-react
```

### Setup

#### Compile classes

Add the following to your `tailwind.config.js` in order for your project to
compile the css of the components. We do this in order to prevent duplicate
classes in your project.

```javascript
content: [
  ...,
  "./node_modules/lemon-design-react/src/**/*.tsx",
]
```

#### Custom styles

Since we have some custom classes for components like the `AvatarGroup` and
`Sidebar`, you need to import this style sheet in the root of your project.

```javascript
import "lemon-design-react/dist/lemon.css";
```

#### Form plugin

One last thing you will have to do to get the proper styles for the components is to install the `@tailwindcss/forms` plugin. This makes sure elements like the input, select & checkbox are easier to style for us.

```sh
npm install -D @tailwindcss/forms
```

And then include it in your `tailwind.config.js` file like this

```javascript
plugins: [require("@tailwindcss/forms")];
```

### Start using the components

```javascript
import { Button } from "lemon-design-react"

...

<Button>Open Mailbox</Button>
```
