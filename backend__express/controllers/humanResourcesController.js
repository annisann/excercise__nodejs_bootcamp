// Control database HR.department
import models, {sequelize} from "../models/init-models"

const findAllDepartment = async(request, response) => {
    const result = await sequelize.query(
        // "SELECT * FROM hr.d",
        // "SELECT DepartmentID, Name, GroupName FROM hr.d",
        "select * from pe.p join pe.e using(businessentityid) join pe.pa using(businessentityid)",
        {
            type: sequelize.QueryTypes.SELECT,
            model: request.context.models.department, // models.department
            mapToModel: true
        }
    )
    return response.send(result)
}

const findAllRows = async(request, response) => {
    const result = await request.context.models.department.findAll()
    return response.send(result)
}

const findAllRowsById = async(request, response) => {
    const result = await request.context.models.department.findByPk(request.params.id)
    return response.send(result)
}

const addDepartment = async(request, response) => {
    const result = await request.context.models.department.create(
        {
            name: request.body.name,
            groupname: request.body.groupname,
            modifieddate: request.body.modifieddate
        }
    )
    return response.send(result)
}

const updateDepartment = async(request, response) => {
    const result = await request.context.models.department.update(
        {
            name: request.body.name,
            groupname: request.body.groupname,
            modifieddate: request.body.modifieddate
        },
        {
            returning: true, // return updated data
            where: {
                departmentid:request.params.id
            }
        }
    )
    return response.send(result)
}

const deleteDepartment = async(request, response) => {
    await request.context.models.department.destroy(
        {
            where: {
                departmentid: request.params.id
            }
        }
    ).then(
        result => {
            return response.send(`Department with ID ${request.params.id} has been deleted`)
        }
    ).catch(
        result => {
            return response.send(`Request failed.`)
        }
    )
}

const jobHistoryPerDepartment = async(request, response) => {
    const result = await request.context.models.department.findAll(
        {
            include: [
                {
                    model: request.context.models.employeedepartmenthistory,
                    as: "employeedepartmenthistories"
                }
            ]
        }
    )
    return response.send(result)
}

export default {
    findAllDepartment,
    findAllRows,
    findAllRowsById,
    addDepartment,
    updateDepartment,
    deleteDepartment,
    jobHistoryPerDepartment
}