<template>
  <div class="full-screen">
    <el-container class="full-height" >
      <el-header class="el-header" >
        <!-- Header content goes here -->
        <testpage></testpage>
      </el-header>
      <el-container>
        <el-aside width="200px" class="el-aside">
          <!-- Aside content goes here -->
          <side></side>
        </el-aside>
        <el-main class="el-main" >
          <!-- Main content goes here -->
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

import { computed, ref } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import en from 'element-plus/dist/locale/en.mjs';
import side from '../views/side.vue'
import Testpage from "./head.vue";
import Homepage from "./workers/homepage.vue";
import Calendar from "./workers/calendar.vue";
const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en));
</script>

<style scoped lang="scss">
.full-screen {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  flex: auto;

}

.full-height {
  height: 100%;
  width: 100%;
}

html,
body {
  padding: 0;
  height: 100%;
  width: 100%;
  flex: fit-content;
}

.el-header, {
  background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
}

.el-main {
  padding: 0;
}

.el-aside {

  background-image: linear-gradient(to top, #cfd9df 50%, #e2ebf0 100%);
}

</style>
<script>
export default {
  data(){
return{

}
  },methods: {

  }
}
</script>
