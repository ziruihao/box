# Box

Box is an intutive layout component for React projects. As a easily tunable flexbox, it removes the hassle of styling flexing properties and offers an immediate sense of the UI layout right in the JSX.

## Installation

```bash
npm install @zirayhao/box
```
## Quick Start

Import it into your React component.

```javascript
import React from 'react'
import Box from '@zirayhao/box'

const Component = (props) => {
  return(
    <Box row justify="center" align="center" wrap flex={1}>
      <Box col>
        <h1>Hello</h1>
        <Box height={50} className="vertical-spacer">
        <p>Some text</p>
      </Box>
      <Box width={100} className="horizontal-spacer">
      <img src={image} />
    </Box>
  );
}
```
## Docs

| Prop        | Type                        | Description                                                                                                                                                             | Default |
|-------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `row`       | `boolean`                   | Flexes the box horizontally if `true`.                                                                                                                                  | `true`  |
| `col`       | `boolean`                   | Flexes the box vertically if `true`.                                                                                                                                    | `false` |
| `justify`   | `string`                    | Controls content justification. One of `start` (flex-start), `end` (flex-end), `center`, `between` (space-between), `around` (space-around).                            | `start` |
| `align`     | `string`                    | Aligns items. One of `start`  (flex-start),  `end`  (flex-end),  `center` ,  `stretch`  (stretch).                                                                      | `stretch` |
| `self`      | `string`                    | Controls its self alignment if embedded in a parent flex box. One of  `start`  (flex-start),  `end`  (flex-end),  `center` ,  `stretch`  (stretch).                     | None    |
| `wrap`      | `boolean`                   | Declares wrapping behavior, `true` for flex-wrap.                                                                                                                       | `false` |
| `flex`      | `number`                    | Controls the flex growth.                                                                                                                                               | None    |
| `width`     | `number \| string`          | Directly modifies the CSS width property. Example inputs are `50`, `50px`, `70%`.                                                                                       | None    |
| `height`    | `number \| string`          | Directly modifies the CSS height property. Example inputs are  `50` ,  `50px` ,  `70%` .                                                                                | None    |
| `pad`       | `number \| string \| array` | If of type `number` or `string`, directly modifies the CSS padding property. If of type `array`, each element corresponds to the top, bottom, left, and right paddings. | None    |
| `id`        | `string`                    | Injects a DOM `id`.                                                                                                                                                     | None    |
| `className` | `string`                     | Injects DOM `class`es.                                                                                                                                                  | None    |

## Author

Ziray Hao
