import { FastifyRequest, FastifyReply } from 'fastify'
import { ListPatientsService } from '../services/ListPatientsService'

class ListPatientsController{
    async handle(requeste: FastifyRequest, reply: FastifyReply){
        const listPatientsService = new ListPatientsService();

        const patients = await listPatientsService.execute();

        reply.send(patients);
    }
}

export { ListPatientsController }