export default function generateSimpleId() {
    var idExists: boolean = true;
    var simpleId: string = "";
    while (idExists) {
        idExists = false;
        simpleId = Math.random().toString(36).substr(2, 8).toUpperCase()
        prismadb.comment.findFirst({
            where: {
                simpleId: simpleId
            }
        }).then((comment) => {
            if (comment) {
                idExists = true;
            }
        });
        prismadb.issue.findFirst({
            where: {
                simpleId: simpleId
            }
        }).then((issue) => {
            if (issue) {
                idExists = true;
            }
        });
        prismadb.paper.findFirst({
            where: {
                simpleId: simpleId
            }
        }).then((paper) => {
            if (paper) {
                idExists = true;
            }
        });
        prismadb.potencialQuestion.findFirst({
            where: {
                simpleId: simpleId
            }
        }).then((potencialQuestion) => {
            if (potencialQuestion) {
                idExists = true;
            }
        });
        prismadb.question.findFirst({
            where: {
                simpleId: simpleId
            }
        }).then((question) => {
            if (question) {
                idExists = true;
            }
        });
        prismadb.user.findFirst({
            where: {
                simpleId: simpleId
            }
        }).then((user) => {
            if (user) {
                idExists = true;
            }
        });
    }
    return simpleId;
}