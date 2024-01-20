# Set Initial Color Mode 🌗

## Inspiration

[The Quest for the Perfect Dark Mode](https://www.joshwcomeau.com/react/dark-mode/) by [Josh Comeau](https://twitter.com/JoshWComeau)

## Usage

### Plain HTML

```html
<script src="https://unpkg.com/@rqbazan/set-initial-color-mode/dist/browser.js" />
```

### Next.js

```jsx
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { getJsText } from "@rqbazan/set-initial-color-mode";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            id="set-initial-color-mode"
            dangerouslySetInnerHTML={{ __html: getJsText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

### React.js

```jsx
import * as React from "react";
import { useColorModeToggle } from "@rqbazan/set-initial-color-mode";

function Switch() {
  const { onToggle } = useColorModeToggle();

  return <input type="checkbox" onClick={onToggle} />;
}
```
