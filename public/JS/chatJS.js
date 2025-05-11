// Enhanced Mobile Banking Knowledge Base
const MOBILE_BANKING_KNOWLEDGE_BASE = {
  services: {
    account_opening: {
      bn: "একাউন্ট খোলা",
      en: "Account Opening",
      process: {
        bn: [
          "SurePay অ্যাপ ডাউনলোড করুন",
          "Sign Up অপশনে ক্লিক করুন",
          "মোবাইল নম্বর দিন",
          "OTP ভেরিফাই করুন",
          "NID/পাসপোর্ট নম্বর দিন",
          "আপনার তথ্য পূরণ করুন",
          "নিজের ছবি তুলুন",
          "5 ডিজিটের পিন সেট করুন",
          "একাউন্ট সফলভাবে খোলা হবে",
        ],
        en: [
          "Download SurePay app",
          "Click on Sign Up option",
          "Enter mobile number",
          "Verify OTP",
          "Enter NID/Passport number",
          "Fill your information",
          "Take your photo",
          "Set 5-digit PIN",
          "Account will be opened successfully",
        ],
      },
      requirements: {
        bn: ["বাংলাদেশী মোবাইল নম্বর", "বৈধ NID/পাসপোর্ট", "স্মার্টফোন"],
        en: ["Bangladeshi mobile number", "Valid NID/Passport", "Smartphone"],
      },
      time: {
        bn: "৫-১০ মিনিট",
        en: "5-10 minutes",
      },
    },
    send_money: {
      bn: "টাকা পাঠান",
      en: "Send Money",
      process: {
        app: {
          bn: [
            "SurePay অ্যাপ খুলুন",
            "Send Money অপশন সিলেক্ট করুন",
            "প্রাপকের মোবাইল নম্বর দিন",
            "টাকার পরিমাণ লিখুন",
            "রেফারেন্স দিন (ঐচ্ছিক)",
            "আপনার পিন দিন",
            "Confirm বাটনে ক্লিক করুন",
            "সফলভাবে টাকা পাঠানো হবে",
          ],
          en: [
            "Open SurePay app",
            "Select Send Money option",
            "Enter receiver's mobile number",
            "Enter amount",
            "Add reference (optional)",
            "Enter your PIN",
            "Click Confirm button",
            "Money will be sent successfully",
          ],
        },
        ussd: {
          bn: [
            "*247# ডায়াল করুন",
            "Send Money সিলেক্ট করুন",
            "প্রাপকের নম্বর দিন",
            "পরিমাণ দিন",
            "পিন দিন",
            "কনফার্ম করুন",
          ],
          en: [
            "Dial *247#",
            "Select Send Money",
            "Enter receiver's number",
            "Enter amount",
            "Enter PIN",
            "Confirm",
          ],
        },
      },
      limits: {
        per_transaction: {
          min: "10",
          max: "50,000",
        },
        daily: "200,000",
        monthly: "500,000",
      },
      charges: {
        bn: "প্রতি ১০০০ টাকায় ৫ টাকা",
        en: "BDT 5 per 1000",
      },
    },
    cash_out: {
      bn: "ক্যাশ আউট",
      en: "Cash Out",
      process: {
        agent: {
          bn: [
            "নিকটস্থ SurePay এজেন্ট খুঁজুন",
            "এজেন্টকে টাকার পরিমাণ বলুন",
            "এজেন্টের নম্বর দিন",
            "আপনার PIN দিন",
            "টাকা গ্রহণ করুন",
          ],
          en: [
            "Find nearest SurePay agent",
            "Tell agent the amount",
            "Enter agent's number",
            "Enter your PIN",
            "Receive cash",
          ],
        },
        atm: {
          bn: [
            "যেকোনো ATM এ যান",
            "কার্ড ছাড়া Cash Out সিলেক্ট করুন",
            "SurePay নম্বর দিন",
            "OTP পাবেন",
            "OTP এবং পিন দিন",
            "টাকা সংগ্রহ করুন",
          ],
          en: [
            "Go to any ATM",
            "Select Cardless Cash Out",
            "Enter SurePay number",
            "Receive OTP",
            "Enter OTP and PIN",
            "Collect cash",
          ],
        },
      },
      charges: {
        agent: {
          bn: "১.৮৫%",
          en: "1.85%",
        },
        atm: {
          bn: "১.৫%",
          en: "1.5%",
        },
      },
    },
    mobile_recharge: {
      bn: "মোবাইল রিচার্জ",
      en: "Mobile Recharge",
      process: {
        bn: [
          "SurePay অ্যাপ খুলুন",
          "Mobile Recharge সিলেক্ট করুন",
          "অপারেটর সিলেক্ট করুন",
          "মোবাইল নম্বর দিন",
          "রিচার্জ পরিমাণ দিন",
          "পিন দিয়ে কনফার্ম করুন",
        ],
        en: [
          "Open SurePay app",
          "Select Mobile Recharge",
          "Select operator",
          "Enter mobile number",
          "Enter recharge amount",
          "Confirm with PIN",
        ],
      },
      operators: ["Grameenphone", "Robi", "Banglalink", "Airtel", "Teletalk"],
      offers: {
        bn: "বিভিন্ন অপারেটরে বোনাস অফার",
        en: "Various bonus offers on operators",
      },
      charges: {
        bn: "ফ্রি",
        en: "Free",
      },
    },
    payment: {
      bn: "পেমেন্ট",
      en: "Payment",
      types: {
        merchant: {
          bn: "মার্চেন্ট পেমেন্ট",
          en: "Merchant Payment",
          process: {
            bn: [
              "মার্চেন্ট QR স্ক্যান করুন",
              "অথবা মার্চেন্ট নম্বর দিন",
              "পেমেন্ট পরিমাণ দিন",
              "পিন দিয়ে কনফার্ম করুন",
            ],
            en: [
              "Scan merchant QR",
              "Or enter merchant number",
              "Enter payment amount",
              "Confirm with PIN",
            ],
          },
        },
        bill: {
          bn: "বিল পেমেন্ট",
          en: "Bill Payment",
          types: {
            bn: ["বিদ্যুৎ বিল", "গ্যাস বিল", "পানির বিল", "ইন্টারনেট বিল"],
            en: ["Electricity bill", "Gas bill", "Water bill", "Internet bill"],
          },
          process: {
            bn: [
              "Bill Pay সিলেক্ট করুন",
              "বিল টাইপ সিলেক্ট করুন",
              "বিল নম্বর/একাউন্ট দিন",
              "পরিমাণ দিন",
              "পিন দিয়ে পেমেন্ট করুন",
            ],
            en: [
              "Select Bill Pay",
              "Select bill type",
              "Enter bill/account number",
              "Enter amount",
              "Pay with PIN",
            ],
          },
        },
      },
      charges: {
        bn: "ফ্রি (গ্রাহকের জন্য)",
        en: "Free (for customers)",
      },
    },
    add_money: {
      bn: "টাকা যোগ করুন",
      en: "Add Money",
      methods: {
        bank: {
          bn: "ব্যাংক ট্রান্সফার",
          en: "Bank Transfer",
          process: {
            bn: [
              "আপনার ব্যাংক অ্যাপ/ওয়েবসাইট খুলুন",
              "Fund Transfer সিলেক্ট করুন",
              "SurePay সিলেক্ট করুন",
              "আপনার SurePay নম্বর দিন",
              "পরিমাণ দিন",
              "কনফার্ম করুন",
            ],
            en: [
              "Open your bank app/website",
              "Select Fund Transfer",
              "Select SurePay",
              "Enter your SurePay number",
              "Enter amount",
              "Confirm",
            ],
          },
          banks: [
            "DBBL",
            "BRAC Bank",
            "City Bank",
            "Islami Bank",
            "UCB",
            "Standard Chartered",
          ],
        },
        card: {
          bn: "ডেবিট/ক্রেডিট কার্ড",
          en: "Debit/Credit Card",
          process: {
            bn: [
              "Add Money সিলেক্ট করুন",
              "Card অপশন সিলেক্ট করুন",
              "কার্ড নম্বর দিন",
              "CVV এবং Expiry দিন",
              "OTP ভেরিফাই করুন",
            ],
            en: [
              "Select Add Money",
              "Select Card option",
              "Enter card number",
              "Enter CVV and Expiry",
              "Verify OTP",
            ],
          },
          accepted_cards: ["VISA", "MasterCard", "American Express"],
        },
        agent: {
          bn: "এজেন্ট পয়েন্ট",
          en: "Agent Point",
          process: {
            bn: [
              "নিকটস্থ এজেন্টে যান",
              "নগদ টাকা দিন",
              "আপনার নম্বর বলুন",
              "এসএমএস নিশ্চিতকরণ পাবেন",
            ],
            en: [
              "Visit nearest agent",
              "Give cash",
              "Tell your number",
              "Receive SMS confirmation",
            ],
          },
        },
      },
      charges: {
        bank: {
          bn: "ফ্রি",
          en: "Free",
        },
        card: {
          bn: "১.৫%",
          en: "1.5%",
        },
        agent: {
          bn: "ফ্রি",
          en: "Free",
        },
      },
    },
    balance_check: {
      bn: "ব্যালেন্স চেক",
      en: "Balance Check",
      methods: {
        app: {
          bn: "অ্যাপ খুললেই হোম স্ক্রিনে ব্যালেন্স দেখাবে",
          en: "Balance shows on home screen when app opens",
        },
        ussd: {
          bn: "*247# ডায়াল করে Balance Check সিলেক্ট করুন",
          en: "Dial *247# and select Balance Check",
        },
      },
      charges: {
        bn: "ফ্রি",
        en: "Free",
      },
    },
    transaction_history: {
      bn: "লেনদেনের ইতিহাস",
      en: "Transaction History",
      process: {
        bn: [
          "অ্যাপ খুলুন",
          "Transaction History ক্লিক করুন",
          "তারিখ অনুযায়ী ফিল্টার করুন",
          "বিস্তারিত দেখতে লেনদেনে ক্লিক করুন",
        ],
        en: [
          "Open app",
          "Click Transaction History",
          "Filter by date",
          "Click transaction for details",
        ],
      },
      features: {
        bn: ["PDF ডাউনলোড", "রিসিট প্রিন্ট", "শেয়ার অপশন"],
        en: ["PDF download", "Receipt print", "Share option"],
      },
    },
    security_features: {
      bn: "নিরাপত্তা ফিচার",
      en: "Security Features",
      features: {
        pin: {
          bn: "৫ ডিজিট পিন",
          en: "5-digit PIN",
          change_process: {
            bn: [
              "Settings এ যান",
              "Change PIN সিলেক্ট করুন",
              "পুরাতন পিন দিন",
              "নতুন পিন দিন",
              "কনফার্ম করুন",
            ],
            en: [
              "Go to Settings",
              "Select Change PIN",
              "Enter old PIN",
              "Enter new PIN",
              "Confirm",
            ],
          },
        },
        biometric: {
          bn: "ফিঙ্গারপ্রিন্ট/ফেস আইডি",
          en: "Fingerprint/Face ID",
          setup: {
            bn: [
              "Settings এ যান",
              "Security সিলেক্ট করুন",
              "Biometric Enable করুন",
              "ফিঙ্গারপ্রিন্ট/ফেস রেজিস্টার করুন",
            ],
            en: [
              "Go to Settings",
              "Select Security",
              "Enable Biometric",
              "Register fingerprint/face",
            ],
          },
        },
        otp: {
          bn: "OTP ভেরিফিকেশন",
          en: "OTP Verification",
          when_used: {
            bn: ["নতুন ডিভাইস লগিন", "পাসওয়ার্ড রিসেট", "বড় লেনদেন"],
            en: ["New device login", "Password reset", "Large transactions"],
          },
        },
      },
    },
    limits: {
      bn: "লেনদেন লিমিট",
      en: "Transaction Limits",
      personal: {
        balance: {
          min: "0",
          max: "500,000",
        },
        send_money: {
          per_transaction: {
            min: "10",
            max: "50,000",
          },
          daily: "200,000",
          monthly: "500,000",
        },
        cash_out: {
          per_transaction: {
            min: "50",
            max: "50,000",
          },
          daily: "150,000",
          monthly: "500,000",
        },
        add_money: {
          per_transaction: {
            min: "50",
            max: "50,000",
          },
          daily: "200,000",
          monthly: "500,000",
        },
      },
    },
    charges_summary: {
      bn: "চার্জ সামারি",
      en: "Charges Summary",
      free_services: {
        bn: [
          "একাউন্ট খোলা",
          "ব্যালেন্স চেক",
          "মোবাইল রিচার্জ",
          "বিল পেমেন্ট",
          "মার্চেন্ট পেমেন্ট",
          "ব্যাংক থেকে Add Money",
        ],
        en: [
          "Account opening",
          "Balance check",
          "Mobile recharge",
          "Bill payment",
          "Merchant payment",
          "Add Money from bank",
        ],
      },
      charged_services: {
        send_money: {
          bn: "প্রতি ১০০০ টাকায় ৫ টাকা",
          en: "BDT 5 per 1000",
        },
        cash_out: {
          agent: {
            bn: "১.৮৫%",
            en: "1.85%",
          },
          atm: {
            bn: "১.৫%",
            en: "1.5%",
          },
        },
        add_money_card: {
          bn: "১.৫%",
          en: "1.5%",
        },
      },
    },
    common_problems: {
      bn: "সাধারণ সমস্যা",
      en: "Common Problems",
      issues: {
        forgot_pin: {
          bn: "পিন ভুলে গেছি",
          en: "Forgot PIN",
          solution: {
            bn: [
              "কাস্টমার কেয়ার 16247 এ কল করুন",
              "অথবা নিকটস্থ SurePay সেবা কেন্দ্রে যান",
              "NID এবং মোবাইল নম্বর দিয়ে ভেরিফাই করুন",
              "নতুন পিন সেট করুন",
            ],
            en: [
              "Call customer care 16247",
              "Or visit nearest SurePay service center",
              "Verify with NID and mobile number",
              "Set new PIN",
            ],
          },
        },
        wrong_transaction: {
          bn: "ভুল লেনদেন",
          en: "Wrong Transaction",
          solution: {
            bn: [
              "অবিলম্বে 16247 এ কল করুন",
              "লেনদেন আইডি সংগ্রহ করুন",
              "অ্যাপে অভিযোগ দাখিল করুন",
              "24-48 ঘন্টার মধ্যে সমাধান পাবেন",
            ],
            en: [
              "Call 16247 immediately",
              "Collect transaction ID",
              "File complaint in app",
              "Get solution within 24-48 hours",
            ],
          },
        },
        account_blocked: {
          bn: "একাউন্ট ব্লক",
          en: "Account Blocked",
          reasons: {
            bn: ["ভুল পিন একাধিকবার দেওয়া", "সন্দেহজনক লেনদেন", "KYC সমস্যা"],
            en: [
              "Multiple wrong PIN attempts",
              "Suspicious transaction",
              "KYC issues",
            ],
          },
          solution: {
            bn: [
              "নিকটস্থ SurePay সেবা কেন্দ্রে যান",
              "প্রয়োজনীয় ডকুমেন্ট নিয়ে যান",
              "ভেরিফিকেশন সম্পন্ন করুন",
            ],
            en: [
              "Visit nearest SurePay service center",
              "Carry required documents",
              "Complete verification",
            ],
          },
        },
        app_not_working: {
          bn: "অ্যাপ কাজ করছে না",
          en: "App Not Working",
          solution: {
            bn: [
              "ইন্টারনেট সংযোগ চেক করুন",
              "অ্যাপ আপডেট করুন",
              "ক্যাশ ক্লিয়ার করুন",
              "পুনরায় ইনস্টল করুন",
            ],
            en: [
              "Check internet connection",
              "Update app",
              "Clear cache",
              "Reinstall app",
            ],
          },
        },
      },
    },
    offers_discounts: {
      bn: "অফার ও ডিসকাউন্ট",
      en: "Offers & Discounts",
      current_offers: {
        cashback: {
          bn: "পেমেন্টে ক্যাশব্যাক",
          en: "Payment Cashback",
          details: {
            bn: "নির্বাচিত মার্চেন্টে ১০% ক্যাশব্যাক",
            en: "10% cashback at selected merchants",
          },
        },
        recharge_bonus: {
          bn: "রিচার্জ বোনাস",
          en: "Recharge Bonus",
          details: {
            bn: "100 টাকা+ রিচার্জে 5% বোনাস",
            en: "5% bonus on 100+ recharge",
          },
        },
      },
    },
    customer_support: {
      bn: "কাস্টমার সাপোর্ট",
      en: "Customer Support",
      channels: {
        hotline: {
          number: "16247",
          hours: {
            bn: "২৪/৭ সেবা",
            en: "24/7 service",
          },
        },
        email: "support@surepay.com",
        chat: {
          bn: "অ্যাপ থেকে লাইভ চ্যাট",
          en: "Live chat from app",
        },
        service_centers: {
          bn: "সারাদেশে 500+ সেবা কেন্দ্র",
          en: "500+ service centers nationwide",
        },
      },
    },
  },

  faqs: {
    general: [
      {
        q: {
          bn: "SurePay কি?",
          en: "What is SurePay?",
        },
        a: {
          bn: "SurePay বাংলাদেশের একটি মোবাইল ফিন্যান্সিয়াল সার্ভিস যা মোবাইল ফোনের মাধ্যমে আর্থিক লেনদেন সেবা প্রদান করে।",
          en: "SurePay is a mobile financial service in Bangladesh that provides financial transaction services through mobile phones.",
        },
      },
      {
        q: {
          bn: "SurePay একাউন্ট খুলতে কি কি লাগে?",
          en: "What do I need to open a SurePay account?",
        },
        a: {
          bn: "১) বাংলাদেশী মোবাইল নম্বর, ২) NID বা পাসপোর্ট, ৩) স্মার্টফোন",
          en: "1) Bangladeshi mobile number, 2) NID or passport, 3) Smartphone",
        },
      },
      {
        q: {
          bn: "একাউন্ট খুলতে কত টাকা লাগে?",
          en: "How much does it cost to open an account?",
        },
        a: {
          bn: "একাউন্ট খোলা সম্পূর্ণ ফ্রি",
          en: "Account opening is completely free",
        },
      },
    ],
    security: [
      {
        q: {
          bn: "SurePay কতটা নিরাপদ?",
          en: "How secure is SurePay?",
        },
        a: {
          bn: "SurePay ব্যাংক-স্তরের নিরাপত্তা ব্যবস্থা, SSL এনক্রিপশন, 2FA এবং বায়োমেট্রিক নিরাপত্তা ব্যবহার করে।",
          en: "SurePay uses bank-level security, SSL encryption, 2FA, and biometric security.",
        },
      },
      {
        q: {
          bn: "পিন ভুলে গেলে কি করব?",
          en: "What if I forget my PIN?",
        },
        a: {
          bn: "কাস্টমার কেয়ার 16247 এ কল করুন অথবা নিকটস্থ সেবা কেন্দ্রে যান",
          en: "Call customer care 16247 or visit nearest service center",
        },
      },
    ],
    transactions: [
      {
        q: {
          bn: "সর্বোচ্চ কত টাকা পাঠাতে পারব?",
          en: "What's the maximum I can send?",
        },
        a: {
          bn: "প্রতি লেনদেনে সর্বোচ্চ ৫০,০০০ টাকা, দৈনিক ২,০০,০০০ টাকা",
          en: "Maximum 50,000 per transaction, 200,000 daily",
        },
      },
      {
        q: {
          bn: "Cash Out চার্জ কত?",
          en: "What's the Cash Out charge?",
        },
        a: {
          bn: "এজেন্ট থেকে ১.৮৫%, ATM থেকে ১.৫%",
          en: "1.85% from agent, 1.5% from ATM",
        },
      },
    ],
  },
};

