<script setup>
import home from './workers/homepage.vue'
import testImage from '../assets/testImage.jpg'
import login from '../views/login.vue'

</script>

<template>
  <div >
    <el-main style="   ">
  <el-page-header :icon="null">
    <template  #content >
      <div class="flex items-bottom">
        <el-avatar
            :size="32"
            class="mr-3"
            :src= testImage
        />
        <span class="text-large font-600 mr-3">  </span>
        <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
          丁真 珍珠
        </span>
        <el-tag>管理员</el-tag>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <el-button>
          <router-link to="/login">切换账号</router-link>
        </el-button>
        <el-button type="primary" class="ml-2">登出</el-button>
      </div>
    </template>
  </el-page-header>
    </el-main>
  </div>
</template>

<style scoped>
.restart{

}
</style>