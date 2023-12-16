import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EditPackage.css"


const EditPackage = () => {

    const [PackageName, setPackageName] = useState("");
    const [Price, setPrice] = useState("");
    const [night, setNight] = useState("");
    const [inclusion1, setInclusion1] = useState("");
    const [inclusion2, setInclusion2] = useState("");
    const [inclusion3, setInclusion3] = useState("");
    const [inclusion4, setInclusion4] = useState("");
    const [inclusion5, setInclusion5] = useState("");
    const [inclusion6, setInclusion6] = useState("");
    const [inclusion7, setInclusion7] = useState("");
    const [inclusion8, setInclusion8] = useState("");
    const [inclusion9, setInclusion9] = useState("");
    const [note, setNote] = useState("");
    const [post, setPost] = useState({});
    const [packageImage, setPackageImage] = useState(null)




    const handleImageChange = (e) => {
        const file = e.target.files[0]

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setPackageImage(Reader.result)
            }
        }
    }




    const { id } = useParams()



    const packageEditHandler = async (e) => {


        e.preventDefault();
        const packageUpdate = {
            packageImage,
            PackageName,
            Price,
            night,
            inclusion1,
            inclusion2,
            inclusion3,
            inclusion4,
            inclusion5,
            inclusion6,
            inclusion7,
            inclusion8,
            inclusion9,
            note
        };



        try {
            await axios.put("https://travellcloudbackend.onrender.com/tour/admin/update/package/" + id, packageUpdate);
            toast.success("Updated Successfully");

            //    window.location.href = ("/tour/admin/all/package");

        } catch (error) {

        }



    }

    useEffect(() => {

        const getPackage = async () => {
            const res = await axios.get("https://travellcloudbackend.onrender.com/tour/admin/package/" + id);
            setPost(res.data)
            setPackageName(res.data.PackageName)
            setInclusion1(res.data.inclusion1)
            setInclusion2(res.data.inclusion2)
            setInclusion3(res.data.inclusion3)
            setInclusion4(res.data.inclusion4)
            setInclusion5(res.data.inclusion5)
            setInclusion6(res.data.inclusion6)
            setInclusion7(res.data.inclusion7)
            setInclusion8(res.data.inclusion8)
            setInclusion9(res.data.inclusion9)
            setNight(res.data.night)
            setPrice(res.data.Price)
            setNote(res.data.note)

        };
        getPackage();

    }, [id])


    return (



        <section className='edit-form'>

            <div className='contact-box'>
                <div className='contact'>
                    <h2>Edit Package</h2>

                    <form onSubmit={packageEditHandler} encType="multipart/form-data" >


                        <input type="file" className='field' name="packageImage"
                            placeholder='Package Image'
                            onChange={handleImageChange}

                        />


                        <input type="text" className='field' name="PackageName"
                            placeholder='Package Name'
                            onChange={(e) => setPackageName(e.target.value)}
                            value={PackageName}
                        />

                        <input type="number" className='field' name="Price"
                            placeholder='Price'
                            value={Price}
                            onChange={(e) => setPrice(e.target.value)} />

                        <input type="text" className='field' name="night"
                            placeholder='Nights'
                            value={night}
                            onChange={(e) => setNight(e.target.value)} />

                        <input type="text" className='field' name="inclusion1"
                            placeholder='Inclusion'
                            value={inclusion1}
                            onChange={(e) => setInclusion1(e.target.value)} />

                        <input type="text" className='field' name="inclusion2"
                            placeholder='Inclusion'
                            radious="md"
                            value={inclusion2}
                            onChange={(e) => setInclusion2(e.target.value)} />

                        <input type="text" className='field' name="inclusion3"
                            placeholder='Inclusion'
                            value={inclusion3}
                            onChange={(e) => setInclusion3(e.target.value)} />

                        <input type="text" className='field' name="inclusion4"
                            placeholder='Inclusion'
                            value={inclusion4}
                            onChange={(e) => setInclusion4(e.target.value)} />

                        <input type="text" className='field' name="inclusion5"
                            placeholder='Inclusion'
                            value={inclusion5}
                            onChange={(e) => setInclusion5(e.target.value)} />

                        <input type="text" className='field' name="inclusion6"
                            placeholder='Inclusion'
                            value={inclusion6}
                            onChange={(e) => setInclusion6(e.target.value)} />
                        <input type="text" className='field' name="inclusion7"
                            placeholder='Inclusion'
                            value={inclusion7}
                            onChange={(e) => setInclusion7(e.target.value)} />

                        <input type="text" className='field' name="inclusion8"
                            placeholder='Inclusion'
                            value={inclusion8}
                            onChange={(e) => setInclusion8(e.target.value)} />

                        <input type="text" className='field' name="inclusion9"
                            placeholder='Inclusion'
                            value={inclusion9}
                            onChange={(e) => setInclusion9(e.target.value)} />

                        <input type="text" className='field' name="note"
                            placeholder='Note'
                            value={note}
                            onChange={(e) => setNote(e.target.value)} />

                        <button className='btn' type='submit'>Update</button>


                    </form>


                </div>

            </div>

        </section>
    )
}

export default EditPackage
