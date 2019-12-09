# Tables accessibility

* Use table semantics elements: `table`, `tbody`, `tr`, `th`, `td`
* Use `scope="col"` or `scope="row"` for table headings (`th` elements)
* use `capion` element to describe what kind of data are presented in the table
* To make mobile table accessible, please add apropriate aria roles:
    * `role="columnheader"` for `th` elements
    * `role="row"` for `row` elements
    * `role="gridcell"` for `td` elements

In desktop mode (wide screens) HTML5 tags are sufficient to make HTML table accessible. However, we change display mode on small screen to set our table visible without horizontal scrolling, so we need to ad apropriate aria roles to make it focusable and well read by AT.
