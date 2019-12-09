# Accessibility in typography

* please use apropriate HTML5 semantic tag for inline elements
[HTML semantics cheat sheet - text](https://learn-the-web.algonquindesign.ca/topics/html-semantics-cheat-sheet/#text)
* add `title` attribute to link - it is only for desktop mode but it shows on hover and still some people use desktop view to search the WEB ;)
*  Headings on the page should keep logical order h1 -> h6, use only one h1 on the top of page (not necessary the first element but it should appear on top, at the latest at the top of `main` content)
* For `blockquote` element, you at least `cite` element with a link to source inside.
[HTML5 Doctor - cite and blockquote](http://html5doctor.com/cite-and-blockquote-reloaded/)
* Use label for EVERY form field! if design point it should be unvisible, use `visually-hidden()` sass mixin fot styling
