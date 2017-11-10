Template.signupForm.events({
  "submit #signup-form": function(event, template) {
    event.preventDefault();
    Accounts.createUser({
      email: template.find("#signup-username").value,
      password: template.find("#signup-password").value,
      profile: {
        // Store extra fields not pertaining to login
        firstName: template.find("#signup-first-name").value,
        lastName: template.find("#signup-last-name").value,
        streetAddress: template.find("#signup-street-address").value,
        city: template.find("#signup-city").value,
        state: template.find("#signup-state").value,
        zipCode: template.find("#signup-zip-code").value,
      }
    }, function(error) {
      if (error) {
        // Display Error
      }
    });
  }
});

Template.loginForm.events({
  "submit #login-form": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      // Locate a match for username and password
      template.find("#login-username").value,
      template.find("#login-password").value,
      function(error) {
        if (error) {
          // Display the login error
        }
      }
    );
  }
});

Template.logoutForm.events({
  "submit #logout-form": function(event, template) {
    event.preventDefault();
    Meteor.logout(function(error) {
      if (error) {
        // Display logout error
      }
    });
  }
});
