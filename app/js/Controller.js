var Controller = (function(){
    var _input,
        _questions,
        _isFilled;


    function displayQuestions(e) {
        // if questions have already added, do nothing
        if (_isFilled) {
            return false;
        }

        // count should be a number
        if (!parseInt(_input.val())) {
            return false;
        }

        // get n or all questions
        if (_input.val()) {
            _questions = Model.getNRandomQuestions(_input.val());
        }
        else {
            _questions = Model.getAllQuestions();
        }

        // view questions
        View.viewQuestions(Model.getQuizTitle(), $("#list"), _questions);
        _isFilled = true;

        _input.val("");
        e.preventDefault();

    }

    return {
        init: function() {
            // get input and set listeners
            _input = $("#count");

            $("#submit").on("click", displayQuestions);

            $("#clear").on("click", function(e) {
                $("#list").empty();
                _input.val("");

                _isFilled = false;
                e.preventDefault();
            });
        }
    }
})();

$(document).ready(function(){
    Controller.init();
});
