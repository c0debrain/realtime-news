<template>
  <dashboard-content>
    <dashboard-sidebar></dashboard-sidebar>
    <div class="dashboard-content_main">
      <header class="dashboard-content_main-header">
      	<h2 class="title">Users</h2>
      </header>	
      <el-table
		    :data="users"
		    border
		    style="width: 100%"
		    class="dashboard-content_main-table">
		    <el-table-column
		      label="Created At"
		      width="220">
		      <template scope="scope">
		        <el-icon class="icon" name="time"></el-icon>
		        <span>{{ scope.row.createdAt | date("L, LT") }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="Name">
		      <template scope="scope">
		        <el-popover trigger="hover" placement="top">
		          <p>Email: {{ scope.row.emails[0].address }}</p>
		          <p>Verified: {{ scope.row.emails[0].verified }}</p>
		          <div slot="reference" class="name-wrapper">
		            <el-tag>{{ scope.row.profile.firstName }} {{ scope.row.profile.lastName }}</el-tag>
		          </div>
		        </el-popover>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="Phone"
		      width="220">
		      <template scope="scope">
		        <svg class="icon">
	            <use xlink:href="/icons.svg#mobile" />
	          </svg>
		        <span>{{ scope.row.profile.phone }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column
		      label="Actions">
		      <template scope="scope">
		        <el-button
		          size="small"
		          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
		        <el-button
		          size="small"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
		      </template>
		    </el-table-column>
		  </el-table>
    </div>
  </dashboard-content>
</template>

<script>
  import DashboardContent from '../../../components/Dashboard/DashboardContent.vue'
  import DashboardSidebar from '../../../components/Dashboard/DashboardSidebar.vue'
  export default {
  	name: 'dashboard-users',
  	data: () => ({
      users: []
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
    	 handleEdit (index, row) {
        this.$router.push({
          name: 'dashboard-users-edit',
          params: { userId: row._id }
        })
      },
      async handleDelete (index, row) {
        try {
          await Meteor.callPromise('Users.methods.remove', {
            _id: row._id
          })
          this.$message({
            type: 'info',
            message: 'User removed!'
          })
        } catch (error) {
          this.$message({
            type: 'error',
            message: error
          })
        }
      },
    },
    components: {
      DashboardContent,
      DashboardSidebar
    }
  }
</script>
