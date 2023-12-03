<template >
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div class="bigTitle">媒体商城管理系统</div>
        <div class="smallTitle">
          致力于服务高质量的商城后台
        </div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h1 class="title01">欢迎回来</h1>
      <span><el-avatar :size="60" :src="testImage" class="lay"  /></span>
      <div class="title02">
        <span class="h-[1px] w-16 bg-gray-200 "></span>
        <span>账号密码登录</span>
        <span class="h-[1px] w-16 bg-gray-200"></span>
      </div>
      <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
        <el-form-item prop="username">
          <el-input
              :prefix-icon="User"
              v-model="form.username"
              placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              :prefix-icon="Lock"
              v-model="form.password"
              placeholder="请输入密码"
              show-password
              type="password"
          />
        </el-form-item>
        <el-form-item>
          <el-button
              round
              color="#626aef"
              class="w-[250px]"
              type="primary"
              @click="onSubmit"
          >登 录</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Lock, Search, User } from "@element-plus/icons-vue";
import testImage from "../assets/testImage.jpg"
// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
    {
      min: "3",
      max: "50",
      message: "用户名长度必须在3-50之间",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
    {
      min: "3",
      max: "50",
      message: "密码长度必须在3-50之间",
      trigger: "blur",
    },
  ],
});

const formRef = ref(null);

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }
    console.log("验证通过", valid);
  });
  console.log("submit!");
};
</script>
<style scoped lang="scss">
.lay{
  margin-top: 10px;
}
.login-container {
  height: 100%;
  width: 100%;
  border-radius: 50px;
display: flex;

  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 64%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6); /* Add this line for the shadow */

  @apply min-h-screen bg-blue-500 ;
  .left {
    @apply flex items-center   justify-center text-center;
    .bigTitle{
     @apply  justify-center font-bold text-5xl text-light-100 mb-4 ;
    }
    .smallTitle{
      @apply text-light-5000 font-bold
    }
  }
  .right {
    border-radius: 0 50px 50px 0;
    @apply bg-light-500 flex items-center justify-center flex-col;
    .title01 {
      @apply font-bold text-3xl text-gray-800;
    }
    .title02 {
      @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
    }
  }
}
</style>

