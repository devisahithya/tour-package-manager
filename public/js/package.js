const form = document.getElementById("packageForm");
const packageList = document.getElementById("packageList");

const API = "/api/packages";

async function loadPackages() {

    const res = await fetch(API);

    const data = await res.json();

    packageList.innerHTML = "";

    data.data.forEach(pkg => {

        packageList.innerHTML += `
            <div class="card">

                <h3>${pkg.packageName}</h3>

                <p><b>Destination:</b> ${pkg.destination}</p>

                <p><b>Duration:</b> ${pkg.duration}</p>

                <p><b>Price:</b> ₹${pkg.price}</p>

                <p>${pkg.description}</p>

            </div>
        `;

    });

}

form.addEventListener("submit", async(e)=>{

    e.preventDefault();

    const packageData={

        packageName:packageName.value,

        destination:destination.value,

        duration:duration.value,

        price:price.value,

        description:description.value

    };

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(packageData)
    });

    form.reset();

    loadPackages();

});

loadPackages();