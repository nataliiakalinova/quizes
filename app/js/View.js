var View = (function() {

    function buildView(title, list, questionsArr) {
        // add title
        list.html(title+"<br><br>");

        // for each question
        for (var i=0; i<questionsArr.length; i++) {

            // view question text
            var question = $("<li></li>").addClass("container-main-list-question").html(questionsArr[i].question);

            // create answers list
            var answers = $("<ul></ul>").addClass("container-main-list-question-answer");

            // for each answer
            for (var j = 0; j < questionsArr[i].answers.length; j++) {

                // add answer text and checkbox
                answers.append(
                    $("<li></li>").addClass("container-main-list-question-answer-item").append(
                        $("<label></label>").html(questionsArr[i].answers[j].text).prepend(
                            $("<input type='checkbox' id="+questionsArr[i].answers[j].id +">")
                        )
                    )
                );
            }

            // append a question
            list.append(
                question.append(answers)
            );
        }
    }

    return {
        // public method for building list
        viewQuestions: function(title, list, questionsArr) {
            buildView(title, list, questionsArr);
        }

    };
})();