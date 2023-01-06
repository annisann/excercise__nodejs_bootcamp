import { Router } from "express"
import humanResourcesController from "../controllers/humanResourcesController"

const router = new Router()
router.get('/department', humanResourcesController.findAllDepartment)
router.get('/departmentAllRows', humanResourcesController.findAllRows)
router.get('/department/:id', humanResourcesController.findAllRowsById)
router.post('/department/add', humanResourcesController.addDepartment)
router.put('/department/:id', humanResourcesController.updateDepartment)
router.delete('/department/delete/:id', humanResourcesController.deleteDepartment)

router.get('/history', humanResourcesController.jobHistoryPerDepartment)

export default router // yang paling utama dibaca, kalo {} optional