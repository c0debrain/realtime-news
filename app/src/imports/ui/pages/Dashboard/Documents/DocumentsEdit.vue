<template>
  <dashboard-content>
    <dashboard-sidebar></dashboard-sidebar>
    <div class="dashboard-content_main">
      <header class="dashboard-content_main-header is-back-button">
        <back-button></back-button>
        <h2 class="title">Documents Edit <small>- {{ editDocument.title }}</small></h2>
      </header> 
      <div class="dashboard-content_main-form">
        <el-card class="box-card">
          <el-form :model="editDocument" :rules="rules" ref="editDocument" class="form-model">
            <el-row :gutter="10">
              <el-col :lg="24">
                <el-form-item prop="title">
                  <el-input placeholder="Please input document title" size="large" v-model="editDocument.title" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-form-item prop="body">
                  <el-input placeholder="Please input document body" size="large" v-model="editDocument.body" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-button size="large" type="success" @click="handleSubmitForm('editDocument')" class="submit-button full-width">Save</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </div>
    </div>
  </dashboard-content>
</template>

<script>
  import DashboardSidebar from '../../../components/Dashboard/DashboardSidebar.vue'
  import DashboardContent from '../../../components/Dashboard/DashboardContent.vue'
  import BackButton from '../../../components/BackButton/BackButton.vue'
  import Documents from '../../../../api/Documents/documents'
  export default {
    name: 'dashboard-documents-edit',
    data: () => ({
      documents: [],
      users: [],
      editDocument: {
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
    async mounted () {
      this.$nextTick(() => {
        this.renderData()
      })
    },
    methods: {
      renderData () {
        this.editDocument.title = this.documents[0].title
        this.editDocument.body = this.documents[0].body
      },
      handleSubmitForm (formName) {
        this.$refs[formName].validate((valid) => {
          try {
            if (valid) {
              let dataForm = this.editDocument
              let document = this.documents[0]
              let user = this.users[0]
              Meteor.callPromise('Documents.methods.update', {
                _id: document._id,
                owner: user._id,
                title: dataForm.title,
                body: dataForm.body,
                updatedAt: new Date()
              })
              this.$message({
                type: 'info',
                message: `Document update with success!`
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
    meteor: {
      subscribe: {
        'documents': [],
      },
      users() {
        return Meteor.users.find({})
      },
      documents() {
        return Documents.find({
          _id: this.$route.params.documentId
        })
      },
    },
    components: {
      DashboardSidebar,
      DashboardContent,
      BackButton
    }
  }
</script>
