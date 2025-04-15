import { TestimonialCard } from "./TestimobialCard";


import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const RetoursClients = () => {
    const testimonials = [
        {id:1,
            content :"Une expérience incroyable ! Le propriétaire est d’une gentillesse rare, un véritable amour. Il nous a accueillis comme des reine et le couscous était absolument délicieux, généreux et authentique. Si vous cherchez un endroit chaleureux avec une cuisine savoureuse, foncez les yeux fermés ! J'y retournerai sans hésiter.",
        name : "Menbel",
        stars : 5,
        period : "Il y a 3 mois"},  
        {id:2,
            content :"C’est la deuxième fois que j’y retourne et je ne suis toujours pas déçue, je continuerai d’y aller. La nourriture est délicieuse, super qualitative pour un très bon rapport qualité/prix. Le personnel est très chaleureux et l’espace de restauration est propre et spacieux. Je vous recommande très fortement cette adresse qui est la meilleure de Brest selon moi !",
        name : "Maines Mazit",
        stars : 5,
        period : "Il y a 5 mois"},
        {
            id:3,
            content :"La meilleure adresse sur Brest, qui représente bien la culture gastronomique du Maghreb. Tajine, Couscous… Fait maison et copieux.L’accueil très chaleureux. Merci pour cette authenticité. À bientôt",
        name : "Ingrid Panier",
        stars : 5,
        period : "Il y a 3 mois"},  
    ]
    
    return (
        <div className="w-full mx-auto my-16">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#515151]">Retouts Clients</h1>
        <div className="flex flex-wrap justify-center gap-10">
            {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
        </div>
        <a className="table mx-auto my-6 text-2xl font-bold text-center  text-[#515151] border-2 border-[#515151] rounded-full px-6 py-2 hover:bg-[#515151] hover:text-white transition duration-300 ease-in-out"
        href="https://www.google.com/maps/place/KOOL+BIEN/@48.4092509,-4.4712059,17z/data=!4m8!3m7!1s0x4816bbcb123bed09:0x71287eff05e91852!8m2!3d48.4092509!4d-4.468631!9m1!1b1!16s%2Fg%2F11v5dq48z7?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D">Voir Plus</a>
        </div>
    );
    }