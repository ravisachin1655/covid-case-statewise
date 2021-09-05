import React, { useEffect, useState } from "react";
import './Statewise.css';


const Statewise = () => {

    const [Data, setData] = useState([]);

    const getCovidData = async () => {

        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        // console.log(actualData.statewise);
        setData(actualData.statewise);

    }
    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <>

            <div className="container-fluid">
                <div className="main-heading">
                    <h1>COVID-19 INDIA LIVE DASHBOARD</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>state</th>
                                <th>confirmed</th>
                                <th>recovered</th>
                                <th>deaths</th>
                                <th>active</th>
                                <th>lastupdatedtime</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                Data.map((CurElem, index) => {
                                    {/* console.log(CurElem.recovered); */}
                                    return (
                                        <tr key={index}>
                                            <th> {CurElem.state} </th>
                                            <td> {CurElem.confirmed} </td>
                                            <td> {CurElem.recovered} </td>
                                            <td> {CurElem.deaths} </td>
                                            <td> {CurElem.active} </td>
                                            <td> {CurElem.lastupdatedtime} </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>

                </div>

            </div>
        </>
    );
};
export default Statewise;