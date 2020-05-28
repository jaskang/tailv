<template>
  <div class="demo-icon">
    <h1>Icon 图标</h1>
    <Preview title="使用方法">
      <el-icon name="edit"></el-icon>
      <el-icon name="share"></el-icon>
      <el-icon name="delete"></el-icon>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <template #template>
        {{`
        <el-icon name="edit"></el-icon>
        <el-icon name="share"></el-icon>
        <el-icon name="delete"></el-icon>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        `}}
      </template>
    </Preview>
    <Preview title="图标集合">
      <div class="icon-list">
        <div v-for="name in icons" :key="name" class="icon-list__item">
          <span>
            <i :class="'el-icon-' + name"></i>
            <span class="icon-name">{{ 'el-icon-' + name }}</span>
          </span>
        </div>
      </div>
    </Preview>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Preview from '../components/Preview.vue';
import { ElIcon, ElButton } from '@/index';
const icons = [
  'platform-eleme',
  'eleme',
  'delete-solid',
  'delete',
  's-tools',
  'setting',
  'user-solid',
  'user',
  'phone',
  'phone-outline',
  'more',
  'more-outline',
  'star-on',
  'star-off',
  's-goods',
  'goods',
  'warning',
  'warning-outline',
  'question',
  'info',
  'remove',
  'circle-plus',
  'success',
  'error',
  'zoom-in',
  'zoom-out',
  'remove-outline',
  'circle-plus-outline',
  'circle-check',
  'circle-close',
  's-help',
  'help',
  'minus',
  'plus',
  'check',
  'close',
  'picture',
  'picture-outline',
  'picture-outline-round',
  'upload',
  'upload2',
  'download',
  'camera-solid',
  'camera',
  'video-camera-solid',
  'video-camera',
  'message-solid',
  'bell',
  's-cooperation',
  's-order',
  's-platform',
  's-fold',
  's-unfold',
  's-operation',
  's-promotion',
  's-home',
  's-release',
  's-ticket',
  's-management',
  's-open',
  's-shop',
  's-marketing',
  's-flag',
  's-comment',
  's-finance',
  's-claim',
  's-custom',
  's-opportunity',
  's-data',
  's-check',
  's-grid',
  'menu',
  'share',
  'd-caret',
  'caret-left',
  'caret-right',
  'caret-bottom',
  'caret-top',
  'bottom-left',
  'bottom-right',
  'back',
  'right',
  'bottom',
  'top',
  'top-left',
  'top-right',
  'arrow-left',
  'arrow-right',
  'arrow-down',
  'arrow-up',
  'd-arrow-left',
  'd-arrow-right',
  'video-pause',
  'video-play',
  'refresh',
  'refresh-right',
  'refresh-left',
  'finished',
  'sort',
  'sort-up',
  'sort-down',
  'rank',
  'loading',
  'view',
  'c-scale-to-original',
  'date',
  'edit',
  'edit-outline',
  'folder',
  'folder-opened',
  'folder-add',
  'folder-remove',
  'folder-delete',
  'folder-checked',
  'tickets',
  'document-remove',
  'document-delete',
  'document-copy',
  'document-checked',
  'document',
  'document-add',
  'printer',
  'paperclip',
  'takeaway-box',
  'search',
  'monitor',
  'attract',
  'mobile',
  'scissors',
  'umbrella',
  'headset',
  'brush',
  'mouse',
  'coordinate',
  'magic-stick',
  'reading',
  'data-line',
  'data-board',
  'pie-chart',
  'data-analysis',
  'collection-tag',
  'film',
  'suitcase',
  'suitcase-1',
  'receiving',
  'collection',
  'files',
  'notebook-1',
  'notebook-2',
  'toilet-paper',
  'office-building',
  'school',
  'table-lamp',
  'house',
  'no-smoking',
  'smoking',
  'shopping-cart-full',
  'shopping-cart-1',
  'shopping-cart-2',
  'shopping-bag-1',
  'shopping-bag-2',
  'sold-out',
  'sell',
  'present',
  'box',
  'bank-card',
  'money',
  'coin',
  'wallet',
  'discount',
  'price-tag',
  'news',
  'guide',
  'male',
  'female',
  'thumb',
  'cpu',
  'link',
  'connection',
  'open',
  'turn-off',
  'set-up',
  'chat-round',
  'chat-line-round',
  'chat-square',
  'chat-dot-round',
  'chat-dot-square',
  'chat-line-square',
  'message',
  'postcard',
  'position',
  'turn-off-microphone',
  'microphone',
  'close-notification',
  'bangzhu',
  'time',
  'odometer',
  'crop',
  'aim',
  'switch-button',
  'full-screen',
  'copy-document',
  'mic',
  'stopwatch',
  'medal-1',
  'medal',
  'trophy',
  'trophy-1',
  'first-aid-kit',
  'discover',
  'place',
  'location',
  'location-outline',
  'location-information',
  'add-location',
  'delete-location',
  'map-location',
  'alarm-clock',
  'timer',
  'watch-1',
  'watch',
  'lock',
  'unlock',
  'key',
  'service',
  'mobile-phone',
  'bicycle',
  'truck',
  'ship',
  'basketball',
  'football',
  'soccer',
  'baseball',
  'wind-power',
  'light-rain',
  'lightning',
  'heavy-rain',
  'sunrise',
  'sunrise-1',
  'sunset',
  'sunny',
  'cloudy',
  'partly-cloudy',
  'cloudy-and-sunny',
  'moon',
  'moon-night',
  'dish',
  'dish-1',
  'food',
  'chicken',
  'fork-spoon',
  'knife-fork',
  'burger',
  'tableware',
  'sugar',
  'dessert',
  'ice-cream',
  'hot-water',
  'water-cup',
  'coffee-cup',
  'cold-drink',
  'goblet',
  'goblet-full',
  'goblet-square',
  'goblet-square-full',
  'refrigerator',
  'grape',
  'watermelon',
  'cherry',
  'apple',
  'pear',
  'orange',
  'coffee',
  'ice-tea',
  'ice-drink',
  'milk-tea',
  'potato-strips',
  'lollipop',
  'ice-cream-square',
  'ice-cream-round'
];
export default defineComponent({
  components: { ElIcon, ElButton, Preview },
  setup() {
    return {
      icons
    };
  }
});
</script>
<style lang="less">
.demo-icon {
  i {
    color: #606266;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  .preview__demo {
    overflow: hidden;
  }
  .icon-list {
    display: grid;
    margin: -20px;
    grid-template-columns: repeat(5, 20%);
    list-style: none;
    padding: 0 !important;
    // border: solid 1px #eaeefb;
    background-color: #eaeefb;
    gap: 1px;
    border-radius: 4px;
    place-content: center center;
  }
  .icon-list__item {
    // width: 100%;
    background-color: #fff;
    text-align: center;
    height: 120px;
    color: #666;
    font-size: 13px;

    &::after {
      display: inline-block;
      content: '';
      height: 100%;
      vertical-align: middle;
    }

    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', SimSun, sans-serif;
      color: #99a9bf;
      transition: color 0.15s linear;
    }

    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #606266;
      transition: color 0.15s linear;
    }

    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
    }

    &:hover {
      span,
      i {
        color: rgb(92, 182, 255);
      }
    }
  }
}
</style>
