<template>
  <div>
    <h1>Create An Issue !!!</h1>
    <form @submit.prevent="addIssue">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Issue Title:</label>
            <input type="text" class="form-control" v-model="issue.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Issue description:</label>
              <textarea class="form-control" v-model="issue.description" rows="5"></textarea>
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
          issue:{}
        }
    },
    methods: {
      addIssue(){
        let uri='';
        if (process.env.VUE_APP_ISSUEADDRESS){
          uri = `http://${process.env.VUE_APP_ISSUEADDRESS}:4000/issues/add`;
        }
        else{
          
          uri = `http://localhost:4000/issues/add`;
        }
        
        console.log(uri);
          this.axios.post(uri, this.issue).then(() => {
            this.$router.push({name: 'issues'});
          });
      }
    }
  }
</script>