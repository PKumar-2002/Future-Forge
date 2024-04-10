// JavaScript function to redirect to target2.html
function redirectToTarget2() {
  // Get the selected values from the dropdowns
  var dropdown1 = document.getElementById('dropdown1');
  var dropdown2 = document.getElementById('dropdown2');
  var selectedValue1 = dropdown1.options[dropdown1.selectedIndex].value;
  var selectedValue2 = dropdown2.options[dropdown2.selectedIndex].value;

  // Check if the selected values are not the default ones
  if (selectedValue1 !== 'option1' && selectedValue2 !== 'optionA') {
    // Both dropdowns have valid selections, navigate to target2.html
    console.log('Navigating to target2.html');
    window.location.href = '../Target Page 2/target2.html';
  } else {
    // Inform the user to make valid selections
    alert('All fields are mandatory. Please select options from both dropdown menus.');
  }
}
