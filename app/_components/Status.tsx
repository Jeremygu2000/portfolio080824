/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Section } from './Section';
import { Card } from '@/components/ui/card';
import { ArrowUpRight, LucideIcon, Coffee, StickyNoteIcon, CloudSun, ImageDown } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

// Données des projets
const SIDE_PROJECT = [
    {
        Logo: Coffee,
        title: 'projet 1 : Coffeeshop',
        description: 'Site web pour un café, pour apprendre le développement web en front-end',
        url: "https://coffee-ashen-sigma.vercel.app/"
    },
    {
        Logo: StickyNoteIcon,
        title: 'projet 2 : CV_Numerique',
        description: 'Une application pour gérer des CV numériques.',
        url: "https://cv1-chi.vercel.app/"
    },
    {
        Logo: CloudSun,
        title: 'projet 3 : Meteo',
        description: 'Application pour apprendre à maîtriser les API météo.',
        url: "https://meteo-tau.vercel.app/"
    },
    {
        Logo: ImageDown,
        title: 'projet 4 : bankimage',
        description: 'Application pour apprendre à maîtriser authentification et timecript.',
        url: "https://www.ampvisualtv.tv/"
    }
];

type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

// Composant principal
export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2 w-full">
                    <p className="text-lg text-muted-foreground">Projet parallèle pour apprendre</p>
                    <div className='flex flex-col gap-4'>
                        {SIDE_PROJECT.map((project, index) => (
                            <SideProject
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1"> 
                    <p className="text-lg text-muted-foreground">Expériences</p>
                    <div className='flex flex-col gap-4'>
                        {WORK.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Me contacter</p>
                    <ContactCard
                        name="Jeremy Gu"
                        image="jeremy.jpg"
                        mediumImage='phone.png'
                        description='5450 6109' />
                    <ContactCard
                        name="Jeremy Gu"
                        image="jeremy.jpg"
                        mediumImage='gmail.png'
                        description='jrmy.guyonnet@gmail.com' />
                    <ContactCard
                        name="Jeremy Gu"
                        image="jeremy.jpg"
                        mediumImage='linkedin.webp'
                        description='https://linkedin.com/in/jérémy-guyonnet-6bb02b167' />
                    <ContactCard
                        name="Jeremy Gu"
                        image="jeremy.jpg"
                        mediumImage='whatsapp.jpg'
                        description='+230 5450 6109' />
                </Card>
            </div>
        </Section>
    );
};

// Composant pour chaque projet
const SideProject = (props: SideProjectProps) => { 
    return (
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <span className='bg-accent text-accent-foreground p-3 rounded-sm'> 
                <props.Logo size={17} />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className='group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform' size={17} />
        </a>
    );
};

// Composant pour les informations de contact
const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return (
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name} className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>
            <div className='mr-auto'>
                <div className='flex items-center gap-2'> 
                    <p className="text-lg font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className='group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform' size={17} />
        </Card>
    );
};

// Données des travaux
const WORK: WorkProps[] = [
    {
        image: "APSIM.png",
        title: 'APSIM',
        role: 'Chargé du Recrutement',
        date: '2022-2023',
        url: "https://www.apsim.mu/",
        cdi: true
    },
    {
        image: "goswap.jpeg",
        title: 'GoSwap',
        role: 'Corporate Account Manager',
        date: '2021-2023',
        url: "https://www.goswap.ch/",
        cdd: true
    },
    {
        image: "denner.jpg",
        title: 'Denner',
        role: 'Gerant de Caisse',
        date: '2018-2021',
        url: "https://www.denner.ch/fr/",
        cdi: true
    },
    {
        image: "gsa1.png",
        title: 'GSA',
        role: 'Chargé du Recouvrement',
        date: '2016-2018',
        url: "https://www.gs-activities.com/",
        cdi: true
    },
    {
        image: "randstad.png",
        title: 'Randstad',
        role: 'Chef de Quai Logistique',
        date: '2014-2016',
        url: "https://www.randstad.fr/",
        freelance: true
    },
    {
        image: "pompier.jpeg",
        title: 'SDIS86',
        role: 'Sapeur Pompier Volontaire',
        date: '2008-2013',
        url: "https://www.pompiers.fr/",
        freelance: true
    }
];

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
    cdd?: boolean;
    cdi?: boolean;
    interimaire?: boolean;
};

// Composant pour chaque travail
const Work = (props: WorkProps) => { 
    return (
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <img
                src={props.image}
                alt={props.title}
                className='w-10 h-10 object-contain rounded-md' 
            />
            <div>
                <div className='flex items-center gap-2'>
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.cdd && <Badge variant="secondary">CDD</Badge>}
                    {props.cdi && <Badge variant="secondary">CDI</Badge>}
                    {props.interimaire && <Badge variant="secondary">Intérimaire</Badge>}
                    {props.freelance && (
                        <p className="inline-flex items-center rounded-full bg-green-500/10 px-1.5 py-0.5 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                            <Badge variant="outline">Freelance</Badge>
                        </p>
                    )}
                </div>
                <p className="text-sm text-muted-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
                <p className="text-xs text-end text-muted-foreground">{props.date}</p>
            </div>
        </a>
    );
};
