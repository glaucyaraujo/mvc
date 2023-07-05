import apis from "../models/apis";

class ApiControllers {

    // criando propriedades para as rotas 

    static getAllApis = ( req, res) => {
        apis.find((err, apis) =>{
            res.status(200).json(apis)

        })
    }

}

export default ApiController;