<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="day" label="Day"></el-table-column>
      <el-table-column prop="morning" label="Morning">
        <template #slot-scope="scope">
          <div class="time-cell">
            {{ scope.row.morningPerson }}
            <el-input v-model="scope.row.morning" placeholder="Insert time"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="afternoon" label="Afternoon">
        <template #slot-scope="scope">
          <div class="time-cell">
            {{ scope.row.afternoonPerson }}
            <el-input v-model="scope.row.afternoon" placeholder="Insert time"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="evening" label="Evening">
        <template #slot-scope="scope">
          <div class="time-cell">
            {{ scope.row.eveningPerson }}
            <el-input v-model="scope.row.evening" placeholder="Insert time"></el-input>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { day: 'Monday', morningPerson: 'John', afternoonPerson: 'Alice', eveningPerson: 'Bob', morning: '9:00 - 12:00', afternoon: '13:00 - 17:00', evening: '18:00 - 21:00' },
        { day: 'Tuesday', morningPerson: '', afternoonPerson: '', eveningPerson: '', morning: '', afternoon: '', evening: '' },
        { day: 'Wednesday', morningPerson: '', afternoonPerson: '', eveningPerson: '', morning: '', afternoon: '', evening: '' },
        { day: 'Thursday', morningPerson: '', afternoonPerson: '', eveningPerson: '', morning: '', afternoon: '', evening: '' },
        { day: 'Friday', morningPerson: '', afternoonPerson: '', eveningPerson: '', morning: '', afternoon: '', evening: '' },
        { day: 'Saturday', morningPerson: 'Eva', afternoonPerson: 'Charlie', eveningPerson: 'David', morning: '10:00 - 12:00', afternoon: '14:00 - 18:00', evening: '19:00 - 22:00' },
        { day: 'Sunday', morningPerson: '', afternoonPerson: '', eveningPerson: '', morning: '', afternoon: '', evening: '' },
      ],
    };
  },
};
</script>

<style scoped>
.time-cell {
  border: 1px solid #e0e0e0;
  padding: 5px;
  text-align: center;
}

.el-table th, .el-table td {
  border: 1px solid #e0e0e0;
}

.el-table th {
  background-color: #f5f5f5;
}
</style>
