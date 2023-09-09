let size = 86;
let number_col = 7;
let x = 0;
let y = 0;
let total_image = 40;
let percent = 100 / total_image;
for(let i = 1; i <= total_image; i++){
    let row = Math.floor((i - 1) / number_col);
    
    if(row != y){
        x = 0;
        y = row;
    }
    console.log(`
        ${percent * (i - 1)}% {
            background-position: -${x * size}px -${y * size}px
        }
    `)
    
    x++;
}