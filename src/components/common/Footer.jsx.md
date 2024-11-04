## Footer Component Documentation

### Table of Contents

* [Overview](#overview)
* [Component Structure](#component-structure)
* [Data Usage](#data-usage)
* [Rendering Logic](#rendering-logic)


### Overview

The `Footer` component is responsible for rendering the footer section of the application. It displays social media icons and a copyright notice.


### Component Structure

The `Footer` component is a functional component defined using the `const` keyword. It returns a `div` element with the following structure:

* **Outer Container:** A `div` element with the class `mt-20 flex justify-center` acts as the main container for the footer.
* **Footer Element:** A `footer` element contains the social media icons and copyright notice.
    * **Social Media Icons:** A `div` with the class `flex justify-center` contains another `div` with the class `flex justify-between mb-2 w-[80%]`. This inner `div` iterates through the `social` array from the `dummyData` file using `map()` and renders an `<i>` element for each social media icon.
    * **Copyright Notice:** A `p` element with the class `text-greyDark` displays the copyright notice.

### Data Usage

The `Footer` component utilizes the `social` array from the `dummyData` file. This array contains objects representing different social media platforms. Each object has the following properties:

* **`icon`:** A string representing the icon class name.

### Rendering Logic

The `map()` method is used to iterate through the `social` array and render an `<i>` element for each social media icon. The `icon` property of each object in the array is used as the class name for the `<i>` element. This allows the component to dynamically render the appropriate icons based on the data provided in the `social` array. 