// Enhanced AI Response Generator
class EnhancedBankingAI {
  constructor() {
    this.knowledgeBase = MOBILE_BANKING_KNOWLEDGE_BASE;
    this.language = "bn";
    this.context = [];
    this.conversationHistory = [];
  }

  setLanguage(lang) {
    this.language = lang;
  }

  getResponse(message) {
    const lowerMessage = message.toLowerCase();
    this.conversationHistory.push({ type: "user", message });

    // Direct service queries
    if (this.isAskingHowToUse(lowerMessage)) {
      return this.getDetailedHowToResponse(lowerMessage);
    }

    // Specific feature queries
    if (this.isAskingAboutSpecificFeature(lowerMessage)) {
      return this.getFeatureResponse(lowerMessage);
    }

    // Transaction queries
    if (this.isAskingAboutTransaction(lowerMessage)) {
      return this.getTransactionResponse(lowerMessage);
    }

    // Security queries
    if (this.isAskingAboutSecurity(lowerMessage)) {
      return this.getSecurityResponse(lowerMessage);
    }

    // Problem solving
    if (this.isAskingAboutProblem(lowerMessage)) {
      return this.getProblemSolutionResponse(lowerMessage);
    }

    // Check FAQs
    const faqResponse = this.checkFAQs(lowerMessage);
    if (faqResponse) {
      return faqResponse;
    }

    // Service-specific queries
    for (const [serviceKey, service] of Object.entries(
      this.knowledgeBase.services
    )) {
      if (
        this.messageContainsKeywords(lowerMessage, [
          service.bn?.toLowerCase(),
          service.en?.toLowerCase(),
        ])
      ) {
        return this.formatDetailedServiceResponse(serviceKey, service);
      }
    }

    // General help or greeting
    if (this.isGreeting(lowerMessage) || this.isAskingForHelp(lowerMessage)) {
      return this.getComprehensiveHelpResponse();
    }

    // Default intelligent response
    return this.getIntelligentDefaultResponse(message);
  }

