import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { filterXSS } from 'xss';

/* Components & Styles */
import schema from './schema';
import styleHome from '../../../../styles/home.module.css';
import styleFonts from '../../../../styles/fonts.module.css';
import styleSpace from '../../../../styles/spaces.module.css';

export default function Contact(){
    const [isSendForm, setIsSendForm] = useState(null);
    const email = process.env.NEXT_PUBLIC_EMAIL;
    const formUrlSubmit = `https://formsubmit.co/ajax/${email}`;
    const errorMsg = "Algo deu errado, tente novamente ou mais tarde :(";
    const successMsg = "Mensagem enviada com sucesso!";

    
    function sendForm(values, actions) {
        const inputsSanitized = {
            name: filterXSS(values.name),
            email: filterXSS(values.email),
            msg: filterXSS(values.msg) 
        };

        fetch(formUrlSubmit, {
            method: 'POST',
            body: JSON.stringify({ ...inputsSanitized }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                setIsSendForm(true);
                setTimeout(() => {
                    setIsSendForm(null);
                }, 2000);
            }
        })
        .catch(error => {
            console.error(error.message);

            setIsSendForm(false);
            setTimeout(() => {
                setIsSendForm(null);
            }, 2000);
        });

        actions.resetForm();
    }

    return(
        <section id="contato" className={styleHome["contact"]}>
            <div
                className={`
                    ${styleHome["contact__msg"]}
                    ${styleHome["contact__msg-success"]}
                    ${isSendForm && styleHome["contact__msg--active"]}
                `}
            >{successMsg}</div>
            <div
                className={`
                    ${styleHome["contact__msg"]}
                    ${styleHome["contact__msg-error"]}
                    ${isSendForm === false && styleHome["contact__msg--active"]}
                `}
            >{errorMsg}</div>

            <main className={styleHome["contact__form"]}>
                <h2
                    className={`
                        ${styleSpace["mbottom-16"]}
                        ${styleFonts["title"]}
                        ${styleFonts["text-center"]}
                        ${styleFonts["text-green"]}
                    `}
                >Contato:</h2>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        msg: '',
                    }}
                    validationSchema={schema}
                    onSubmit={sendForm}
                >
                    {({ isValid }) => (
                        <Form>
                            <fieldset>
                                <label className={styleHome["contact__label"]} htmlFor="name">Nome:</label>
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    className={styleHome["contact__input"]}
                                    required
                                    placeholder="Digite o seu nome"
                                />
                                <ErrorMessage
                                    component="div"
                                    className="error-msg" 
                                    name="name"
                                />
                            </fieldset>
                        
                            <fieldset>
                                <label className={styleHome["contact__label"]} htmlFor="email">E-mail:</label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={styleHome["contact__input"]}
                                    required
                                    placeholder="Digite o seu melhor e-mail"
                                />
                                <ErrorMessage
                                    component="div"
                                    className="error-msg" 
                                    name="email"
                                />
                            </fieldset>
                        
                            <fieldset>
                                <label className={styleHome["contact__label"]} htmlFor="msg">Mensagem:</label>
                                <Field
                                    id="msg"
                                    name="msg"
                                    type="text"
                                    as="textarea"
                                    className={styleHome["contact__msg-textarea"]}
                                    required
                                    placeholder="Insira a sua mensagem"
                                />
                                <ErrorMessage
                                    component="div"
                                    className="error-msg" 
                                    name="msg"
                                />
                            </fieldset>
                            <button
                                className={styleHome["contact__submit"]}
                                type="submit"
                                disabled={!isValid}
                                style={{ cursor: !isValid && 'not-allowed' }}
                            >Enviar</button>
                        </Form>
                    )}
                </Formik>
            </main>

            <div className={styleHome["contact__img"]}>
                <Player
                   autoplay
                   loop
                   src="https://assets5.lottiefiles.com/private_files/lf30_4bkst7vs.json"
                   style={{ height: '100%', width: '100%' }}   
                />
            </div>
        </section>
    );
}