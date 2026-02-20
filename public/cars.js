const carData = {
    // --- Super Sport ---
    "bugatti-chiron": {
        name: "Bugatti Chiron",
        category: "super-sport",
        tagline: "The Pinnacle of Performance",
        price: "$3,000,000",
        description: "The Bugatti Chiron is the fastest, most powerful, and exclusive production super sports car in BUGATTI’s history. Its sophisticated design, innovative technology, and iconic, performance-oriented form make it a unique masterpiece of art, form, and technique.",
        specs: {
            "0-60": "2.3s",
            "Top Speed": "261 mph",
            "Horsepower": "1500 hp",
            "Engine": "8.0L W16 Quad-Turbo"
        },
        images: {
            main: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2669&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2574&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2670&auto=format&fit=crop",
            rear: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=2678&auto=format&fit=crop"
        }
    },
    "ferrari-sf90": {
        name: "Ferrari SF90 Stradale",
        category: "super-sport",
        tagline: "Beyond Imagination",
        price: "$625,000",
        description: "The SF90 Stradale is the first series production PHEV (Plug-in Hybrid Electric Vehicle) Ferrari. It delivers unprecedented performance for a production car, with 1,000 cv, a weight-to-power ratio of 1.57 kg/cv, and 390 kg of downforce at 250 km/h.",
        specs: {
            "0-60": "2.5s",
            "Top Speed": "211 mph",
            "Horsepower": "986 hp",
            "Engine": "4.0L V8 Twin-Turbo + 3 Motors"
        },
        images: {
            main: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2670&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop", // Placeholder
            rear: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop" // Placeholder
        }
    },
    "lamborghini-aventador": {
        name: "Lamborghini Aventador SVJ",
        category: "super-sport",
        tagline: "Real Emotions Shape the Future",
        price: "$550,000",
        description: "The Aventador SVJ is where advanced technology meets the extraordinary handling of the active aerodynamics system. It is a driver's car, pure and simple, with a naturally aspirated V12 that screams to the heavens.",
        specs: {
            "0-60": "2.8s",
            "Top Speed": "217 mph",
            "Horsepower": "770 hp",
            "Engine": "6.5L V12"
        },
        images: {
            main: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=2670&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2671&auto=format&fit=crop",
            rear: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=2670&auto=format&fit=crop"
        }
    },

    // --- Luxury SUV ---
    "rolls-royce-cullinan": {
        name: "Rolls-Royce Cullinan",
        category: "suv",
        tagline: "Effortless Everywhere",
        price: "$350,000",
        description: "The Cullinan is the first all-terrain SUV from Rolls-Royce. It makes luxury off-road travel a reality for the first time. Experience the Magic Carpet Ride, regardless of the terrain.",
        specs: {
            "0-60": "4.8s",
            "Top Speed": "155 mph",
            "Horsepower": "563 hp",
            "Engine": "6.75L V12 Twin-Turbo"
        },
        images: {
            main: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop", // Placeholder
            side: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2671&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2574&auto=format&fit=crop",
            rear: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2670&auto=format&fit=crop"
        }
    },
    "lamborghini-urus": {
        name: "Lamborghini Urus",
        category: "suv",
        tagline: "Unlock Any Road",
        price: "$230,000",
        description: "The soul of a super sports car and the functionality of an SUV. The Urus is the first Super Sport Utility Vehicle in the world, identifying as a true Lamborghini with its unmistakable DNA.",
        specs: {
            "0-60": "3.2s",
            "Top Speed": "190 mph",
            "Horsepower": "641 hp",
            "Engine": "4.0L V8 Twin-Turbo"
        },
        images: {
            main: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2670&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2671&auto=format&fit=crop",
            rear: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2670&auto=format&fit=crop"
        }
    },

    // --- Electric ---
    "tesla-roadster": {
        name: "Tesla Roadster",
        category: "electric",
        tagline: "The Quickest Car in the World",
        price: "$200,000",
        description: "As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency. It is the quickest car in the world, with record-setting acceleration, range and performance.",
        specs: {
            "0-60": "1.9s",
            "Range": "620 mi",
            "Horsepower": "1000+ hp",
            "Engine": "Tri-Motor AWD"
        },
        images: {
            main: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2671&auto=format&fit=crop",
            rear: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop"
        }
    },
    "rimac-nevera": {
        name: "Rimac Nevera",
        category: "electric",
        tagline: "Designed to be Driving",
        price: "$2,400,000",
        description: "The Rimac Nevera is an all-electric sports car designed and manufactured by the Croatian automotive manufacturer Rimac Automobili. It is claimed to be the fastest accelerating production car in the world.",
        specs: {
            "0-60": "1.85s",
            "Range": "340 mi",
            "Horsepower": "1914 hp",
            "Engine": "4 Liquid Cooled Motors"
        },
        images: {
            main: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop", // Placeholder
            side: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2671&auto=format&fit=crop",
            rear: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop"
        }
    },

    // --- Classic ---
    "shelby-cobra": {
        name: "Shelby Cobra 427",
        category: "classic",
        tagline: "American Muscle, British Style",
        price: "$1,500,000",
        description: "The AC Cobra, sold in the United States as the Shelby Cobra, is a sports car that has a Ford V8 engine, produced intermittently in the UK and later the United States since 1962.",
        specs: {
            "0-60": "4.2s",
            "Top Speed": "164 mph",
            "Horsepower": "425 hp",
            "Engine": "7.0L V8"
        },
        images: {
            main: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2683&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop",
            rear: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2574&auto=format&fit=crop"
        }
    },
    "jaguar-e-type": {
        name: "Jaguar E-Type",
        category: "classic",
        tagline: "The Most Beautiful Car Ever Made",
        price: "$250,000",
        description: "Enzo Ferrari called it 'the most beautiful car ever made'. The Jaguar E-Type combines beauty, high performance, and competitive pricing, establishing the model as an icon of the motoring world.",
        specs: {
            "0-60": "6.9s",
            "Top Speed": "150 mph",
            "Horsepower": "265 hp",
            "Engine": "4.2L Inline-6"
        },
        images: {
            main: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2574&auto=format&fit=crop", // Placeholder
            side: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2683&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop",
            rear: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2574&auto=format&fit=crop"
        }
    }
};

const categoryNames = {
    "super-sport": "Super Sport Collection",
    "suv": "Luxury SUV Collection",
    "electric": "Electric Future",
    "classic": "Classic Icons"
};
