import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import '../AdminArea/AddHappyClients.css'

const AddHappyClients = () => {

    const [image, setImage] = useState(null)
    const [name, setName] = useState("")

    const handleImageChange = (e) => {
        const file = e.target.files[0]

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setImage(Reader.result)
            }
        }
    }


    const submitHandler = async (e) => {
        e.preventDefault();

        const newHappyclientsData = {
            name, image
        }


        try {
            const res = await axios.post("https://travellcloudbackend.onrender.com/tour/admin/add/clients", newHappyclientsData);
            toast.success(" Created Successfully");

            //  window.location.href = ("/tour/admin/all/package")
        } catch (error) {

        }
    }

    return (
        <section className='edit-form'>

            <div className='contact-box'>
                <div className='contact'>
                    <h2>Add Happy Clients</h2>

                    <form encType="multipart/form-data" onSubmit={submitHandler} >


                        <input type="file" className='field'
                            placeholder='Image' accept='image/*'
                            onChange={handleImageChange}
                        />


                        <input type="text" className='field'
                            placeholder='Happy Client Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}


                        />



                        <button className='btn' type='submit'>Add</button>


                    </form>


                </div>

            </div>

        </section>
    )
}

export default AddHappyClients
