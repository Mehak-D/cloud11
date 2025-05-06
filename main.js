var typed=new typed(".text",{
    String:["SOFTWARE ENGINEER" , "DATA SCIENTIST","YOTUBER","AI ENGINEER"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
}
);
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form action
      alert("Form submitted successfully!");
      form.reset(); // Optional: reset form fields
    });
  });
  
