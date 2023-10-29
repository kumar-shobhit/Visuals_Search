const gallery = document.querySelector(".container") as HTMLElement;

const url: string = "https://pbivizedit.com/api/visuals";

fetch(url)
  .then((response: Response) => {
    return response.json();
  })
  .then((data) => {
    data.items.forEach((item) => {
    
      const img = document.createElement("img") as HTMLImageElement;
      img.src = item.imagePath;
      img.alt = item.name;
     
      const description = document.createElement("p") as HTMLParagraphElement;
      description.textContent = item.description;

      
      const galleryItem = document.createElement("div") as HTMLDivElement;
      galleryItem.className = "innerdata";
      galleryItem.appendChild(img);
      galleryItem.appendChild(description);

      gallery.appendChild(galleryItem);
    });
  })
  .catch((error: Error) => console.error("error", error));

const searchFun = () => {
  
  let filter: string = (document.getElementById('input') as HTMLInputElement).value.toUpperCase();

  
  let visuals = document.getElementById('visuals') as HTMLElement;

 
  let dec = visuals.getElementsByClassName('innerdata') as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < dec.length; i++) {
    
    let a = dec[i].getElementsByTagName('p')[0] as HTMLParagraphElement;

    if (a) {
      
      let avalue: string = a.textContent || a.innerHTML;

      if (avalue.toUpperCase().indexOf(filter) > -1) {
        dec[i].style.display = "";
      } else {
        dec[i].style.display = "none";
      }
    }
  }
};
