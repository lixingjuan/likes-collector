<template>
  <el-table :data="tableData">
    <el-table-column prop="title" label="标题" />
    <el-table-column prop="href" label="href" />
    <el-table-column prop="href" label="href">
      <template slot-scope="scope">
        <el-button @click="handleToDetail(scope.row.href)" type="text">
          查看
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    handleToDetail(href) {
      window.location.href = href
      // this.$router.push(`${href}`)
    }
  }
}
</script>

<style scoped lang="scss"></style>
