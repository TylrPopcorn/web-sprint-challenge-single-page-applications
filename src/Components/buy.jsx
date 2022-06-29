import schema from '../Validation/formScheme'
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from "axios";

const dataSet = {
    buttonDisabled: true,
    username: '',
    size: '',
    sauce: '',
    sauce_chose: false,
    gluten: false,

    Pepperoni: false,
    Sausage: false,
    Pineapple: false,
    IceCream: false,
    Cheese: false,
}

const initialFormErrors = {
    username: '',
    size: '',
    sauce: '',
}


const BuyForm = (props) => {
    const [formValues, setFormValues] = useState(dataSet);
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({ ...formErrors, [name]: "" })
                /*
                  if (formValues.username.trim() != "" && formValues.size != "" && formValues.sauce_chose != false) {
                      setFormValues({ ...formValues, ["buttonDisabled"]: false })
                  }
                  */
            })
            .catch(err => {
                setFormErrors({ ...formErrors, [name]: err.errors[0] })
            }
            )
    }

    const onSubmit = evt => {
        evt.preventDefault()
        const infoSent = formValues

        axios.post("https://reqres.in/api/orders", infoSent)
            .then((value) => {
                //send to success page.
                console.log("success. posted.", value)
            })
            .catch((value) => {
                console.log(value);
            })
            .finally(function () {
                setFormValues(dataSet);
            })


    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        // console.log(valueToUse)
        if (name != "special-text" && type !== "checkbox" && name != "sauce") {
            validate(name, value);
        }

        if (valueToUse == true || valueToUse == false) {
            setFormValues({ ...formValues, [name]: valueToUse })
        } else {
            if (name == 'sauce') {
                setFormValues({ ...formValues, ['sauce_chose']: true })
                setFormValues({ ...formValues, ['sauce']: value })
            } else {
                setFormValues({ ...formValues, [name]: value })
            }
        }
    }

    useEffect(() => {
        schema.isValid(formValues)
            .then(valid => setFormValues({ ...formValues, ["buttonDisabled"]: !valid }))
    }, [])


    return (
        <div>
            <div>
                <h2> Build Your Own Pizza </h2>
            </div>

            <img src="" />
            <h4>Build your own pizza</h4>

            <form id='pizza-form' onSubmit={onSubmit}>
                <label id="name-input">
                    <div>
                        <h2>Contact Information</h2>
                    </div>

                    {formErrors.username}

                    <div>
                        <input name='username' className="" type="text" onChange={onChange} />
                    </div>
                </label>

                <label id="size-dropdown">
                    <div>
                        <h2>Choice of size</h2>
                        <p>Required</p>
                    </div>

                    <div className="errors">
                        <div>{formErrors.size}</div>
                    </div>

                    <select name="size" onChange={onChange}>
                        <option value=''>-Select an option-</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>

                <label>
                    <div>
                        <h2>Choice of sauce</h2>
                        <p>Required</p>
                    </div>

                    <input
                        type="radio"
                        name="sauce"
                        value='Regular'
                        checked={formValues.sauce === 'Regular'}
                        onChange={onChange}
                    />
                    <label> Regular </label>

                    <input
                        type="radio"
                        name="sauce"
                        value="Classic"
                        checked={formValues.sauce === 'Classic'}
                        onChange={onChange}
                    />
                    <label> Classic </label>

                    <input
                        type="radio"
                        value="Hot"
                        name="sauce"
                        checked={formValues.sauce === 'Hot'}
                        onChange={onChange}
                    />
                    <label> Hot </label>

                    <input
                        type="radio"
                        value="Squealin'"
                        name="sauce"
                        checked={formValues.sauce === "Squealin'"}
                        onChange={onChange}
                    />
                    <label> Squealin' </label>

                </label>

                <label>
                    <div>
                        <h2>Add Toppings</h2>
                        <p>Choose up to 5</p>
                    </div>

                    <input
                        type="checkbox"
                        name="Pepperoni"
                        id=""
                        checked={formValues.Pepperoni}
                        onChange={onChange}
                    />
                    <label>Pepperoni</label>

                    <input
                        type="checkbox"
                        name="Sausage"
                        id=""
                        checked={formValues.Sausage}
                        onChange={onChange}
                    />
                    <label>Sausage</label>

                    <input
                        type="checkbox"
                        name="Pineapple"
                        id=""
                        checked={formValues.Pineapple}
                        onChange={onChange}
                    />
                    <label>Pineapple</label>

                    <input
                        type="checkbox"
                        name="IceCream"
                        id=""
                        checked={formValues.IceCream}
                        onChange={onChange}
                    />
                    <label>Ice Cream</label>

                    <input
                        type="checkbox"
                        name="Cheese"
                        id=""
                        checked={formValues.Cheese}
                        onChange={onChange}
                    />
                    <label>Cheese</label>

                </label>

                <label>
                    <div>
                        <h2>Choice of Substitute</h2>
                        <p>Choose up to 1</p>
                    </div>

                    <input
                        type="checkbox"
                        name="gluten"
                        checked={formValues.gluten}
                        onChange={onChange}
                    />
                    <label>Gluten free crust (+ $1.00)</label>
                </label>

                <label id="special-text">
                    <div>
                        <h2>Special Instructions</h2>
                    </div>

                    <input
                        type="text"
                        name="special-text"
                        id=""
                        onChange={onChange}
                    />
                </label>

                <label>
                    <input type="number" name="numbofOrders" id="" value={"1"} />
                </label>

                <button >submit</button> {/*disabled={formValues.buttonDisabled}*/}
            </form>
        </div>
    )
}

export default BuyForm;