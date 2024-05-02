'use client'
import React, { useState, useEffect } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app } from './firebase';
import { useRouter } from "next/navigation";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [otpSent, setOtpSent] = useState(false);

    const auth = getAuth(app);
    const router = useRouter();

    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
            'size': 'normal',
            'callback': (response) => { },
            'expired-callback': () => { }
        });
    }, [auth]);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleOTPChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSendOtp = async () => {
        try {
            const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, '')}`;
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
            setConfirmationResult(confirmation);
            setOtpSent(true);
            setPhoneNumber('');
            alert('OTP has been sent');
        } catch (error) {
            console.error(error)
        }
    };

    const handleOTPSubmit = async () => {
        try {
            await confirmationResult.confirm(otp);
            setOtp('');
            router.push('/dashboard');
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="con-container">
            {!otpSent ? (
                <div id="recaptcha-container"></div>
            ) : null}
            <div className="inputcontain">
            <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Votre numéro de téléphone avec l'indicatif téléphonique"
            />
            <input className="bg-current"
                type="text"
                value={otp}
                onChange={handleOTPChange}
            />
            <button
                onClick={otpSent ? handleOTPSubmit : handleSendOtp}
                style={{ backgroundColor: otpSent ? 'green' : 'blue' }}
            >
                {otpSent ? 'Saisir le code ici' : 'envoyer le code'}
                
            </button>
            </div>
        </div>
    )
}
/*
        */