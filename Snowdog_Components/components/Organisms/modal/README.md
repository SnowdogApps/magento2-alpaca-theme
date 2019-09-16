# Modal component

## Accessibility features for modal component

During implementation, please add to `div[role="dialog"]` two aria attributes which help screen readers to tell what is modal about:
* `aria-labelledby` - as a value pass the id of title element, the text if this element will be written
* `aria-describedby` - as a value pass the id of description element, the text if this element will be written

**Code example**:

```html
<div role="dialog"
     aria-hidden="true"
     id="myDialog"
     data-modal="myDialog"
     class="modal"
     tabindex="-1"
     aria-labelledby="myTitle"
     aria-describedby="myDesc"
 >
    <div role="document" class="modal__content" tabindex="0">
         <div id="myTitle">Save "untitled" document?</div>
         <div id="myDesc">You have made changes to "untitled.txt" that have not been saved. What do you want to do?</div>
         <button id="saveMe" type="button">Save changes</button>
         <button id="discardMe" type="button">Discard changes</button>
         <button id="neverMind" type="button">Cancel</button>
    </div>
</div>
```

### If you don't use neither title or description element, use at least `aria-label` attribute for it.
