import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import Lottie from 'lottie-react';
import emailAnimation from '../../assets/animations/emailAnimation.json';
import sentAnimation from '../../assets/animations/sentAnimation.json';
import notSentAnimation from '../../assets/animations/notSentAnimation.json';
import emailjsConfig from "../../assets/email.config";
import { Link } from "react-router-dom";

type EmailJSConfig = {
    SERVICE_ID: string;
    TEMPLATE_ID: string;
    USER_ID: string;
};

const { SERVICE_ID, TEMPLATE_ID, USER_ID } = emailjsConfig as EmailJSConfig;

emailjs.init(USER_ID); 

const FormComp: React.FC = () => {
    const { t } = useTranslation("global");
    const [animationSending, setAnimationSending] = useState<boolean>(false)
    const [animationSent, setAnimationSent] = useState<boolean>(false)
    const [animationNotSent, setAnimationNotSent] = useState<boolean>(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            name: { value: string };
            email: { value: string };
            message: { value: string };
        };

        const formData = {
            to_name: "Admin",
            from_name: target.name.value,
            message: target.message.value
        };

        setAnimationSending(true); // Start showing loading animation

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
            .then((result) => {
                console.log(result.text);
                setAnimationSent(true);
                setTimeout(() => {
                    setAnimationSent(false);
                }, 3900);
            }, (error) => {
                console.log(error.text);
                setAnimationNotSent(true);
                setTimeout(() => {
                    setAnimationNotSent(false);
                }, 3900);
            })
            .finally(() => {
                setAnimationSending(false); // Stop showing loading animation
            });

        event.currentTarget.reset(); // reset
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-20 px-2">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg relative">
                <Lottie className="w-20 absolute top-2 right-2" animationData={emailAnimation} />
                {animationSent && (
                    <Lottie className="w-40 absolute top-1/2  -translate-y-1/2 right-1/2 transform translate-x-1/2" animationData={sentAnimation} />
                )}
                {animationNotSent && (
                    <Lottie className="w-40 absolute top-1/2  -translate-y-1/2 right-1/2 transform translate-x-1/2" animationData={notSentAnimation} />
                )}
                <h2 className="text-2xl font-bold text-center text-gray-900">{t("getintouch.title")}</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            {t("getintouch.name")}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            {t("getintouch.email")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            {t("getintouch.message")}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="resize-none block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <input type="checkbox" name="check" required />
                        <label htmlFor="privacy"> 
                            <Link 
                                className="hover:underline underline-offset-1 ms-2" 
                                to='/privacy-policy'>
                                    {t("getintouch.check")}
                            </Link>
                        </label>
                    </div>
                    <div className="relative">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-secondary rounded-md shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={animationSending}
                        >
                            {animationSending ? (
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2.83A10 10 0 002 12h2zm8 8a8 8 0 01-8-8H2a10 10 0 0010 10v-2zm8-8a8 8 0 01-8 8v2a10 10 0 0010-10h-2z"></path>
                                </svg>
                            ) : (
                                t("getintouch.button")
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormComp;
