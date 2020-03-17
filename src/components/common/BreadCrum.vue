<template>
  <div class="custom-bread-crumb">
    <Breadcrumb :style="{fontSize: `${fontSize}px`}">
      <BreadcrumbItem v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
        {{ showTitle(item) }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>
<script>
import { showTitle } from '@/util/tools'
export default {
  name: 'customBreadCrumb',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: Number,
      default: 15
    }
  },
  methods: {
    showTitle (item) {
      return showTitle(item, this)
    }
  }
}
</script>
<style lang="less" scoped>
.custom-bread-crumb {
  display: flex;
  height: 40px;
  align-items: center;
  padding-left: 20px;
  background-color: #f5f7f9;
}
</style>
