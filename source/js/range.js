var range = document.querySelector(".example__range");
var progress = document.querySelector(".example__progress");
// var progress_ie11 = document.querySelector(".example__progress");
var img_before = document.querySelector(".example__img--before");
var img_after = document.querySelector(".example__img--after");
var docWidth = document.body.clientWidth;
var tabletWidth = 768;

// progress.addEventListener("input", function () {
//   img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 3) + "px , auto, auto)";
//   img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 3) + "px)";
//   console.log(docWidth);
// //   // img_before.style.width = (100 - progress.value) + "%";
// //   console.log(progress.value);
// //   // console.log(img_before.style.clip);
// //   // console.log(img_after.style.clip);
// });


if (docWidth >= tabletWidth) {
  progress.addEventListener("input", function () {
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 6.9) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 6.9) + "px)";
    console.log(progress.value);
    console.log(img_before.style.clip);
    console.log(img_after.style.clip);
  });
};

// function progress_ie() {
//   var progress_ie11 = document.querySelector(".example__progress").value;
//   img_before.style.clip = "rect(auto, " + ((100 - progress_ie11) * 3) + "px , auto, auto)";
//   img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress_ie11) * 3) + "px)";
// }

// progress.addEventListener("input", function () {
//   img_before.style.width = (100 - progress.value) + "%";
//   img_after.style.width = progress.value + "%";
// });



//   if (progress) {
//     var btnBefore = progress.querySelector(".demo__progress-button--before");
//     var btnAfter = progress.querySelector(".demo__progress-button--after");

//     btnBefore.addEventListener("click", function () {
//       if (progress.classList.contains("demo__progress--after")) {
//         progress.classList.remove("demo__progress--after");
//       }
//     })

//     btnAfter.addEventListener("click", function () {
//       if (!progress.classList.contains("demo__progress--after")) {
//         progress.classList.add("demo__progress--after");
//       }
//     })

//     if (docWidth >= tabletWidth) {
//       var imgBefore = progress.querySelector(".demo__illustration--before");
//       var imgAfter = progress.querySelector(".demo__illustration--after");
//       var scale = progress.querySelector(".demo__progress-bar");
//       var range = scale.querySelector(".demo__range");

//       range.addEventListener("input", function() {
//         imgBefore.style.width = (100 - range.value) + "%";
//         imgAfter.style.width = range.value + "%";
//       })

//       btnBefore.addEventListener("click", function () {
//         imgBefore.style.width = "100%";
//         imgAfter.style.width = "0%";
//         range.value = 0;
//       })

//       btnAfter.addEventListener("click", function () {
//         imgBefore.style.width = "0%";
//         imgAfter.style.width = "100%";
//         range.value = 100;
//       })
//     }
//   }

// })();
