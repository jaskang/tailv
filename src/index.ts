import type { Plugin } from 'vue'

import { default as Button } from './Button/index.vue'
import { Checkbox, CheckboxGroup } from './Checkbox'
import { Radio, RadioGroup, RadioCard } from './Radio'
import { Badge } from './Badge'
import { Anchor, useAnchor, type IAnchorItem } from './Anchor'
import { Avatar } from './Avatar'
import { ScrollArea } from './ScrollArea'
import { default as Input } from './Input/index.vue'
import { Select, type SelectOption } from './Select'
import { Switch } from './Switch'
import { Menu, type MenuItemRawType, type MenuItemType, type MenuItemTitleType, type MenuItemDividerType } from './Menu'
import { default as Popover } from './Popover/index.vue'
import { default as Tooltip } from './Tooltip/index.vue'
import { default as SpaceCompact } from './Space/SpaceCompact.vue'
import { Tabs } from './Tab'
import { Textarea } from './Textarea'

export {
  // components
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioCard,
  RadioGroup,
  Anchor,
  Avatar,
  ScrollArea,
  Input,
  Select,
  Switch,
  Menu,
  Popover,
  Tooltip,
  Badge,
  SpaceCompact,
  Tabs,
  Textarea,
  // use
  useAnchor,
}

export type { IAnchorItem, MenuItemRawType, MenuItemType, MenuItemTitleType, MenuItemDividerType, SelectOption }
export const plugin: Plugin = {
  install(app, ...options) {
    app.component(Button.name!, Button)
    app.component(Checkbox.name!, Checkbox)
    app.component(CheckboxGroup.name!, CheckboxGroup)
    app.component(Badge.name!, Badge)
    app.component(Radio.name!, Radio)
    app.component(RadioCard.name!, RadioCard)
    app.component(RadioGroup.name!, RadioGroup)
    app.component(Avatar.name!, Avatar)
    app.component(Anchor.name!, Anchor)
    app.component(ScrollArea.name!, ScrollArea)
    app.component(Input.name!, Input)
    app.component(Select.name!, Select)
    app.component(Switch.name!, Switch)
    app.component(Menu.name!, Menu)
    app.component(Popover.name!, Popover)
    app.component(Tooltip.name!, Tooltip)
    app.component(SpaceCompact.name!, SpaceCompact)
    app.component(Tabs.name!, Tabs)
    app.component(Textarea.name!, Textarea)
  },
}
