import React from 'react'

const Timetables = () => {
    return (
        <div>
            <h5 className="text-uppercase mb-4 text-center">Time Tables</h5>
            <table className="table text-center text-dark">
                <tbody className="font-weight-normal">
                    <tr>
                        <td>Monday:</td>
                        <td>08h30 to 17h00</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>08h30 to 17h00</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>08h30 to 17h00</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>08h30 to 17h00</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>08h30 to 13h00</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>08h30 to 13h00</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td>Closed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Timetables