  isAskingHowToUse(message) {
    const howToKeywords = [
      "how to use",
      "কিভাবে ব্যবহার",
      "কি করে",
      "কেমনে করবো",
      "কিভাবে করব",
      "how do i",
      "কিভাবে করতে হয়",
      "process",
      "পদ্ধতি",
      "উপায়",
      "step",
      "ধাপ",
    ];
    return howToKeywords.some((keyword) => message.includes(keyword));
  }

  getDetailedHowToResponse(message) {
    // Check which service user is asking about
    for (const [serviceKey, service] of Object.entries(
      this.knowledgeBase.services
    )) {
      if (
        message.includes(service.bn?.toLowerCase()) ||
        message.includes(service.en?.toLowerCase())
      ) {
        return this.formatDetailedServiceResponse(serviceKey, service);
      }
    }

    // General how-to response
    return this.language === "bn"
      ? `<strong>SurePay ব্যবহার করার জন্য:</strong><br><br>
        1. প্রথমে SurePay অ্যাপ ডাউনলোড করুন<br>
        2. মোবাইল নম্বর ও NID দিয়ে একাউন্ট খুলুন<br>
        3. 5 ডিজিটের পিন সেট করুন<br>
        4. এরপর বিভিন্ন সেবা ব্যবহার করতে পারবেন<br><br>
        
        <strong>প্রধান সেবাসমূহ:</strong><br>
        • টাকা পাঠান (Send Money)<br>
        • ক্যাশ আউট (Cash Out)<br>
        • মোবাইল রিচার্জ<br>
        • বিল পেমেন্ট<br>
        • Add Money<br><br>
        
        কোন নির্দিষ্ট সেবা সম্পর্কে জানতে চান?`
      : `<strong>To use SurePay:</strong><br><br>
        1. First download SurePay app<br>
        2. Open account with mobile number & NID<br>
        3. Set 5-digit PIN<br>
        4. Then you can use various services<br><br>
        
        <strong>Main services:</strong><br>
        • Send Money<br>
        • Cash Out<br>
        • Mobile Recharge<br>
        • Bill Payment<br>
        • Add Money<br><br>
        
        Which specific service would you like to know about?`;
  }

