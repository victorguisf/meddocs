import { FastifyRequest, FastifyReply } from 'fastify'
import { CreatePatientService } from '../services/CreatePatientService'

class CreatePatientController{
    async handle(requeste: FastifyRequest, reply: FastifyReply){

        const {name, surname, dateOfBirth, contactNumber, address, medications, emergencyName, emergencySurname, emergencyContact, observations} = requeste.body as {name: string, surname: string, dateOfBirth: string, contactNumber: string, address: string, medications: string[], emergencyName: string, emergencySurname: string, emergencyContact: string, observations: string};
        

        const patientService = new CreatePatientService()

        const patient = await patientService.execute({name, surname, dateOfBirth, contactNumber, address, medications, emergencyName, emergencySurname, emergencyContact, observations});

        reply.send(patient)

    }
}

export { CreatePatientController }