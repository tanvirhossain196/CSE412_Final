document.addEventListener("DOMContentLoaded", function () {
  // Update all form headers to use bKash logo instead of balance display
  updateFormHeaders();

  // Elements
  const numberInputSection = document.getElementById("numberInputSection");
  const amountInputSection = document.getElementById("amountInputSection");
  const pinSection = document.getElementById("pinSection");

  const numberNextBtn = document.getElementById("numberNextBtn");
  const backToNumberBtn = document.getElementById("backToNumberBtn");
  const backToAmountBtn = document.getElementById("backToAmountBtn");
  const clearSearchBtn = document.getElementById("clearSearch");

  const phoneInput = document.getElementById("phone-number");
  const amountInput = document.getElementById("amount");
  const quickAmountBtns = document.querySelectorAll(".quick-amount-btn");
  const contactItems = document.querySelectorAll(".contact-item");
  const operatorItems = document.querySelectorAll(".operator-item");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const amountTabBtns = document.querySelectorAll("[data-amount-tab]");
  const packageItems = document.querySelectorAll(".package-item");

  const rechargeBtn = document.getElementById("recharge-btn");
  const packageBtn = document.getElementById("package-btn");
  const confirmPinBtn = document.getElementById("confirm-pin-btn");
  const pinDigits = document.querySelectorAll(".pin-digit");
  const selectedAmount = document.getElementById("selected-amount");

  // Form elements
  const phoneNumberForm = document.getElementById("phoneNumberForm");
  const amountForm = document.getElementById("amountForm");
  const pinForm = document.getElementById("pinForm");

  // Bootstrap modal
  const successModal = new bootstrap.Modal(
    document.getElementById("successModal")
  );

  // Variables
  let selectedContact = null;
  let selectedOperator = "gp";
  let currentAmount = 0;
  let selectedPackage = null;

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
      phoneInput.value = "";
      phoneInput.focus();
    });
  }

  // Tab switching
  if (tabBtns.length) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const tabGroup = this.parentElement.querySelectorAll(".tab-btn");
        tabGroup.forEach((tab) => tab.classList.remove("active"));
        this.classList.add("active");

        const tabId = this.dataset.tab;
        if (tabId) {
          const tabContents = document.querySelectorAll(".tab-content");
          tabContents.forEach((content) => {
            content.classList.remove("active");
          });
          const activeContent = document.getElementById(tabId + "Contacts");
          if (activeContent) {
            activeContent.classList.add("active");
          }
        }
      });
    });
  }

  // Amount Tab switching
  if (amountTabBtns.length) {
    amountTabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const tabGroup = this.parentElement.querySelectorAll(".tab-btn");
        tabGroup.forEach((tab) => tab.classList.remove("active"));
        this.classList.add("active");

        const tabId = this.dataset.amountTab;
        if (tabId) {
          const tabContents = document.querySelectorAll(".tab-content");
          tabContents.forEach((content) => {
            content.classList.remove("active");
          });
          const activeContent = document.getElementById(tabId + "TabContent");
          if (activeContent) {
            activeContent.classList.add("active");
          }
        }
      });
    });
  }

  // Handle form submission with Enter key
  if (phoneNumberForm) {
    phoneNumberForm.addEventListener("submit", function (e) {
      e.preventDefault();
      numberNextBtn.click();
    });

    // Enable Enter key submission for phone number input
    phoneInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        numberNextBtn.click();
      }
    });
  }

  if (amountForm) {
    amountForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!rechargeBtn.disabled) {
        rechargeBtn.click();
      }
    });

    // Enable Enter key submission for amount input
    amountInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        if (!rechargeBtn.disabled) {
          rechargeBtn.click();
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
  if (numberNextBtn) {
    numberNextBtn.addEventListener("click", function () {
      if (phoneInput.value.length >= 11 || selectedContact) {
        numberInputSection.style.opacity = "0";
        numberInputSection.style.transform = "translateX(-20px)";

        setTimeout(() => {
          numberInputSection.style.display = "none";

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
        phoneInput.classList.add("shake-effect");
        setTimeout(() => {
          phoneInput.classList.remove("shake-effect");
        }, 600);

        const searchContainer = document.querySelector(".search-container");
        const validationMsg = document.createElement("div");
        validationMsg.className = "validation-message";
        validationMsg.textContent = "সঠিক মোবাইল নম্বর দিন";
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

  if (backToNumberBtn) {
    backToNumberBtn.addEventListener("click", function () {
      amountInputSection.style.opacity = "0";
      amountInputSection.style.transform = "translateX(20px)";

      setTimeout(() => {
        amountInputSection.style.display = "none";

        numberInputSection.style.display = "block";
        numberInputSection.style.opacity = "0";
        numberInputSection.style.transform = "translateX(-20px)";

        setTimeout(() => {
          numberInputSection.style.opacity = "1";
          numberInputSection.style.transform = "translateX(0)";
        }, 50);
      }, 200);
    });
  }

  // Navigation to PIN section
  if (rechargeBtn) {
    rechargeBtn.addEventListener("click", function () {
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

  if (packageBtn) {
    packageBtn.addEventListener("click", function () {
      amountInputSection.style.opacity = "0";
      amountInputSection.style.transform = "translateX(-20px)";

      setTimeout(() => {
        amountInputSection.style.display = "none";

        pinSection.style.display = "block";
        pinSection.style.opacity = "0";
        pinSection.style.transform = "translateX(20px)";

        selectedAmount.textContent = "৳" + formatNumber(selectedPackage);

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

  // Contact selection
  contactItems.forEach((contact) => {
    contact.addEventListener("click", function () {
      this.classList.add("selected-contact");

      const name = this.querySelector(".contact-name").textContent;
      const number = this.querySelector(".contact-number").textContent;
      const initial = name.charAt(0);
      const avatarClass = this.querySelector(".contact-avatar").className;
      const gradient = avatarClass.split(" ")[1];
      const operatorBadge = this.querySelector(".operator-badge");
      const operator = operatorBadge.className.split(" ")[1];
      const operatorName = operatorBadge.textContent;

      selectedContact = {
        name,
        number,
        initial,
        gradient,
        operator,
        operatorName,
      };

      phoneInput.value = number;

      contactItems.forEach((item) => {
        if (item !== this) {
          item.classList.remove("selected-contact");
        }
      });

      setTimeout(() => {
        numberNextBtn.click();
      }, 500);
    });
  });

  // Operator selection
  operatorItems.forEach((item) => {
    item.addEventListener("click", function () {
      operatorItems.forEach((op) => op.classList.remove("active"));
      this.classList.add("active");

      const operatorImg = this.querySelector(".operator-icon img");
      const operatorSrc = operatorImg.getAttribute("alt").toLowerCase();

      if (operatorSrc.includes("গ্রামীণফোন")) {
        selectedOperator = "gp";
      } else if (operatorSrc.includes("রবি")) {
        selectedOperator = "robi";
      } else if (operatorSrc.includes("বাংলালিংক")) {
        selectedOperator = "bl";
      } else if (operatorSrc.includes("এয়ারটেল")) {
        selectedOperator = "airtel";
      } else if (operatorSrc.includes("টেলিটক")) {
        selectedOperator = "tt";
      }
    });
  });

  // Package selection
  packageItems.forEach((item) => {
    item.addEventListener("click", function () {
      packageItems.forEach((pack) => pack.classList.remove("active"));
      this.classList.add("active");

      selectedPackage = parseInt(this.dataset.packagePrice);
      packageBtn.disabled = false;
    });
  });

  // Quick amount buttons
  quickAmountBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const amount = parseInt(this.dataset.amount);

      amountInput.value = amount;
      amountInput.style.transition = "all 0.2s";
      amountInput.style.transform = "scale(1.05)";

      setTimeout(() => {
        amountInput.style.transform = "scale(1)";
      }, 200);

      updateAmount(amount);
    });
  });

  // Process amount change
  function updateAmount(amount) {
    currentAmount = amount;

    quickAmountBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    quickAmountBtns.forEach((btn) => {
      const btnAmount = parseInt(btn.dataset.amount);
      if (btnAmount === currentAmount) {
        btn.classList.add("active");
      }
    });

    if (currentAmount >= 10) {
      rechargeBtn.disabled = false;
    } else {
      rechargeBtn.disabled = true;
    }
  }

  // Amount input change
  if (amountInput) {
    amountInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^\d]/g, "");

      let value = parseInt(this.value) || 0;

      if (value > 1000) {
        value = 1000;
        this.value = value;

        const amountCard = document.querySelector(".amount-entry-card");
        const maxNote = document.createElement("div");
        maxNote.className = "max-limit-note";
        maxNote.textContent = "সর্বোচ্চ ১,০০০ টাকা রিচার্জ করা যাবে";
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
    const recipient = document.querySelector(".recipient-number").textContent;
    const amount = document.getElementById("selected-amount").textContent;
    const transactionId = "TXN" + Math.floor(Math.random() * 10000000);
    const currentDateTime = new Date().toLocaleString("bn-BD");

    // Update modal content
    document.getElementById("success-recipient").textContent = recipient;
    document.getElementById("success-amount").textContent = amount;
    document.getElementById("transaction-id").textContent = transactionId;
    document.getElementById("transaction-datetime").textContent =
      currentDateTime;
    document.getElementById("transaction-total").textContent = amount;

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
    phoneInput.value = "";
    amountInput.value = "";
    selectedContact = null;
    currentAmount = 0;
    selectedPackage = null;

    pinSection.style.display = "none";
    amountInputSection.style.display = "none";
    numberInputSection.style.display = "block";
    numberInputSection.style.opacity = "1";
    numberInputSection.style.transform = "translateX(0)";

    rechargeBtn.disabled = true;
    rechargeBtn.innerHTML = '<i class="fas fa-paper-plane"></i> রিচার্জ করুন';
    packageBtn.disabled = true;
    confirmPinBtn.disabled = true;
    confirmPinBtn.innerHTML = '<i class="fas fa-paper-plane"></i> কনফার্ম করুন';

    pinDigits.forEach((digit) => {
      digit.value = "";
    });

    quickAmountBtns.forEach((btn) => btn.classList.remove("active"));
    contactItems.forEach((item) => item.classList.remove("selected-contact"));
    packageItems.forEach((item) => item.classList.remove("active"));
  }
});
