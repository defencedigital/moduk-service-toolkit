# Steps

## HTML markup

```html
<ul class="moduk-steps">
  
  <li>
    Create a master document with their details and participant number
  </li>

  <li>
    Remove personal information from all other documents
  </li>

  <li>
    Use participant numbers not names
  </li>

</ul>
```

## Nunjucks macro

```
{% from 'components/steps/macro.njk' import steps %}

{{ modukSteps({
  "items": [
    {
      "item": 'Create a master document with their details and participant number'
    },
    {
      "item": 'Remove personal information from all other documents'
    },
    {
      "item": 'Use participant numbers not names'
    }
  ]
}) }}
```

## Nunjucks arguments

The steps list Nunjucks macro takes the following arguments:

| Name              | Type     | Required  | Description |
| ------------------|----------|-----------|-------------|
| **items**         | array    | Yes       | Items to be displayed within the do and don’t list component |
| **classes**       | string   | No        | Optional additional classes to add to the do and don’t list container. Separate each class with a space |
| **attributes**    | object   | No        | Any extra HTML attributes (for example data attributes) to add to the do and don’t list container |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).