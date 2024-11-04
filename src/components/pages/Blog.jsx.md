## Blog Component Documentation

### Table of Contents

1. [Introduction](#introduction)
2. [Component Structure](#component-structure)
3. [Animation Logic](#animation-logic)
4. [Data Fetching](#data-fetching)

### Introduction

This documentation explains the implementation of the `Blog` component, responsible for displaying a grid of blog posts with animation effects.

### Component Structure

The `Blog` component renders the following elements:

- **Heading:** Displays the title "Blog" using the `Heading` component.
- **Content Grid:** Contains individual blog posts arranged in a responsive grid.
- **Blog Post Items:** Each blog post is a `motion.div` element with the following components:
    - **Image:** Displays the blog post cover image.
    - **Text:** Contains the blog post title, author, date, and description.

### Animation Logic

The `Blog` component utilizes `framer-motion` and `react-intersection-observer` to implement animation effects on blog posts. 

- **`InView` component:** This component from `react-intersection-observer` triggers animations when the blog post element enters the viewport.
- **`motion.div` component:** This component from `framer-motion` allows for defining animation properties.
- **`initial` prop:** Specifies the initial state of the animation. Each blog post initially has an opacity of 0 and is positioned 50 pixels above its final position.
- **`animate` prop:** Defines the animated state. When the blog post enters the viewport (`inView` is true), the animation sets the opacity to 1 and moves the post to its final position (y: 0). When the blog post exits the viewport (`inView` is false), the animation reverts to the initial state.
- **`transition` prop:** Controls the animation duration and delay. Each blog post has a duration of 0.5 seconds and a delay based on its index, creating a staggered animation effect.

### Data Fetching

- The `blog` array from `../data/dummyData` contains data for each blog post. This data includes:
    - `cover`: URL of the blog post cover image.
    - `title`: Title of the blog post.
    - `author`: Author of the blog post.
    - `date`: Date of the blog post.
    - `desc`: Description of the blog post.
- The `map` method iterates over the `blog` array to render individual blog posts. 
- Each blog post is rendered with its corresponding data, using the `val` object obtained from the `map` function.

This documentation provides a comprehensive overview of the `Blog` component implementation and its core functionalities. The use of `framer-motion` and `react-intersection-observer` enables smooth and engaging animations, while the data fetching mechanism ensures dynamic content display.
