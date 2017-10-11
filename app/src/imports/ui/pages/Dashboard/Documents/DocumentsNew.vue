<template>
  <dashboard-content>
    <dashboard-sidebar></dashboard-sidebar>
    <div class="dashboard-content_main">
      <header class="dashboard-content_main-header is-back-button">
        <back-button></back-button>
        <h2 class="title">Documents Edit <small>- {{ newDocument.title }}</small></h2>
      </header> 
      <div class="dashboard-content_main-form">
        <el-card class="box-card">
          <el-form :model="newDocument" :rules="rules" ref="newDocument" class="form-model">
            <el-row :gutter="10">
              <el-col :lg="24">
                <el-form-item prop="title">
                  <el-input placeholder="Please input document title" size="large" v-model="newDocument.title" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-form-item prop="body">
                  <el-input placeholder="Please input document body" size="large" v-model="newDocument.body" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-button size="large" type="success" @click="handleSubmitForm('newDocument')" class="submit-button full-width">Save</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </div>
    </div>
  </dashboard-content>
</template>

<script>
  import DashboardSidebar from '../../../components/Dashboard/DashboardSidebar.vue';
  import DashboardContent from '../../../components/Dashboard/DashboardContent.vue';
  import BackButton from '../../../components/BackButton/BackButton.vue';
  export default {
    name: 'dashboard-documents-new',
    data: () => ({
      users: [],
      newDocument: {
        title: '',
        body: ''
      },
      rules: {
        title: [
          { required: true, message: 'Please input title', trigger: 'blur' },
        ],
        body: [
          { required: true, message: 'Please input body text', trigger: 'blur' },
        ]
      },
    }),
    meteor: {
      subscribe: {
        'users': [],
      },
      users() {
        return Meteor.users.find({})
      },
    },
    methods: {
      handleSubmitForm (formName) {
        this.$refs[formName].validate((valid) => {
          try {
            if (valid) {
              let dataForm = this.newDocument
              let user = this.users[0]
              Meteor.callPromise('Documents.methods.insert', {
                createdAt: new Date(),
                owner: user._id,
                title: dataForm.title,
                body: dataForm.body,
              })
              this.$message({
                type: 'info',
                message: `Document created with success!`
              })
              this.$refs[formName].resetFields()
              this.$router.push({ name: 'dashboard-documents' })
            }
          } catch (error) {
            this.$message({
              type: 'error',
              message: error.reason
            })
          }
        })
      }
    },
    components: {
      DashboardSidebar,
      DashboardContent,
      BackButton
    }
  }
</script>
