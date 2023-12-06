function textnied(){
  document.getElementById("searchInput").placeholder = " Search for an element...";
}
const elements = [
    { number: 1, name: 'Hydrogen', discoverer: 'Henry Cavendish', discoveryDate: '1766', backgroundImage: 'discover/HenryCavendish.jpg' },
    { number: 2, name: 'Helium', discoverer: 'Pierre Janssen', discoveryDate: '1868', backgroundImage: 'discover/pierre.jpg' },
    { number: 3, name: 'Lithium', discoverer: 'Johan August Arfwedson', discoveryDate: '1817', backgroundImage: 'discover/johan.jpg' },
    { number: 4, name: 'Beryllium', discoverer: 'Louis-Nicolas Vauquelin', discoveryDate: '1798', backgroundImage: 'discover/nicolas.jpg' },
    { number: 5, name: 'Boron', discoverer: 'Joseph Louis Gay-Lussac and Louis Jacques Thénard', discoveryDate: '1808', backgroundImage: 'discover/gay.jpg' },
    { number: 6, name: 'Carbon', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 7, name: 'Nitrogen', discoverer: 'Daniel Rutherford', discoveryDate: '1772', backgroundImage: 'discover/daniel.jpg' },
    { number: 8, name: 'Oxygen', discoverer: 'Carl Wilhelm Scheele', discoveryDate: '1772', backgroundImage: 'discover/carl.jpg' },
    { number: 9, name: 'Fluorine', discoverer: 'Henri Moissan', discoveryDate: '1886', backgroundImage: 'discover/henri.jpg' },
    { number: 10, name: 'Neon', discoverer: 'Morris Travers and Sir William Ramsay', discoveryDate: '1898', backgroundImage: 'discover/travers.jpg' },
    { number: 11, name: 'Sodium', discoverer: 'Humphry Davy', discoveryDate: '1807', backgroundImage: 'discover/davy.jpg' },
    { number: 12, name: 'Magnesium', discoverer: 'Sir Humphry Davy', discoveryDate: '1808', backgroundImage: 'discover/davy.jpg' },
    { number: 13, name: 'Aluminum', discoverer: 'Hans Christian Ørsted', discoveryDate: '1825', backgroundImage: 'discover/hans.jpg' },
    { number: 14, name: 'Silicon', discoverer: 'Jöns Jakob Berzelius', discoveryDate: '1824', backgroundImage: 'discover/jacob.jpg' },
    { number: 15, name: 'Phosphorus', discoverer: 'Hennig Brand', discoveryDate: '1669', backgroundImage: 'discover/brand.jpg' },
    { number: 16, name: 'Sulfur', discoverer: 'Ancient Egyptians', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 17, name: 'Chlorine', discoverer: 'Carl Wilhelm Scheele', discoveryDate: '1774', backgroundImage: 'discover/carl.jpg' },
    { number: 18, name: 'Argon', discoverer: 'Lord Rayleigh and Sir William Ramsay', discoveryDate: '1894', backgroundImage: 'discover/ramsay.jpg' },
    { number: 19, name: 'Potassium', discoverer: 'Sir Humphry Davy', discoveryDate: '1807', backgroundImage: 'discover/davy.jpg' },
    { number: 20, name: 'Calcium', discoverer: 'Sir Humphry Davy', discoveryDate: '1808', backgroundImage: 'discover/davy.jpg' },
    { number: 21, name: 'Scandium', discoverer: 'Lars Fredrik Nilson', discoveryDate: '1879', backgroundImage: 'discover/lars.jpg' },
    { number: 22, name: 'Titanium', discoverer: 'William Gregor', discoveryDate: '1791', backgroundImage: 'discover/gregor.jpg' },
    { number: 23, name: 'Vanadium', discoverer: 'Andrés Manuel del Río', discoveryDate: '1801', backgroundImage: 'discover/andres.jpg' },
    { number: 24, name: 'Chromium', discoverer: 'Louis Nicolas Vauquelin', discoveryDate: '1797', backgroundImage: 'discover/louis.jpg' },
    { number: 25, name: 'Manganese', discoverer: 'Johan Gottlieb Gahn', discoveryDate: '1774', backgroundImage: 'discover/gahn.jpg' },
    { number: 26, name: 'Iron', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 27, name: 'Cobalt', discoverer: 'Georg Brandt', discoveryDate: '1735', backgroundImage: 'discover/brandt.jpg' },
    { number: 28, name: 'Nickel', discoverer: 'Axel Fredrik Cronstedt', discoveryDate: '1751', backgroundImage: 'discover/axel.jpg' },
    { number: 29, name: 'Copper', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 30, name: 'Zinc', discoverer: 'Unknown', discoveryDate: 'Prehistoric', backgroundImage: 'discover/prehistoric.jpg' },
    { number: 31, name: 'Gallium', discoverer: 'Lecoq de Boisbaudran', discoveryDate: '1875', backgroundImage: 'discover/lecoq.jpg' },
    { number: 32, name: 'Germanium', discoverer: 'Clemens Winkler', discoveryDate: '1886', backgroundImage: 'discover/clemens.jpg' },
    { number: 33, name: 'Arsenic', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 34, name: 'Selenium', discoverer: 'Jöns Jakob Berzelius', discoveryDate: '1817', backgroundImage: 'discover/jacob.jpg' },
    { number: 35, name: 'Bromine', discoverer: 'Antoine Jérôme Balard', discoveryDate: '1826', backgroundImage: 'discover/antoine.jpg' },
    { number: 36, name: 'Krypton', discoverer: 'Sir William Ramsay and Morris Travers', discoveryDate: '1898', backgroundImage: 'discover/ramsay.jpg' },
    { number: 37, name: 'Rubidium', discoverer: 'Robert Bunsen and Gustav Kirchhoff', discoveryDate: '1861', backgroundImage: 'discover/bunsen.jpg' },
    { number: 38, name: 'Strontium', discoverer: 'Adair Crawford and William Cruickshank', discoveryDate: '1790', backgroundImage: 'discover/crawford.jpg' },
    { number: 39, name: 'Yttrium', discoverer: 'Johan Gadolin', discoveryDate: '1794', backgroundImage: 'discover/gadolin.jpg' },
    { number: 40, name: 'Zirconium', discoverer: 'Martin Heinrich Klaproth', discoveryDate: '1789', backgroundImage: 'discover/martin.jpg' },
    { number: 41, name: 'Niobium', discoverer: 'Charles Hatchett', discoveryDate: '1801', backgroundImage: 'discover/hatchett.jpg' },
    { number: 42, name: 'Molybdenum', discoverer: 'Carl Wilhelm Scheele', discoveryDate: '1778', backgroundImage: 'discover/carl.jpg' },
    { number: 43, name: 'Technetium', discoverer: 'Carlo Perrier and Emilio Segrè', discoveryDate: '1937', backgroundImage: 'discover/segre.jpg' },
    { number: 44, name: 'Ruthenium', discoverer: 'Karl Ernst Claus', discoveryDate: '1844', backgroundImage: 'discover/claus.jpg' },
    { number: 45, name: 'Rhodium', discoverer: 'William Hyde Wollaston', discoveryDate: '1803', backgroundImage: 'discover/hyde.jpg' },
    { number: 46, name: 'Palladium', discoverer: 'William Hyde Wollaston', discoveryDate: '1803', backgroundImage: 'discover/hyde.jpg' },
    { number: 47, name: 'Silver', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 48, name: 'Cadmium', discoverer: 'Karl Samuel Leberecht Hermann and Friedrich Stromeyer', discoveryDate: '1817', backgroundImage: 'discover/samuel.jpg' },
    { number: 49, name: 'Indium', discoverer: 'Ferdinand Reich and Hieronymous Theodor Richter', discoveryDate: '1863', backgroundImage: 'discover/reich.jpg' },
    { number: 50, name: 'Tin', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 51, name: 'Antimony', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 52, name: 'Tellurium', discoverer: 'Franz-Joseph Müller von Reichenstein', discoveryDate: '1782', backgroundImage: 'discover/muller.jpg' },
    { number: 53, name: 'Iodine', discoverer: 'Bernard Courtois', discoveryDate: '1811', backgroundImage: 'discover/bernard.jpg' },
    { number: 54, name: 'Xenon', discoverer: 'Sir William Ramsay and Morris Travers', discoveryDate: '1898', backgroundImage: 'discover/ramsay.jpg' },
    { number: 55, name: 'Cesium', discoverer: 'Robert Bunsen and Gustav Kirchhoff', discoveryDate: '1860', backgroundImage: 'discover/bunsen.jpg' },
    { number: 56, name: 'Barium', discoverer: 'Sir Humphry Davy', discoveryDate: '1808', backgroundImage: 'discover/davy.jpg' },
    { number: 57, name: 'Lanthanum', discoverer: 'Carl Gustaf Mosander', discoveryDate: '1839', backgroundImage: 'discover/gustaf.jpg' },
    { number: 58, name: 'Cerium', discoverer: 'Jöns Jakob Berzelius', discoveryDate: '1803', backgroundImage: 'discover/jacob.jpg' },
    { number: 59, name: 'Praseodymium', discoverer: 'Carl Auer von Welsbach', discoveryDate: '1885', backgroundImage: 'discover/auer.jpg' },
    { number: 60, name: 'Neodymium', discoverer: 'Carl Auer von Welsbach', discoveryDate: '1885', backgroundImage: 'discover/auer.jpg' },
    { number: 61, name: 'Promethium', discoverer: 'Grace Mary Coryell and Ralph H. W. Williams', discoveryDate: '1945', backgroundImage: 'path/to/promethium.jpg' },
    { number: 62, name: 'Samarium', discoverer: 'Lecoq de Boisbaudran', discoveryDate: '1879', backgroundImage: 'path/to/samarium.jpg' },
    { number: 63, name: 'Europium', discoverer: 'Eugène-Anatole Demarçay', discoveryDate: '1901', backgroundImage: 'path/to/europium.jpg' },
    { number: 64, name: 'Gadolinium', discoverer: 'Jean Charles Galissard de Marignac', discoveryDate: '1880', backgroundImage: 'path/to/gadolinium.jpg' },
    { number: 65, name: 'Terbium', discoverer: 'Carl Gustaf Mosander', discoveryDate: '1843', backgroundImage: 'discover/gustaf.jpg' },
    { number: 66, name: 'Dysprosium', discoverer: 'Paul Émile Lecoq de Boisbaudran', discoveryDate: '1886', backgroundImage: 'path/to/dysprosium.jpg' },
    { number: 67, name: 'Holmium', discoverer: 'Per Teodor Cleve', discoveryDate: '1879', backgroundImage: 'path/to/holmium.jpg' },
    { number: 68, name: 'Erbium', discoverer: 'Carl Gustaf Mosander', discoveryDate: '1843', backgroundImage: 'discover/gustaf.jpg' },
    { number: 69, name: 'Thulium', discoverer: 'Per Teodor Cleve', discoveryDate: '1879', backgroundImage: 'path/to/thulium.jpg' },
    { number: 70, name: 'Ytterbium', discoverer: 'Jean Charles Galissard de Marignac', discoveryDate: '1878', backgroundImage: 'path/to/ytterbium.jpg' },
    { number: 71, name: 'Lutetium', discoverer: 'Georges Urbain', discoveryDate: '1907', backgroundImage: 'path/to/lutetium.jpg' },
    { number: 72, name: 'Hafnium', discoverer: 'Dirk Coster and Georg von Hevesy', discoveryDate: '1923', backgroundImage: 'path/to/hafnium.jpg' },
    { number: 73, name: 'Tantalum', discoverer: 'Anders Gustaf Ekeberg', discoveryDate: '1802', backgroundImage: 'path/to/tantalum.jpg' },
    { number: 74, name: 'Tungsten', discoverer: 'Juan José Elhuyar and Fausto Elhuyar', discoveryDate: '1783', backgroundImage: 'path/to/tungsten.jpg' },
    { number: 75, name: 'Rhenium', discoverer: 'Masataka Ogawa', discoveryDate: '1908', backgroundImage: 'path/to/rhenium.jpg' },
    { number: 76, name: 'Osmium', discoverer: 'Smithson Tennant', discoveryDate: '1803', backgroundImage: 'path/to/osmium.jpg' },
    { number: 77, name: 'Iridium', discoverer: 'Smithson Tennant', discoveryDate: '1803', backgroundImage: 'path/to/iridium.jpg' },
    { number: 78, name: 'Platinum', discoverer: 'Antonio de Ulloa', discoveryDate: '1735', backgroundImage: 'path/to/platinum.jpg' },
    { number: 79, name: 'Gold', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 80, name: 'Mercury', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 81, name: 'Thallium', discoverer: 'William Crookes', discoveryDate: '1861', backgroundImage: 'path/to/thallium.jpg' },
    { number: 82, name: 'Lead', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 83, name: 'Bismuth', discoverer: 'Known since ancient times', discoveryDate: 'Ancient', backgroundImage: 'discover/ancient.jpg' },
    { number: 84, name: 'Polonium', discoverer: 'Marie Curie and Pierre Curie', discoveryDate: '1898', backgroundImage: 'path/to/polonium.jpg' },
    { number: 85, name: 'Astatine', discoverer: 'Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè', discoveryDate: '1940', backgroundImage: 'path/to/astatine.jpg' },
    { number: 86, name: 'Radon', discoverer: 'Friedrich Ernst Dorn', discoveryDate: '1900', backgroundImage: 'path/to/radon.jpg' },
    { number: 87, name: 'Francium', discoverer: 'Marguerite Perey', discoveryDate: '1939', backgroundImage: 'path/to/francium.jpg' },
    { number: 88, name: 'Radium', discoverer: 'Marie Curie and Pierre Curie', discoveryDate: '1898', backgroundImage: 'path/to/radium.jpg' },
    { number: 89, name: 'Actinium', discoverer: 'Friedrich Oskar Giesel', discoveryDate: '1902', backgroundImage: 'path/to/actinium.jpg' },
    { number: 90, name: 'Thorium', discoverer: 'Jöns Jakob Berzelius', discoveryDate: '1829', backgroundImage: 'path/to/thorium.jpg' },
    { number: 91, name: 'Protactinium', discoverer: 'Otto Hahn and Lise Meitner', discoveryDate: '1917', backgroundImage: 'path/to/protactinium.jpg' },
    { number: 92, name: 'Uranium', discoverer: 'Martin Heinrich Klaproth', discoveryDate: '1789', backgroundImage: 'path/to/uranium.jpg' },
    { number: 93, name: 'Neptunium', discoverer: 'Edwin McMillan and Philip H. Abelson', discoveryDate: '1940', backgroundImage: 'path/to/neptunium.jpg' },
    { number: 94, name: 'Plutonium', discoverer: 'Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, and Albert Ghiorso', discoveryDate: '1940', backgroundImage: 'path/to/plutonium.jpg' },
    { number: 95, name: 'Americium', discoverer: 'Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, and Albert Ghiorso', discoveryDate: '1944', backgroundImage: 'path/to/americium.jpg' },
    { number: 96, name: 'Curium', discoverer: 'Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso', discoveryDate: '1944', backgroundImage: 'path/to/curium.jpg' },
    { number: 97, name: 'Berkelium', discoverer: 'Glenn T. Seaborg, Ralph A. James, Albert Ghiorso, and Stanley G. Thompson', discoveryDate: '1949', backgroundImage: 'path/to/berkelium.jpg' },
    { number: 98, name: 'Californium', discoverer: 'Glenn T. Seaborg, Ralph A. James, Albert Ghiorso, and Kenneth Street Jr.', discoveryDate: '1950', backgroundImage: 'path/to/californium.jpg' },
    { number: 99, name: 'Einsteinium', discoverer: 'Albert Ghiorso and team', discoveryDate: '1952', backgroundImage: 'path/to/einsteinium.jpg' },
    { number: 100, name: 'Fermium', discoverer: 'Albert Ghiorso and team', discoveryDate: '1952', backgroundImage: 'path/to/fermium.jpg' },
    { number: 101, name: 'Mendelevium', discoverer: 'Albert Ghiorso and team', discoveryDate: '1955', backgroundImage: 'path/to/mendelevium.jpg' },
    { number: 102, name: 'Nobelium', discoverer: 'Albert Ghiorso and team', discoveryDate: '1957', backgroundImage: 'path/to/nobelium.jpg' },
    { number: 103, name: 'Lawrencium', discoverer: 'Albert Ghiorso and team', discoveryDate: '1961', backgroundImage: 'path/to/lawrencium.jpg' },
    { number: 104, name: 'Rutherfordium', discoverer: 'Joint Institute for Nuclear Research (Russia) and Lawrence Livermore National Laboratory (USA)', discoveryDate: '1969', backgroundImage: 'path/to/rutherfordium.jpg' },
    { number: 105, name: 'Dubnium', discoverer: 'Joint Institute for Nuclear Research (Russia)', discoveryDate: '1967', backgroundImage: 'path/to/dubnium.jpg' },
    { number: 106, name: 'Seaborgium', discoverer: 'Joint Institute for Nuclear Research (Russia)', discoveryDate: '1974', backgroundImage: 'path/to/seaborgium.jpg' },
    { number: 107, name: 'Bohrium', discoverer: 'Gesellschaft für Schwerionenforschung (Germany)', discoveryDate: '1981', backgroundImage: 'path/to/bohrium.jpg' },
    { number: 108, name: 'Hassium', discoverer: 'Gesellschaft für Schwerionenforschung (Germany)', discoveryDate: '1984', backgroundImage: 'path/to/hassium.jpg' },
    { number: 109, name: 'Meitnerium', discoverer: 'Gesellschaft für Schwerionenforschung (Germany)', discoveryDate: '1982', backgroundImage: 'path/to/meitnerium.jpg' },
    { number: 110, name: 'Darmstadtium', discoverer: 'Gesellschaft für Schwerionenforschung (Germany)', discoveryDate: '1994', backgroundImage: 'path/to/darmstadtium.jpg' },
    { number: 111, name: 'Roentgenium', discoverer: 'Gesellschaft für Schwerionenforschung (Germany)', discoveryDate: '1994', backgroundImage: 'path/to/roentgenium.jpg' },
    { number: 112, name: 'Copernicium', discoverer: 'Gesellschaft für Schwerionenforschung (Germany)', discoveryDate: '1996', backgroundImage: 'path/to/copernicium.jpg' },
    { number: 113, name: 'Nihonium', discoverer: 'RIKEN (Japan)', discoveryDate: '2004', backgroundImage: 'path/to/nihonium.jpg' },
    { number: 114, name: 'Flerovium', discoverer: 'Joint Institute for Nuclear Research (Russia) and Lawrence Livermore National Laboratory (USA)', discoveryDate: '1999', backgroundImage: 'path/to/flerovium.jpg' },
    { number: 115, name: 'Moscovium', discoverer: 'Joint Institute for Nuclear Research (Russia), Oak Ridge National Laboratory (USA), Vanderbilt University (USA), and University of Tennessee (USA)', discoveryDate: '2003', backgroundImage: 'path/to/moscovium.jpg' },
    { number: 116, name: 'Livermorium', discoverer: 'Joint Institute for Nuclear Research (Russia) and Lawrence Livermore National Laboratory (USA)', discoveryDate: '2000', backgroundImage: 'path/to/livermorium.jpg' },
    { number: 117, name: 'Tennessine', discoverer: 'Joint Institute for Nuclear Research (Russia), Oak Ridge National Laboratory (USA), Vanderbilt University (USA), and University of Tennessee (USA)', discoveryDate: '2010', backgroundImage: 'path/to/tennessine.jpg' },
    { number: 118, name: 'Oganesson', discoverer: 'Joint Institute for Nuclear Research (Russia) and Lawrence Livermore National Laboratory (USA)', discoveryDate: '2002', backgroundImage: 'path/to/oganesson.jpg' },
    ];

    function createElements() {
  const elementsContainer = document.getElementById('elementsContainer');

  elements.forEach((element) => {
    const elementBox = document.createElement('div');
    elementBox.className = 'element-box';
    elementBox.style.backgroundImage = `url('${element.backgroundImage}')`;
    elementBox.setAttribute('data-number', element.number);
    elementBox.onclick = () => showElementInfo(element.number);

    const elementText = document.createElement('div');
    elementText.className = 'element-text';
    elementText.innerHTML = `
    <p>Number: ${element.number}</p>
      <p>Name: ${element.name}</p>
      <p>Discoverer: ${element.discoverer}</p>
      <p>Discovery Date: ${element.discoveryDate}</p>
    `;

    elementBox.appendChild(elementText);
    elementsContainer.appendChild(elementBox);
  });
}

function showElementInfo(elementNumber) {
  const selectedElement = document.querySelector(`.element-box[data-number="${elementNumber}"]`);
  selectedElement.classList.toggle('clicked'); // Toggle the 'clicked' class
}

function searchElement() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
  const elementsContainer = document.getElementById('elementsContainer');
  const elements = elementsContainer.getElementsByClassName('element-box');

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const text = element.textContent || element.innerText;

    if (text.toUpperCase().indexOf(filter) > -1) {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  }
}

// Initialize the elements when the page loads
window.onload = createElements;

 