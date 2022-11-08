'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    async create(body) {
        let entity = []
        for (let index = 0; index < body.length; index++) {
            const element = body[index];
            const res = await strapi.query("question").create({
                question_name: element.title,
                question_ans: element.answer,
                question_score: element.score,
                question_type: element.type,
                question_choice1: element.choice1,
                question_choice2: element.choice2,
                question_choice3: element.choice3,
                quiz: element.quiz,
                post_at: element.post_at,
            })
            entity.push(res)
        }
        return entity
    }
};
