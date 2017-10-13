<template>
  <dashboard-content>
    <dashboard-sidebar></dashboard-sidebar>
    <div class="dashboard-content_main">
      <header class="dashboard-content_main-header">
        <h2 class="title">Events</h2>
        <div class="actions">
          <el-button 
            type="primary" 
            :plain="true"
            @click="handleNewEvent">
            <svg class="icon">
              <use xlink:href="/icons.svg#plus" />
            </svg>
            <span>Novo Evento</span>
          </el-button>
        </div>
      </header> 
      <el-table
        :data="events"
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
          label="Title">
          <template scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Body">
          <template scope="scope">
            <span>{{ scope.row.body }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Actions">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">Editar</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Remover</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </dashboard-content>
</template>

<script>
  import DashboardSidebar from '../../../components/Dashboard/DashboardSidebar'
  import DashboardContent from '../../../components/Dashboard/DashboardContent'
  import Events from '../../../../api/Events/events'
  export default {
    name: 'dashboard-events',
    data: () => ({
      events: []
    }),
    meteor: {
      subscribe: {
        'events': [],
      },
      events() {
        return Events.find({})
      },
    },
    methods: {
      handleEdit (index, row) {
        this.$router.push({
          name: 'dashboard-events-edit',
          params: { eventId: row._id }
        })
      },
      handleNewEvent () {
        this.$router.push({name: 'dashboard-events-new'})
      },
      async handleDelete (index, row) {
        try {
          await Meteor.callPromise('Events.methods.remove', {
            _id: row._id
          })
          this.$message({
            type: 'info',
            message: 'Evento removido!'
          })
        } catch (error) {
          this.$message({
            type: 'error',
            message: error.reason
          })
        }
      }
    },
    components: {
      DashboardSidebar,
      DashboardContent
    }
  }
</script>