  formatDetailedServiceResponse(serviceKey, service) {
    const lang = this.language;
    let response = `<strong>${service[lang]}</strong><br><br>`;

    if (service.description) {
      response += `${service.description[lang]}<br><br>`;
    }

    // Add detailed process
    if (service.process) {
      if (service.process.app) {
        response +=
          lang === "bn"
            ? "<strong>📱 অ্যাপ থেকে:</strong><br>"
            : "<strong>📱 From App:</strong><br>";

        service.process.app[lang].forEach((step, index) => {
          response += `${index + 1}. ${step}<br>`;
        });
        response += "<br>";
      }

      if (service.process.ussd) {
        response +=
          lang === "bn"
            ? "<strong>📞 USSD থেকে:</strong><br>"
            : "<strong>📞 From USSD:</strong><br>";

        service.process.ussd[lang].forEach((step, index) => {
          response += `${index + 1}. ${step}<br>`;
        });
        response += "<br>";
      }
    }

    // Add charges
    if (service.charges) {
      response +=
        lang === "bn"
          ? `<strong>💰 চার্জ:</strong> ${service.charges[lang]}<br><br>`
          : `<strong>💰 Charges:</strong> ${service.charges[lang]}<br><br>`;
    }

    // Add limits
    if (service.limits) {
      response +=
        lang === "bn"
          ? "<strong>📊 লিমিট:</strong><br>"
          : "<strong>📊 Limits:</strong><br>";

      if (service.limits.per_transaction) {
        response +=
          lang === "bn"
            ? `• প্রতি লেনদেন: ${service.limits.per_transaction.min}-${service.limits.per_transaction.max} টাকা<br>`
            : `• Per transaction: ${service.limits.per_transaction.min}-${service.limits.per_transaction.max} BDT<br>`;
      }
      if (service.limits.daily) {
        response +=
          lang === "bn"
            ? `• দৈনিক: ${service.limits.daily} টাকা<br>`
            : `• Daily: ${service.limits.daily} BDT<br>`;
      }
      if (service.limits.monthly) {
        response +=
          lang === "bn"
            ? `• মাসিক: ${service.limits.monthly} টাকা<br>`
            : `• Monthly: ${service.limits.monthly} BDT<br>`;
      }
    }

    return response;
  }

