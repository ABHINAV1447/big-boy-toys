// Native fetch is available in Node.js 18+

const BASE_URL = 'http://localhost:3000';
const TEST_ID = Date.now();
const USER = {
    name: `Backend Test User ${TEST_ID}`,
    email: `backend_test_${TEST_ID}@example.com`,
    password: 'password123'
};

async function testBackend() {
    console.log('🚀 Starting Backend Verification...\n');

    try {
        // 1. Test Signup
        console.log('1️⃣  Testing /api/signup...');
        const signupRes = await fetch(`${BASE_URL}/api/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(USER)
        });
        const signupData = await signupRes.json();
        if (signupData.success) console.log('✅ Signup Successful');
        else throw new Error(`Signup Failed: ${signupData.message}`);

        // 2. Test Login
        console.log('\n2️⃣  Testing /api/login...');
        const loginRes = await fetch(`${BASE_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: USER.email, password: USER.password })
        });
        const loginData = await loginRes.json();
        if (loginData.success) console.log('✅ Login Successful');
        else throw new Error(`Login Failed: ${loginData.message}`);

        // 3. Test Contact Form
        console.log('\n3️⃣  Testing /api/contact...');
        const contactRes = await fetch(`${BASE_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: USER.name,
                email: USER.email,
                subject: 'Backend Test',
                message: 'This is a test message from the verification script.'
            })
        });
        const contactData = await contactRes.json();
        if (contactData.success) console.log('✅ Contact Form Submitted');
        else throw new Error(`Contact Failed: ${contactData.message}`);

        // 4. Test Booking
        console.log('\n4️⃣  Testing /api/book...');
        const bookingRes = await fetch(`${BASE_URL}/api/book`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: USER.name,
                email: USER.email,
                carModel: 'Backend Test Car',
                preferredDate: '2026-12-31'
            })
        });
        const bookingData = await bookingRes.json();
        if (bookingData.success) console.log('✅ Booking Request Submitted');
        else throw new Error(`Booking Failed: ${bookingData.message}`);

        // 5. Test Get Bookings
        console.log('\n5️⃣  Testing /api/bookings...');
        const getBookingsRes = await fetch(`${BASE_URL}/api/bookings?email=${encodeURIComponent(USER.email)}`);
        const getBookingsData = await getBookingsRes.json();

        if (getBookingsData.success) {
            const myBooking = getBookingsData.bookings.find(b => b.carModel === 'Backend Test Car');
            if (myBooking) console.log('✅ Booking Retrieved Successfully');
            else throw new Error('Booking not found in retrieved list');
        } else {
            throw new Error(`Get Bookings Failed: ${getBookingsData.message}`);
        }

        console.log('\n🎉 ALL BACKEND TESTS PASSED! 🎉');

    } catch (error) {
        console.error('\n❌ VERIFICATION FAILED:', error.message);
        process.exit(1);
    }
}

testBackend();
