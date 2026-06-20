const bookingForm = document.getElementById("bookingForm");
const bookingList = document.getElementById("bookingList");
const packageSelect = document.getElementById("packageId");

const PACKAGE_API = "/api/packages";
const BOOKING_API = "/api/bookings";

async function loadPackages() {

    const response = await fetch(PACKAGE_API);
    const result = await response.json();

    packageSelect.innerHTML = '<option value="">Select Package</option>';

    result.data.forEach(pkg => {

        packageSelect.innerHTML += `
            <option value="${pkg._id}">
                ${pkg.packageName}
            </option>
        `;

    });

}

async function loadBookings() {

    const response = await fetch(BOOKING_API);
    const result = await response.json();

    bookingList.innerHTML = "";

    result.data.forEach(booking => {

        bookingList.innerHTML += `
            <div class="card">

                <h3>${booking.customerName}</h3>

                <p><strong>Phone:</strong> ${booking.phone}</p>

                <p><strong>Package:</strong> ${booking.packageId.packageName}</p>

                <p><strong>Travel Date:</strong> ${booking.travelDate.substring(0,10)}</p>

                <button onclick="deleteBooking('${booking._id}')">
                    Delete
                </button>

            </div>
        `;

    });

}

bookingForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const booking = {

        customerName: customerName.value,

        phone: phone.value,

        packageId: packageId.value,

        travelDate: travelDate.value

    };

    await fetch(BOOKING_API, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(booking)

    });

    bookingForm.reset();

    loadBookings();

});

async function deleteBooking(id) {

    await fetch(BOOKING_API + "/" + id, {

        method: "DELETE"

    });

    loadBookings();

}

loadPackages();
loadBookings();