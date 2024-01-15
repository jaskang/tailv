<script setup>
import { Button } from 'tailv'
</script>

# Button

## Default

<div class="flex flex-wrap gap-2">
  <Button>Button</Button>
  <Button color="primary">Primary</Button>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
  <Button color="error">Error</Button>
</div>

## Soft Variant

<div class="flex flex-wrap gap-2">
  <Button variant="soft">Button</Button>
  <Button variant="soft" color="primary">
    Primary
  </Button>
  <Button variant="soft" color="success">
    Success
  </Button>
  <Button variant="soft" color="warning">
    Warning
  </Button>
  <Button variant="soft" color="error">
    Error
  </Button>
</div>

## Plain Variant

<div class="flex flex-wrap gap-2">
  <Button variant="plain">Button</Button>
  <Button variant="plain" color="primary">
    Primary
  </Button>
  <Button variant="plain" color="success">
    Success
  </Button>
  <Button variant="plain" color="warning">
    Warning
  </Button>
  <Button variant="plain" color="error">
    Error
  </Button>
</div>

## Pill

<div class="flex flex-wrap gap-2">
  <Button pill>Button</Button>
  <Button color="primary" pill>
    Primary
  </Button>
</div>

## Square

<div class="flex flex-wrap gap-2">
  <Button square>D</Button>
  <Button square pill>
    D
  </Button>
  <Button color="primary" square>
    P
  </Button>

  <Button color="primary" square pill>
    P
  </Button>
</div>

## Sizes

<div class="flex flex-wrap items-center gap-2">
  <Button color="primary" size="sm">
    size: sm
  </Button>
  <Button color="primary" size="md">
    size: md
  </Button>
  <Button color="primary" size="lg">
    size: lg
  </Button>
</div>

## Disabled

<div class="flex flex-wrap gap-2">
  <Button disabled>Button</Button>
  <Button color="primary" disabled>
    Primary
  </Button>
  <Button color="error" disabled>
    Error
  </Button>
</div>

## Loading

<div class="flex flex-wrap gap-2">
  <Button loading>Button</Button>
  <Button color="primary" loading>
    Primary
  </Button>
</div>

## Colors

<div class="flex flex-wrap gap-2">
  <Button color="slate">slate</Button>
  <Button color="gray">gray</Button>
  <Button color="zinc">zinc</Button>
  <Button color="neutral">neutral</Button>
  <Button color="stone">stone</Button>
  <Button color="red">red</Button>
  <Button color="orange">orange</Button>
  <Button color="amber">amber</Button>
  <Button color="yellow">yellow</Button>
  <Button color="lime">lime</Button>
  <Button color="green">green</Button>
  <Button color="emerald">emerald</Button>
  <Button color="teal">teal</Button>
  <Button color="cyan">cyan</Button>
  <Button color="sky">sky</Button>
  <Button color="blue">blue</Button>
  <Button color="indigo">indigo</Button>
  <Button color="violet">violet</Button>
  <Button color="purple">purple</Button>
  <Button color="fuchsia">fuchsia</Button>
  <Button color="pink">pink</Button>
  <Button color="rose">rose</Button>
</div>

## Props

| Prop     | Type                | Default | Description                  |
| -------- | ------------------- | ------- | ---------------------------- |
| variant  | 'soft' \| 'plain'   | -       | Variant of the button        |
| size     | 'sm' \|'md' \| 'lg' | 'md'    | Size of the button           |
| pill     | boolean             | false   | Pill style of the button     |
| square   | boolean             | false   | Square style of the button   |
| loading  | boolean             | false   | Loading state of the button  |
| disabled | boolean             | false   | Disabled state of the button |
| color    | string              | -       | Color of the button          |

## Slots

| Name    | Description      |
| ------- | ---------------- |
| default | default children |
