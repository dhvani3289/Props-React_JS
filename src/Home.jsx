import { useState } from "react";

function Home() {
    let [data, setData] = useState(30);

    function demo() {
        console.log(data);
        data = 40;
        setData(data)
        console.log(data);
    }
    return (
        <>
            <div style={{ backgroundColor: "#d0f4de" }}>
                <h1>marks are {data}</h1>
                <button onClick={demo}>Change</button>
            </div>
        </>
    )
}

export default Home;