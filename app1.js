const logo1=document.querySelectorAll("#logo1 path");

for(let i=0;i<logo1.length;i++){
    console.log(`Letter ${i} of logo1 is ${logo1[i].getTotalLength()}`); 
}