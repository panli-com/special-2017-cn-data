//main  

// var notyf = new Notyf();

;
(function () {
    // Create an instance of Notyf
    // var notyf = new Notyf(); 

    window.onload = function () {


        var tabNav = PD("#tab-nav");
        // // Display an alert notification
        // notyf.alert('You must fill out the form before moving forward');

        // // Display a success notification
        // notyf.confirm('Your changes have been successfully saved!');
        tabNav.on("click", "a", function () {
            tabNav.find("a").removeClass("on")
            var _t = PD(this);
            var floor = _t.attr("floor")
            _t.addClass("on")

            PD(".floor").hide()

            PD("#floor-"+ floor).show();

        })

    }
})()