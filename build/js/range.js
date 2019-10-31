var range = document.querySelector(".example__range");
var progress = range.querySelector(".example__progress");
var img_before = document.querySelector(".example__img--before");
var img_after = document.querySelector(".example__img--after");
var btn_before = range.querySelector(".example__btn--before");
var btn_after = range.querySelector(".example__btn--after");
var doc_width = document.body.clientWidth;
var tablet_width = 768;
var desktop_width = 1300;

if (doc_width < tablet_width) {
  window.addEventListener("resize", function () {
    progress.value = 50;
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 3) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 3) + "px)";
  });

  btn_before.addEventListener("click", function () {
    progress.value = 0;
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 3) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 3) + "px)";
  });

  btn_after.addEventListener("click", function () {
    progress.value = 100;
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 3) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 3) + "px)";
  });

  progress.addEventListener("input", function () {
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 3 + 1) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 3 + 1) + "px)";
  });

  function progress_ie() {
    var progress_ie11 = document.querySelector(".example__progress").value;
    img_before.style.clip = "rect(auto, " + ((100 - progress_ie11) * 3) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress_ie11) * 3) + "px)";
  }
};

if (doc_width >= tablet_width) {
  window.addEventListener("resize", function () {
    progress.value = 50;
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 6.9 - 7) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 6.9 - 7) + "px)";
  });

  btn_before.addEventListener("click", function () {
    progress.value = 0;
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 6.9 - 7) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 6.9 - 7) + "px)";
    console.log(progress.value);
    console.log(img_before.style.clip);
    console.log(img_after.style.clip);
  });

  btn_after.addEventListener("click", function () {
    progress.value = 100;
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 6.9 - 7) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 6.9 - 7) + "px)";
  });

  progress.addEventListener("input", function () {
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 6.9 - 7) + "px , auto, auto)"; /*для сдвинутой фотографии*/
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 6.9 - 7) + "px)"; /*для сдвинутой фотографии*/
  });

  function progress_ie() {
    var progress_ie11 = document.querySelector(".example__progress").value;
    img_before.style.clip = "rect(auto, " + ((100 - progress_ie11) * 6.9 - 7) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress_ie11) * 6.9 - 7) + "px)";
  }
};

if (doc_width >= desktop_width) {
  window.addEventListener("resize", function () {
    progress.value = 50;
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 6.9 + 20) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 6.9 + 20) + "px)";
  });

  btn_before.addEventListener("click", function () {
    progress.value = 0;
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 6.9 + 20) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 6.9 + 20) + "px)";
  });

  btn_after.addEventListener("click", function () {
    progress.value = 100;
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 6.9 + 20) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value) * 6.9 + 20) + "px)";
  });

  progress.addEventListener("input", function () {
    img_before.style.clip = "rect(auto, " + ((100 - progress.value) * 6.9 + 20) + "px , auto, auto)"; /*для сдвинутой фотографии*/
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress.value * 6.9) + 20) + "px)"; /*для сдвинутой фотографии*/
  });

  function progress_ie() {
    var progress_ie11 = document.querySelector(".example__progress").value;
    img_before.style.clip = "rect(auto, " + ((100 - progress_ie11) * 6.9 + 20) + "px , auto, auto)";
    img_after.style.clip = "rect(auto, auto, auto, " + ((100 - progress_ie11) * 6.9 + 20) + "px)";
  }
};

// console.log(progress.value);
// console.log(img_before.style.clip);
// console.log(img_after.style.clip);