  getComprehensiveHelpResponse() {
    return this.language === "bn"
      ? `<strong>SurePay এ আপনাকে স্বাগতম! 🎉</strong><br><br>
        
        আমি আপনাকে নিম্নলিখিত বিষয়ে সাহায্য করতে পারি:<br><br>
        
        <strong>📱 সেবাসমূহ:</strong><br>
        • একাউন্ট খোলা<br>
        • টাকা পাঠানো (Send Money)<br>
        • ক্যাশ আউট<br>
        • মোবাইল রিচার্জ<br>
        • বিল পেমেন্ট<br>
        • Add Money<br>
        • মার্চেন্ট পেমেন্ট<br><br>
        
        <strong>💰 চার্জ ও লিমিট:</strong><br>
        • সার্ভিস চার্জ<br>
        • লেনদেন লিমিট<br>
        • ব্যালেন্স লিমিট<br><br>
        
        <strong>🔒 নিরাপত্তা:</strong><br>
        • পিন পরিবর্তন<br>
        • বায়োমেট্রিক সেটআপ<br>
        • একাউন্ট নিরাপত্তা<br><br>
        
        <strong>❓ সমস্যা সমাধান:</strong><br>
        • পিন ভুলে গেছি<br>
        • ভুল লেনদেন<br>
        • একাউন্ট ব্লক<br>
        • অ্যাপ সমস্যা<br><br>
        
        কোন বিষয়ে বিস্তারিত জানতে চান? শুধু প্রশ্ন করুন!`
      : `<strong>Welcome to SurePay! 🎉</strong><br><br>
        
        I can help you with the following:<br><br>
        
        <strong>📱 Services:</strong><br>
        • Account Opening<br>
        • Send Money<br>
        • Cash Out<br>
        • Mobile Recharge<br>
        • Bill Payment<br>
        • Add Money<br>
        • Merchant Payment<br><br>
        
        <strong>💰 Charges & Limits:</strong><br>
        • Service Charges<br>
        • Transaction Limits<br>
        • Balance Limits<br><br>
        
        <strong>🔒 Security:</strong><br>
        • PIN Change<br>
        • Biometric Setup<br>
        • Account Security<br><br>
        
        <strong>❓ Problem Solving:</strong><br>
        • Forgot PIN<br>
        • Wrong Transaction<br>
        • Account Blocked<br>
        • App Issues<br><br>
        
        What would you like to know more about? Just ask!`;
  }

