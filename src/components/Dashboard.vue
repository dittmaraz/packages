<template>
  <div>
    <b-container>
      <h4>Latest Packages</h4>
      <b-list-group>
        <b-list-group-item style="" v-for="pkg in packages" :key="pkg.id" class="flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"><router-link :to="{ name: 'view-package', params: { package_id: pkg.package_id}}">{{ pkg.packageName }}</router-link></h5>
             <small>Added: {{ pkg.dateAdded }}</small>
          </div>
          
            <router-link :to="{ name: 'edit-package', params: { package_id: pkg.package_id }}"><i class="fas fa-pen"></i></router-link>
            <i class="fas fa-minus-circle"></i>
          
          <div class="d-flex w-100 justify-content-end">
            <div v-for="tag in pkg.tags" :key="tag">
              <router-link :to="{ name: 'view-tag', params: { tag: tag }}">{{ tag }} 	&nbsp;</router-link>
            </div>
          </div>
          
        </b-list-group-item>
          
      </b-list-group>
     </b-container>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: "dashboard",
  data() {
    return {
      packages: []
    };
  },
  created() {
    db.collection('packages').get().then
    (querySnapshot => {
      querySnapshot.forEach(doc => {
          console.log(doc.data())
          const data = {
            'id': doc.id,
            'package_id': doc.data().package_id,
            'packageName': doc.data().packageName,
            'npmUrl': doc.data().npmUrl,
            'githubUrl': doc.data().githubUrl,
            'install': doc.data().install,
            'tags': doc.data().tags,
            'submittedBy': doc.data().submittedBy,
            'usage': doc.data().usage,
            'dateAdded': doc.data().dateAdded.toDate().toLocaleString()
          }
          this.packages.push(data)
      })
    })
  },
  methods: {

  }
};
</script>

<style scoped>

</style>
