import { request, response, Router } from "express";

const routes = Router();

routes.get('/user', (request, response) => {
    const teste = request.params;

    return response.json({
        const: teste
    })
})
routes.get('/query', (request, response) => {
    const consulta  = request.query;

    return response.json({
        const: consulta
    })
})
export default routes;

