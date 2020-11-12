<template>
  <div>
    <h1>Create A Task</h1>
    <form @submit.prevent="addTask">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Task Title:</label>
            <input type="text" class="form-control" v-model="task.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Task description:</label>
              <textarea class="form-control" v-model="task.description" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          task:{}
        }
    },
    methods: {
      addTask(){
        let uri ='';
        if (process.env.VUE_APP_TASKADDRESS){
          uri = `http://${process.env.VUE_APP_TASKADDRESS}:5000/tasks/add`;
        }
        else{
          
          uri = `http://localhost:5000/tasks/add`;
        }
          this.axios.post(uri, this.task).then(() => {
            this.$router.push({name: 'tasks'});
          });
      }
    }
  }
</script>