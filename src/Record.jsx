import { useState } from "react";
import UserData from "./UserData";

function Record() {

    let [data, setData] = useState(
        [
            { rollNo: 1, name: 'Alice Johnson', age: 20, percentage: 95, gender: 'Female' },
            { rollNo: 2, name: 'Bob Smith', age: 22, percentage: 88, gender: 'Male' },
            { rollNo: 3, name: 'Charlie Brown', age: 19, percentage: 75, gender: 'Male' },
            { rollNo: 4, name: 'David Lee', age: 21, percentage: 92, gender: 'Male' },
            { rollNo: 5, name: 'Eve Miller', age: 23, percentage: 80, gender: 'Female' }
        ]
    )

    return (
        <>
            <UserData info={data} />

        </>
    )
}

export default Record;