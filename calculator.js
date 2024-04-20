//backend code

document.getElementById('moneyForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  var totalMoney = parseFloat(document.getElementById('totalMoney').value);
  var aviInput = document.getElementById('aviSpent').value;
  var stephInput = document.getElementById('stephSpent').value;

  // Convert comma-separated values to an array and sum them
  var aviArray = aviInput.split(',').map(Number);
  var stephArray = stephInput.split(',').map(Number);
  var avi = aviArray.reduce((acc, curr) => acc + curr, 0);
  var steph = stephArray.reduce((acc, curr) => acc + curr, 0);

  // Calculate aviSpent and stephSpent
  var aviSpent = ((totalMoney - avi - steph) / 2) + avi;
  var stephSpent = ((totalMoney - avi - steph) / 2) + steph;

  // Display the result
  alert("Avi Spent: " + aviSpent.toFixed(2) + "\nSteph Spent: " + stephSpent.toFixed(2));
});
