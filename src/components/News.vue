<template>
  <div style="padding: 10px">
    <el-row style="margin: 10px 0">
      <el-input
        v-model="search"
        placeholder="请输入关键字"
        style="width: 40%"
        clearable
      ></el-input>
      <el-button type="primary" style="margin-left: 5px" @click="load"
        >查询</el-button
      >
    </el-row>

    <el-table
      v-loading="loading"
      :data="tableData"
      border
      stripe
      style="width: 100%"
    >
      <!-- <el-table-column
          prop="id"
          label="ID"
          sortable
      > 
      </el-table-column>-->
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="time" label="时间"> </el-table-column>

      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            type="primary"
            plain
            round
            size="medium"
            @click="details(scope.row)"
            >先点击详情</el-button
          >
          <el-button type="text" size="medium" @click="dialogVisible = true" round
          
            >再点击打开</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页插件 -->
    <div style="margin: 10px 0">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>

    <el-dialog
      title="内容"
      :visible.sync="dialogVisible"
      width="30%"
      v-model="vis"
      :before-close="handleClose"
    >
      <div v-html="detail.content" style="min-height: 100px"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    
  </div>
</template>

<script>
import E from "wangeditor";
import request from "@/utils/request";

let editor;

export default {
  name: "News",
  components: {},
  data() {
    return {
      loading: true,
      form: {},
      dialogVisible: false,
      search: "",
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      vis: false,
      detail: {},
      dialogVisible: false,
    };
  },
  created() {
    this.load();
  },
  methods: {
    details(row) {
      this.detail = row;
      this.vis = true;
    },
    filesUploadSuccess(res) {
      console.log(res);
      this.form.cover = res.data;
    },
    load() {
      this.loading = true;
      request
        .get("/news", {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            search: this.search,
          },
        })
        .then((res) => {
          this.loading = false;
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
    add() {
      this.dialogVisible = true;
      this.form = {};

      this.$nextTick(() => {
        // 关联弹窗里面的div，new一个 editor对象
        if (!editor) {
          editor = new E("#div1");

          // 配置 server 接口地址
          editor.config.uploadImgServer =
            "http://" +
            window.server.filesUploadUrl +
            ":9090/files/editor/upload";
          editor.config.uploadFileName = "file"; // 设置上传参数名称
          editor.create();
        }

        editor.txt.html("");
      });
    },
    save() {
      this.form.content = editor.txt.html(); // 获取 编辑器里面的值，然后赋予到实体当中

      if (this.form.id) {
        // 更新
        request.put("/news", this.form).then((res) => {
          console.log(res);
          if (res.code === "0") {
            this.$message({
              type: "success",
              message: "更新成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }
          this.load(); // 刷新表格的数据
          this.dialogVisible = false; // 关闭弹窗
        });
      } else {
        // 新增
        let userStr = sessionStorage.getItem("user") || "{}";
        let user = JSON.parse(userStr);
        this.form.author = user.nickName;

        request.post("/news", this.form).then((res) => {
          console.log(res);
          if (res.code === "0") {
            this.$message({
              type: "success",
              message: "新增成功",
            });
          } else {
            this.$message({
              type: "error",
              message: res.msg,
            });
          }

          this.load(); // 刷新表格的数据
          this.dialogVisible = false; // 关闭弹窗
        });
      }
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row));
      this.dialogVisible = true;

      this.$nextTick(() => {
        // 关联弹窗里面的div，new一个 editor对象
        // 关联弹窗里面的div，new一个 editor对象
        if (!editor) {
          editor = new E("#div1");

          // 配置 server 接口地址
          editor.config.uploadImgServer =
            "http://ivolcano:9090/files/editor/upload";
          editor.config.uploadFileName = "file"; // 设置上传参数名称
          editor.create();
        }

        editor.txt.html(row.content);
      });
    },
    handleDelete(id) {
      console.log(id);
      request.delete("/news/" + id).then((res) => {
        if (res.code === "0") {
          this.$message({
            type: "success",
            message: "删除成功",
          });
        } else {
          this.$message({
            type: "error",
            message: res.msg,
          });
        }
        this.load(); // 删除之后重新加载表格的数据
      });
    },
    handleSizeChange(pageSize) {
      // 改变当前每页的个数触发
      this.pageSize = pageSize;
      this.load();
    },
    handleCurrentChange(pageNum) {
      // 改变当前页码触发
      this.currentPage = pageNum;
      this.load();
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
