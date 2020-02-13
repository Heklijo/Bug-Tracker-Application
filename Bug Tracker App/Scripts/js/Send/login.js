(document).readyState(

    function () {

        
        $("#login100-form-btn").submit(function (event) {
            event.preventDefault();  /* prevent page to automaticly send information. Wait for the login button to be pressed */
            sendCredentials();    /* Call a function to send submitet credentials. */

        });

        /* Write a function that converts given e-mail to username to send it in credentials. The username will be used later on to open current users Profile page.  */
        function sendCredentials() {
        var credentials = {
                username: getUserName(),
                password: $("#pass").val()

            }
        }


        /* Function to fetch Username for given email adress */
        function getUserName() {
            var email = $("#email").val();
            
            
        }


        /*Reset the email and password field upon sending infromation */
        document.getElementById("#login100-form-btn").reset();


        /* AJAX - perform an asynchronous HTTP(Ajax) request*/
        
        $.ajax({
            type: "POST",
            url: "/api/user/loginUser",   /*  Where to send the request. Needs to be changeg to target controller. */
            data: JSON.stringify(credentials),
            dataType: 'json',
            cache: false,
            statusCode: {
                200: function (result) {
                    /* Need to implement hash function for emmail or username so that the URL doesn't show it.*/
                    /* eg. www.BugTrackerApplicaton.hr/profile/hndojdfl   ---> security*/
                    /* Fetch username still needed */
                    console.log("Succesfull login. " + credentials);
                    window.location.replace('/profile/' + credentials.username);


                }

            }






        })

    });
