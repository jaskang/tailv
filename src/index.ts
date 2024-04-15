import type { Plugin } from 'vue'

import { default as Button } from './Button/index.vue'
import { Checkbox, CheckboxGroup } from './Checkbox'
import { Radio, RadioGroup } from './Radio'
import { Anchor, useAnchor, type IAnchorItem } from './Anchor'
import { ScrollArea } from './ScrollArea'
import { default as Input } from './Input/index.vue'
import { Select, type SelectOption } from './Select'
import { Switch } from './Switch'
import { Menu, type MenuItemRawType, type MenuItemType, type MenuItemTitleType, type MenuItemDividerType } from './Menu'
import { default as Popover } from './Popover/index.vue'
import { default as Tooltip } from './Tooltip/index.vue'
import { default as SpaceCompact } from './Space/SpaceCompact.vue'

export {
  // components
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Anchor,
  ScrollArea,
  Input,
  Select,
  Switch,
  Menu,
  Popover,
  Tooltip,
  SpaceCompact,
  // use
  useAnchor,
}

export type { IAnchorItem, MenuItemRawType, MenuItemType, MenuItemTitleType, MenuItemDividerType, SelectOption }
export const plugin: Plugin = {
  install(app, ...options) {
    app.component(Button.name!, Button)
    app.component(Checkbox.name!, Checkbox)
    app.component(CheckboxGroup.name!, CheckboxGroup)
    app.component(Radio.name!, Radio)
    app.component(RadioGroup.name!, RadioGroup)
    app.component(Anchor.name!, Anchor)
    app.component(ScrollArea.name!, ScrollArea)
    app.component(Input.name!, Input)
    app.component(Select.name!, Select)
    app.component(Switch.name!, Switch)
    app.component(Menu.name!, Menu)
    app.component(Popover.name!, Popover)
    app.component(Tooltip.name!, Tooltip)
    app.component(SpaceCompact.name!, SpaceCompact)
  },
}
