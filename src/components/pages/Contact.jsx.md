## Contact Component Documentation

### Table of Contents

- [Contact Component Overview](#contact-component-overview)
- [Form Animation and Input Handling](#form-animation-and-input-handling)
- [Contact Information Display](#contact-information-display)

### Contact Component Overview

The `Contact` component renders a contact form and displays contact information. 

The component leverages:

- **React**: For component structure and rendering.
- **Framer Motion**: For animating the form elements and contact information.
- **React Intersection Observer**: To trigger animations when elements come into view.

### Form Animation and Input Handling

The form contains input fields for Name, Email, Subject, and Message.  All form elements are animated using `InView` and `motion.div` components. 

**Animation Logic:**

1. **Initial State**: Elements are initially hidden with an opacity of 0 and shifted slightly offscreen (50 pixels for the form, 20 pixels for input fields).
2. **In-View State**: When an element comes into view, it transitions to an opacity of 1 and slides into its final position.
3. **Transition**:  The transition is configured with a duration of 0.5 seconds. Input fields have an additional delay based on their index in the array, creating a staggered animation effect.
4. **Trigger**: The `triggerOnce` prop ensures that the animation only plays once per element. 

**Input Field Handling:**

- **Textarea**: The "Message" input field uses a `textarea` element for multi-line input.
- **Input Type**:  The `type` attribute for other input fields is dynamically determined:
    - "Email" field: `type="email"`
    - Other fields: `type="text"`

### Contact Information Display

The component displays contact information from the `contact` array imported from `dummyData`. Each piece of information is rendered within a `motion.div` element. 

**Animation Logic**:

1. **Initial State**: Elements are initially hidden with an opacity of 0 and shifted to the left by 30 pixels.
2. **In-View State**: When an element comes into view, it transitions to an opacity of 1 and slides to its final position.
3. **Transition**: The transition is configured with a duration of 0.5 seconds and a delay based on the index of the element within the array, resulting in a staggered animation.
4. **Trigger**: The `triggerOnce` prop ensures that the animation only plays once per element. 
