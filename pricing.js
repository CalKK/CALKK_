// Pricing dropdown functionality

document.addEventListener('DOMContentLoaded', () => {
  const dropdownBtn = document.getElementById('exerciseDropdown');
  const dropdownContent = document.getElementById('dropdownContent');
  const dropdownItems = document.querySelectorAll('.pricing-dropdown-content')
  const selectedPackage = document.getElementById('selectedPackage');
  const selectedExercise = document.getElementById('selectedExercise');
  const selectedPrice = document.getElementById('selectedPrice');
  const selectedDuration = document.getElementById('selectedDuration');
  const selectedPackageType = document.getElementById('selectedPackageType');
  const dropdownText = document.querySelector('.dropdown-text');

  // Toggle dropdown
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownBtn.classList.toggle('active');
    dropdownContent.classList.toggle('show');

    if (dropdownContent.classList.contains('show')) {
      // Set max-height to 60vh or content height, whichever is smaller
      dropdownContent.style.maxHeight = '';
      dropdownContent.style.overflowY = '';
      /*
      const contentHeight = dropdownContent.scrollHeight;
      const maxHeight = Math.min(window.innerHeight * 0.6, contentHeight);
      dropdownContent.style.maxHeight = `${maxHeight}px`;
      dropdownContent.style.overflowY = 'auto';*/

      // Optional: scroll to top when opening
      dropdownContent.scrollTop = 0;
    } else {
      dropdownContent.style.maxHeight = '';
      dropdownContent.style.overflowY = '';
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
      dropdownBtn.classList.remove('active');
      dropdownContent.classList.remove('show');
      dropdownContent.style.maxHeight = '';
      dropdownContent.style.overflowY = '';
    }
  });

  // Handle dropdown item selection
  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const exercise = item.getAttribute('data-exercise');
      const price = item.getAttribute('data-price');
      const duration = item.getAttribute('data-duration');
      const packageType = item.getAttribute('data-package');
      const exerciseName = item.querySelector('h4').textContent;

      // Update dropdown button text
      dropdownText.textContent = exerciseName;

      // Update selected package display
      selectedExercise.textContent = exerciseName;
      selectedPrice.textContent = price;
      selectedDuration.textContent = duration;
      selectedPackageType.textContent = packageType;

      // Show selected package
      selectedPackage.style.display = 'block';

      // Close dropdown
      dropdownBtn.classList.remove('active');
      dropdownContent.classList.remove('show');
      dropdownContent.style.maxHeight = '';
      dropdownContent.style.overflowY = '';

      // Scroll to selected package
      selectedPackage.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    });
  });
});

