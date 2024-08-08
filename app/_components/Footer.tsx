import { Section } from "./Section"

export const Footer = () => {
    return (
        <footer className="bg-card">
            <Section className="py-8">
                <p className="text-muted-foreground text-sm">
                    © 2024 Jeremy Guyonnet. All rights reserved.
                </p>
            </Section>
        </footer>
    );
}