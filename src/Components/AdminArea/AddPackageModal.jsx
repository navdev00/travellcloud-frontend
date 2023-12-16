import { Modal, useMantineTheme, Input } from '@mantine/core';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addAdminPackage } from '../../Actions/Package';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './AdminArea.css'

function AddPackageModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();


  const [packageImage, setPackageImage] = useState(null)
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


  const packageAddHandler = async (e) => {

    e.preventDefault();

    const newPackageData = {
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
     const res = await axios.post("https://travellcloudbackend.onrender.com/tour/admin/add/package", newPackageData);
     toast.success("Package Created Successfully");

            //  window.location.href = ("/tour/admin/all/package")
    } catch (error) {

    }



  };





  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}

    >
      <form className='infoForm' onSubmit={packageAddHandler} encType="multipart/form-data" >
        <h3>Add Package</h3>
        <div>
          <Input type="file"
            className='infoInput'
            name="packageImage"
            placeholder='Package Image'
            radious="md"
            onChange={handleImageChange}

          />
          <Input type="text"
            className='infoInput'
            name="PackageName"
            placeholder='Package Name'
            radious="md"
            value={PackageName}
            onChange={(e) => setPackageName(e.target.value)}
          />
          <Input type="number"
            className='infoInput'
            name="Price"
            placeholder='Price'
            radious="md"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="night"
            placeholder='Nights'
            radious="md"
            value={night}
            onChange={(e) => setNight(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="inclusion1"
            placeholder='Inclusion'
            radious="md"
            value={inclusion1}
            onChange={(e) => setInclusion1(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="inclusion2"
            placeholder='Inclusion'
            radious="md"
            value={inclusion2}
            onChange={(e) => setInclusion2(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="inclusion3"
            placeholder='Inclusion'
            radious="md"
            value={inclusion3}
            onChange={(e) => setInclusion3(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="inclusion4"
            placeholder='Inclusion'
            radious="md"
            value={inclusion4}
            onChange={(e) => setInclusion4(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="inclusion5"
            placeholder='Inclusion'
            radious="md"
            value={inclusion5}
            onChange={(e) => setInclusion5(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="inclusion6"
            placeholder='Inclusion'
            radious="md"
            value={inclusion6}
            onChange={(e) => setInclusion6(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="inclusion7"
            placeholder='Inclusion'
            radious="md"
            value={inclusion7}
            onChange={(e) => setInclusion7(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="inclusion8"
            placeholder='Inclusion'
            radious="md"
            value={inclusion8}
            onChange={(e) => setInclusion8(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="inclusion9"
            placeholder='Inclusion'
            radious="md"
            value={inclusion9}
            onChange={(e) => setInclusion9(e.target.value)}
          />
          <Input type="text"
            className='infoInput'
            name="note"
            placeholder='Note'
            radious="md"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />


        </div>
        <button className='button btn'>Submit</button>
      </form>
    </Modal>
  );
}

export default AddPackageModal
