import { useEffect, useState } from "react";
import RestaurantDetails from "./RestaurantDetails";
import "./Restaurant.css";
import Form from "./Form";
import { v4 as uuid } from "uuid";
import axios from "axios";

export default function Restaurant() {
    const [displayRes, setDisplayRes] = useState(true);
    const [data, setData] = useState([]);

    function handleFormData(formData) {
        const x = { ...formData, id: uuid() };
        console.log('x:', x)
        axios.post("http://localhost:3001/restaurant", x);
        getDataa();
    }
    function gotoForm() {
        setDisplayRes(!displayRes);
    }

    useEffect(() => {
        getDataa();
    }, []);

    const getDataa = async () => {
        const resp = await axios.get("http://localhost:3001/restaurant");
        setData(resp.data);
    };

    return (
        <>
            <div className="nav">
                <div>
                    <button
                        style={
                            displayRes
                                ? { borderBottom: "2px solid black" }
                                : { borderBottom: "none" }
                        }
                        className="parentBtn"
                        onClick={gotoForm}
                    >
                        <h2>Restaurant</h2>
                    </button>
                </div>
                <div>
                    <button
                        style={
                            displayRes
                                ? { borderBottom: "none" }
                                : { borderBottom: "2px solid black" }
                        }
                        className="parentBtn"
                        onClick={gotoForm}
                    >
                        <h2>Add Restaurant</h2>
                    </button>
                </div>
            </div>
            {displayRes ? (
                <RestaurantDetails data={data} gotoForm={gotoForm} />
            ) : (
                <Form handleFormData={handleFormData} />
            )}
        </>
    );
}
