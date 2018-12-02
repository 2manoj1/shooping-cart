function binPacking(weight, size, n) {
        
    var res = 0; 

// Create an array to store remaining space in bins 
// there can be at most n bins 
var bin_rem = []; 
var arr = [];


for (var i=0; i<n; i++) 
{ 
    // Find the first bin that can accommodate 
    // weight[i] 
    var j; 
    for (j=0; j< res; j++) 
    { 
        if (bin_rem[j] >= weight[i]) 
        { 
            bin_rem[j] = bin_rem[j] - weight[i]; 
             arr[j].push(weight[i]);
            break; 
        } 
    } 

    // If no bin could accommodate weight[i] 
    if (j==res) 
    { 

        bin_rem[res] = size - weight[i];
        arr[j] =[];
        arr[j].push(weight[i]);
     
     
        
        res++; 
       
    } 
    }
    console.log(res, arr)
    }
var n = 6;
    var a = [10, 100, 30, 20, 40, 200];
    var size = 250;
    var b= a.sort((m, n) => n - m);
   binPacking(b, size, n)