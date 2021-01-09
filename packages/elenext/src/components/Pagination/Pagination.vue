<template>
  <div class="el-pagination">
    <span class="el-pagination__slot">
      <slot name="total" :total="total" :current="state.current"> 共 {{ total }} 条 </slot>
    </span>
    <ul class="el-pager">
      <li
        v-if="state.pageTotal > 0"
        :class="{ 'is-disabled': state.current === 1 }"
        class="number"
        @click="jmpHandler(state.current - 1)"
      >
        <IconChevronLeft />
      </li>
      <li
        v-if="state.pageTotal > 0"
        :class="{ 'is-active': state.current === 1 }"
        class="number"
        @click="jmpHandler(1)"
      >
        1
      </li>
      <li v-if="state.showPrevMore" class="more btn-quickprev" @click="jmpHandler(state.current - 5)">
        <IconThreeDots />
        <IconChevronDoubleLeft />
      </li>
      <li
        v-for="pager in state.pagers"
        :key="pager"
        :class="{ 'is-active': state.current === pager }"
        class="number"
        @click="jmpHandler(pager)"
      >
        {{ pager }}
      </li>
      <li v-if="state.showNextMore" class="more btn-quicknext" @click="jmpHandler(state.current + 5)">
        <IconThreeDots />
        <IconChevronDoubleRight />
      </li>
      <li
        v-if="state.pageTotal > 1"
        :class="{ 'is-active': state.current === state.pageTotal }"
        class="number"
        @click="jmpHandler(state.pageTotal)"
      >
        {{ state.pageTotal }}
      </li>
      <li
        v-if="state.pageTotal > 0"
        :class="{ 'is-disabled': state.current === state.pageTotal }"
        class="number"
        @click="jmpHandler(state.current + 1)"
      >
        <IconChevronRight />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { prop } from '../../utils'
import { App, defineComponent, reactive, watchEffect } from 'vue'
import {
  IconChevronLeft,
  IconChevronDoubleLeft,
  IconChevronDoubleRight,
  IconChevronRight,
  IconThreeDots
} from '@elenext/icons'

const PAGE_SHOW_ITEM_COUNT = 7
const PAGE_SHOW_ITEM_COUNT_HALF = 3
const EPagination = defineComponent({
  name: 'EPagination',
  components: {
    IconChevronLeft,
    IconChevronDoubleLeft,
    IconChevronDoubleRight,
    IconChevronRight,
    IconThreeDots
  },
  props: {
    current: prop.number(),
    total: prop.number(),
    pageSize: prop.number(),
    pageSizeOptions: prop.array<number>().def([10, 20, 50, 100]),
    disabled: prop.bool()
  },
  emits: ['change'],
  setup(props, { attrs, slots, emit }) {
    const state = reactive({
      current: props.current || 1,
      pageSize: props.pageSize || props.pageSizeOptions[0],
      pagers: [],
      pageTotal: 1,
      showPrevMore: false,
      showNextMore: false
    })

    watchEffect(() => {
      const pagers = []
      const pageTotal = props.total ? Math.ceil(props.total / state.pageSize) : 1
      const current = state.current

      let showPrevMore = false
      let showNextMore = false

      if (pageTotal > PAGE_SHOW_ITEM_COUNT) {
        if (current > PAGE_SHOW_ITEM_COUNT - PAGE_SHOW_ITEM_COUNT_HALF) {
          showPrevMore = true
        }

        if (current < pageTotal - PAGE_SHOW_ITEM_COUNT_HALF) {
          showNextMore = true
        }
      }

      if (showPrevMore && !showNextMore) {
        const startPage = pageTotal - (PAGE_SHOW_ITEM_COUNT - 2)
        for (let i = startPage; i < pageTotal; i++) {
          pagers.push(i)
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < PAGE_SHOW_ITEM_COUNT; i++) {
          pagers.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(PAGE_SHOW_ITEM_COUNT / 2) - 1
        for (let i = current - offset; i <= current + offset; i++) {
          pagers.push(i)
        }
      } else {
        for (let i = 2; i < pageTotal; i++) {
          pagers.push(i)
        }
      }

      state.pagers = pagers
      state.pageTotal = pageTotal
      state.showPrevMore = showPrevMore
      state.showNextMore = showNextMore
    })

    const jmpHandler = (page: number) => {
      if (props.disabled) {
        return
      }
      let newPage = Number(page)
      /* istanbul ignore if */
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1
        }
        if (newPage > state.pageTotal) {
          newPage = state.pageTotal
        }
      }
      if (newPage !== state.current) {
        state.current = newPage
        emit('change', { current: newPage, pageSize: props.pageSize })
      }
    }
    return {
      state,
      jmpHandler
    }
  }
})
EPagination.install = (app: App): void => {
  app.component(EPagination.name, EPagination)
}
export default EPagination
</script>
