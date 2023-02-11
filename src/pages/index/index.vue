<!--
 * @Author: LinRenJie
 * @Date: 2023-02-11 21:12:17
 * @LastEditTime: 2023-02-11 21:27:54
 * @Description: 
 * @FilePath: /Taro-Nutui4-app/src/pages/index/index.vue
 * @Email: xoxosos666@gmail.com
-->
<template>
  <view class="index">
    <view class="header-address">
      <userAddress />
      <userSearch :searchValue="searchValue" />
    </view>
    <headerSwiper />
    <goodSort />
    <discountZone class="zone" />
    <lastMinute />
    <advertImage :advImage="advImage" />
    <view class="goodsTabs">
      <tabsCom />
    </view>
  </view>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import userAddress from '../../components/address/address.vue'
import goodSort from '../../components/goodSort/goodSort.vue'
import userSearch from '../../components/search/search.vue'
import headerSwiper from '../../components/swiper'
import tabsCom from '../../components/tabs/tabCompoents.vue'
import advertImage from './components/advertisement.vue'
import discountZone from './components/discountZone.vue'
import lastMinute from './components/lastMinute.vue'
export default {
  name: 'Index',
  components: {
    headerSwiper,
    goodSort,
    userAddress,
    userSearch,
    discountZone,
    lastMinute,
    advertImage,
    tabsCom,
  },
  setup() {
    const state = reactive({
      searchValue: '',
    })
    const advImage = ref('https://gd-hbimg.huaban.com/8b78b8e8ef1369805af34e4e811a346867588c4410a857-plplFn_fw658')
    return {
      ...toRefs(state),
      advImage,
    }
  },
}
</script>

<style lang="scss">
.header-address {
  display: flex;
  padding: 0 10rpx 8rpx 10rpx;
}

.zone {
  padding: 0 20rpx;
}

.goodsTabs {
  border-radius: 10rpx 10rpx 0 0;
  width: 100vw;
  height: auto;
  min-height: 550rpx;
  background: #fff;
  margin-top: -20rpx;
  z-index: 2;
  position: absolute;
  overflow: hidden;
  padding-bottom: 180rpx;
}
</style>
