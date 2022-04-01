# Set Initial Color Mode 🌗

## Usage

### Plain HTML

```html
<script src="https://unpkg.com/@rqbazan/set-initial-color-mode@1.1.0" />
```

### Next.js

```jsx
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { getJsText } from '@rqbazan/set-initial-color-mode'

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
    )
  }
}
```

### React.js

```jsx
import * as React from 'react'
import { useColorModeToggle } from '@rqbazan/set-initial-color-mode'

function Switch() {
  const { onToggle, colorMode } = useColorModeToggle()

  React.useEffect(() => {
    if (colorMode === 'dark') {
      document.documentElement.classList.add('my-dark-class')
    } else if (colorMode === 'light') {
      document.documentElement.classList.remove('my-dark-class')
    }
  }, [colorMode])

  return <input type="checkbox" />
}
```
