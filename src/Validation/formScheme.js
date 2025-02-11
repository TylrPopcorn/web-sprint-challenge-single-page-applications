//WITH HELP:
import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters")
    ,

    size: yup
        .string()
        .oneOf(["small", "medium", "large"])
    ,
    specialtext: yup.string(),
    Pepperoni: yup.boolean(),
    Sausage: yup.boolean(),
    Pineapple: yup.boolean(),
    blah: yup.boolean(),
    ugh: yup.boolean


})

export default formSchema


//MY ATTEMPT:
/*
import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters")
    ,

    size: yup
        .string()
        .oneOf(["small", "medium", "large"])
    ,


})

export default formSchema
*/


//NOTES:
/*
const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username is required ya bozo")
        .min(3, "Username must be three characters")
    ,

    email: yup
        .string()
        .email("Mustbe a vlid email")
        .required("Email is reuired.")
    ,

    role: yup
        .string()
        .oneOf(["Instructor", "student", "Alumni"])
    ,

    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean(),
})

export default formSchema;

*/