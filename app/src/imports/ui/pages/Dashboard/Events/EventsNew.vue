<template>
  <dashboard-content>
    <dashboard-sidebar></dashboard-sidebar>
    <div class="dashboard-content_main">
      <header class="dashboard-content_main-header is-back-button">
        <back-button></back-button>
        <h2 class="title">Novo Evento <small>- {{ newEvent.title }}</small></h2>
      </header> 
      <div class="dashboard-content_main-form">
        <el-card class="box-card">
          <el-form :model="newEvent" :rules="rules" ref="newEvent" class="form-model">
            <el-row :gutter="10">
              <el-col :lg="24">
                <el-form-item prop="title">
                  <el-input placeholder="Por favor insira um título" size="large" v-model="newEvent.title" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-form-item prop="body">
                  <el-input placeholder="Por favor insira uma descrição" size="large" v-model="newEvent.body" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-button size="large" type="success" @click="handleSubmitForm('newEvent')" class="submit-button full-width">Confirmar</el-button>
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
    name: 'dashboard-events-new',
    data: () => ({
      users: [],
      newEvent: {
        title: '',
        body: ''
      },
      rules: {
        title: [
          { required: true, message: 'Por favor insira um título', trigger: 'blur' },
        ],
        body: [
          { required: true, message: 'Por favor insira uma descrição', trigger: 'blur' },
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
              let dataForm = this.newEvent
              let user = this.users[0]
              Meteor.callPromise('Events.methods.insert', {
                createdAt: new Date(),
                owner: user._id,
                title: dataForm.title,
                body: dataForm.body,
              })
              this.$message({
                type: 'info',
                message: `Evento criado com sucesso!`
              })
              this.$refs[formName].resetFields()
              this.$router.push({ name: 'dashboard-events' })
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