  getIntelligentDefaultResponse(message) {
    // Analyze the message for potential intent
    if (message.length < 5) {
      return this.language === "bn"
        ? "আপনার প্রশ্ন আরেকটু বিস্তারিত করে বলবেন? যেমন: 'কিভাবে টাকা পাঠাবো?' বা 'Cash Out চার্জ কত?'"
        : "Could you please elaborate your question? For example: 'How to send money?' or 'What are Cash Out charges?'";
    }

    return this.language === "bn"
      ? `আপনার প্রশ্ন "${message}" সম্পর্কে আরও স্পষ্ট করে বলবেন?<br><br>
        আপনি হয়তো জানতে চাচ্ছেন:<br>
        • কিভাবে এই সেবা ব্যবহার করবেন?<br>
        • এর চার্জ কত?<br>
        • কোন সমস্যার সমাধান?<br><br>
        অথবা 'সাহায্য' লিখুন সব অপশন দেখতে।`
      : `Could you please clarify your question about "${message}"?<br><br>
        You might want to know:<br>
        • How to use this service?<br>
        • What are the charges?<br>
        • Solution to a problem?<br><br>
        Or type 'help' to see all options.`;
  }

  // Helper methods
  messageContainsKeywords(message, keywords) {
    return keywords.some((keyword) => keyword && message.includes(keyword));
  }

