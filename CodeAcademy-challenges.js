/* ===*** Print Even Numbers 0-10 */

// let i = 0;
// for (i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// };

/* ===*** Generate Multiplication Table */
// store ceiling number to multiply by (plus one)
let n = 13;
// declare variable to hold and log value as for loops iterate 
let product = "•  ";
// external loop 
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {
            
            if (i == 0 && j > 0) {
            product += '[' + j + ']';
            }
            else if (j == 0 && i > 0) {
           product += '[' + i + '] ';
            }
           else if (i > 0 && j > 0) {
            product += (i*j) + ' ';
           }
        }
        product +=  "\n"    
    }

    console.log(product);
