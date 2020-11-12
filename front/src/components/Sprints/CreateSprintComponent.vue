<template>
  <div>
    <h1>Sélectionner la date:</h1>
    <form @submit.prevent="addSprint">
      <DatePicker @values="viewUpdate" />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
    import DatePicker from "../Shared/DatePicker";
    export default {
      components : {
        DatePicker,
      }, 
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