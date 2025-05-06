"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string().min(2, "Le nom est requis"),
    email: z.string().email("Adresse email invalide"),
    message: z.string().min(5, "Le message est trop court"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        console.log("Formulaire soumis :", data);
        reset();
    };

    return (
        <>
            <h2 className="text-3xl font-bold pt-14 text-center">Contactez-moi</h2>
            <p className="text-center mb-6">
                N&apos;hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto  p-6 rounded-xl shadow-md space-y-4"
            >
                <div>
                    <label className="block font-medium mb-1">Nom</label>
                    <input
                        type="text"
                        {...register("name")}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="block font-medium mb-1">Message</label>
                    <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full border border-gray-300 p-2 rounded"
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    {isSubmitting ? "Envoi..." : "Envoyer"}
                </button>

                {isSubmitSuccessful && (
                    <p className="text-green-600 text-sm">Message envoyé avec succès !</p>
                )}
            </form>
        </>
    );
}
