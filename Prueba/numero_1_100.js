var multi3 = 0;
var multi5 = 0;
for (let i = 0; i <= 100; i++) {

    multi3 = i % 3;
    multi5 = i % 5;
    if(multi3 == 0){
        console.log(i + " mare");
    }
    if(multi5 == 0){
        console.log(i + " igua");
    }
    if (multi3 == 0 && multi5==0) {
        console.log(i + " mareigua");
    }
}



