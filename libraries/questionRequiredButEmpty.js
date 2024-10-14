//if question required then answer.value cant be empty
const questionRequiredButEmpty = async (forms, answers) => {
    const found = forms.questions.filter((question) => {
        if (question.required === true) {
            const answer = answers.find((answer) => answer.questionId == question.id);

            if (answer === undefined || answer.value === undefined || answer.value === "") {
                return true
            }
        }
    })

    return found.length > 0 ? found[0].question : false
}

export default questionRequiredButEmpty;