var Model = (function(){

    var questions;

    // get questions from some source
    (function() {
        questions = quizData.questions;
    })();

    // shuffle array of questions
    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    return {
        getQuizTitle: function() {
            return quizData.title;
        },

        // get n random questions
        getNRandomQuestions: function(n) {
            return shuffle(questions).slice(0,n);
        },

        // get all questions
        getAllQuestions: function() {
            return shuffle(questions);
        },

        // get questions from concrete level
        getQuestionsByLevel: function(level) {
            return shuffle(questions).filter(function(q){
                return q.level===level;
            });
        }
    }
})();