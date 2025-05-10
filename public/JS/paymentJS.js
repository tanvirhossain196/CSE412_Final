document.addEventListener("DOMContentLoaded", function () {
  // Update all form headers to use bKash logo instead of balance display
  updateFormHeaders();

  // Elements
  const merchantInputSection = document.getElementById("merchantInputSection");
  const amountInputSection = document.getElementById("amountInputSection");
  const pinSection = document.getElementById("pinSection");

  const merchantNextBtn = document.getElementById("merchantNextBtn");
  const backToMerchantBtn = document.getElementById("backToMerchantBtn");
  const backToAmountBtn = document.getElementById("backToAmountBtn");
  const clearSearchBtn = document.getElementById("clearSearch");

  const merchantInput = document.getElementById("merchant-number");
  const amountInput = document.getElementById("amount");
  const referenceInput = document.getElementById("reference");
  const merchantItems = document.querySelectorAll(".merchant-item");

  const paymentBtn = document.getElementById("payment-btn");
  const confirmPinBtn = document.getElementById("confirm-pin-btn");
  const pinDigits = document.querySelectorAll(".pin-digit");
  const selectedAmount = document.getElementById("selected-amount");

  // Form elements
  const merchantNumberForm = document.getElementById("merchantNumberForm");
  const amountForm = document.getElementById("amountForm");
  const pinForm = document.getElementById("pinForm");

  // Bootstrap modal
  const successModal = new bootstrap.Modal(
    document.getElementById("successModal")
  );

  // Variables
  let selectedMerchant = null;
  let currentAmount = 0;
  let currentReference = "";

  // Function to update all form headers to use bKash logo
  function updateFormHeaders() {
    const formHeaders = document.querySelectorAll(".form-header-gradient");

    formHeaders.forEach((header) => {
      const headerContent = header.querySelector(".header-content");

      if (headerContent && headerContent.querySelector(".header-logo")) {
        return;
      }

      const balanceContainer =
        headerContent?.querySelector(".balance-container");
      if (balanceContainer) {
        balanceContainer.remove();
      }

      const balanceHidden = headerContent?.querySelector("#balanceHidden");
      const balanceVisible = headerContent?.querySelector("#balanceVisible");
      if (balanceHidden) balanceHidden.remove();
      if (balanceVisible) balanceVisible.remove();

      const logoContainer = document.createElement("div");
      logoContainer.className = "header-logo";
      logoContainer.innerHTML =
        '<img src="images/bkashlogo.png" alt="বিকাশ লোগো" class="form-header-logo">';

      if (headerContent) {
        headerContent.appendChild(logoContainer);
      }
    });
  }

  // Add number formatting function
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Clear search button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", function () {
      merchantInput.value = "";
      merchantInput.focus();
    });
  }

  // Handle form submission with Enter key
  if (merchantNumberForm) {
    merchantNumberForm.addEventListener("submit", function (e) {
      e.preventDefault();
      merchantNextBtn.click();
    });

    // Enable Enter key submission for merchant number input
    merchantInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        merchantNextBtn.click();
      }
    });
  }

  if (amountForm) {
    amountForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!paymentBtn.disabled) {
        paymentBtn.click();
      }
    });

    // Enable Enter key submission for amount input
    amountInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        if (!paymentBtn.disabled) {
          paymentBtn.click();
        }
      }
    });
  }

  if (pinForm) {
    pinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!confirmPinBtn.disabled) {
        confirmPinBtn.click();
      }
    });
  }

  // Navigation between sections with smooth transition
  if (merchantNextBtn) {
    merchantNextBtn.addEventListener("click", function () {
      if (merchantInput.value.length >= 11 || selectedMerchant) {
        let merchantNumber = selectedMerchant
          ? selectedMerchant.number
          : merchantInput.value;
        let merchantName = selectedMerchant
          ? selectedMerchant.name
          : "মার্চেন্ট";

        document.getElementById("selectedMerchantName").textContent =
          merchantName;
        document.getElementById("selectedMerchantNumber").textContent =
          merchantNumber;
        document.getElementById("confirmMerchantName").textContent =
          merchantName;
        document.getElementById("confirmMerchantNumber").textContent =
          merchantNumber;

        merchantInputSection.style.opacity = "0";
        merchantInputSection.style.transform = "translateX(-20px)";

        setTimeout(() => {
          merchantInputSection.style.display = "none";

          amountInputSection.style.display = "block";
          amountInputSection.style.opacity = "0";
          amountInputSection.style.transform = "translateX(20px)";

          setTimeout(() => {
            amountInputSection.style.opacity = "1";
            amountInputSection.style.transform = "translateX(0)";
          }, 50);

          amountInput.focus();
        }, 200);
      } else {
        merchantInput.classList.add("shake-effect");
        setTimeout(() => {
          merchantInput.classList.remove("shake-effect");
        }, 600);

        const searchContainer = document.querySelector(".search-container");
        const validationMsg = document.createElement("div");
        validationMsg.className = "validation-message";
        validationMsg.textContent = "সঠিক মার্চেন্ট নম্বর দিন";
        validationMsg.style.color = "#e74c3c";
        validationMsg.style.fontSize = "12px";
        validationMsg.style.textAlign = "center";
        validationMsg.style.padding = "5px";

        const existingMsg = searchContainer.querySelector(
          ".validation-message"
        );
        if (existingMsg) {
          existingMsg.remove();
        }

        searchContainer.appendChild(validationMsg);

        setTimeout(() => {
          validationMsg.style.opacity = "0";
          setTimeout(() => {
            validationMsg.remove();
          }, 300);
        }, 3000);
      }
    });
  }

  if (backToMerchantBtn) {
    backToMerchantBtn.addEventListener("click", function () {
      amountInputSection.style.opacity = "0";
      amountInputSection.style.transform = "translateX(20px)";

      setTimeout(() => {
        amountInputSection.style.display = "none";

        merchantInputSection.style.display = "block";
        merchantInputSection.style.opacity = "0";
        merchantInputSection.style.transform = "translateX(-20px)";

        setTimeout(() => {
          merchantInputSection.style.opacity = "1";
          merchantInputSection.style.transform = "translateX(0)";
        }, 50);
      }, 200);
    });
  }

  // Navigation to PIN section
  if (paymentBtn) {
    paymentBtn.addEventListener("click", function () {
      amountInputSection.style.opacity = "0";
      amountInputSection.style.transform = "translateX(-20px)";

      setTimeout(() => {
        amountInputSection.style.display = "none";

        pinSection.style.display = "block";
        pinSection.style.opacity = "0";
        pinSection.style.transform = "translateX(20px)";

        selectedAmount.textContent = "৳" + formatNumber(currentAmount);

        setTimeout(() => {
          pinSection.style.opacity = "1";
          pinSection.style.transform = "translateX(0)";
          pinDigits[0].focus();
        }, 50);
      }, 200);
    });
  }

  if (backToAmountBtn) {
    backToAmountBtn.addEventListener("click", function () {
      pinSection.style.opacity = "0";
      pinSection.style.transform = "translateX(20px)";

      setTimeout(() => {
        pinSection.style.display = "none";

        amountInputSection.style.display = "block";
        amountInputSection.style.opacity = "0";
        amountInputSection.style.transform = "translateX(-20px)";

        setTimeout(() => {
          amountInputSection.style.opacity = "1";
          amountInputSection.style.transform = "translateX(0)";
        }, 50);
      }, 200);
    });
  }

  // Merchant selection
  merchantItems.forEach((merchant) => {
    merchant.addEventListener("click", function () {
      this.classList.add("selected-merchant");

      const name = this.dataset.merchantName;
      const number = this.dataset.merchantNumber;

      selectedMerchant = {
        name,
        number,
      };

      merchantInput.value = number;

      merchantItems.forEach((item) => {
        if (item !== this) {
          item.classList.remove("selected-merchant");
        }
      });

      setTimeout(() => {
        merchantNextBtn.click();
      }, 500);
    });
  });

  // Process amount change
  function updateAmount(amount) {
    currentAmount = amount;

    if (currentAmount >= 1 && currentAmount <= 50000) {
      paymentBtn.disabled = false;
    } else {
      paymentBtn.disabled = true;
    }
  }

  // Amount input change
  if (amountInput) {
    amountInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^\d]/g, "");

      let value = parseInt(this.value) || 0;

      if (value > 50000) {
        value = 50000;
        this.value = value;

        const amountCard = document.querySelector(".amount-entry-card");
        const maxNote = document.createElement("div");
        maxNote.className = "max-limit-note";
        maxNote.textContent = "সর্বোচ্চ ৫০,০০০ টাকা পেমেন্ট করা যাবে";
        maxNote.style.color = "#e74c3c";
        maxNote.style.fontSize = "12px";
        maxNote.style.textAlign = "center";
        maxNote.style.padding = "5px";
        maxNote.style.marginTop = "10px";

        const existingNote = amountCard.querySelector(".max-limit-note");
        if (existingNote) {
          existingNote.remove();
        }

        amountCard.appendChild(maxNote);

        setTimeout(() => {
          maxNote.style.opacity = "0";
          setTimeout(() => {
            maxNote.remove();
          }, 300);
        }, 3000);
      }

      updateAmount(value);
    });
  }

  // Reference input change
  if (referenceInput) {
    referenceInput.addEventListener("input", function () {
      currentReference = this.value;
    });
  }

  // Handle PIN input
  pinDigits.forEach((digit, index) => {
    digit.addEventListener("input", function () {
      if (this.value && index < pinDigits.length - 1) {
        pinDigits[index + 1].focus();
      }

      let allFilled = true;
      pinDigits.forEach((input) => {
        if (!input.value) allFilled = false;
      });

      confirmPinBtn.disabled = !allFilled;
    });

    digit.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && !this.value && index > 0) {
        pinDigits[index - 1].focus();
      }
    });

    // Enable Enter key submission for PIN inputs
    digit.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        if (!confirmPinBtn.disabled) {
          confirmPinBtn.click();
        }
      }
    });
  });

  // Handle confirm PIN button
  if (confirmPinBtn) {
    confirmPinBtn.addEventListener("click", function () {
      let enteredPin = "";
      pinDigits.forEach((digit) => {
        enteredPin += digit.value;
      });

      this.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> যাচাই করা হচ্ছে...';
      this.disabled = true;

      setTimeout(() => {
        showSuccessMessage();
      }, 1500);
    });
  }

  // Show success message using Bootstrap modal
  function showSuccessMessage() {
    const merchant = document.getElementById("confirmMerchantName").textContent;
    const amount = document.getElementById("selected-amount").textContent;
    const transactionId = "TXN" + Math.floor(Math.random() * 10000000);
    const currentDateTime = new Date().toLocaleString("bn-BD");

    // Update modal content
    document.getElementById("success-merchant").textContent = merchant;
    document.getElementById("success-amount").textContent = amount;
    document.getElementById("transaction-id").textContent = transactionId;
    document.getElementById("transaction-datetime").textContent =
      currentDateTime;
    document.getElementById("transaction-total").textContent = amount;

    // Handle reference display
    const referenceRow = document.getElementById("reference-row");
    const transactionReference = document.getElementById(
      "transaction-reference"
    );

    if (currentReference) {
      referenceRow.style.display = "flex";
      transactionReference.textContent = currentReference;
    } else {
      referenceRow.style.display = "none";
    }

    // Show the modal
    successModal.show();

    // Reset form when modal is closed
    document
      .getElementById("successModal")
      .addEventListener("hidden.bs.modal", function () {
        resetForm();
      });
  }

  // Reset form
  function resetForm() {
    merchantInput.value = "";
    amountInput.value = "";
    referenceInput.value = "";
    selectedMerchant = null;
    currentAmount = 0;
    currentReference = "";

    pinSection.style.display = "none";
    amountInputSection.style.display = "none";
    merchantInputSection.style.display = "block";
    merchantInputSection.style.opacity = "1";
    merchantInputSection.style.transform = "translateX(0)";

    paymentBtn.disabled = true;
    confirmPinBtn.disabled = true;
    confirmPinBtn.innerHTML = '<i class="fas fa-paper-plane"></i> কনফার্ম করুন';

    pinDigits.forEach((digit) => {
      digit.value = "";
    });

    merchantItems.forEach((item) => item.classList.remove("selected-merchant"));
  }
});
