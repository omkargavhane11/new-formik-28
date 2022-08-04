import { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export default function CreateUser() {

    const navigate = useNavigate();

    const formValidations = yup.object({
        name: yup.string().required("Name required").min(5, "min 5 letters required"),
        email: yup.string().required("Email required"),
        avatar: yup.string().required("Display picture image URL required"),
        about: yup.string().required("About required"),
        contact: yup.string().required("Contact Info required"),
    })


    const formik = useFormik({
        initialValues: { name: "", email: "", avatar: "", about: "", contact: "" },
        validationSchema: formValidations,
        onSubmit: (values) => {

            // POST request to mockapi url
            async function postData() {
                const newUser = await fetch("https://61d17cd5da87830017e5926e.mockapi.io/users", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                }).then(() => navigate("/"))
                return newUser.json();
            }
            postData();
        }
    })

    return (
        <div className="create-user-div">

            {/* Go to Home button */}
            <Button className="my-3" onClick={() => navigate("/")}>Go to Home Page</Button>

            <div className="mt-2">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form_input_div">
                        <div className="input_validation_error">{formik.touched.name && formik.errors.name ? formik.errors.name : ""}</div>
                        <label className="input_label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input_elem mb-3"
                            placeholder="Enter Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="form_input_div">
                        <div className="input_validation_error">{formik.touched.avatar && formik.errors.avatar ? formik.errors.avatar : ""}</div>
                        <label className="input_label">Avatar</label>
                        <input

                            type="url"
                            name="avatar"
                            className="input_elem mb-3"
                            placeholder="Enter Avatar link"
                            value={formik.values.avatar}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                    </div>
                    <div className="form_input_div">
                        <div className="input_validation_error">{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</div>
                        <label className="input_label">Email Id</label>
                        <input
                            type="email"
                            name="email"
                            className="input_elem mb-3"
                            placeholder="Enter email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="form_input_div">
                        <div className="input_validation_error">{formik.touched.about && formik.errors.about ? formik.errors.about : ""}</div>
                        <label className="input_label">About</label>
                        <input
                            type="text"
                            name="about"
                            className="input_elem mb-3"
                            placeholder="Person's description"
                            value={formik.values.about}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="form_input_div">
                        <div className="input_validation_error">{formik.touched.contact && formik.errors.contact ? formik.errors.contact : ""}</div>
                        <label className="input_label">Contact</label>
                        <input
                            type="number"
                            name="contact"
                            className="input_elem mb-3"
                            placeholder="Enter Contact Number"
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <Button variant="success" type="submit">
                        Save
                    </Button>
                </form>

            </div >


        </div >
    )
}
