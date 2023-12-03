<template>
  <el-descriptions title="个人信息显示" :column="3" border>
    <el-descriptions-item
        label="Username"
        label-align="right"
        align="center"
        label-class-name="my-label"
        class-name="my-content"
        width="150px"
    >浮世英寿</el-descriptions-item
    >
    <el-descriptions-item label="Telephone" label-align="right" align="center"
    >18100000000</el-descriptions-item
    >
    <el-descriptions-item label="Place" label-align="right" align="center"
    >ZhengZhou</el-descriptions-item
    >
    <el-descriptions-item label="Remarks" label-align="right" align="center">
      <el-tag size="small">Office</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address" label-align="right" align="center"
    >No.0002, DongFeng Avenue, JinShui District, ZhengZhou, HeNan
      Province</el-descriptions-item
    >
  </el-descriptions>
</template>
<style scoped>

:deep(.my-label) {
  background: var(--el-color-success-light-9) !important;
}
:deep(.my-content) {
  background: var(--el-color-danger-light-9);
}
</style>
