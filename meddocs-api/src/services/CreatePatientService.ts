
import prismaClient from "../prisma";

interface CreatePatientProps{
    name: string, 
    surname: string, 
    dateOfBirth: string, 
    contactNumber: string, 
    address: string, 
    medications: string[], 
    emergencyName: string, 
    emergencySurname: string, 
    emergencyContact: string, 
    observations: string
}

class CreatePatientService{
    async execute({name, surname, dateOfBirth, contactNumber, address, medications, emergencyName, emergencySurname, emergencyContact, observations}: CreatePatientProps){
        
        if(!name || !surname || !dateOfBirth || !contactNumber || !address || !emergencyName || !emergencyContact){
            throw new Error("Preencha todos os dados!")
        }

        const patient = await prismaClient.patient.create({
            data:{
                name, 
                surname, 
                dateOfBirth, 
                contactNumber, 
                address, 
                medications, 
                emergencyName, 
                emergencySurname, 
                emergencyContact,
                observations
            }
        })

        return patient
    }
}

export { CreatePatientService }