import * as Yup from 'yup';
import { setLocale } from 'yup';

const defaultMsgRequired = "Campo está vazio!";

setLocale({
    string: {
        email: "Insira um e-mail válido",
        min: ({ min }) => (`O campo deve conter mais do que ${min} caracteres`),
        max: ({ max }) => (`O campo deve conter menos do que ${max} caracteres`)
    }
});

export default Yup.object().shape({
    name: Yup.string().min(2).max(200).required(defaultMsgRequired),
    email: Yup.string().email().required(defaultMsgRequired),
    msg: Yup.string().min(5).required(defaultMsgRequired)
});