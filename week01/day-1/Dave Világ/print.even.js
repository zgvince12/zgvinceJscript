"use strict";

// Írj egy programot, ami kiírja az összes páros számot 0 és 500 között (mindkét szélsőértéket beleértve)
 let a = 0;
 while (a <= 500) {
    if (a % 2 === 0) {
        console.log(a)
    }
    a++
 }

 for (let i = 0; i <= 500; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
 }