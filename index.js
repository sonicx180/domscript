var $ = (tag,id,tclass,all) => {
  if(id == true) {
    document.getElementById(tag);
    
  }
  if (tclass == true) {
    document.getElementsByClassName(tag);
  }
  if(all == true) {
    document.querySelectorAll(tag);
    
  }
  
}
