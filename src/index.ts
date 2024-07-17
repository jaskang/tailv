import type { Plugin } from 'vue'
import { default as Button } from './Button/index.vue'
import { default as Input } from './Input/index.vue'
import { default as Popover } from './Popover/index.vue'
import { default as SpaceCompact } from './Space/SpaceCompact.vue'
import { default as Tooltip } from './Tooltip/index.vue'
import { Anchor, type IAnchorItem, useAnchor } from './Anchor'
import { Avatar } from './Avatar'
import { Badge } from './Badge'
import { ListBox } from './Base'
import { Checkbox, CheckboxGroup } from './Checkbox'
import { Menu, type MenuItemDividerType, type MenuItemRawType, type MenuItemTitleType, type MenuItemType } from './Menu'
import { Radio, RadioCard, RadioGroup } from './Radio'
import { ScrollArea } from './ScrollArea'
import { Select, type SelectOption } from './Select'
import { Switch } from './Switch'
import { Tabs } from './Tab'
import { Textarea } from './Textarea'

export {
  Anchor,
  Avatar,
  Badge,
  // components
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  // base
  ListBox,
  Menu,
  Popover,
  Radio,
  RadioCard,
  RadioGroup,
  ScrollArea,
  Select,
  SpaceCompact,
  Switch,
  Tabs,
  Textarea,
  Tooltip,
  // use
  useAnchor,
}

export type { IAnchorItem, MenuItemDividerType, MenuItemRawType, MenuItemTitleType, MenuItemType, SelectOption }
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
    // base
    app.component(ListBox.name!, ListBox)
  },
}
