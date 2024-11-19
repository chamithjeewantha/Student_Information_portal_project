import "../assests/css/compo.css"
export default function studentTable(props){

    return(
        <div className="outerDiv">
            <div className="leftDiv">
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Cause</td>
                            <td>Country</td>
                            <td>Profile</td>
                        </tr>
                    </thead>
                </table>
            </div>

        </div>
    );
}