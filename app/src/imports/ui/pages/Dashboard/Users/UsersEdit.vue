<template>
  <dashboard-content>
    <dashboard-sidebar></dashboard-sidebar>
    <div class="dashboard-content_main">
      <header class="dashboard-content_main-header is-back-button">
        <back-button></back-button>
        <h2 class="title">User Edit <small>- {{ editUser.firstName }} {{ editUser.lastName }}</small></h2>
      </header> 
      <div class="dashboard-content_main-form">
        <el-card class="box-card">
          <el-form :model="editUser" :rules="rules" ref="editUser" class="form-model">
            <el-row :gutter="10">
              <el-col :lg="12">
                <el-form-item prop="email">
                  <el-input placeholder="Your first email" size="large" v-model="editUser.email" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12">
                <el-form-item prop="firstName">
                  <el-input placeholder="Your first name" size="large" v-model="editUser.firstName" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="12">
                <el-form-item prop="lastName">
                  <el-input placeholder="Your last name" size="large" v-model="editUser.lastName" auto-complete="off"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="24">
                <el-button size="large" type="success" @click="handleSubmitForm('editUser')" class="submit-button full-width">Save</el-button>
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
    name: 'dashboard-users-edit',
    data: () => ({
      users: [],
      editUser: {
        firstName: '',
        lastName: '',
        email: '',
        verifyEmail: false
      },
      rules: {
        firstName: [
          { required: true, message: 'Please input first name', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Please input last name', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Please input last email', trigger: 'blur' },
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
        this.editUser.firstName = this.users[0].profile.firstName
        this.editUser.lastName = this.users[0].profile.lastName
        this.editUser.email = this.users[0].emails[0].address
        this.editUser.verifyEmail = this.users[0].emails[0].verified
      },
      handleSubmitForm (formName) {
        this.$refs[formName].validate((valid) => {
          try {
            if (valid) {
              let dataForm = this.editUser
              let user = this.users[0]
              Meteor.callPromise('Users.methods.update', {
                _id: user._id,
                services: {
                  password: user.services.password
                },
                profile: {
                  firstName: dataForm.firstName,
                  lastName: dataForm.lastName,
                  phone: user.profile.phone
                },
                emails: [{
                  address: dataForm.email,
                  verified: this.editUser.verifyEmail
                }],
                roles: [user.roles[0]],
                updatedAt: new Date()
              })
              this.$message({
                type: 'info',
                message: `User update with success!`
              })
              this.$refs[formName].resetFields()
              this.$router.push({ name: 'dashboard-users' })
            }
          } catch (error) {
            this.$message({
              type: 'error',
              message: error
            })
          }
        })
      }
    },
    meteor: {
      subscribe: {
        'users': [],
      },
      users() {
        return Meteor.users.find({
          _id: this.$route.params.userId
        });
      },
    },
    components: {
      DashboardSidebar,
      DashboardContent,
      BackButton
    }
  }
</script>
