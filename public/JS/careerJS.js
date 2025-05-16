// Career Page JavaScript - Enhanced with improved filtering functionality
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const sidebarMenu = document.querySelector(".sidebar-menu");
  const sidebarClose = document.querySelector(".sidebar-close");

  if (mobileMenuToggle && sidebarMenu && sidebarClose) {
    mobileMenuToggle.addEventListener("click", function () {
      sidebarMenu.classList.add("open");
      document.body.style.overflow = "hidden";
    });

    sidebarClose.addEventListener("click", function () {
      sidebarMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  }

  // Testimonial Slider Functionality
  const testimonialSlider = document.querySelector(".testimonial-slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  if (testimonialSlider && prevBtn && nextBtn && testimonialCards.length > 0) {
    const cardWidth = testimonialCards[0].offsetWidth + 30; // Card width + gap
    let currentIndex = 0;
    const maxIndex = testimonialCards.length - 1;

    // Initial setup - show only one testimonial at a time on mobile
    function updateSliderVisibility() {
      const isMobile = window.innerWidth <= 768;

      testimonialCards.forEach((card, index) => {
        if (isMobile) {
          card.style.display = index === currentIndex ? "block" : "none";
        } else {
          card.style.display = "block";
        }
      });
    }

    // Scroll to specific testimonial
    function scrollToTestimonial(index) {
      currentIndex = index;

      if (window.innerWidth <= 768) {
        // On mobile, just show/hide cards
        updateSliderVisibility();
      } else {
        // On desktop, smooth scroll
        testimonialSlider.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      }
    }

    // Event listeners for buttons
    prevBtn.addEventListener("click", () => {
      currentIndex = Math.max(0, currentIndex - 1);
      scrollToTestimonial(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = Math.min(maxIndex, currentIndex + 1);
      scrollToTestimonial(currentIndex);
    });

    // Update on window resize
    window.addEventListener("resize", updateSliderVisibility);

    // Initial setup
    updateSliderVisibility();

    // Add touch swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    testimonialSlider.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      false
    );

    testimonialSlider.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      false
    );

    function handleSwipe() {
      if (touchEndX < touchStartX) {
        // Swipe left - go to next
        nextBtn.click();
      } else if (touchEndX > touchStartX) {
        // Swipe right - go to previous
        prevBtn.click();
      }
    }
  }

  // Enhanced Job Search Functionality
  const searchInput = document.querySelector(".search-bar input");
  const departmentSelect = document.querySelector('select[name="department"]');
  const locationSelect = document.querySelector('select[name="location"]');
  const jobTypeSelect = document.querySelector('select[name="job-type"]');
  const searchButton = document.querySelector(".search-bar button");
  const jobListingsContainer = document.querySelector(".job-listings");
  const loadMoreBtn = document.getElementById("load-more-jobs");
  const resultsCountElement = document.getElementById("results-count");
  const searchResultsStats = document.querySelector(".search-results-stats");
  const filteringTips = document.querySelector(".filtering-tips");

  // All job data
  const allJobs = [
    {
      id: "job1",
      title: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "ঢাকা",
      department: "টেকনোলজি",
      posted: "১৪ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ার খুঁজছি যিনি আমাদের ফিনটেক প্ল্যাটফর্ম SurePay জন্য দায়িত্ব নিবেন।",
    },
    {
      id: "job2",
      title: "প্রোডাক্ট ম্যানেজার",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "ঢাকা",
      department: "প্রোডাক্ট",
      posted: "৭ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন দক্ষ প্রোডাক্ট ম্যানেজার খুঁজছি যিনি আমাদের ডিজিটাল পেমেন্ট সলিউশনগুলো SurePay নেতৃত্ব দিবেন।",
    },
    {
      id: "job3",
      title: "মার্কেটিং স্পেশালিস্ট",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "ঢাকা",
      department: "মার্কেটিং",
      posted: "১০ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন সৃজনশীল মার্কেটিং স্পেশালিস্ট খুঁজছি যিনি আমাদের ডিজিটাল মার্কেটিং ক্যাম্পেইন পরিচালনা করবেন।",
    },
    {
      id: "job4",
      title: "ডাটা সায়েন্টিস্ট",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "ঢাকা",
      department: "ডাটা অ্যানালিটিক্স",
      posted: "৫ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন অভিজ্ঞ ডাটা সায়েন্টিস্ট খুঁজছি যিনি ব্যবহারকারীদের আচরণ বিশ্লেষণ করে সেবার মান উন্নত করবেন।",
    },
    {
      id: "job5",
      title: "ক্যাস্টমার সাপোর্ট স্পেশালিস্ট",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "চট্টগ্রাম",
      department: "কাস্টমার সার্ভিস",
      posted: "২ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন উৎসাহী কাস্টমার সাপোর্ট স্পেশালিস্ট খুঁজছি যিনি আমাদের ব্যবহারকারীদের সর্বোচ্চ সেবা প্রদান করবেন।",
    },
    {
      id: "job6",
      title: "ফিন্যান্সিয়াল অ্যানালিস্ট",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "ঢাকা",
      department: "ফিন্যান্স",
      posted: "৫ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন দক্ষ ফিন্যান্সিয়াল অ্যানালিস্ট খুঁজছি যিনি কোম্পানির ফিন্যান্সিয়াল পারফরম্যান্স বিশ্লেষণ করবেন।",
    },
    {
      id: "job7",
      title: "মার্কেটিং ম্যানেজার",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "সিলেট",
      department: "মার্কেটিং",
      posted: "৭ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন অভিজ্ঞ মার্কেটিং ম্যানেজার খুঁজছি যিনি আমাদের মার্কেটিং কৌশল বিকাশ এবং বাস্তবায়ন করবেন।",
    },
    {
      id: "job8",
      title: "ফুল স্ট্যাক ডেভেলপার",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "রাজশাহী",
      department: "টেকনোলজি",
      posted: "৩ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন দক্ষ ফুল স্ট্যাক ডেভেলপার খুঁজছি যিনি আমাদের ওয়েব অ্যাপ্লিকেশন বিকাশ এবং রক্ষণাবেক্ষণ করবেন।",
    },
    {
      id: "job9",
      title: "এন্টারপ্রাইজ আর্কিটেক্ট",
      type: "part-time",
      typeDisplay: "পার্ট-টাইম",
      location: "ঢাকা",
      department: "টেকনোলজি",
      posted: "৮ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন অভিজ্ঞ এন্টারপ্রাইজ আর্কিটেক্ট খুঁজছি যিনি আমাদের সিস্টেম আর্কিটেকচার ডিজাইন এবং উন্নতি করবেন।",
    },
    {
      id: "job10",
      title: "ডাটা অ্যানালিটিকস স্পেশালিস্ট",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "চট্টগ্রাম",
      department: "ডাটা অ্যানালিটিক্স",
      posted: "১০ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন দক্ষ ডাটা অ্যানালিটিকস স্পেশালিস্ট খুঁজছি যিনি ব্যবহারকারীদের আচরণ বিশ্লেষণ করে সেবার মান উন্নত করবেন।",
    },
    {
      id: "job11",
      title: "ইউআই/ইউএক্স ডিজাইনার",
      type: "contract",
      typeDisplay: "কন্ট্রাক্ট",
      location: "ঢাকা",
      department: "ডিজাইন",
      posted: "১২ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন সৃজনশীল ইউআই/ইউএক্স ডিজাইনার খুঁজছি যিনি আমাদের মোবাইল অ্যাপ ও ওয়েবসাইট ডিজাইন করবেন।",
    },
    {
      id: "job12",
      title: "DevOps ইঞ্জিনিয়ার",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "খুলনা",
      department: "টেকনোলজি",
      posted: "৯ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন অভিজ্ঞ DevOps ইঞ্জিনিয়ার খুঁজছি যিনি আমাদের সিআই/সিডি পাইপলাইন এবং ক্লাউড ইনফ্রাস্ট্রাকচার পরিচালনা করবেন।",
    },
    {
      id: "job13",
      title: "এইচআর ম্যানেজার",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "ঢাকা",
      department: "এইচআর",
      posted: "৬ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন অভিজ্ঞ এইচআর ম্যানেজার খুঁজছি যিনি কর্মী নিয়োগ, উন্নয়ন এবং সংরক্ষণ কার্যক্রম পরিচালনা করবেন।",
    },
    {
      id: "job14",
      title: "ফ্রন্টএন্ড ডেভেলপার",
      type: "internship",
      typeDisplay: "ইন্টার্নশিপ",
      location: "সিলেট",
      department: "টেকনোলজি",
      posted: "৪ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন উদ্যমী ফ্রন্টএন্ড ডেভেলপার খুঁজছি যিনি আমাদের ইউজার ইন্টারফেস ডেভেলপমেন্টে সহায়তা করবেন।",
    },
    {
      id: "job15",
      title: "ব্যাকএন্ড ডেভেলপার",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "বরিশাল",
      department: "টেকনোলজি",
      posted: "১১ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন দক্ষ ব্যাকএন্ড ডেভেলপার খুঁজছি যিনি আমাদের সার্ভার-সাইড অ্যাপ্লিকেশন ডেভেলপমেন্টে নেতৃত্ব দিবেন।",
    },
    {
      id: "job16",
      title: "টেকনিক্যাল সাপোর্ট ইঞ্জিনিয়ার",
      type: "part-time",
      typeDisplay: "পার্ট-টাইম",
      location: "রাজশাহী",
      department: "কাস্টমার সার্ভিস",
      posted: "৮ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন দক্ষ টেকনিক্যাল সাপোর্ট ইঞ্জিনিয়ার খুঁজছি যিনি আমাদের গ্রাহকদের টেকনিক্যাল সমস্যা সমাধানে সহায়তা করবেন।",
    },
    {
      id: "job17",
      title: "ব্র্যান্ড ম্যানেজার",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "ঢাকা",
      department: "মার্কেটিং",
      posted: "৭ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন উদ্ভাবনী ব্র্যান্ড ম্যানেজার খুঁজছি যিনি আমাদের ব্র্যান্ড স্ট্র্যাটেজি ও পরিচিতি উন্নত করবেন।",
    },
    {
      id: "job18",
      title: "কনটেন্ট রাইটার",
      type: "contract",
      typeDisplay: "কন্ট্রাক্ট",
      location: "চট্টগ্রাম",
      department: "মার্কেটিং",
      posted: "৫ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন সৃজনশীল কনটেন্ট রাইটার খুঁজছি যিনি আমাদের মার্কেটিং ও ব্র্যান্ডিং কনটেন্ট তৈরি করবেন।",
    },
    {
      id: "job19",
      title: "অ্যাকাউন্টস ম্যানেজার",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "খুলনা",
      department: "ফিন্যান্স",
      posted: "৬ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন অভিজ্ঞ অ্যাকাউন্টস ম্যানেজার খুঁজছি যিনি আমাদের অ্যাকাউন্টিং ও ফিন্যান্সিয়াল অপারেশন পরিচালনা করবেন।",
    },
    {
      id: "job20",
      title: "ইন্টারনাল অডিটর",
      type: "full-time",
      typeDisplay: "ফুল-টাইম",
      location: "ঢাকা",
      department: "ফিন্যান্স",
      posted: "৯ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন মেধাবী ইন্টারনাল অডিটর খুঁজছি যিনি আমাদের আর্থিক প্রতিবেদন ও নিয়ন্ত্রণ ব্যবস্থা পর্যালোচনা করবেন।",
    },
  ];

  // Initial visible jobs count
  const initialJobsCount = 4;
  let visibleJobsCount = initialJobsCount;
  let filteredJobs = [...allJobs];
  let isShowingAll = false;

  // Initially render only the first 4 jobs
  function renderJobs() {
    // Clear existing job listings
    jobListingsContainer.innerHTML = "";

    // Get the jobs to display based on current filter and visibility count
    const jobsToDisplay = filteredJobs.slice(0, visibleJobsCount);

    if (jobsToDisplay.length === 0) {
      // No jobs match the filter criteria
      jobListingsContainer.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3>কোন চাকরির সুযোগ পাওয়া যায়নি</h3>
          <p>অনুগ্রহ করে আপনার সার্চ ক্রাইটেরিয়া পরিবর্তন করুন অথবা সকল ফিল্টার রিসেট করুন।</p>
          <button class="btn-secondary reset-filters"><i class="fas fa-redo"></i> ফিল্টার রিসেট করুন</button>
        </div>
      `;

      // Add event listener to the reset button
      const resetButton = document.querySelector(".reset-filters");
      if (resetButton) {
        resetButton.addEventListener("click", resetFilters);
      }
    } else {
      // Render each job card
      jobsToDisplay.forEach((job) => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
        jobCard.dataset.jobId = job.id;

        jobCard.innerHTML = `
          <div class="job-header">
            <h3>${job.title}</h3>
            <span class="job-type ${job.type}">${job.typeDisplay}</span>
          </div>
          <div class="job-details">
            <div class="job-info">
              <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
              <span><i class="fas fa-building"></i> ${job.department}</span>
              <span><i class="fas fa-calendar-alt"></i> ${job.posted}</span>
            </div>
            <p>${job.description}</p>
            <div class="job-footer">
              <a href="#" class="btn-secondary view-details" data-job-id="${job.id}">বিস্তারিত দেখুন</a>
              <a href="#" class="btn-primary apply-now" data-job-id="${job.id}">আবেদন করুন</a>
            </div>
          </div>
        `;

        jobListingsContainer.appendChild(jobCard);
      });
    }

    // Update search results stats
    if (searchResultsStats) {
      if (filteredJobs.length > 0) {
        searchResultsStats.style.display = "block";
        resultsCountElement.textContent = filteredJobs.length;
      } else {
        searchResultsStats.style.display = "none";
      }
    }

    // Show or hide the "Load More" button based on whether there are more jobs to show
    if (filteredJobs.length > visibleJobsCount) {
      loadMoreBtn.style.display = "block";
      loadMoreBtn.innerHTML = `আরও দেখুন (${
        filteredJobs.length - visibleJobsCount
      }) <i class="fas fa-chevron-down"></i>`;
    } else if (
      filteredJobs.length > initialJobsCount &&
      visibleJobsCount === filteredJobs.length
    ) {
      // Show "Show Less" button when all jobs are displayed
      loadMoreBtn.style.display = "block";
      loadMoreBtn.innerHTML = `কম দেখুন <i class="fas fa-chevron-up"></i>`;
      isShowingAll = true;
    } else {
      loadMoreBtn.style.display = "none";
    }

    // Add animation to the job cards
    const jobCards = document.querySelectorAll(".job-card");
    jobCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 100); // Staggered animation
    });

    // Initialize modal events for the new job cards
    initializeModalEvents();
  }

  // Reset all filters
  function resetFilters() {
    searchInput.value = "";
    departmentSelect.value = "";
    locationSelect.value = "";
    jobTypeSelect.value = "";
    filteredJobs = [...allJobs];
    visibleJobsCount = initialJobsCount;
    isShowingAll = false;
    renderJobs();
  }

  // Filter jobs based on search criteria
  function filterJobs() {
    const searchTerm = searchInput.value.toLowerCase();
    const department = departmentSelect.value.toLowerCase();
    const location = locationSelect.value.toLowerCase();
    const jobType = jobTypeSelect.value.toLowerCase();

    // Apply all filters
    filteredJobs = allJobs.filter((job) => {
      const matchesSearch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm);

      const matchesDepartment =
        department === "" || job.department.toLowerCase() === department;

      const matchesLocation =
        location === "" || job.location.toLowerCase() === location;

      const matchesJobType =
        jobType === "" || job.type.toLowerCase() === jobType;

      return (
        matchesSearch && matchesDepartment && matchesLocation && matchesJobType
      );
    });

    // Reset visible jobs count to initial value after filtering
    visibleJobsCount = initialJobsCount;
    isShowingAll = false;

    // Render the filtered jobs
    renderJobs();

    // Update filtering tips visibility
    updateFilteringTipsVisibility();
  }

  // Update filtering tips visibility based on search results
  function updateFilteringTipsVisibility() {
    if (filteringTips) {
      // Show tips only when there are few results or many filters are applied
      if (filteredJobs.length < 5 && allJobs.length > 10) {
        filteringTips.style.display = "flex";
      } else {
        filteringTips.style.display = "none";
      }
    }
  }

  // Initialize job list and event listeners
  if (jobListingsContainer && loadMoreBtn) {
    // Style the filtering tips with white text
    if (filteringTips) {
      filteringTips.style.color = "white";
      const tipHeading = filteringTips.querySelector("h4");
      if (tipHeading) {
        tipHeading.style.color = "white";
      }
    }

    // Initial render
    renderJobs();

    // Load more button event
    loadMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();

      if (isShowingAll) {
        // If already showing all jobs, go back to showing initial count
        visibleJobsCount = initialJobsCount;
        isShowingAll = false;
      } else {
        // Show all remaining jobs at once
        visibleJobsCount = filteredJobs.length;
        isShowingAll = true;
      }

      // Re-render jobs with updated count
      renderJobs();

      // Scroll slightly to show new content
      if (!isShowingAll) {
        window.scrollTo({
          top: document.getElementById("job-opportunities").offsetTop - 100,
          behavior: "smooth",
        });
      }
    });

    // Search button click
    if (searchButton) {
      searchButton.addEventListener("click", function (e) {
        e.preventDefault();
        filterJobs();
      });
    }

    // Filter change events
    if (searchInput) {
      searchInput.addEventListener("input", filterJobs);
      // Also add enter key support
      searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          filterJobs();
        }
      });
    }

    if (departmentSelect)
      departmentSelect.addEventListener("change", filterJobs);
    if (locationSelect) locationSelect.addEventListener("change", filterJobs);
    if (jobTypeSelect) jobTypeSelect.addEventListener("change", filterJobs);
  }

  // Job details data (simulated database)
  const jobDetailsData = {
    job1: {
      title: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
      type: "ফুল-টাইম",
      location: "ঢাকা",
      department: "টেকনোলজি",
      posted: "১৪ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ার খুঁজছি যিনি আমাদের ফিনটেক প্ল্যাটফর্ম বিকাশের জন্য দায়িত্ব নিবেন। এই ভূমিকায়, আপনি আমাদের টেকনিক্যাল টিমের একটি গুরুত্বপূর্ণ অংশ হবেন এবং বিকাশের উদ্ভাবনী প্রোডাক্ট ও সার্ভিসগুলি বিকাশে সহায়তা করবেন।",
      responsibilities: [
        "হাই-পারফরম্যান্স, স্কেলেবল এবং সিকিউর ওয়েব অ্যাপ্লিকেশন ডিজাইন ও ডেভেলপ করা",
        "কোড রিভিউ, পেয়ার প্রোগ্রামিং এবং টেকনিক্যাল মেন্টরিং এর মাধ্যমে টিমের অন্যান্য ডেভেলপারদের সাহায্য করা",
        "প্রোডাক্ট ম্যানেজমেন্ট এবং ইউএক্স টিমের সাথে কাজ করে উৎকৃষ্ট ব্যবহারকারী অভিজ্ঞতা নিশ্চিত করা",
        "সিস্টেম আর্কিটেকচার ডিজাইন এবং উন্নত করা",
        "সমস্যা সমাধান এবং ডিবাগিং",
        "নতুন প্রযুক্তি ও টুল সম্পর্কে জানা এবং প্রয়োজন অনুসারে প্রয়োগ করা",
      ],
      qualifications: [
        "কম্পিউটার সায়েন্স বা সংশ্লিষ্ট ক্ষেত্রে স্নাতক ডিগ্রি",
        "সফটওয়্যার ডেভেলপমেন্টে কমপক্ষে ৫ বছরের অভিজ্ঞতা",
        "জাভা, স্প্রিংবুট, নোড.জেএস, রিয়েক্ট বা এঙ্গুলার সহ আধুনিক ফ্রেমওয়ার্ক ও প্রযুক্তিতে দক্ষতা",
        "ক্লাউড প্ল্যাটফর্ম (AWS, GCP, Azure) এর অভিজ্ঞতা",
        "RESTful API ডিজাইন ও ইমপ্লিমেন্টেশনের অভিজ্ঞতা",
        "ডাটাবেস ডিজাইন এবং SQL/NoSQL ডাটাবেসের অভিজ্ঞতা",
        "মাইক্রোসার্ভিস আর্কিটেকচারের সাথে পরিচিতি",
        "সিআই/সিডি পাইপলাইন এবং কন্টেইনারাইজেশন (ডকার, কুবারনেটিস) এর অভিজ্ঞতা",
      ],
      benefits: [
        "আকর্ষণীয় বেতন ও বেনিফিট প্যাকেজ",
        "প্রতিযোগিতামূলক স্বাস্থ্য বীমা",
        "উদ্ভাবনী প্রযুক্তিতে কাজ করার সুযোগ",
        "পেশাদার বিকাশের সুযোগ",
        "অনন্য কর্পোরেট সংস্কৃতি",
        "হাইব্রিড কাজের পরিবেশ",
      ],
    },
    job2: {
      title: "প্রোডাক্ট ম্যানেজার",
      type: "ফুল-টাইম",
      location: "ঢাকা",
      department: "প্রোডাক্ট",
      posted: "৭ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন দক্ষ প্রোডাক্ট ম্যানেজার খুঁজছি যিনি আমাদের ডিজিটাল পেমেন্ট সলিউশনগুলো বিকাশে নেতৃত্ব দিবেন। এই ভূমিকায়, আপনি প্রোডাক্ট স্ট্র্যাটেজি তৈরি, বাস্তবায়ন এবং পরীক্ষা-নিরীক্ষার মাধ্যমে বিকাশের উন্নতিতে গুরুত্বপূর্ণ ভূমিকা পালন করবেন।",
      responsibilities: [
        "প্রোডাক্ট বিজনেস কেস ও রোডম্যাপ তৈরি করা",
        "মার্কেট রিসার্চ ও প্রতিযোগীদের বিশ্লেষণ করা",
        "ইউজার স্টোরি ও প্রোডাক্ট স্পেসিফিকেশন তৈরি করা",
        "টেকনিক্যাল টিম এবং স্টেকহোল্ডারদের সাথে নিয়মিত যোগাযোগ রাখা",
        "প্রোডাক্ট লঞ্চ ও মার্কেটিং ক্যাম্পেইন পরিচালনা করা",
        "প্রোডাক্ট পারফরম্যান্স ট্র্যাক ও রিপোর্ট করা",
      ],
      qualifications: [
        "প্রোডাক্ট ম্যানেজমেন্টে কমপক্ষে ৩ বছরের অভিজ্ঞতা",
        "ফিনটেক বা ডিজিটাল পেমেন্ট সেক্টরে কাজের অভিজ্ঞতা",
        "ডাটা ড্রিভেন ডিসিশন মেকিং ও এনালিটিক্স টুলস ব্যবহারের অভিজ্ঞতা",
        "ব্যবহারকারীদের চাহিদা বুঝতে এবং সমাধান তৈরি করতে সক্ষম",
        "প্রোজেক্ট ম্যানেজমেন্ট টুলস (জিরা, কনফ্লুয়েন্স, ট্রেলো) এর সাথে পরিচিতি",
        "সফল প্রোডাক্ট লঞ্চ ও স্কেল করার ট্র্যাক রেকর্ড",
      ],
      benefits: [
        "আকর্ষণীয় বেতন ও বেনিফিট প্যাকেজ",
        "প্রতিযোগিতামূলক স্বাস্থ্য বীমা",
        "ইনোভেটিভ টেকনোলজি ও সার্ভিসের সাথে কাজ করার সুযোগ",
        "পেশাদার বিকাশের সুযোগ",
        "অনন্য কর্পোরেট সংস্কৃতি",
        "হাইব্রিড কাজের পরিবেশ",
      ],
    },
    job3: {
      title: "মার্কেটিং স্পেশালিস্ট",
      type: "ফুল-টাইম",
      location: "ঢাকা",
      department: "মার্কেটিং",
      posted: "১০ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন সৃজনশীল মার্কেটিং স্পেশালিস্ট খুঁজছি যিনি আমাদের ডিজিটাল মার্কেটিং ক্যাম্পেইন পরিচালনা করবেন। এই ভূমিকায়, আপনি বিকাশের ব্র্যান্ড প্রচার ও ডিজিটাল প্রেজেন্স বাড়াতে গুরুত্বপূর্ণ ভূমিকা পালন করবেন।",
      responsibilities: [
        "ডিজিটাল মার্কেটিং স্ট্র্যাটেজি তৈরি ও বাস্তবায়ন করা",
        "সোশ্যাল মিডিয়া ক্যাম্পেইন পরিচালনা করা",
        "ইমেইল মার্কেটিং ক্যাম্পেইন ডিজাইন ও পরিচালনা করা",
        "SEO/SEM ক্যাম্পেইন পরিচালনা করা",
        "মার্কেটিং কনটেন্ট তৈরি করা",
        "মার্কেটিং পারফরম্যান্স অ্যানালাইসিস ও রিপোর্টিং করা",
      ],
      qualifications: [
        "মার্কেটিং বা সংশ্লিষ্ট ক্ষেত্রে স্নাতক ডিগ্রি",
        "ডিজিটাল মার্কেটিংয়ে কমপক্ষে ২ বছরের অভিজ্ঞতা",
        "সোশ্যাল মিডিয়া প্ল্যাটফর্ম (ফেসবুক, ইনস্টাগ্রাম, লিংকডইন) পরিচালনার অভিজ্ঞতা",
        "SEO/SEM টুলস ও টেকনিকের অভিজ্ঞতা",
        "Google Analytics ও অন্যান্য মার্কেটিং অ্যানালিটিক্স টুলস ব্যবহারের অভিজ্ঞতা",
        "সৃজনশীল মার্কেটিং কনটেন্ট তৈরি করতে সক্ষম",
      ],
      benefits: [
        "আকর্ষণীয় বেতন ও বেনিফিট প্যাকেজ",
        "প্রতিযোগিতামূলক স্বাস্থ্য বীমা",
        "সৃজনশীল কাজের পরিবেশ",
        "পেশাদার বিকাশের সুযোগ",
        "অনন্য কর্পোরেট সংস্কৃতি",
        "হাইব্রিড কাজের পরিবেশ",
      ],
    },
    job4: {
      title: "ডাটা সায়েন্টিস্ট",
      type: "ফুল-টাইম",
      location: "ঢাকা",
      department: "ডাটা অ্যানালিটিক্স",
      posted: "৫ দিন আগে পোস্ট করা হয়েছে",
      description:
        "আমরা একজন অভিজ্ঞ ডাটা সায়েন্টিস্ট খুঁজছি যিনি ব্যবহারকারীদের আচরণ বিশ্লেষণ করে সেবার মান উন্নত করবেন। এই ভূমিকায়, আপনি বিকাশের ডাটা অ্যানালিটিক্স টিমের একটি গুরুত্বপূর্ণ অংশ হবেন।",
      responsibilities: [
        "ব্যবহারকারীদের আচরণ বিশ্লেষণ করা",
        "প্রেডিক্টিভ মডেল তৈরি করা",
        "ডাটা ভিজ্যুয়ালাইজেশন ও রিপোর্টিং",
        "ফ্রড ডিটেকশন ও প্রিভেনশন সিস্টেম উন্নত করা",
        "মেশিন লার্নিং অ্যালগরিদম তৈরি ও অপটিমাইজ করা",
        "বিজনেস ইনসাইট তৈরি করা",
      ],
      qualifications: [
        "কম্পিউটার সায়েন্স, স্ট্যাটিস্টিক্স বা সংশ্লিষ্ট ক্ষেত্রে স্নাতক ডিগ্রি",
        "ডাটা সায়েন্সে কমপক্ষে ৩ বছরের অভিজ্ঞতা",
        "পাইথন, আর, এসকিউএল এর সাথে দক্ষতা",
        "মেশিন লার্নিং অ্যালগরিদম ও স্ট্যাটিস্টিক্যাল টেকনিকের অভিজ্ঞতা",
        "ডাটা ভিজ্যুয়ালাইজেশন টুলস (টাবলো, পাওয়ার বিআই, ম্যাটপ্লটলিব) এর অভিজ্ঞতা",
        "বিগ ডাটা টেকনোলজি (হাডুপ, স্পার্ক) এর সাথে পরিচিতি",
      ],
      benefits: [
        "আকর্ষণীয় বেতন ও বেনিফিট প্যাকেজ",
        "প্রতিযোগিতামূলক স্বাস্থ্য বীমা",
        "বিশাল ডাটাসেট নিয়ে কাজ করার সুযোগ",
        "পেশাদার বিকাশের সুযোগ",
        "অনন্য কর্পোরেট সংস্কৃতি",
        "হাইব্রিড কাজের পরিবেশ",
      ],
    },
  };

  // Create detailed data for remaining jobs
  allJobs.forEach((job) => {
    if (!jobDetailsData[job.id]) {
      jobDetailsData[job.id] = {
        title: job.title,
        type: job.typeDisplay,
        location: job.location,
        department: job.department,
        posted: job.posted,
        description: job.description,
        responsibilities: [
          "পজিশন অনুসারে দায়িত্ব পালন",
          "টিমের সাথে সমন্বয় করে কাজ করা",
          "প্রোজেক্ট ও টাস্ক সম্পন্ন করা",
          "রিপোর্টিং ও ডকুমেন্টেশন",
          "সমস্যা সমাধান ও উন্নয়ন কার্যক্রম",
        ],
        qualifications: [
          "সংশ্লিষ্ট ক্ষেত্রে স্নাতক ডিগ্রি",
          "অভিজ্ঞতা ও দক্ষতা",
          "টিমওয়ার্ক ও যোগাযোগ দক্ষতা",
          "সমস্যা সমাধানে দক্ষতা",
          "উদ্ভাবনী চিন্তাধারা",
        ],
        benefits: [
          "আকর্ষণীয় বেতন ও বেনিফিট প্যাকেজ",
          "প্রতিযোগিতামূলক স্বাস্থ্য বীমা",
          "পেশাদার বিকাশের সুযোগ",
          "অনন্য কর্পোরেট সংস্কৃতি",
          "হাইব্রিড কাজের পরিবেশ",
        ],
      };
    }
  });

  // মোডাল ইভেন্ট ইনিশিয়ালাইজ করার ফাংশন
  function initializeModalEvents() {
    // সব "বিস্তারিত দেখুন" বাটন নিন (নতুন যুক্ত করা বাটনসহ)
    const viewDetailsButtons = document.querySelectorAll(".view-details");
    const applyNowButtons = document.querySelectorAll(".apply-now");
    const applyFromModalBtn = document.querySelector(".apply-from-modal");
    const jobApplicationForm = document.getElementById("job-application-form");
    const closeSuccessModalBtn = document.querySelector(".close-success-modal");
    const fileInput = document.getElementById("applicant-resume");
    const fileName = document.querySelector(".file-name");

    // "বিস্তারিত দেখুন" বাটন
    viewDetailsButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const jobId = this.dataset.jobId;
        showJobDetails(jobId);
      });
    });

    // "আবেদন করুন" বাটন
    applyNowButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const jobId = this.dataset.jobId;
        showJobApplication(jobId);
      });
    });

    // জব ডিটেইলস মোডাল থেকে আবেদন করুন
    if (applyFromModalBtn) {
      applyFromModalBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const jobId = this.dataset.jobId;
        hideModal(jobDetailsModal);
        showJobApplication(jobId);
      });
    }

    // জব আবেদন ফর্ম সাবমিশন
    if (jobApplicationForm) {
      jobApplicationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        hideModal(jobApplicationModal);
        showApplicationSuccess();
      });
    }

    // সাকসেস মোডাল বন্ধ করুন
    if (closeSuccessModalBtn) {
      closeSuccessModalBtn.addEventListener("click", function () {
        hideModal(applicationSuccessModal);
      });
    }

    // ফাইল ইনপুট পরিবর্তন - ফাইলের নাম দেখান
    if (fileInput && fileName) {
      fileInput.addEventListener("change", function () {
        if (this.files.length > 0) {
          fileName.textContent = this.files[0].name;
        } else {
          fileName.textContent = "কোনো ফাইল নির্বাচন করা হয়নি";
        }
      });
    }
  }

  // জব ডিটেইলস মোডাল দেখানোর ফাংশন
  function showJobDetails(jobId) {
    const jobData = jobDetailsData[jobId];
    if (!jobData) return;

    // মোডাল টাইটেল সেট করুন
    document.getElementById("job-modal-title").textContent = jobData.title;

    // জব মেটা ডেটা সেট করুন
    const jobTypeModal = document.querySelector(".job-type-modal");
    const jobLocation = document.querySelector(".job-location");
    const jobDepartment = document.querySelector(".job-department");
    const jobDate = document.querySelector(".job-date");

    jobTypeModal.textContent = jobData.type;
    jobTypeModal.className = `job-type-modal ${
      jobData.type === "ফুল-টাইম"
        ? "full-time"
        : jobData.type === "পার্ট-টাইম"
        ? "part-time"
        : jobData.type === "কন্ট্রাক্ট"
        ? "contract"
        : jobData.type === "ইন্টার্নশিপ"
        ? "internship"
        : jobData.type.toLowerCase()
    }`;
    jobLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${jobData.location}`;
    jobDepartment.innerHTML = `<i class="fas fa-building"></i> ${jobData.department}`;
    jobDate.innerHTML = `<i class="fas fa-calendar-alt"></i> ${jobData.posted}`;

    // জব বর্ণনা সেট করুন
    const jobDescription = document.querySelector(".job-description");

    let responsibilitiesHTML = "";
    if (jobData.responsibilities && jobData.responsibilities.length > 0) {
      responsibilitiesHTML = `
        <h3>দায়িত্ব</h3>
        <ul>
            ${jobData.responsibilities
              .map((item) => `<li>${item}</li>`)
              .join("")}
        </ul>
      `;
    }

    let qualificationsHTML = "";
    if (jobData.qualifications && jobData.qualifications.length > 0) {
      qualificationsHTML = `
        <h3>যোগ্যতা</h3>
        <ul>
            ${jobData.qualifications.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      `;
    }

    let benefitsHTML = "";
    if (jobData.benefits && jobData.benefits.length > 0) {
      benefitsHTML = `
        <h3>আমরা যা অফার করি</h3>
        <ul>
            ${jobData.benefits.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      `;
    }

    jobDescription.innerHTML = `
        <h3>চাকরির বিবরণ</h3>
        <p>${jobData.description}</p>
        ${responsibilitiesHTML}
        ${qualificationsHTML}
        ${benefitsHTML}
    `;

    // অ্যাপ্লাই বাটনে জব আইডি সেট করুন
    document.querySelector(".apply-from-modal").dataset.jobId = jobId;

    // মোডাল দেখান
    showModal(jobDetailsModal);
  }

  // আবেদন মোডাল দেখানোর ফাংশন
  function showJobApplication(jobId) {
    const jobData = jobDetailsData[jobId];
    if (!jobData) return;

    // মোডাল টাইটেল সেট করুন
    document.getElementById(
      "application-modal-title"
    ).textContent = `আবেদন করুন - ${jobData.title}`;

    // ফর্ম রিসেট করুন
    const jobApplicationForm = document.getElementById("job-application-form");
    if (jobApplicationForm) {
      jobApplicationForm.reset();
      document.querySelector(".file-name").textContent =
        "কোনো ফাইল নির্বাচন করা হয়নি";
    }

    // মোডাল দেখান
    showModal(jobApplicationModal);
  }

  // আবেদন সফল মোডাল দেখানোর ফাংশন
  function showApplicationSuccess() {
    // র‍্যান্ডম আবেদন আইডি জেনারেট করুন
    const applicationId = `SP-${new Date().getFullYear()}-${Math.floor(
      10000 + Math.random() * 90000
    )}`;
    document.getElementById("application-id").textContent = applicationId;

    // মোডাল দেখান
    showModal(applicationSuccessModal);
  }

  // Enhanced modal functionality with animations and improved UX
  function showModal(modal) {
    if (!modal) return;

    // Create backdrop if not exists
    if (!document.querySelector(".modal-backdrop")) {
      const backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop";
      document.body.appendChild(backdrop);

      // Fade in backdrop
      setTimeout(() => {
        backdrop.style.opacity = "1";
      }, 10);

      // Close modal when clicking on backdrop
      backdrop.addEventListener("click", function () {
        const activeModal = document.querySelector(".modal.active");
        if (activeModal) {
          hideModal(activeModal);
        }
      });
    }

    // প্রথমে CSS display:block করুন তবে এখনো অদৃশ্য রাখুন
    modal.style.display = "block";

    // একটি রিফ্লো ফোরস করুন যাতে অ্যানিমেশন কাজ করে
    modal.offsetHeight;

    // Add entrance animation to modal content
    const modalContent = modal.querySelector(".modal-content");
    if (modalContent) {
      modalContent.style.animation = "modalEntrance 0.4s ease forwards";
    }

    // তারপর active ক্লাস যোগ করুন অ্যানিমেশন ট্রিগার করতে
    modal.classList.add("active");

    // বডি স্ক্রল বন্ধ করুন
    document.body.style.overflow = "hidden";

    // Add escape key listener
    document.addEventListener("keydown", handleEscapeKey);
  }

  function hideModal(modal) {
    if (!modal) return;

    // Start exit animation
    const modalContent = modal.querySelector(".modal-content");
    if (modalContent) {
      modalContent.style.animation = "modalExit 0.3s ease forwards";
    }

    // Remove modal-backdrop
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.style.opacity = "0";
      setTimeout(() => {
        if (backdrop.parentNode) {
          backdrop.parentNode.removeChild(backdrop);
        }
      }, 300);
    }

    // active ক্লাস সরিয়ে ফেলুন ফেড আউট অ্যানিমেশন শুরু করতে
    modal.classList.remove("active");

    // অ্যানিমেশন সম্পন্ন হতে অপেক্ষা করুন তারপর মোডাল লুকান
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "";

      // Remove escape key listener
      document.removeEventListener("keydown", handleEscapeKey);
    }, 300);
  }

  // Handle escape key press to close modal
  function handleEscapeKey(e) {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal.active");
      if (activeModal) {
        hideModal(activeModal);
      }
    }
  }

  // মোডাল বন্ধ বাটন ক্লিক করলে
  const modalCloseBtns = document.querySelectorAll(".modal-close");
  modalCloseBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modal = this.closest(".modal");
      hideModal(modal);
    });
  });

  // Add CSS for modal enhancements
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(28, 46, 88, 0.8);
      backdrop-filter: blur(5px);
      z-index: 999;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    @keyframes modalEntrance {
      from {
        opacity: 0;
        transform: translateY(50px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    @keyframes modalExit {
      from {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      to {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
    }
    
    .no-results {
      text-align: center;
      padding: 50px 20px;
      background-color: rgba(255, 255, 255, 0.9);
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(28, 46, 88, 0.1);
    }
    
    .no-results-icon {
      font-size: 3rem;
      color: var(--accent-color);
      margin-bottom: 20px;
    }
    
    .no-results h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: var(--primary-color);
    }
    
    .no-results p {
      margin-bottom: 20px;
      color: var(--text-medium);
    }
    
    .filtering-tips {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 20px;
      margin-top: 30px;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
    }
    
    .tip-icon {
      font-size: 2rem;
      color: #ffc107;
      flex-shrink: 0;
    }
    
    .tip-content h4 {
      color: white;
      margin-bottom: 8px;
      font-size: 1.2rem;
    }
    
    .tip-content p {
      margin: 0;
      line-height: 1.6;
      font-size: 0.95rem;
    }
    
    .search-results-stats {
      background-color: rgba(255, 255, 255, 0.1);
      padding: 10px 20px;
      border-radius: 30px;
      color: white;
      display: inline-block;
      margin-bottom: 20px;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    /* Update job-opportunities background color to medium blue */
    .job-opportunities {
      background-color: #3959a5;
    }
  `;
  document.head.appendChild(styleEl);

  // উপরে যাওয়ার বাটন
  const backToTopBtn = document.getElementById("back-to-top");

  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // নিউজলেটার ফর্ম সাবমিশন
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        // সাকসেস মেসেজ দেখান
        const formContainer = this.parentElement;
        formContainer.innerHTML = `
          <div class="success-message">
            <div class="success-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <h3>সাবস্ক্রিপশন সফল!</h3>
            <p>ধন্যবাদ! আপনি সফলভাবে আমাদের ক্যারিয়ার নিউজলেটারে সাবস্ক্রাইব করেছেন।</p>
          </div>
        `;
      }
    });
  }

  // সেকশন অ্যানিমেশন স্ক্রলের সময়
  const sections = document.querySelectorAll("section");

  function checkSections() {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  }

  // অ্যানিমেশনের জন্য প্রাথমিক স্টাইল প্রয়োগ করুন
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  window.addEventListener("scroll", checkSections);
  window.addEventListener("load", checkSections);
});
 