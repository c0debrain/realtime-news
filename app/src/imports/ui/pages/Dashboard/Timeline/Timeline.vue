<template>
  <dashboard-content>
    <dashboard-sidebar></dashboard-sidebar>
    <div class="dashboard-content_main">
      Timeline Content 🚀
    </div>
  </dashboard-content>
</template>

<script>
  import DashboardSidebar from '../../../components/Dashboard/DashboardSidebar'
  import DashboardContent from '../../../components/Dashboard/DashboardContent'
  export default {
  	name: 'dashboard-timeline',
    components: {
      DashboardSidebar,
      DashboardContent
    }
  }
</script>
