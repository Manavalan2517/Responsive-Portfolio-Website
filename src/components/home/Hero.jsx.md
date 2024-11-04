# Hero Component Documentation

## Table of Contents

1.  [Overview](#overview)
2.  [Components Used](#components-used)
3.  [Hero Component Structure](#hero-component-structure)
4.  [Hero Component Logic](#hero-component-logic)
    *   [Mapping Data](#mapping-data)
    *   [Animation Logic](#animation-logic)
    *   [Typewriter Effect](#typewriter-effect)

## Overview

The Hero component is responsible for displaying the hero section of the website. This section features a background image, text content, and an animated typewriter effect. The component dynamically renders the hero content based on data from the `dummyData` file.

## Components Used

*   **React:** The core JavaScript library for building user interfaces.
*   **Typewriter-effect:** A library for creating animated typewriter effects.
*   **Framer-motion:** A library for creating animations and motion graphics.

## Hero Component Structure

The `Hero` component is structured as follows:

1.  **Container:** A `div` with the class `hero` that acts as the main container for the hero section.
2.  **Background Image:** An absolute positioned `div` with the class `bg-fixed bg-no-repeat bg-cover z-[0]` that displays the background image.
3.  **Content Container:** A `div` with the class `heroContainer` that contains the hero content.
4.  **Text Elements:**
    *   `motion.h3`: Displays the heading text.
    *   `motion.h1`: Displays the main heading with the animated typewriter effect.
    *   `motion.p`: Displays the description text.
5.  **Button:** A button element with the class `primaryBtn` that allows users to download the CV.

## Hero Component Logic

### Mapping Data

The `home` array from the `dummyData` file is mapped using the `.map()` method to dynamically generate the hero content. For each object in the array, the component renders the following elements:

*   A heading (`motion.h3`) with the `text` property.
*   A main heading (`motion.h1`) with the `name`, `post`, and `design` properties, displayed using the Typewriter component.
*   A description (`motion.p`) with the `desc` property.

### Animation Logic

The `motion` component from Framer-motion is used to create animations for the heading, main heading, and description elements. The following animation properties are used:

*   **initial:** Sets the initial state of the elements (opacity: 0, y: 20).
*   **animate:** Animates the elements to their final state (opacity: 1, y: 0).
*   **transition:** Sets the duration and delay of the animations.

The delay for each animation is calculated based on the current index `i` of the `home` array, creating a staggered animation effect.

### Typewriter Effect

The `Typewriter` component is used to create an animated typewriter effect for the main heading. The `options` prop is used to configure the Typewriter component:

*   **strings:** An array of strings to be displayed by the typewriter effect.
*   **autoStart:** Sets the typewriter effect to start automatically.
*   **loop:** Sets the typewriter effect to loop indefinitely.

The `strings` array is populated with the `name`, `post`, and `design` properties of the current object in the `home` array.