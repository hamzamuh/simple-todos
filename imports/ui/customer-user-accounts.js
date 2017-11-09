Template.signupForm.events({
  "submit #signup-form": function(event, template) {
    event.preventDefault();
    Accounts.createUser({
      email: template.find("#signup-username").value,
      password: template.find("#signup-password").value,
      profile: {
        firstName: template.find("#signup-first-name").value,
        lastName: template.find("#signup-last-name").value,
        streetAddress: template.find("#signup-street-address").value,
        city: template.find("#signup-city").value,
        state: template.find("#signup-state").value,
        zipCode: template.find("#signup-zip-code").value,
        // Other required field values can go here
      }
    }, function(error) {
      if (error) {
        // Display the user creation error to the user however you want
      }
    });
  }
});

Template.loginForm.events({
  "submit #login-form": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find("#login-username").value,
      template.find("#login-password").value,
      function(error) {
        if (error) {
          // Display the login error to the user however you want
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
        // Display the logout error to the user however you want
      }
    });
  }
});
