
Vue.component('timeline',{

template:'<div class="timeline" >'+
'<br>'+
   '<div  v-if="windowEnable" class="windowBox"><div class="closeButton btn btn-dark btn-sm float-right">x</div>{{windowContent}}</div>'+
'<ul >'+
    '<li v-on:mouseleave="windowClose()" v-on:mouseover="windowOpen(index)" v-for="(items, index) in timeline"   class="timeitems" >'+
    '<hr><p ><strong>{{items.tittle}}</strong></p> '+
    '</li>'+
    
'</ul>'+

'<br>'+

'<br>'+

'</div>',
data: function(){
    return {
        windowEnable:false,
        timeline:[
            {
            tittle:'Title 1', 
            content:'Content One'
            },
            {
            tittle:'Title 2', 
            content:'Content Two'
            },
            {
                tittle:'Title 3', 
                content:'Content Three'
            },
            {
                tittle:'Title 4', 
                content:'Content Four'
            },
            {
                tittle:'Title 5', 
                content:'Content Five'
            },
            {
                tittle:'Title 6', 
                content:'Content Six'
            },
            {
                tittle:'Title 7', 
                content:'Content Seven'
            }
        ],
    }
},
methods:{
    windowOpen: function(index){
        this.windowEnable=true;
        this.windowContent=this.timeline[index].content;
        
        
    },
    windowClose: function(){
        this.windowEnable=false;
       
    }
}

})