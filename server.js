const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock Database (in-memory)
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

const bookings = [];
const contactMessages = [];
const users = [
    { id: 1, name: 'Demo User', email: 'user@example.com', password: 'password123' }
];

const serviceCenters = [
    {
        id: 1,
        name: "BBT Beverly Hills",
        address: "90210 Rodeo Drive, Beverly Hills, CA",
        phone: "+1 (310) 555-0198",
        specialties: ["Bugatti Certified", "Exotic Detailing"],
        image: "https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "BBT Miami Outpost",
        address: "305 Ocean Drive, Miami Beach, FL",
        phone: "+1 (305) 555-8821",
        specialties: ["Performance Tuning", "Hypercar Storage"],
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "BBT Heritage London",
        address: "Number 1 Mayfair, London, UK",
        phone: "+44 20 7946 0111",
        specialties: ["Classic Restoration", "Bespoke Interiors"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2670&auto=format&fit=crop"
    }
];

const jobs = [
    {
        id: "sales-associate",
        title: "Luxury Sales Associate",
        department: "Sales",
        location: "Miami Outpost",
        description: "Join our elite sales team to match high-net-worth clients with the world's most exclusive hypercars.",
        requirements: ["3+ years luxury sales experience", "Deep knowledge of exotic vehicles", "Exceptional communication skills"]
    },
    {
        id: "master-technician",
        title: "Master Technician",
        department: "Service",
        location: "Beverly Hills",
        description: "Diagnose, repair, and maintain the finest automobiles on the planet. Specialized brand certifications required.",
        requirements: ["ASE Master Certification", "Experience with Bugatti or Ferrari", "Meticulous attention to detail"]
    }
];

const applications = [];

const reviews = [
    {
        id: 1,
        carId: 'all', // Generic testimonial for index.html
        author: 'Marcus J.',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop',
        rating: 5,
        text: 'The best experience I have ever had buying a vehicle. The team at Big Boy Toys handled my Bugatti purchase with the utmost discretion and professionalism.',
        date: new Date('2025-10-15')
    },
    {
        id: 2,
        carId: 'all', // Generic testimonial for index.html
        author: 'Sarah V.',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop',
        rating: 5,
        text: 'From the moment I stepped into the Miami Outpost, I knew I was in the right place. They found the exact spec Lamborghini I was looking for in days.',
        date: new Date('2025-11-20')
    },
    {
        id: 4,
        carId: 'all',
        author: 'Jonathan M.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop',
        rating: 5,
        text: 'Their concierge service is unparalleled. They not only delivered the car to my estate but walked me through every bespoke feature.',
        date: new Date('2025-12-01')
    },
    {
        id: 5,
        carId: 'all',
        author: 'Emily R.',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop',
        rating: 4,
        text: 'Incredible selection of classic icons. The buying process was swift, though I wish the delivery took one week instead of two.',
        date: new Date('2026-01-10')
    },
    {
        id: 6,
        carId: 'all',
        author: 'David L.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop',
        rating: 5,
        text: 'They handle everything from start to finish. I wouldn\'t trust any other dealership with my exotic car purchases.',
        date: new Date('2026-02-14')
    },
    {
        id: 3,
        carId: 'bugatti-chiron',
        author: 'David L.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop',
        rating: 5,
        text: 'Absolute masterpiece. The acceleration is beyond words.',
        date: new Date('2026-01-05')
    }
];

// API Routes

// --- Car Inventory Management API ---

// Get all cars
app.get('/api/cars', (req, res) => {
    res.json({ success: true, cars: carData, categories: categoryNames });
});

// Add a new car
app.post('/api/cars', (req, res) => {
    const { id, name, category, tagline, price, description, specs, images } = req.body;

    if (!id || !name || !category) {
        return res.status(400).json({ success: false, message: 'ID, Name, and Category are required.' });
    }

    if (carData[id]) {
        return res.status(400).json({ success: false, message: 'A car with this ID already exists.' });
    }

    carData[id] = {
        name,
        category,
        tagline: tagline || '',
        price: price || 'Price Upon Request',
        description: description || '',
        specs: specs || {},
        images: images || {
            main: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
            side: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
            interior: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2671&auto=format&fit=crop",
            rear: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop"
        }
    };

    console.log(`New Car Added: ${name} (${id})`);
    res.json({ success: true, message: 'Car added successfully.', car: carData[id] });
});

// Edit an existing car
app.put('/api/cars/:id', (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    if (!carData[id]) {
        return res.status(404).json({ success: false, message: 'Car not found.' });
    }

    // Update only the provided fields
    carData[id] = { ...carData[id], ...updates };

    console.log(`Car Updated: ${carData[id].name} (${id})`);
    res.json({ success: true, message: 'Car updated successfully.', car: carData[id] });
});

// Delete a car
app.delete('/api/cars/:id', (req, res) => {
    const { id } = req.params;

    if (!carData[id]) {
        return res.status(404).json({ success: false, message: 'Car not found.' });
    }

    delete carData[id];
    console.log(`Car Deleted: ${id}`);
    res.json({ success: true, message: 'Car deleted successfully.' });
});

// --- Testimonials API ---

// Get General Testimonials (For Home Page)
app.get('/api/testimonials', (req, res) => {
    const testimonials = reviews.filter(r => r.carId === 'all');
    res.json({ success: true, testimonials });
});

// Get Reviews for specific car
app.get('/api/reviews/:carId', (req, res) => {
    const carReviews = reviews.filter(r => r.carId === req.params.carId);
    res.json({ success: true, reviews: carReviews });
});

// Submit a new review
app.post('/api/reviews', (req, res) => {
    const { carId, author, rating, text } = req.body;

    if (!author || !rating || !text) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const newReview = {
        id: Date.now(),
        carId: carId || 'all',
        author,
        rating: parseInt(rating, 10),
        text,
        date: new Date()
    };

    reviews.push(newReview);
    res.json({ success: true, message: 'Review submitted successfully.' });
});

// Get Service Centers
app.get('/api/service-centers', (req, res) => {
    res.json({ success: true, serviceCenters });
});

// Get Jobs
app.get('/api/jobs', (req, res) => {
    res.json({ success: true, jobs });
});

// Handle Job Application
app.post('/api/apply', (req, res) => {
    const { name, email, phone, role, coverLetter } = req.body;

    if (!name || !email || !role) {
        return res.status(400).json({ success: false, message: 'Name, email, and role are required fields.' });
    }

    const newApp = {
        id: Date.now(),
        name,
        email,
        phone,
        role,
        coverLetter: coverLetter || '',
        date: new Date()
    };

    applications.push(newApp);
    console.log('New Job Application:', newApp);

    res.json({ success: true, message: `Application received for ${role}. We will review and contact you shortly.` });
});

// Handle Contact Form Submission
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    const newMessage = {
        id: Date.now(),
        name,
        email,
        subject: subject || 'No Subject',
        message,
        date: new Date()
    };

    contactMessages.push(newMessage);
    console.log('New Contact Message:', newMessage);

    res.json({ success: true, message: 'Thank you for contacting us! We will get back to you shortly.' });
});

