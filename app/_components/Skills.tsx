import React from 'react'
import { Section } from './Section'
import { Badge } from '@/components/ui/badge'
import { JsLogo } from './icon/JsLogo'
import { Code } from './Code'
import { ReactLogo } from './icon/ReactLogo'
import { HtmlLogo } from './icon/HtmlLogo'
import { NextLogo } from './icon/NextLogo'
import { PythonLogo } from './icon/PythonLogo'
import { CssLogo } from './icon/CssLogo'

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline" className="text-3xl">Skills</Badge>
            <h2 className="pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                J'ai travaillé avec ces technologies...
            </h2>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                            <div className="flex flex-col gap-4">
                                <JsLogo size={35}  />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">JavaScript</h3>
                                <p className="text-sm text-muted-foreground">
                        Je  maîtrise <Code>JavaScript</Code>, la manipulation du DOM pour interagir avec les éléments <Code>HTML</Code> et <Code>CSS</Code>,
                        et comprendre les bases des fonctions asynchrones avec les promesses et async/await pour gérer
                        les opérations réseau et les données.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <HtmlLogo size={35} />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">HTML</h3>
                                <p className="text-sm text-muted-foreground">
                                    Je connais les balises <Code>HTML</Code> essentielles pour structurer des pages web et comprendre comment utiliser les attributs pour définir des propriétés des éléments.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <CssLogo size={35} />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">CSS</h3>
                                <p className="text-sm text-muted-foreground">
                                    J'utilise les sélecteurs <Code>CSS</Code> pour appliquer des styles aux éléments <Code>HTML</Code> et comprendre les concepts de mise en page comme le flexbox et le grid pour créer des mises en page réactives.
                                    Je suis capable de gérer les couleurs, les polices, et les espacements pour améliorer la présentation visuelle des pages.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <NextLogo size={28} />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">Next.js</h3>
                                <p className="text-sm text-muted-foreground">
                                    Je comprends comment utiliser les fonctionnalités de routage et de rendu côté serveur offertes par <Code>Next.js</Code> pour construire des applications web performantes. Je configure les pages et les API.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <ReactLogo size={42} className="animate-spin" style={{animationDuration:"10s"}} />
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">React</h3>
                                <p className="text-sm text-muted-foreground">
                                    Je crée et gére des composants <Code>React</Code> en utilisant l'état (useState) et les effets (useEffect), ainsi que comprendre le concept de props pour passer des données entre les composants.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <PythonLogo/>
                                <h3 className="mb-2 text-xl font-bold tracking-tight ">Python</h3>
                                <p className="text-sm text-muted-foreground">
                                    Je dois maîtriser les bases de la syntaxe <Code>Python</Code> pour écrire des scripts et des programmes, ainsi que comprendre les concepts de structures de données comme les listes, les dictionnaires et les boucles.
                                    Je dois également être capable de travailler avec les modules et les packages pour organiser et réutiliser mon code efficacement.
                                </p>
                            </div>
                </div>
        </Section>
    )
}

