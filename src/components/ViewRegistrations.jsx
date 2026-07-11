import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewRegistrations = () => {
    const [studata, changeData] = useState([])
    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response) => (
                changeData(response.data)
            )

        ).catch()
    }

    useEffect(
        () => (
            fetchData()
        ), []
    )

    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div className="table-responsive">
                                    <table className="table table-striped table-hover table-bordered align-middle text-center">
                                        <thead className="table-primary">
                                            <tr>
                                                <th>Registration Number</th>
                                                <th>Full Name</th>
                                                <th>Branch</th>
                                                <th>SSLC Mark</th>
                                                <th>Plus Two Mark</th>
                                                <th>UG Mark</th>
                                                <th>PG Mark</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {studata.map(
                                                (value, index) => {
                                                    return (
                                                        <tr>
                                                            <th>{value.regNo}</th>
                                                            <th>{value.fullName}</th>
                                                            <th>{value.branch}</th>
                                                            <th>{value.sslcMark}</th>
                                                            <th>{value.plusTwoMark}</th>
                                                            <th>{value.ugMark}</th>
                                                            <th>{value.pgMark}</th>
                                                        </tr>
                                                    )
                                                }
                                            )}




                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewRegistrations