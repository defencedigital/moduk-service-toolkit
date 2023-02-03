(function() {
  
  var feedback = document.getElementsByClassName('js-feedback'); 

  if (feedback.length > 0) {

    var yesButton      = feedback[0].getElementsByClassName('js-feedback-yes')[0];
    var yesButtonClose = feedback[0].getElementsByClassName('js-feedback-yes-close')[0];

    var noButton      = feedback[0].getElementsByClassName('js-feedback-no')[0];
    var noButtonClose = feedback[0].getElementsByClassName('js-feedback-no-close')[0];

    var prompt      = feedback[0].getElementsByClassName('js-feedback-prompt')[0];
    var success     = feedback[0].getElementsByClassName('js-feedback-success')[0];
    var questions   = feedback[0].getElementsByClassName('js-feedback-question')[0];

    var focusableElements = 'input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), .govuk-error-summary';

    // Detect click on 'yes' button
    yesButton.addEventListener('click', function (event) {

      event.preventDefault();

      var form = document.getElementById(this.getAttribute('aria-controls')); // Get form by ID

      Util.addClass(prompt, 'js:is-hidden'); // Hide prompt and show form
      Util.removeClass(form, 'js:is-hidden'); // Show form

      var firstItem = form.querySelectorAll(focusableElements);

      firstItem[0].focus();

    });

    // Detect click on 'no' button
    noButton.addEventListener('click', function (event) {

      event.preventDefault();

      var form = document.getElementById(this.getAttribute('aria-controls')); // Get form by ID

      Util.addClass(prompt, 'js:is-hidden'); // Hide prompt and show form
      Util.removeClass(form, 'js:is-hidden'); // Show form

      var firstItem = form.querySelectorAll(focusableElements);

      firstItem[0].focus();

    });


    // Detect click on 'yes' cancel button
    yesButtonClose.addEventListener('click', function (event) {

      event.preventDefault();

      document.querySelectorAll('.js-feedback-form').forEach(item => {
        Util.addClass(item, 'js:is-hidden'); // Hide all forms
      });

      Util.removeClass(prompt, 'js:is-hidden'); // Show the feedback prompt
      Util.removeClass(questions, 'js:is-hidden'); // Show the question

      yesButton.focus();

    });


    // Detect click on 'no' cancel button
    noButtonClose.addEventListener('click', function (event) {

      event.preventDefault();

      document.querySelectorAll('.js-feedback-form').forEach(item => {
        Util.addClass(item, 'js:is-hidden'); // Hide all forms
      });

      Util.removeClass(prompt, 'js:is-hidden'); // Show the feedback prompt
      Util.removeClass(questions, 'js:is-hidden'); // Show the question

      noButton.focus();

    });


    // Check if an element is empty
    const isEmpty = str => !str.trim().length;
    

    // Detect form submit
    document.querySelectorAll('.js-feedback-form').forEach(item => {
      
      item.addEventListener('submit', event => {

        Util.addClass(item, 'js:is-hidden');       // Hide the feedback form
        Util.removeClass(prompt, 'js:is-hidden');  // Show the feedback prompt
        Util.addClass(questions, 'js:is-hidden');  // Hide the question
        Util.removeClass(success, 'js:is-hidden'); // Show the success

        event.preventDefault();

        var data = new FormData(event.target);

        fetch(event.target.action, {
          method: item.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          item.reset(); // Reset form
        });

      });

    });

  }

}());
