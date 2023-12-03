<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="depotName" width="120" />
    <el-table-column prop="city" label="City" width="120" />
    <el-table-column prop="address" label="AddressComing" width="400" />
    <el-table-column prop="zip" label="goods serial" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope.$index)"
        >
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem"
  >Add Item</el-button
  >
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'

const now = new Date()

const tableData = ref([
  {
    date: '2024-05-01',
    name: '丁 真',
    state: 'California',
    city: 'Los Angeles',
    address: 'Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2023-05-02',
    name: '五条 吾',
    state: 'California',
    city: 'Los Angeles',
    address: 'Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2023-12-01',
    name: '原神 玩家',
    state: 'California',
    city: 'Los Angeles',
    address: 'Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Kobe',
    state: 'California',
    city: 'Los Angeles',
    address: 'Grove St, Los Angeles',
    zip: 'CA 90036',
  })
}
</script>
