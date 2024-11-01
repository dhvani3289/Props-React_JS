

function UserData(props) {
    return (
        <>
            <table border={1} cellPadding={20} style={{ textAlign: "center",backgroundColor:"#a9def985" }}>
                <thead>
                    <tr>
                        <td>Roll No.</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Percentage</td>
                        <td>Gender</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.info.map((value) => {
                            return (
                                <>
                                    <tr>
                                        <td>{value.rollNo}</td>
                                        <td>{value.name}</td>
                                        <td>{value.age}</td>
                                        <td>{value.percentage}</td>
                                        <td>{value.gender}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default UserData;