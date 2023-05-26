document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.querySelector('input[type="button"]');
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Get form input values
      var fullName = document.querySelector('input[name="fullname"]').value;
      var emailAddress = document.querySelector('input[name="email"]').value;
      var phoneNumber = document.querySelector('input[name="phone"]').value;
      var instituteEmail = document.querySelector('input[name="instituteemail"]').value;
      var gender = document.querySelector('input[name="gender"]:checked').value;
      var rollNumber = document.querySelector('input[name="rollno"]').value;
      var branch = document.querySelector('select[name="branch"]').value;
      var fieldOfInterest = document.querySelector('select[name="fieldofinterest"]').value;
      
      // Perform validation or additional processing if needed
      
      // Display form input values (Example: Alert message)
      var message = 'Full Name: ' + fullName + '\n' +
                    'Email Address: ' + emailAddress + '\n' +
                    'Phone Number: ' + phoneNumber + '\n' +
                    'Institute Email: ' + instituteEmail + '\n' +
                    'Gender: ' + gender + '\n' +
                    'Roll Number: ' + rollNumber + '\n' +
                    'Branch: ' + branch + '\n' +
                    'Field of Interest: ' + fieldOfInterest;
                    
      alert(message);
      
      // Perform form submission to a server if needed
      
    });
  });
 
  
  
  
  
  me;
