class Post{
  constructor(title,link,author,img){
    this.title=title;
    this.link=link;
    this.author=author;
    this.img=img;
  }
}
const app = new Vue({
  el:'#app',
  data:{
    keyword: '',
    postList: [
      new Post(
        'Grundfos Alpha 2', 
        'https://Grundfos.com', 
        'Grundfos', 
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgtLDUF4SGeokDomHrJxdH_W38WZfaqedW-o_454psMTsyh_OjH1G0g5CHYehSWMUNkX5x7vUI&usqp=CA'
      ),
      new Post(
        'Alpha 2- 25-60', 
        'https://Grundfos.com', 
        'Grundfos',
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRBgIpZtbNocRtSeUrCiM3TpPijNtxZFtfGNAOKazJpeOIuilA&usqp=CAc'
      ),
      new Post(
        'CC9-M1-10m', 
        'https://Grundfos.com', 
        'Grundfos', 
        'data:image/jpeg;base64,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'
      ),
      new Post(
        'Alpha 25-40', 
        'http://Grundfos.com', 
        'Grundfos',
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ30bAzY1BBhzV1_qc3hftbCN5ZLIoTmuUCokkMLtBUOwmYC0RPJj-dOiaduZQ0I3SPH3DaSjvb&usqp=CAc'
      ),
      new Post(
        'Centrifugal', 
        'https://Grundfos.com', 
        'Grundfos', 
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9swXtAoQ03ZsOoMo0dRO6EYltPCILmWXtDYB97lRF9L2vLM6i033EBbOTXnJNbqx0dP1-GUVY3Q&usqp=CAc'
      ),
      new Post(
        'AP35B.50', 
        'http://Grundfos.com', 
        'Grundfos',
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmEYwOp7QZC1DNal4WI00isdtWdnAbccoLHCYbkHUQXIaYti_O&usqp=CAc'
      ),
      new Post(
        'WaterCare', 
        'https://Grundfos.com', 
        'Grundfos',
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScGrHTwshbqjAbGr7KpgqvKsM2qnYZajaq1YX7Ma84n6FpCFqp&usqp=CAc'
      ),
      new Post(
        'Alpha2', 
        'https://Grundfos.com/', 
        'Grundfos', 
        'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgBCCEHhxTcSKOENwCin585p6bfc_bWIIvKLze6h1odMp8P9j5kfdHDwdFtYtNf8xftIcXJafJ&usqp=CAc'
      ),
      new Post(
        'Alpha2 25-40', 
        'http://Grundfos.com/', 
        'Grundfos',
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ30bAzY1BBhzV1_qc3hftbCN5ZLIoTmuUCokkMLtBUOwmYC0RPJj-dOiaduZQ0I3SPH3DaSjvb&usqp=C'
      )
],
    onOff:true
  },    
  methods:{
    toggleOnOff(){
      this.onOff = !this.onOff;
    }
  },
    computed:{
      filteredList(){
        return this.postList.filter((post) =>{
          return post.title.toLowerCase().includes(this.keyword.toLowerCase());
        });
      }
    }  
});