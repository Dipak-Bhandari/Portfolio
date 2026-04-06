export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Dipak Bhandari",
        url: "https://dipak-bhandari.com.np",
        image: "https://dipak-bhandari.com.np/AR-logo.png",
        sameAs: [
            "https://github.com/Dipak-Bhandari",
            "https://www.linkedin.com/in/dipak-bhandari",
            "mailto:nescoz.dipak@gmail.com",
        ],
        jobTitle: "Laravel Developer",
        description:
            "Full-stack developer with expertise in Laravel, React, and building scalable web applications.",
        knowsAbout: [
            "Laravel",
            "React",
            "Next.js",
            "PHP",
            "Web Development",
            "Software Architecture",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
