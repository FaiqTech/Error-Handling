//* 3. Parametrlər olaraq iki nömrəni qəbul edən və ikinci nömrə sıfır olduqda
//* xüsusi bir 'Səhv' atan bir JavaScript funksiyası yazın.

// function bolmeFunksiyasi(x, y) {
//   try {
//     if (y === 0) {
//       throw new Error("Bölen sıfır ola bilmez.");
//     }
//     return x / y;
//   } catch (error) {
//     return error.message;
//   }
// }

// console.log(bolmeFunksiyasi(15, 3)); // 5
// console.log(bolmeFunksiyasi(10, 0)); // Xəta baş verdi: Bölen sıfır ola bilmez.

//* 5. Bir sıra parametr olaraq götürən və array boş olduqda
//* xüsusi bir 'Səhv' atan JavaScript funksiyasını yazın.

// function arrayBosluqu(arr) {
//   if (arr.length === 0) {
//     throw new Error("Array boşdur!");
//   }
// }

// try {
//   const nums1 = ["a", "b", "c", "d"];
//   arrayBosluqu(nums1); // Doğru, boş olmayan array

//   const nums2 = [];
//   arrayBosluqu(nums2); // error atır
// } catch (error) {
//   console.log(error.message);
// }

//*8. Müxtəlif növ səhvləri ayrıca idarə etmək üçün çoxsaylı CATCH bloklarının
//* istifadəsini göstərən JavaScript proqramı yazın.

// function bolmeEmeliyyati(a, b) {
//   try {
// Əgər 'a' və 'b' ədəd deyil, və ya 'b' sıfıra bərabərdirsə, tip xətası TypeError yaradılır.
//     if (typeof a !== "number" || typeof b !== "number" || b === 0) {
//       throw new TypeError(
//         "Yanlış argumentlar. Ədəd olmalıdır və sıfıra bölünməməlidir."
//       );
//     }
// Əməliyyatda xəta yoxdursa, bölmə əməliyyatı aparılır.
//     const netice = a / b;

// Nəticə konsola yazdırılır.
//     console.log(netice);
//   } catch (error) {
// Əgər xəta baş veribsə, onu konsola yazdırıq.
//     console.log(error.message);
//   }
// }
// 'a' 30 və 'b' "2" olsa da, tip xətası baş verir və nəticə konsola yazdırılmır.
// bolmeEmeliyyati(30, "2"); // Xəta: Yanlış argumentlar. Ədəd olmalıdır və sıfıra bölünməməlidir.

// 'a' 30 və 'b' 10 olsa, əməliyyat uğurla aparılır və nəticə konsola yazdırılır.
// bolmeEmeliyyati(30, 10); // Nəticə: 3

// 'a' 30 və 'b' 0 olsa da, tip xətası baş verir və nəticə konsola yazdırılmır.
// bolmeEmeliyyati(30, 0); // Xəta: Yanlış argumentlar. Ədəd olmalıdır və sıfıra bölünməməlidir.
