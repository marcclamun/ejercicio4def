import React, { useState } from "react";

function FormRPSLS(props) {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        result: props.result,
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const currentDate = new Date().toISOString().split("T")[0];
        const currentTime = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        var resultMatch = formData.result;
        if (resultMatch === 0) { resultMatch = "Draw"; }
        else if (resultMatch === 1) { resultMatch = "Win"; }
        else { resultMatch = "Lose"; }
        const formDataInfo = {
            ...formData,
            date: currentDate,
            time: currentTime,
            result: resultMatch,
        }; fetch("http://localhost:3000/rpsls", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataInfo),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        document.getElementById("submit").disabled = true;
    };
    return (<form id="tamagotchi-form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" name="name" value={formData.name} onChange={handleInputChange} />
        <br /> <button className="btn btn-primary rounded" id="submit" type="submit"> Submit </button>
    </form>);
}
export default FormRPSLS;