  isGreeting(message) {
    const greetings = [
      "hi",
      "hello",
      "hey",
      "হাই",
      "হ্যালো",
      "নমস্কার",
      "শুভ",
      "good",
      "সালাম",
      "আসসালামু",
    ];
    return greetings.some((greeting) => message.includes(greeting));
  }

  isAskingForHelp(message) {
    const helpKeywords = [
      "help",
      "সাহায্য",
      "হেল্প",
      "কি করতে পারি",
      "what can",
      "অপশন",
      "option",
      "মেনু",
      "menu",
    ];
    return helpKeywords.some((keyword) => message.includes(keyword));
  }

  isAskingAboutSpecificFeature(message) {
    const featureKeywords = [
      "রিচার্জ",
      "recharge",
      "যোগ করা",
      "add money",
      "ব্যালেন্স",
      "balance",
      "ইতিহাস",
      "history",
      "নিরাপত্তা",
      "security",
      "পিন",
      "pin",
    ];
    return featureKeywords.some((keyword) => message.includes(keyword));
  }

  isAskingAboutTransaction(message) {
    const transactionKeywords = [
      "পাঠানো",
      "send",
      "ক্যাশ আউট",
      "cash out",
      "লেনদেন",
      "transaction",
      "টাকা",
      "money",
    ];
    return transactionKeywords.some((keyword) => message.includes(keyword));
  }

  isAskingAboutSecurity(message) {
    const securityKeywords = [
      "নিরাপদ",
      "secure",
      "পিন",
      "pin",
      "পাসওয়ার্ড",
      "password",
      "বায়োমেট্রিক",
      "biometric",
    ];
    return securityKeywords.some((keyword) => message.includes(keyword));
  }

  isAskingAboutProblem(message) {
    const problemKeywords = [
      "সমস্যা",
      "problem",
      "ভুল",
      "wrong",
      "কাজ করছে না",
      "not working",
      "ব্লক",
      "block",
      "ভুলে",
      "forgot",
    ];
    return problemKeywords.some((keyword) => message.includes(keyword));
  }

  checkFAQs(message) {
    for (const category of Object.values(this.knowledgeBase.faqs)) {
      for (const faq of category) {
        if (
          message.includes(faq.q[this.language].toLowerCase()) ||
          message.includes(faq.q.en.toLowerCase())
        ) {
          return `<strong>${faq.q[this.language]}</strong><br><br>${
            faq.a[this.language]
          }`;
        }
      }
    }
    return null;
  }
}

