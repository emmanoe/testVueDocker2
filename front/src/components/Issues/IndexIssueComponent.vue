<template>
  <div>
      <h1>Issues</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Issue</router-link>
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
                <tr v-for="issue in issues" :key="issue._id">
                  <td>{{ issue.title }}</td>
                  <td>{{ issue.description }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: issue._id }}" class="btn btn-primary">Edit</router-link></td>
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
          issues: []
        }
      },
      created() {
        let uri= '';
        if (process.env.VUE_APP_ISSUEADDRESS){
          uri = `http://${process.env.VUE_APP_ISSUEADDRESS}:4000/issues`;
        }
        else{
          
          uri = `http://localhost:4000/issues`;
        }
      this.axios.get(uri).then(response => {
        this.issues = response.data;
      });
    }
  }
</script>