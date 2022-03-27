import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { filterXSS } from 'xss';
import schema from './schema';

import styles from '../../../../styles/home.module.css';
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
        <section id="contato" className={styles["contact"]}>
            <div
                className={`
                    ${styles["contact__msg"]}
                    ${styles["contact__msg-success"]}
                    ${isSendForm ? styles["contact__msg--active"] : false}
                `}
            >{successMsg}</div>
            <div
                className={`
                    ${styles["contact__msg"]}
                    ${styles["contact__msg-error"]}
                    ${isSendForm === false ? styles["contact__msg--active"] : false}
                `}
            >{errorMsg}</div>

            <main className={styles["contact__form"]}>
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
                                <label className={styles["contact__label"]} htmlFor="name">Nome:</label>
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    className={styles["contact__input"]}
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
                                <label className={styles["contact__label"]} htmlFor="email">E-mail:</label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={styles["contact__input"]}
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
                                <label className={styles["contact__label"]} htmlFor="msg">Mensagem:</label>
                                <Field
                                    id="msg"
                                    name="msg"
                                    type="text"
                                    as="textarea"
                                    className={styles["contact__msg-textarea"]}
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
                                className={styles["contact__submit"]}
                                type="submit"
                                disabled={!isValid}
                                style={{ cursor: !isValid && 'not-allowed' }}
                            >Enviar</button>
                        </Form>
                    )}
                </Formik>
            </main>

            <div className={styles["contact__img"]}>
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