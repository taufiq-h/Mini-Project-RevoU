var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir
        var formData = new FormData(this);
        var result = "<h2>Form Submission Result</h2>" + "<br>" +
                     "<strong>Name:</strong> " + formData.get("name") + "<br>" +
                     "<strong>Date:</strong> " + formData.get("date") + "<br>" +
                     "<strong>Gender:</strong> " + formData.get("Gender") + "<br>" +
                     "<strong>Message:</strong> " + formData.get("message");
        document.getElementById("result").innerHTML = result;
    });
});

