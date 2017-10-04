Heavy SVGs in iOS Safari / Chrome demo
===

This repo was created after [noticing a performance problem](https://github.com/styled-components/styled-components/issues/583#issuecomment-327097536) in a react project with [styled-components v2](https://github.com/styled-components/styled-components).
The problem was only observed in Safari and Chrome on iOS 10 & 11 (iPhone 6s).
Github issue: [styled-components#1207](https://github.com/styled-components/styled-components/issues/1207).

---

When clicking on the togglable buttons for the first time, re-rendering sometimes took over a second and everything else in the interface froze. See frame 15:

![screen shot 2017-09-05 at 08 30 22](https://user-images.githubusercontent.com/608862/30049987-8f9ab93c-9214-11e7-9425-72663e547d49.png)

(the longest event is `styles recalculated` that follows `styles invalidated`)

As it turned out, the reason for the poor performance was not the styled-components library, but the presence of a few heavy SVGs in the interface (≈ 100KB or more).
It appears that the browser had to re-rasterize them each time a new rule was added to the stylesheet.
A typical case is a switch with a unique combination of props that gets toggled for the first time (no matter if it contains an SVG or not).

Live version
---

_for Safari or Chrome on iOS_  
https://kachkaev.github.io/styled-components-with-heavy-svgs-mwe/

Instructions: click on any of 16 togglable circles, with or without continent outlines in the background.
Watch the spinning square in the bottom of the page while clicking.

When a component with a new distinct set of props is clicked for the first time, the square will freeze for a few animation frames.
This will happen both for components with and without an SVG. 

Perhaps, the behaviour is a result of how the SVGs are cached.
When a styled-component gets a new unique combination of props, the new CSS rule is appended to the page.
This invalidates previously rendered SVGs, triggers `styles invalidated` and `styles recalculated`.
Depending on the number of SVGs in the interface, the whole process may even take more than a second, which gets quite noticeable by a user.

The performance problem has been observed for a few SVGs larger than 100KB, however the size seems to be not the only factor.
A couple of rather large SVGs did not cause the performance issue, which suggests that the content of an SVG may matter more than the file size.
