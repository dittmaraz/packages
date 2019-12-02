<template>
  <div id= "view-package">
    <b-container>
      <h3>View Package</h3>

    </b-container>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'view-package',
  data() {
    return {
      package_id: null,
      dateAdded: null,
      description: null,
      githubUrl: null,
      install: null,
      npmUrl: null,
      packageName: null,
      tags: null,
      usage: null,
      submittedBy: null
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('packages').where('package_id','==', to.params.package_id).get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.package_id = doc.data().package_id,
          vm.dateAdded = doc.data().dateAdded,
          vm.description = doc.data().description,
          vm.githubUrl = doc.data().githubUrl,
          vm.install = doc.data().install,
          vm.npmUrl = doc.data().npmUrl,
          vm.packageName = doc.data().packageName,
          vm.tags = doc.data().tags,
          vm.usage = doc.data().usage,
          vm.submittedBy = doc.data().submittedBy
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      db.collection('packages').where('package_id'. '==', this.$route.params.package_id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.package_id = doc.data().package_id,
          this.githubUrl = doc.data().githubUrl,
          this.description = doc.data().description,
          this.npmUrl = doc.data().npmUrl,
          this.install = doc.data().install,
          this.packageName = doc.data().packageName,
          this.tags = doc.data().tags,
          this.usage = doc.data().usage,
          this.dateAdded = doc.data().dateAdded,
          this.submittedBy = doc.data().submittedBy
        })
      })
    }
  }
}
</script>

<style>

</style>
