<template>
  <dashboard-content>
    <dashboard-sidebar></dashboard-sidebar>
    <div class="dashboard-content_main">
      <header class="dashboard-content_main-header is-back-button">
        <back-button></back-button>
        <h2 class="title">Editar Evento <small>- {{ editEvent.title }}</small></h2>
      </header> 
      <div class="dashboard-content_main-form">
        <el-card class="box-card">
          <el-form :model="editEvent" :rules="rules" ref="editEvent" class="form-model">
            <el-row :gutter="10">
              <el-col :lg="24">
                <el-form-item prop="title">
                  <el-input placeholder="Por favor insira um título" size="large" v-model="editEvent.title" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-form-item prop="body">
                  <el-input placeholder="Por favor insira uma descrição" size="large" v-model="editEvent.body" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-button size="large" type="success" @click="handleSubmitForm('editEvent')" class="submit-button full-width">Salvar</el-button>
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
  import Events from '../../../../api/Events/events'
  export default {
    name: 'dashboard-events-edit',
    data: () => ({
      events: [],
      users: [],
      editEvent: {
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
    async mounted () {
      this.$nextTick(() => {
        this.renderData()
      })
    },
    methods: {
      renderData () {
        this.editEvent.title = this.events[0].title
        this.editEvent.body = this.events[0].body
      },
      handleSubmitForm (formName) {
        this.$refs[formName].validate((valid) => {
          try {
            if (valid) {
              let dataForm = this.editEvent
              let event = this.events[0]
              let user = this.users[0]
              Meteor.callPromise('Events.methods.update', {
                _id: event._id,
                owner: user._id,
                title: dataForm.title,
                body: dataForm.body,
                updatedAt: new Date()
              })
              this.$message({
                type: 'info',
                message: `Evento atualizado!`
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
    meteor: {
      subscribe: {
        'events': [],
      },
      users() {
        return Meteor.users.find({})
      },
      events() {
        return Events.find({
          _id: this.$route.params.eventId
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
