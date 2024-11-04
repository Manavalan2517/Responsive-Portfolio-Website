## Internal Documentation for `data.js`

### Table of Contents

* [Introduction](#introduction)
* [Export Variables](#export-variables)
    * [`navlink`](#navlink)
    * [`home`](#home)
    * [`about`](#about)
    * [`services`](#services)
    * [`project`](#project)
    * [`portfolio`](#portfolio)
    * [`testimonials`](#testimonials)
    * [`blog`](#blog)
    * [`contact`](#contact)
    * [`social`](#social)

### Introduction

This JavaScript file (`data.js`) exports various data arrays used throughout the website. Each array contains objects representing different content sections, such as navigation links, home page information, services, portfolio items, testimonials, blog posts, contact details, and social media links.

### Export Variables

#### `navlink`

This array defines the navigation links displayed in the website's header. Each object represents a link, containing `url` and `text` properties for its destination and displayed text.

| Property | Description |
|---|---|
| `url` | The URL path of the link. |
| `text` | The text displayed for the link. |

#### `home`

This array contains a single object representing the primary content on the home page. It includes details like the welcome message, name, professional title, and description.

| Property | Description |
|---|---|
| `text` | The introductory text for the home page. |
| `name` | The name of the individual or company. |
| `post` | The primary professional title. |
| `design` | An additional or secondary title. |
| `desc` | A descriptive paragraph about the individual or company. |

#### `about`

This array holds a single object containing information about the "About" section of the website. It has a `desc` property for the main description and a `desc1` property for an additional paragraph. It also includes a `cover` property specifying the image used for this section.

| Property | Description |
|---|---|
| `desc` | The primary descriptive text for the "About" section. |
| `desc1` | An additional paragraph for the "About" section. |
| `cover` | The path to the image used in the "About" section. |

#### `services`

This array represents the list of services offered by the website. Each object describes a service, including an icon, title, and description.

| Property | Description |
|---|---|
| `id` | A unique identifier for the service. |
| `icon` | The icon used to represent the service. |
| `title` | The title of the service. |
| `desc` | A brief description of the service. |

#### `project`

This array displays a set of statistics or achievements related to the website or its work. Each object represents a statistic with an icon, number, and title.

| Property | Description |
|---|---|
| `id` | A unique identifier for the statistic. |
| `icon` | The icon used to represent the statistic. |
| `num` | The numerical value of the statistic. |
| `title` | The title of the statistic. |

#### `portfolio`

This array showcases a collection of projects or portfolio items. Each object describes a project with a cover image, name, category, and title.

| Property | Description |
|---|---|
| `id` | A unique identifier for the project. |
| `cover` | The path to the image used as the project's cover. |
| `name` | The name or brand associated with the project. |
| `category` | The category or type of the project. |
| `title` | The title of the project. |

#### `testimonials`

This array displays a series of testimonials from clients or users. Each object represents a testimonial with a text, image, name, and post.

| Property | Description |
|---|---|
| `id` | A unique identifier for the testimonial. |
| `text` | The content of the testimonial. |
| `image` | The path to the image of the person providing the testimonial. |
| `name` | The name of the person providing the testimonial. |
| `post` | The professional title or position of the person. |

#### `blog`

This array contains a list of blog posts. Each object represents a blog post with a title, date, author, description, and cover image.

| Property | Description |
|---|---|
| `id` | A unique identifier for the blog post. |
| `title` | The title of the blog post. |
| `date` | The date the blog post was published. |
| `author` | The author of the blog post. |
| `desc` | A brief description of the blog post. |
| `cover` | The path to the image used as the cover for the blog post. |

#### `contact`

This array provides contact information for the website or organization. Each object represents a contact method with an icon, text for the first line of information, and text for the second line.

| Property | Description |
|---|---|
| `icon` | The icon representing the contact method. |
| `text1` | The first line of contact information. |
| `text2` | The second line of contact information. |

#### `social`

This array displays social media links for the website or organization. Each object represents a social media platform with an icon.

| Property | Description |
|---|---|
| `icon` | The icon representing the social media platform. |
