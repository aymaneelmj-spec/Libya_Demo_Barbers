const params = new URLSearchParams(window.location.search);

const id = params.get("id") || 0;

fetch("data.json")
  .then(res => res.json())
  .then(data => {

    const barber = data[id];

    if(!barber){
      document.body.innerHTML = "<h1>Barbershop Not Found</h1>";
      return;
    }

    document.getElementById("name").innerText =
      barber.name;

    document.getElementById("city").innerText =
      barber.city;

    document.getElementById("address").innerText =
      barber.address;

    document.getElementById("whatsappBtn").href =
      barber.whatsapp;

    const gallery =
      document.getElementById("gallery");

    const images =
      barber.demo_url
        .split("images=")[1]
        ?.split(",");

    if(images){

      images.forEach(img => {

        const image =
          document.createElement("img");

        image.src = img;

        image.onerror = () => {
          image.style.display = "none";
        };

        gallery.appendChild(image);

      });

    }

  });