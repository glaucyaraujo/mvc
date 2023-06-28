import Router from "express";

const router = Router(); 

router.get("/", function (req, res){
    res.status(200).sed({
        title: "Hello Word! n/Bem vindas a turma Devas do Fullstack!",
        version: "1.0.0"
    })
})

export default router;