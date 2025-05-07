"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import webContact from "@/assets/devWeb.jpg";
import React from "react";
import {toast} from "react-toastify";

const contactSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    email: z.string().email("Adresse e-mail invalide"),
    message: z.string().min(1, "Le message est requis"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok)
                throw new Error("Erreur lors de l'envoi");

            toast.success("Message envoyé !");
            reset();
        } catch {
            toast.error("Échec de l'envoi. Réessayez.");
        }
    };

    return (
        <div id="contact">
            <h2 className="text-3xl font-bold pt-14 text-center mb-6">
                Contactez-moi
            </h2>
            <p className="max-w-3xl mx-auto text-center text-base text-gray-600 dark:text-gray-400 mb-4">
                N&#39;hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
            </p>

            <div className="flex w-full">
                <div className="hidden lg:block lg:w-1/2 relative">
                    <Image
                        src={webContact}
                        alt="Contact Illustration"
                        className="w-full h-80 object-cover"
                    />
                </div>

                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full bg-white dark:bg-[#121212] p-8"
                    >
                        <div className="flex gap-4 mb-4">
                            <div className="w-1/2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Nom <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className={`w-full border-[1px] px-4 py-2 dark:border-none outline-none dark:bg-[#18181b] ${
                                        errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                    }`}
                                    {...register("name")}
                                />
                                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                            </div>

                            <div className="w-1/2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className={`w-full border-[1px] px-4 py-2 dark:border-none outline-none dark:bg-[#18181b] ${
                                        errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                    }`}
                                    {...register("email")}
                                />
                                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className={`w-full border-[1px] px-4 py-2 dark:border-none outline-none dark:bg-[#18181b] ${
                                    errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                }`}
                                {...register("message")}
                            />
                            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-gray-600  hover:cursor-pointer w-full hover:bg-gray-800 text-white px-6 py-2 "
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}
