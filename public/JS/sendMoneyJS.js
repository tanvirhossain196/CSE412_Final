// Enhanced Professional Send Money Form Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const showBalanceBtn = document.getElementById("showBalanceBtn");
  const hideBalanceBtn = document.getElementById("hideBalanceBtn");
  const balanceHidden = document.getElementById("balanceHidden");
  const balanceVisible = document.getElementById("balanceVisible");

  const numberInputSection = document.getElementById("numberInputSection");
  const amountInputSection = document.getElementById("amountInputSection");
  const numberNextBtn = document.getElementById("numberNextBtn");
  const backToNumberBtn = document.getElementById("backToNumberBtn");
  const clearSearchBtn = document.getElementById("clearSearch");

  const phoneInput = document.getElementById("phone-number");
  const amountInput = document.getElementById("amount");
  const quickAmountBtns = document.querySelectorAll(".quick-amount-btn");
  const contactItems = document.querySelectorAll(".contact-item");
  const giftOptions = document.querySelectorAll(".gift-option");
  const tabBtns = document.querySelectorAll(".tab-btn");

  const summaryAmount = document.getElementById("summary-amount");
  const summaryCharge = document.getElementById("summary-charge");
  const summaryTotal = document.getElementById("summary-total");
  const sendMoneyBtn = document.getElementById("send-money-btn");

  // Bootstrap Modals
  const pinModal = new bootstrap.Modal(document.getElementById("pinModal"));
  const successModal = new bootstrap.Modal(
    document.getElementById("successModal")
  );

  // Variables
  let selectedContact = null;
  let currentAmount = 0;
  let currentCharge = 0;
  let currentTotal = 0;

  // Add number formatting function
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Balance toggle with animation
  if (showBalanceBtn) {
    showBalanceBtn.addEventListener("click", function () {
      balanceHidden.style.opacity = "0";
      setTimeout(() => {
        balanceHidden.style.display = "none";
        balanceVisible.style.display = "flex";
        balanceVisible.style.opacity = "0";
        setTimeout(() => {
          balanceVisible.style.opacity = "1";
        }, 50);
      }, 150);
    });
  }

  if (hideBalanceBtn) {
    hideBalanceBtn.addEventListener("click", function () {
      balanceVisible.style.opacity = "0";
      setTimeout(() => {
        balanceVisible.style.display = "none";
        balanceHidden.style.display = "flex";
        balanceHidden.style.opacity = "0";
        setTimeout(() => {
          balanceHidden.style.opacity = "1";
        }, 50);
      }, 150);
    });
  }

  // Tab switching
  if (tabBtns.length) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all tabs
        tabBtns.forEach((tab) => tab.classList.remove("active"));

        // Add active class to clicked tab
        this.classList.add("active");

        // Get tab content id
        const tabId = this.dataset.tab;

        // Animation for smoother tab transition
        const contactsContainer = document.querySelector(".contacts-container");
        contactsContainer.style.opacity = "0";

        setTimeout(() => {
          contactsContainer.style.opacity = "1";
        }, 200);
      });
    });
  }

  // Clear search button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", function () {
      phoneInput.value = "";
      phoneInput.focus();
    });
  }

  // Navigation between sections with smooth transition
  if (numberNextBtn) {
    numberNextBtn.addEventListener("click", function () {
      // Validate phone number
      if (phoneInput.value.length >= 11 || selectedContact) {
        // Add exit animation to current section
        numberInputSection.style.opacity = "0";
        numberInputSection.style.transform = "translateX(-20px)";

        setTimeout(() => {
          numberInputSection.style.display = "none";

          // Show amount section with entrance animation
          amountInputSection.style.display = "block";
          amountInputSection.style.opacity = "0";
          amountInputSection.style.transform = "translateX(20px)";

          setTimeout(() => {
            amountInputSection.style.opacity = "1";
            amountInputSection.style.transform = "translateX(0)";
          }, 50);

          // Set recipient display info from selected contact or input
          const recipientName = document.querySelector(".recipient-name");
          const recipientNumber = document.querySelector(".recipient-number");
          const recipientAvatar = document.querySelector(".recipient-avatar");
          const operatorBadge = document.querySelector(
            ".recipient-name-operator .operator-badge"
          );

          if (selectedContact) {
            recipientName.textContent = selectedContact.name;
            recipientNumber.textContent = selectedContact.number;
            recipientAvatar.textContent = selectedContact.initial;
            recipientAvatar.className =
              "recipient-avatar " + selectedContact.gradient;
            operatorBadge.className =
              "operator-badge " + selectedContact.operator;
            operatorBadge.textContent = selectedContact.operatorName;
          } else {
            recipientName.textContent = "নতুন পরিচিতি";
            recipientNumber.textContent = phoneInput.value;
            recipientAvatar.textContent = "ন";
            recipientAvatar.className = "recipient-avatar gradient-1";

            // Determine operator from number
            let operator = "gp";
            let operatorName = "জিপি";

            if (phoneInput.value.startsWith("017")) {
              operator = "gp";
              operatorName = "জিপি";
            } else if (phoneInput.value.startsWith("018")) {
              operator = "robi";
              operatorName = "রবি";
            } else if (phoneInput.value.startsWith("019")) {
              operator = "bl";
              operatorName = "বিএল";
            } else if (phoneInput.value.startsWith("016")) {
              operator = "airtel";
              operatorName = "এয়ারটেল";
            } else if (phoneInput.value.startsWith("015")) {
              operator = "tt";
              operatorName = "টেলিটক";
            }

            operatorBadge.className = "operator-badge " + operator;
            operatorBadge.textContent = operatorName;
          }

          // Focus on amount input
          amountInput.focus();
        }, 200);
      } else {
        // Shake effect for validation error
        phoneInput.classList.add("shake-effect");
        setTimeout(() => {
          phoneInput.classList.remove("shake-effect");
        }, 600);

        // Show validation message
        const searchContainer = document.querySelector(".search-container");
        const validationMsg = document.createElement("div");
        validationMsg.className = "validation-message";
        validationMsg.textContent = "সঠিক মোবাইল নম্বর দিন";
        validationMsg.style.color = "#e74c3c";
        validationMsg.style.fontSize = "12px";
        validationMsg.style.textAlign = "center";
        validationMsg.style.padding = "5px";

        // Remove any existing validation message
        const existingMsg = searchContainer.querySelector(
          ".validation-message"
        );
        if (existingMsg) {
          existingMsg.remove();
        }

        searchContainer.appendChild(validationMsg);

        // Auto remove message after 3 seconds
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
      // Add exit animation
      amountInputSection.style.opacity = "0";
      amountInputSection.style.transform = "translateX(20px)";

      setTimeout(() => {
        amountInputSection.style.display = "none";

        // Show number section with entrance animation
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

  // Contact selection with enhanced animation
  contactItems.forEach((contact) => {
    contact.addEventListener("click", function () {
      // Add selection animation
      this.classList.add("selected-contact");

      // Get contact info
      const name = this.querySelector(".contact-name").textContent;
      const number = this.querySelector(".contact-number").textContent;
      const initial = name.charAt(0);
      const avatarClass = this.querySelector(".contact-avatar").className;
      const gradient = avatarClass.split(" ")[1];
      const operatorBadge = this.querySelector(".operator-badge");
      const operator = operatorBadge.className.split(" ")[1];
      const operatorName = operatorBadge.textContent;

      // Store selected contact
      selectedContact = {
        name,
        number,
        initial,
        gradient,
        operator,
        operatorName,
      };

      // Set number input value
      phoneInput.value = number;

      // Highlight selected contact
      contactItems.forEach((item) => {
        if (item !== this) {
          item.classList.remove("selected-contact");
        }
      });

      // Automatically go to next section after a short delay
      setTimeout(() => {
        numberNextBtn.click();
      }, 500);
    });
  });

  // Gift option selection with animation
  giftOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // First remove active class with fadeout
      giftOptions.forEach((opt) => {
        if (opt.classList.contains("active")) {
          opt.style.transition = "all 0.3s";
          opt.style.opacity = "0.6";
          opt.style.transform = "scale(0.95)";

          setTimeout(() => {
            opt.classList.remove("active");
            opt.style.opacity = "1";
            opt.style.transform = "scale(1)";
          }, 150);
        }
      });

      // Add active class with animation
      setTimeout(() => {
        this.classList.add("active");
        this.style.transition = "all 0.3s";
        this.style.transform = "scale(1.05)";

        setTimeout(() => {
          this.style.transform = "scale(1)";
        }, 200);
      }, 150);
    });
  });

  // Charge calculation function
  function calculateCharge(amount) {
    if (!amount || amount <= 0) return 0;

    // bKash charge structure
    if (amount <= 500) return 5;
    if (amount <= 1000) return 10;
    if (amount <= 2500) return 15;
    if (amount <= 5000) return 25;
    if (amount <= 10000) return 40;
    if (amount <= 25000) return 55;
    return 60; // For amounts over 25,000
  }

  // Process amount change with animations
  function updateAmount(amount) {
    currentAmount = amount;
    currentCharge = calculateCharge(currentAmount);
    currentTotal = currentAmount + currentCharge;

    // Update display with counting animation
    animateValue(
      summaryAmount,
      "৳" + (summaryAmount.innerText.replace("৳", "") || "0"),
      "৳" + formatNumber(currentAmount),
      300
    );
    animateValue(
      summaryCharge,
      "৳" + (summaryCharge.innerText.replace("৳", "") || "0"),
      "৳" + formatNumber(currentCharge),
      300
    );
    animateValue(
      summaryTotal,
      "৳" + (summaryTotal.innerText.replace("৳", "") || "0"),
      "৳" + formatNumber(currentTotal),
      300
    );

    // Enable/disable send button with animation
    if (currentAmount >= 10 && !sendMoneyBtn.classList.contains("enabled")) {
      sendMoneyBtn.disabled = false;
      sendMoneyBtn.classList.add("enabled");
      sendMoneyBtn.style.transition = "all 0.3s";
      sendMoneyBtn.style.animation = "pulse 2s infinite";
    } else if (
      currentAmount < 10 &&
      sendMoneyBtn.classList.contains("enabled")
    ) {
      sendMoneyBtn.disabled = true;
      sendMoneyBtn.classList.remove("enabled");
      sendMoneyBtn.style.animation = "none";
    }

    // Update active state for quick amount buttons
    quickAmountBtns.forEach((btn) => {
      const btnAmount = parseInt(btn.dataset.amount);

      if (btnAmount === currentAmount && !btn.classList.contains("active")) {
        // Add active class with animation
        btn.style.transition = "all 0.3s";
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
          btn.classList.add("active");
          btn.style.transform = "scale(1.05)";
          setTimeout(() => {
            btn.style.transform = "scale(1)";
          }, 200);
        }, 50);
      } else if (
        btnAmount !== currentAmount &&
        btn.classList.contains("active")
      ) {
        // Remove active class
        btn.style.transition = "all 0.3s";
        btn.style.opacity = "0.8";
        setTimeout(() => {
          btn.classList.remove("active");
          btn.style.opacity = "1";
        }, 200);
      }
    });
  }

  // Animate value changes
  function animateValue(element, start, end, duration) {
    // Strip non-numeric characters for calculation but keep for display
    const startValue = parseInt(start.replace(/[^\d]/g, "")) || 0;
    const endValue = parseInt(end.replace(/[^\d]/g, ""));
    const prefix = end.replace(/[\d,]/g, "");

    // Don't animate if values are the same
    if (startValue === endValue) return;

    let startTime = null;
    const step = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * (endValue - startValue) + startValue);
      element.textContent = prefix + formatNumber(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Quick amount buttons with enhanced feedback
  quickAmountBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const amount = parseInt(this.dataset.amount);

      // Set value with visual feedback
      amountInput.value = amount;
      amountInput.style.transition = "all 0.2s";
      amountInput.style.transform = "scale(1.05)";

      setTimeout(() => {
        amountInput.style.transform = "scale(1)";
      }, 200);

      updateAmount(amount);
    });
  });

  // Amount input change with better formatting
  if (amountInput) {
    amountInput.addEventListener("input", function () {
      // Remove non-numeric characters
      this.value = this.value.replace(/[^\d]/g, "");

      let value = parseInt(this.value) || 0;

      // Restrict to maximum allowed amount
      if (value > 25000) {
        value = 25000;
        this.value = value;

        // Show max limit notification
        const amountCard = document.querySelector(".amount-entry-card");
        const maxNote = document.createElement("div");
        maxNote.className = "max-limit-note";
        maxNote.textContent = "সর্বোচ্চ ২৫,০০০ টাকা পাঠানো যাবে";
        maxNote.style.color = "#e74c3c";
        maxNote.style.fontSize = "12px";
        maxNote.style.textAlign = "center";
        maxNote.style.padding = "5px";
        maxNote.style.marginTop = "10px";

        // Remove any existing note
        const existingNote = amountCard.querySelector(".max-limit-note");
        if (existingNote) {
          existingNote.remove();
        }

        amountCard.appendChild(maxNote);

        // Auto remove after 3 seconds
        setTimeout(() => {
          maxNote.style.opacity = "0";
          setTimeout(() => {
            maxNote.remove();
          }, 300);
        }, 3000);
      }

      updateAmount(value);
    });

    // Add focus effects
    amountInput.addEventListener("focus", function () {
      const wrapper = this.closest(".amount-input-wrapper");
      wrapper.style.boxShadow = "0 0 0 2px rgba(226, 20, 108, 0.2)";
    });

    amountInput.addEventListener("blur", function () {
      const wrapper = this.closest(".amount-input-wrapper");
      wrapper.style.boxShadow = "";
    });
  }

  // Add focus effects to phone input
  if (phoneInput) {
    phoneInput.addEventListener("focus", function () {
      const wrapper = this.closest(".search-input-wrapper");
      wrapper.style.boxShadow = "0 0 0 2px rgba(226, 20, 108, 0.2)";
    });

    phoneInput.addEventListener("blur", function () {
      const wrapper = this.closest(".search-input-wrapper");
      wrapper.style.boxShadow = "";
    });

    // Handle Enter key on phone input
    phoneInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        // Reset selected contact when entering new number
        selectedContact = null;
        // Remove selected class from all contacts
        contactItems.forEach((item) => {
          item.classList.remove("selected-contact");
        });
        // Trigger next button click
        numberNextBtn.click();
      }
    });

    // Real-time formatting and validation
    phoneInput.addEventListener("input", function () {
      // Remove non-numeric characters
      this.value = this.value.replace(/\D/g, "");

      // Auto determine operator from number
      if (this.value.length >= 3) {
        let operator = "unknown";

        if (this.value.startsWith("017")) {
          operator = "gp";
        } else if (this.value.startsWith("018")) {
          operator = "robi";
        } else if (this.value.startsWith("019")) {
          operator = "bl";
        } else if (this.value.startsWith("016")) {
          operator = "airtel";
        } else if (this.value.startsWith("015")) {
          operator = "tt";
        }

        // Update search icon with operator icon
        const searchIcon = document.querySelector(".search-icon");
        if (operator !== "unknown") {
          searchIcon.className = "operator-indicator " + operator;
          searchIcon.innerHTML = getOperatorShortName(operator);
          searchIcon.style.width = "20px";
          searchIcon.style.height = "20px";
          searchIcon.style.borderRadius = "50%";
          searchIcon.style.color = "white";
          searchIcon.style.fontSize = "10px";
          searchIcon.style.fontWeight = "bold";
          searchIcon.style.display = "flex";
          searchIcon.style.alignItems = "center";
          searchIcon.style.justifyContent = "center";
        } else {
          searchIcon.className = "search-icon";
          searchIcon.innerHTML = '<i class="fas fa-search"></i>';
        }
      } else {
        // Reset to search icon
        const searchIcon = document.querySelector(".search-icon");
        searchIcon.className = "search-icon";
        searchIcon.innerHTML = '<i class="fas fa-search"></i>';
      }
    });
  }

  // Helper function to get operator short name
  function getOperatorShortName(operator) {
    switch (operator) {
      case "gp":
        return "GP";
      case "robi":
        return "R";
      case "bl":
        return "BL";
      case "airtel":
        return "AT";
      case "tt":
        return "TT";
      default:
        return "";
    }
  }

  // Send Money button click
  if (sendMoneyBtn) {
    sendMoneyBtn.addEventListener("click", function () {
      if (currentAmount >= 10) {
        const recipient =
          document.querySelector(".recipient-number").textContent;

        // Show sending animation
        this.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> সেন্ড হচ্ছে...';
        this.style.pointerEvents = "none";

        // Simulate API call delay
        setTimeout(() => {
          // Show PIN modal
          showPinEntryModal(
            recipient,
            currentAmount,
            currentCharge,
            currentTotal
          );
        }, 1000);
      }
    });
  }

  // PIN Entry Modal
  function showPinEntryModal(recipient, amount, charge, total) {
    // Update PIN modal values
    document.getElementById("pinRecipient").textContent = recipient;
    document.getElementById("pinAmount").textContent =
      "৳" + formatNumber(amount);
    document.getElementById("pinCharge").textContent =
      "৳" + formatNumber(charge);
    document.getElementById("pinTotal").textContent = "৳" + formatNumber(total);

    // Show the modal
    pinModal.show();

    // Handle PIN digits
    const pinDigits = document.querySelectorAll("#pinModal .pin-digit");
    const confirmBtn = document.querySelector("#pinModal .pin-confirm-btn");
    const pinError = document.querySelector("#pinModal .pin-error");

    // Clear previous PIN digits
    pinDigits.forEach((digit) => (digit.value = ""));
    confirmBtn.disabled = true;
    pinError.textContent = "";

    // Focus first digit
    setTimeout(() => {
      pinDigits[0].focus();
    }, 300);

    // Handle PIN input
    pinDigits.forEach((digit, index) => {
      digit.addEventListener("input", function () {
        if (this.value && index < pinDigits.length - 1) {
          pinDigits[index + 1].focus();
        }

        // Check if all digits are filled
        let allFilled = true;
        pinDigits.forEach((d) => {
          if (!d.value) allFilled = false;
        });

        confirmBtn.disabled = !allFilled;
      });

      // Navigate backward on backspace
      digit.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !this.value && index > 0) {
          pinDigits[index - 1].focus();
        }
      });
    });

    // Handle form submission
    const pinForm = document.getElementById("pinForm");
    pinForm.onsubmit = function (e) {
      e.preventDefault();

      // Get entered PIN
      let enteredPin = "";
      pinDigits.forEach((digit) => {
        enteredPin += digit.value;
      });

      // Simulate PIN verification (correct PIN is 12345 for demo)
      if (enteredPin === "12345") {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> যাচাই করা হচ্ছে...';

        // Simulate processing delay
        setTimeout(() => {
          // Hide PIN modal and show success
          pinModal.hide();
          showSuccessScreen(recipient, amount, charge, total);
        }, 1500);
      } else {
        // Show error with shake animation
        pinError.textContent = "ভুল PIN। আবার চেষ্টা করুন।";

        // Add shake animation to PIN inputs
        pinDigits.forEach((digit) => {
          digit.style.borderColor = "#e74c3c";
          digit.classList.add("shake-effect");
          setTimeout(() => {
            digit.classList.remove("shake-effect");
          }, 600);
        });

        // Clear the PIN fields
        setTimeout(() => {
          pinDigits.forEach((digit) => {
            digit.value = "";
          });
          pinDigits[0].focus();
        }, 300);
      }
    };
  }

  // Handle PIN modal close
  document
    .getElementById("pinModal")
    .addEventListener("hidden.bs.modal", function () {
      // Reset send button
      sendMoneyBtn.innerHTML =
        '<i class="fas fa-paper-plane"></i> সেন্ড মানি করুন';
      sendMoneyBtn.style.pointerEvents = "";
    });

  // Show success screen
  function showSuccessScreen(recipient, amount, charge, total) {
    // Create a random transaction ID
    const txnId = "TXN" + Math.floor(Math.random() * 10000000);
    const dateTime = new Date().toLocaleString("bn-BD");

    // Update success modal values
    document.getElementById(
      "successMessage"
    ).textContent = `${recipient} নম্বরে ৳${formatNumber(
      amount
    )} টাকা সফলভাবে প্রেরণ করা হয়েছে`;
    document.getElementById("txnId").textContent = txnId;
    document.getElementById("txnDateTime").textContent = dateTime;
    document.getElementById("txnAmount").textContent =
      "৳" + formatNumber(amount);
    document.getElementById("txnCharge").textContent =
      "৳" + formatNumber(charge);
    document.getElementById("txnTotal").textContent = "৳" + formatNumber(total);

    // Show success modal
    successModal.show();

    // Add click handlers
    const newTxnBtn = document.querySelector("#successModal .new-transaction");
    const downloadBtn = document.querySelector(
      "#successModal .download-receipt"
    );

    newTxnBtn.onclick = function () {
      // Reset form and close success screen
      resetForm();
      successModal.hide();
    };

    downloadBtn.onclick = function () {
      // Simulate download
      this.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> ডাউনলোড হচ্ছে...';

      setTimeout(() => {
        alert("রিসিট ডাউনলোড সম্পন্ন হয়েছে");
        this.innerHTML = '<i class="fas fa-download"></i> রিসিট ডাউনলোড করুন';
      }, 1500);
    };
  }

  // Reset form for new transaction
  function resetForm() {
    phoneInput.value = "";
    amountInput.value = "";
    currentAmount = 0;
    currentCharge = 0;
    currentTotal = 0;
    selectedContact = null;

    // Reset UI elements
    summaryAmount.textContent = "৳০";
    summaryCharge.textContent = "৳০";
    summaryTotal.textContent = "৳০";

    sendMoneyBtn.disabled = true;
    sendMoneyBtn.innerHTML =
      '<i class="fas fa-paper-plane"></i> সেন্ড মানি করুন';
    sendMoneyBtn.style.pointerEvents = "";

    // Reset active states
    quickAmountBtns.forEach((btn) => btn.classList.remove("active"));
    contactItems.forEach((item) => item.classList.remove("selected-contact"));

    // Reset section visibility
    if (amountInputSection.style.display === "block") {
      amountInputSection.style.display = "none";
      numberInputSection.style.display = "block";
    }
  }

  // Add CSS animation and effect classes
  document.querySelectorAll(".action-btn").forEach((btn) => {
    btn.classList.add("ripple");
  });

  // Initialize with balance hidden
  if (balanceHidden && balanceVisible) {
    balanceHidden.style.opacity = "1";
    balanceVisible.style.opacity = "0";
    balanceVisible.style.display = "none";
  }

  // Add CSS for shake effect if not already present
  if (!document.querySelector("style#shake-css")) {
    const shakeStyle = document.createElement("style");
    shakeStyle.id = "shake-css";
    shakeStyle.textContent = `
      .shake-effect {
        animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
      }
      
      @keyframes shake {
        10%, 90% { transform: translateX(-1px); }
        20%, 80% { transform: translateX(2px); }
        30%, 50%, 70% { transform: translateX(-4px); }
        40%, 60% { transform: translateX(4px); }
      }
    `;
    document.head.appendChild(shakeStyle);
  }
});
