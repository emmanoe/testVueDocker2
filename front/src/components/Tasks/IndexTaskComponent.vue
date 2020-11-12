<template>
  <div>
      <h1>Tasks</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Tasks</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="task in tasks" :key="task._id">
                  <td>{{ task.title }}</td>
                  <td>{{ task.description }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: task._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          tasks: []
        }
      },
      created() {
        let uri= '';
        if (process.env.VUE_APP_TASKADDRESS){
          uri = `http://${process.env.VUE_APP_TASKADDRESS}:5000/tasks`;
        }
        else{
          
          uri = `http://localhost:5000/tasks`;
        }
      this.axios.get(uri).then(response => {
        console.log(response.data);
        this.tasks = response.data;
      });
    }
  }
</script>