// Chat UI Controller with Enhanced Banking AI
document.addEventListener("DOMContentLoaded", function () {
  // Initialize enhanced AI
  const bankingAI = new EnhancedBankingAI();

  // Chat elements
  const chatButton = document.querySelector(".live-chat");
  const chatPopup = document.querySelector(".chat-popup");

  if (!chatButton || !chatPopup) {
    console.error("Chat elements not found!");
    return;
  }

  let isOpen = false;

  // Show chat popup from bottom
  chatButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (!isOpen) {
      // Hide chat button
      chatButton.classList.add("hidden");

      // Show chat with animation from very bottom
      chatPopup.style.display = "block";
      // Force browser to recalculate styles
      void chatPopup.offsetWidth;
      // Add show class for animation
      chatPopup.classList.add("show");
      isOpen = true;

      // Initialize chat if first time
      if (!chatPopup.dataset.initialized) {
        initializeChat();
        chatPopup.dataset.initialized = "true";
      }
    }
  });

  // Close chat
  const closeBtn = chatPopup.querySelector(".close-chat");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      chatPopup.classList.remove("show");
      // Wait for animation to complete
      setTimeout(() => {
        chatPopup.style.display = "none";
        // Show chat button again
        chatButton.classList.remove("hidden");
      }, 500);
      isOpen = false;
    });
  }

  // Initialize chat
  function initializeChat() {
    const chatBody = chatPopup.querySelector(".chat-body");
    if (!chatBody) return;

    // Clear existing messages
    chatBody.innerHTML = "";

    // Add welcome messages
    addMessage("bot", "Good Morning!");
    addMessage("bot", "Welcome to SurePay Customer Service");

    // Language selection
    const langDiv = document.createElement("div");
    langDiv.className = "chat-message bot-message";
    langDiv.innerHTML = `
          <div class="message-bubble">
              Please select your preferred language<br>
              অনুগ্রহ করে আপনার পছন্দের ভাষা নির্বাচন করুন
              <div class="language-options">
                  <button class="lang-btn" data-lang="en">English</button>
                  <button class="lang-btn selected" data-lang="bn">বাংলা</button>
              </div>
          </div>
          <div class="message-time">${getCurrentTime()}</div>
      `;
    chatBody.appendChild(langDiv);

    // Language button handlers
    const langButtons = langDiv.querySelectorAll(".lang-btn");
    langButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        bankingAI.setLanguage(this.dataset.lang);
        langButtons.forEach((b) => b.classList.remove("selected"));
        this.classList.add("selected");

        addMessage("user", this.textContent);

        setTimeout(() => {
          const greeting = bankingAI.getResponse("hello");
          addMessage("bot", greeting);
          showQuickReplies();
        }, 500);
      });
    });
  }

  // Show quick replies
  function showQuickReplies() {
    const chatBody = chatPopup.querySelector(".chat-body");
    if (!chatBody) return;

    // Remove existing quick replies
    const existingReplies = chatBody.querySelector(".quick-replies");
    if (existingReplies) {
      existingReplies.remove();
    }

    const quickOptions =
      bankingAI.language === "bn"
        ? [
            "একাউন্ট খোলা",
            "টাকা পাঠান",
            "ক্যাশ আউট",
            "মোবাইল রিচার্জ",
            "বিল পেমেন্ট",
            "এড মানি",
            "চার্জ ও লিমিট",
            "সাহায্য",
          ]
        : [
            "Account Opening",
            "Send Money",
            "Cash Out",
            "Mobile Recharge",
            "Bill Payment",
            "Add Money",
            "Charges & Limits",
            "Help",
          ];

    const replyDiv = document.createElement("div");
    replyDiv.className = "quick-replies";

    quickOptions.forEach((option) => {
      const button = document.createElement("button");
      button.className = "quick-reply-btn";
      button.textContent = option;
      button.addEventListener("click", () => {
        const chatInput = chatPopup.querySelector(".chat-input");
        if (chatInput) {
          chatInput.value = option;
          sendMessage();
        }
      });
      replyDiv.appendChild(button);
    });

    chatBody.appendChild(replyDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Get current time
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  }

  // Add message to chat
  function addMessage(type, text) {
    const chatBody = chatPopup.querySelector(".chat-body");
    if (!chatBody) return;

    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${type}-message`;
    messageDiv.innerHTML = `
          <div class="message-bubble">${text}</div>
          <div class="message-time">${getCurrentTime()}</div>
      `;

    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Replace the response generation part with enhanced AI
  function getAIResponse(message) {
    return bankingAI.getResponse(message);
  }

  // Send message
  const chatInput = chatPopup.querySelector(".chat-input");
  const sendBtn = chatPopup.querySelector(".send-btn");

  function sendMessage() {
    if (!chatInput || !chatInput.value.trim()) return;

    const message = chatInput.value.trim();
    addMessage("user", message);
    chatInput.value = "";

    // Remove previous quick replies
    const quickReplies = chatPopup.querySelector(".quick-replies");
    if (quickReplies) {
      quickReplies.remove();
    }

    // Show typing indicator
    showTypingIndicator();

    // Simulate response with enhanced AI
    setTimeout(() => {
      removeTypingIndicator();
      const response = getAIResponse(message);
      addMessage("bot", response);

      // Show quick replies after bot response
      setTimeout(() => showQuickReplies(), 500);
    }, 1000 + Math.random() * 500);
  }

  // Show typing indicator
  function showTypingIndicator() {
    const chatBody = chatPopup.querySelector(".chat-body");
    if (!chatBody) return;

    const typingDiv = document.createElement("div");
    typingDiv.className = "chat-message bot-message";
    typingDiv.id = "typing-indicator";
    typingDiv.innerHTML = `
          <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
          </div>
      `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Remove typing indicator
  function removeTypingIndicator() {
    const typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", sendMessage);
  }

  if (chatInput) {
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }
});
