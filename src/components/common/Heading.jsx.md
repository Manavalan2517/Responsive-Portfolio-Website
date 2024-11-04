## Heading Component Documentation

### Table of Contents

1. [Overview](#overview)
2. [Component Structure](#component-structure)
3. [Props](#props)

### Overview

The `Heading` component is a reusable React component designed to display a heading with specific styling and layout. It utilizes tailwind CSS classes for styling.

### Component Structure

The `Heading` component is a functional component defined using the `export const` keyword. It receives a single prop named `title` which is used to display the heading text.

```javascript
export const Heading = ({title}) => {
  // JSX for the heading element
  return (
    <div className='flex justify-center items-center'>
      <h2 className='heading text-4xl font-semibold mb-[60px] text-left text-primaryColor'>{title}</h2>
    </div>
  )
}
```

The component returns a `div` element with the following structure:

* **Outer `div`:**  
    * Contains `flex`, `justify-center`, and `items-center` classes to center the heading both horizontally and vertically.
* **`h2` element:**
    * Contains `heading` class for custom styling.
    * Contains `text-4xl`, `font-semibold`, `mb-[60px]`, `text-left`, and `text-primaryColor` classes for font size, weight, margin, text alignment, and color.
    * Displays the `title` prop as the heading text.

### Props

| Prop Name | Type | Description | Default Value |
|---|---|---|---|
| `title` | String | The text to be displayed as the heading. |  | 
