<template>
  <el-row>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- <part-table :tableData="tableData" label="简书" name="first" /> -->
      <el-tab-pane label="简书" name="first">
        <part-table :tableData="tableData" />
      </el-tab-pane>

      <el-tab-pane label="掘金" name="fourth">
        <part-table :tableData="tableData" />
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
import axios from 'axios'
import PartTable from './table.part.vue'

export default {
  name: '',
  components: {
    PartTable
  },
  props: {},
  data() {
    return {
      tableData: [],
      activeName: 'first'
    }
  },
  computed: {},
  watch: {},
  created() {
    this.queryData()
  },
  methods: {
    async queryData() {
      try {
        const res = await axios.get('http://localhost:10000/jianshu')
        this.tableData = res.data
      } catch (error) {
        this.$message.error(`${error}`)
      }
    },

    handleClick() {}
  }
}
</script>

<style scoped lang="scss"></style>
