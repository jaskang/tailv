<script lang="ts">
import { defineComponent, h, Fragment } from 'vue';

export default defineComponent({
  name: 'Empty',
  components: {},
  setup(props, { slots }) {
    return () => h(Fragment, [slots.default?.(), [h('div', {}, 'test')]]);
  }
});
</script>
<style lang="less"></style>
