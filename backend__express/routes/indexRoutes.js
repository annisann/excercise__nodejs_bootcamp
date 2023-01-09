import { Router } from "express"
import humanResourcesController from "../controllers/humanResourcesController"
import personController from "../controllers/personController"
import login from "../controllers/auth/login"

const router = new Router()

// Log In
router.post('/login', login.logIn)

// Select all department
router.get('/department', login.checkToken, humanResourcesController.findAllDepartment)
router.get('/departmentAllRows', humanResourcesController.findAllRows)
// Find department by DepartmentID
router.get('/department/:id', humanResourcesController.findAllRowsById)
// Add new department
router.post('/department/add', humanResourcesController.addDepartment)
// Update department
router.put('/department/:id', humanResourcesController.updateDepartment)
// Delete department
router.delete('/department/delete/:id', humanResourcesController.deleteDepartment)

// Job history from each department
router.get('/history', humanResourcesController.jobHistoryPerDepartment)


// Select all persons
router.get('/person', personController.findAllUser)
// Insert new user
router.post('/person/add', personController.createUser)
// // Find user by Email
// router.get('/person/:email', personController.findUserByEmail)


export default router // yang paling utama dibaca, kalo {} optional