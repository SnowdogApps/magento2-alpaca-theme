# Improve a11y on the lists

If the list is preceded by the title (in heading or some other element), it's recommended to add an `aria-labelledby` attribute on the list and bind there the list title:

```html
<h2 id="list-title">List title</h2>
<ul class="list" aria-labelledby="list-title">
    <li class="list__item">
        Lorem ipsum
    </li>
    <li class="list__item">
        Lorem ipsum
    </li>
    <li class="list__item">
        Lorem ipsum
    </li>
    <li class="list__item">
        Lorem ipsum
    </li>
    <li class="list__item">
        Lorem ipsum
    </li>
</ul>
```
