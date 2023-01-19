import React from 'react'
import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions'

export default function ChildEmployeeData(props) {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Name',
            selector: row => row.fullName,
            sortable: true
        },
        {
            name: 'Salary',
            selector: row => row.salary,
            sortable: true
        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true
        },
        {
            name: 'Photo',
            selector: row => row.url,
            sortable: true
        }
    ]

    return (
        <DataTableExtensions
            columns = {columns}
            data = {props.dataEmployee}
            print={false}
            export={false}
        >
            <DataTable
            // columns={columns}
            // data={props.dataEmployee}
            pagination
            highlightOnHover
            />
        </DataTableExtensions>
        
    )


//     return (
//         <div id='table-employee'>
//             <table>
//                 {/* Table Head */}
//                 <thead>
//                     {/* tr: table row */}
//                     <tr> 
//                         {/* th: table head */}
//                         <th> No </th>
//                         <th> ID </th>
//                         <th> Name </th>
//                         <th> Photo </th>
//                     </tr>
//                 </thead>
//                 {/* Table Body */}
//                 {
//                     props.dataEmployee.map((key, i) => {
//                         return (
//                             // Return Table body
//                             <tbody>
//                                 {/* Table row */}
//                                 <tr>
//                                     {/* Data for each row */}
//                                     {/* No */}
//                                     <td>
//                                         {i+1}
//                                     </td>
//                                     {/* ID */}
//                                     <td>
//                                         {key.id}
//                                     </td>
//                                     {/* Name */}
//                                     <td>
//                                         {key.fullName}
//                                     </td>
//                                     {/* Leave remaining */}
//                                     <td>
//                                         {key.url}
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         )
//                     })
//                 }
//             </table>
//         </div>
//   )
}
