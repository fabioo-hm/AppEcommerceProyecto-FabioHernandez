document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar");
    
    searchBar.addEventListener("keyup", () => {
        let filter = searchBar.value.toLowerCase();
        let products = document.querySelectorAll(".product");

        products.forEach(product => {
            let title = product.querySelector(".product-title").textContent.toLowerCase();
            if (title.includes(filter)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});

document.getElementById("payButton").addEventListener("click", function () {
    Swal.fire({
      title: "Confirm?",
      text: "Would you like to confirm your purchase?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, pay now!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Payment Complete!",
          text: "Thank you for your purchase.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
        setTimeout(() => {
          window.location.href = "checkout.html";
        }, 2000);
      }
    });
  });