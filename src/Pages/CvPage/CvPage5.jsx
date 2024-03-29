import React from 'react'
import Cv from '../../Components/CV/Cv'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { setCV } from '../../Redux/reducer/CV'
import { useDispatch } from 'react-redux'

function CvPage5() {
    const Navigate= useNavigate() 
    const dispatch = useDispatch()
  const initialValues = {
    forms5: [
      {
        id: 1,
        inputs: [
          {
            id: 1,
            label: "Organization Name",
            value: "",
            style: { width: "100%" },
          },
          { id: 2, label: "Degree", value: "", style: { width: "100%" } },
          {
            id: 3,
            label: "From",
            value: "",
            style: { width: "100%" },
          },
          {
            id: 4,
            label: "To",
            value: "",
            style: { width: "100%" },
          },
          {
            id: 5,
            label: "Description",
            value: "",
            style: { width: "100%", height: "200px" },
          },
        ],
      },
    ],
  };
  const HandleForm = (values)=> {

    const HandleForm = values.map((value) => {
      return {
        OrganizationName: value.inputs[0].value,
        Degree: value.inputs[1].value,
        From: value.inputs[2].value,
         to: value.inputs[3].value,
         Description: value.inputs[4].value,
      };
    })
    return HandleForm
  }
  const onSubmit = (values) => {
    const  valuesForm = HandleForm(values.forms5)
      dispatch(setCV({Education:valuesForm}))
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const addForm = () => {
    const newForm = {
      id: formik.values.forms5.length + 1,
      inputs: initialValues.forms5[0].inputs.map((input) => ({
        ...input,
        value: "",
      })),
    };
    formik.setValues({
      ...formik.values,
      forms5: [...formik.values.forms5, newForm],
    });
  };

  const removeForm = (id) => {
    const updatedForms = formik.values.forms5.filter((form) => form.id !== id);
    formik.setValues({
      ...formik.values,
      forms5: updatedForms,
    });
  };

  const handleInputChange = (formIndex, inputIndex, value) => {
    const updatedForms = [...formik.values.forms5];
    updatedForms[formIndex].inputs[inputIndex].value = value;
    formik.setValues({
      ...formik.values,
      forms5: updatedForms,
    });
  };

return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <p className="my-2">Create CV</p>
                <div className="gold-border"></div>
                <p className="pt-2">6th June 2023</p>
            </div>
        </div>
    </div>
    {/* End small title */}

    {/* Start big title */}
    <div className="container pt-4">
        <div className="row">
            <h2>Customize your cv</h2>
            <p className="col-lg-12 col-lg-5">Here you can create your CV by answering question and getting it
                ready for download or applying to jobs through the platform.
            </p>
        </div>
    </div>
    {/* End big title */}

    {/* Start categories */}
    <div className="container px-4 py-4 background-transparent rounded d-none d-lg-block">
        <div className="row">
            <div className="col d-flex align-items-center" style={{cursor:'pointer'}} onClick={()=> Navigate('/CV/Form4')}>
                <div className="btn-golden-border me-3 bg-warning">4</div>
                <span className="text-uppercase">Experience</span>
            </div>
            <div className="col d-flex align-items-center" style={{cursor:'pointer'}} onClick={()=> Navigate('/CV/Form5')}>
                <div className="btn-golden-border me-3 bg-warning">5</div>
                <span className="text-uppercase">education</span>
            </div>
            <div className="col d-flex align-items-center" style={{cursor:'pointer'}} onClick={()=> Navigate('/CV/Form6')}>
                <div className="btn-golden-border me-3">6</div>
                <span className="text-uppercase">Honers & Awards</span>
            </div>
            <div className="col d-flex align-items-center" style={{cursor:'pointer'}} onClick={()=> Navigate('/CV/Form7')}>
                <div className="btn-golden-border me-3">7</div>
                <span className="text-uppercase">Hobbies & Interest</span>
            </div>
            <div className="col d-flex align-items-center" style={{cursor:'pointer'}} onClick={()=> Navigate('/CV/Form8')}>
                <div className="btn-golden-border me-3">8</div>
                <span className="text-uppercase">Links</span>
            </div>
        </div>
    </div>
    <div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
    <div className="row">
        <div className="col d-flex align-items-center" style={{cursor:'pointer'}} onClick={()=> Navigate('/CV/Form5')}>
            <div className="btn-golden-border me-3 bg-warning">5</div>
            <span className="text-uppercase">Experience</span>
        </div>
        <div className="col d-flex align-items-center" style={{cursor:'pointer'}} onClick={()=> Navigate('/CV/Form6')}>
            <div className="btn-golden-border me-3 ">6</div>
            <span className="text-uppercase">education</span>
        </div>
    </div>
    </div>

    <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
    
    <form className="col-12 col-lg-4 me-lg-5">
    <h3>Education</h3>
    {formik.values.forms5.map((form, formIndex) => (
      <div
        key={form.id}
        className="rounded-3 p-3 mt-1 mb-5 bg-black text-white"
        style={{ border: "2px dashed #BF9B30" }}
      >
        {form.inputs.map((input, inputIndex) => (
          <div key={input.id} style={{ marginBottom: "10px" }}>
            <h5 htmlFor={`forms.${formIndex}.inputs.${inputIndex}.value`}>
              {input.label}
            </h5>
{input.label  == "Description" ?   <textarea
type="text"
id={`forms.${formIndex}.inputs.${inputIndex}.value`}
value={input.value}
onChange={(e) =>
handleInputChange(formIndex, inputIndex, e.target.value)
}
style={input.style}
/> :<input
              type="text"
              id={`forms.${formIndex}.inputs.${inputIndex}.value`}
              value={input.value}
              onChange={(e) =>
                handleInputChange(formIndex, inputIndex, e.target.value)
              }
              style={input.style}
            />}
          </div>
        ))}
        
        <div className="col-12 pt-2 border-0 d-flex justify-content-end">
          <button
            type="button"
            className="border-0"
            style={{ backgroundColor: "transparent", color: "#BF9B30" }}
            onClick={() => removeForm(form.id)}
          >
            <FontAwesomeIcon className="fs-5" icon={faTrashCan} />
          </button>
        </div>
      </div>
    ))}
    <div className="col-12 pt-2 border-0 d-flex justify-content-end">
      <button
        type="button"
        className="me-2 pe-1 border-0"
        style={{ backgroundColor: "transparent", color: "#BF9B30" }}
        onClick={addForm}
      >
        <FontAwesomeIcon
          className="rounded-circle p-1"
          style={{ border: "2px solid #BF9B30" }}
          icon={faPlus}
        />
      </button>
    </div>
  </form>
        <Cv/>
    </div>
    <div className="container btns-form-part">
    <div className="row my-3">
    <div className="col-12 col-lg-2 mb-3 mb-lg-0">
        <button type="submit" onClick={ () => (formik.handleSubmit(), Navigate('/CV/Form6'))} className="btn bg-gold text-white text-uppercase btn-gold-hover py-3 w-100">Continue</button>
    </div>
    <div className="col-12 col-lg-2 order-lg-first">{/* to make continue btn appear first in md sm screens */}
    <button type="button" onClick={()=> Navigate(-1)}  className="btn btn-secondary text-white text-uppercase me-3 py-3 mb-3 mb-lg-0 w-100">Back</button>
</div>
</div>
</div>
</div>
)
}

export default CvPage5