// Handle Test Drive Booking
app.post('/api/book', (req, res) => {
    const { name, email, phone, carModel, preferredDate } = req.body;

    if (!name || !email || !carModel) {
        return res.status(400).json({ success: false, message: 'Please provide your name, email, and selected car.' });
    }

    const newBooking = {
        id: Date.now(),
        name,
        email, // Associated with user via email
        phone: phone || 'Not provided',
        carModel,
        preferredDate: preferredDate || 'Flexible',
        status: 'Pending Confirmation',
        date: new Date()
    };

    bookings.push(newBooking);
    console.log('New Booking Request:', newBooking);

    res.json({ success: true, message: `Booking request received for ${carModel}. We will confirm your appointment soon.` });
});

// Get User Bookings
app.get('/api/bookings', (req, res) => {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email query parameter is required.' });
    }

    const userBookings = bookings.filter(b => b.email === email);
    res.json({ success: true, bookings: userBookings });
});

// Cancel User Booking
app.delete('/api/bookings/:id', (req, res) => {
    const bookingId = parseInt(req.params.id, 10);
    const index = bookings.findIndex(b => b.id === bookingId);

    if (index !== -1) {
        bookings.splice(index, 1);
        res.json({ success: true, message: 'Booking cancelled successfully.' });
    } else {
        res.status(404).json({ success: false, message: 'Booking not found.' });
    }
});

// Update Booking Status
app.put('/api/bookings/:id/status', (req, res) => {
    const bookingId = parseInt(req.params.id, 10);
    const { status } = req.body;

    const booking = bookings.find(b => b.id === bookingId);

    if (!booking) {
        return res.status(404).json({ success: false, message: 'Booking not found.' });
    }

    if (!['Approved', 'Completed', 'Rejected', 'Pending Confirmation'].includes(status)) {
        return res.status(400).json({ success: false, message: 'Invalid status.' });
    }

    booking.status = status;
    console.log(`Booking ${bookingId} status updated to: ${status}`);

    res.json({ success: true, message: `Booking status updated to ${status}.`, booking });
});

// Handle Sign Up
app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already exists.' });
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password // In a real app, hash this!
    };

    users.push(newUser);
    console.log('New User Registered:', newUser);

    res.json({ success: true, message: 'Registration successful! You can now sign in.' });
});

// Handle Login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Exclude password from response
        const { password, ...userWithoutPassword } = user;
        res.json({ success: true, message: 'Login successful!', user: userWithoutPassword });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Catch-all route to serve index.html for any unmatched routes (optional, relevant for SPAs)
app.get('/api/admin/data', (req, res) => {
    // In a real application, we would verify the user is logged in as an admin here.
    res.json({
        success: true,
        bookings: bookings,
        messages: contactMessages,
        applications: applications
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server (only if not running as a serverless function)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
