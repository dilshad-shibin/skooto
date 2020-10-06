 // sidemneu
 $(document).ready(function () {
    let state = false;
               $('.nav-bar').click(function () {
            if(!state){
                   $('.navbar1').css({
                       transform: 'rotate(40deg)',
                       top: '1.5px',
                       transition: '0.5s'
                   });
                   $('.navbar2').css({
                       transform: 'rotate(-45deg)',
                       width: '90%',
                       transition: '0.5s'
                   });
                   $('.navbar3').css({
                       transform: 'rotate(40deg)',
                       top: '-2px',
                       left: '-2px',
                       transition: '0.5s'
                   });
                   $('.sidemenu-section').css({
                       right: '0',
                       transition: '0.5s'
                   });
            state = true;
               }
            else{
                   $('.navbar1').css({
                       transform: 'rotate(0deg)',
                       top: '0px',
                       transition: '0.5s'
                   });
                   $('.navbar2').css({
                       transform: 'rotate(0deg)',
                       width: '100%',
                       transition: '0.5s'
                   });
                   $('.navbar3').css({
                       transform: 'rotate(0deg)',
                       top: '0px',
                       left: '0px',
                       transition: '0.5s'
                   });
                   $('.sidemenu-section').css({
                       right: '-100%',
                       transition: '0.5s'
                   });
                state = false;
            }
   
               $('.sidemenu-section').click(function() {
                   $('.sidemenu-section').css({
                       right: '-100%',
                       transition: '0.5s'
                   });
                   $('.navbar1').css({
                       transform: 'rotate(0deg)',
                       top: '0px',
                       transition: '0.5s'
                   });
                   $('.navbar2').css({
                       transform: 'rotate(0deg)',
                       width: '100%',
                       transition: '0.5s'
                   });
                   $('.navbar3').css({
                       transform: 'rotate(0deg)',
                       top: '0px',
                       left: '0px',
                       transition: '0.5s'
                   });
                state = false;
               });
           });
               });



// web chat io
               (function () {
                var options = {
                    whatsapp: "+91 9876543210", // WhatsApp number
                    facebook: "https://www.facebook.com", // facebook
                    email: "info@skootto.com", // Email
                    sms: "+91 9876543210", // Sms phone number
                    call: "+91 9876543210", // Call phone number
    
                    greeting_message: "Hello, how may we help you? Just send us a message now to get assistance.", // Text of greeting message
                    call_to_action: "Message us", // Call to action
                    button_color: "#3dc342", // Color of button
                    position: "right", // Position may be 'right' or 'left'
                    order: "whatsapp,sms,email", // Order of buttons
                };
                var proto = document.location.protocol,
                    host = "whatshelp.io",
                    url = proto + "//static." + host;
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = url + '/widget-send-button/js/init.js';
                s.onload = function () {
                    WhWidgetSendButton.init(host, proto, options);
                };
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            })();
            