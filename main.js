var images = new Array(
  "./assets/bg/1.png",
  "./assets/bg/2.png",
  "./assets/bg/3.png"
);

var slider = setInterval(function () {
  document
    .getElementsByClassName("bg-img")[0]
    .setAttribute("style", 'background: url("' + images[0] + '")');
  images.splice(images.length, 0, images[0]);
  images.splice(0, 1);
}, 5000);

window.onload = function () {
  var image = document.getElementsByClassName("bg-img")[0];
  var img_array = [
    "./assets/bg/1.png",
    "./assets/bg/2.png",
    "./assets/bg/3.png",
  ];
  var index = 0;
  var interval = 4000;
  function slide() {
    image.src = img_array[index++ % img_array.length];
  }

  setInterval(slide, interval);
};

function CAPI(event, eventData) {
  let fbp = document.cookie
    .split(";")
    .filter((c) => c.includes("_fbp="))
    .map((c) => c.split("_fbp=")[1]);
  let fbc = document.cookie
    .split(";")
    .filter((c) => c.includes("_fbc="))
    .map((c) => c.split("_fbc=")[1]);
  fbp = (fbp.length && fbp[0]) || null;
  fbc = (fbc.length && fbc[0]) || null;

  if (!fbc && window.location.search.includes("fbclid=")) {
    fbc =
      "fb.1." + +new Date() + "." + window.location.search.split("fbclid=")[1];
  }

  const headers ={
    "Content-Type": "application/json",
    "terragon-access-token": "QYsew8aVfGB9",
  };

  const body = {
    event: event,
    event_data: eventData,
    event_name: 'buttonClicked',
    event_id: "signupbtn" + sessionStorage.getItem("timeStamp"),
    event_time: Math.round(new Date().getTime() / 1000),
    test_event_code: "TEST11620",
    fbp: fbp,
    fbclid: fbc,
    ua: navigator.userAgent,
    event_source_url: window.location.href,
    url: window.location.origin + window.location.pathname,
    action_source: "website",
  };
  

  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
  };
  fetch("https://adrl.in/conversions/terragonprime", options).then(res => res.json());
}

let el = document.getElementById("submit-btn");
el.addEventListener("click", () => {
  CAPI('buttonClicked', {promotion: 'sign-up button clicked'})
})

function onSubmit(event) {
  var form = document.getElementById("mG61Hd");
  let loader = document.getElementById("loader");
  let submitBtn = document.getElementById("submit-btn");
  console.log('submit2', submitBtn);
  submitBtn.style.display = "none";
  loader.style.display = "block";
  emailjs.sendForm("gmail", "terragon_prime_form", form).then(
    () => {
      setTimeout(() => {
        form.reset();
        $("#successAlert").show("fade");
        submitBtn.style.display = "block";
        loader.style.display = "none";
        window.open("https://www.terragongroup.com", "_blank");
      }, 1500);
    },
    (error) => {
      submitBtn.style.display = "block";
      loader.style.display = "none";
      console.log("FAILED...", error);
    }
  );
}
 l,zx




z 