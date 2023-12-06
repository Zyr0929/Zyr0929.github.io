const elements = [
    { number: 1, name: 'Hydrogen', symbol: 'H', mass: 1.008, density: 0.00009, electronegativity: 2.2, description: 'A colorless, odorless, tasteless, flammable gaseous substance.' },
    { number: 2, name: 'Helium', symbol: 'He', mass: 4.0026, density: 0.0001786, electronegativity: null, description: 'A colorless, inert, and odorless noble gas.' },
    { number: 3, name: 'Lithium', symbol: 'Li', mass: 6.94, density: 0.534, electronegativity: 0.98, description: 'A soft, silvery-white alkali metal.' },
    { number: 4, name: 'Beryllium', symbol: 'Be', mass: 9.0122, density: 1.85, electronegativity: 1.57, description: 'A hard, grayish metal with a high melting point.' },
    { number: 5, name: 'Boron', symbol: 'B', mass: 10.81, density: 2.34, electronegativity: 2.04, description: 'A metalloid with properties intermediate between those of metals and nonmetals.' },
    { number: 6, name: 'Carbon', symbol: 'C', mass: 12.011, density: 2.267, electronegativity: 2.55, description: 'A key component of organic compounds and the basis of life on Earth.' },
    { number: 7, name: 'Nitrogen', symbol: 'N', mass: 14.007, density: 0.0012506, electronegativity: 3.04, description: 'A colorless, odorless gas, making up a significant portion of Earth\'s atmosphere.' },
    { number: 8, name: 'Oxygen', symbol: 'O', mass: 15.999, density: 0.001429, electronegativity: 3.44, description: 'A vital gas for life, supporting combustion and forming oxides with other elements.' },
    { number: 9, name: 'Fluorine', symbol: 'F', mass: 18.998, density: 0.001696, electronegativity: 3.98, description: 'A highly reactive and toxic gas, a member of the halogens.' },
    { number: 10, name: 'Neon', symbol: 'Ne', mass: 20.180, density: 0.0008999, electronegativity: null, description: 'A colorless, inert gas used in various lighting applications.' },
    { number: 11, name: 'Sodium', symbol: 'Na', mass: 22.990, density: 0.971, electronegativity: 0.93, description: 'A soft, silvery-white, highly reactive metal.' },
    { number: 12, name: 'Magnesium', symbol: 'Mg', mass: 24.305, density: 1.738, electronegativity: 1.31, description: 'A shiny gray solid, important for biological functions and found in various minerals.' },
    { number: 13, name: 'Aluminum', symbol: 'Al', mass: 26.982, density: 2.70, electronegativity: 1.61, description: 'A lightweight, silvery-white metal with many industrial applications.' },
    { number: 14, name: 'Silicon', symbol: 'Si', mass: 28.085, density: 2.3296, electronegativity: 1.90, description: 'A hard, brittle crystalline solid, a fundamental component of semiconductors.' },
    { number: 15, name: 'Phosphorus', symbol: 'P', mass: 30.974, density: 1.82, electronegativity: 2.19, description: 'A multivalent nonmetal, essential for life in the form of DNA and RNA.' },
    { number: 16, name: 'Sulfur', symbol: 'S', mass: 32.06, density: 2.067, electronegativity: 2.58, description: 'A yellow, nonmetallic element with distinctive odor, found in various forms.' },
    { number: 17, name: 'Chlorine', symbol: 'Cl', mass: 35.45, density: 0.003214, electronegativity: 3.16, description: 'A greenish-yellow gas, a strong oxidizing agent and disinfectant.' },
    { number: 18, name: 'Argon', symbol: 'Ar', mass: 39.948, density: 0.0017837, electronegativity: null, description: 'A colorless, inert gas, the third-most abundant gas in Earth\'s atmosphere.' },
    { number: 19, name: 'Potassium', symbol: 'K', mass: 39.098, density: 0.862, electronegativity: 0.82, description: 'A soft, silvery-white metal, highly reactive and abundant in nature.' },
    { number: 20, name: 'Calcium', symbol: 'Ca', mass: 40.078, density: 1.54, electronegativity: 1.00, description: 'A gray, alkaline earth metal, a vital element in bone structure.' },
    { number: 21, name: 'Scandium', symbol: 'Sc', mass: 44.956, density: 2.989, electronegativity: 1.36, description: 'A silvery-white metallic transition metal, used in aerospace applications.' },
    { number: 22, name: 'Titanium', symbol: 'Ti', mass: 47.867, density: 4.506, electronegativity: 1.54, description: 'A lustrous transition metal with a low density and high strength.' },
    { number: 23, name: 'Vanadium', symbol: 'V', mass: 50.942, density: 6.11, electronegativity: 1.63, description: 'A hard, silvery-grey, ductile, and malleable transition metal.' },
    { number: 24, name: 'Chromium', symbol: 'Cr', mass: 51.996, density: 7.15, electronegativity: 1.66, description: 'A shiny, hard, and brittle metal, known for its corrosion resistance.' },
    { number: 25, name: 'Manganese', symbol: 'Mn', mass: 54.938, density: 7.44, electronegativity: 1.55, description: 'A gray-white metal, important in steel production and various chemical applications.' },
    { number: 26, name: 'Iron', symbol: 'Fe', mass: 55.845, density: 7.874, electronegativity: 1.83, description: 'A crucial metal in construction and industry, known for its magnetic properties.' },
    { number: 27, name: 'Cobalt', symbol: 'Co', mass: 58.933, density: 8.90, electronegativity: 1.88, description: 'A hard, lustrous, blue-gray metal, used in various high-performance alloys.' },
    { number: 28, name: 'Nickel', symbol: 'Ni', mass: 58.693, density: 8.908, electronegativity: 1.91, description: 'A silvery-white metal with properties that make it valuable in various applications.' },
    { number: 29, name: 'Copper', symbol: 'Cu', mass: 63.546, density: 8.96, electronegativity: 1.90, description: 'A ductile, malleable, and an excellent conductor of electricity and heat.' },
    { number: 30, name: 'Zinc', symbol: 'Zn', mass: 65.38, density: 7.14, electronegativity: 1.65, description: 'A bluish-white metal with good corrosion resistance, used in various alloys.' },
    { number: 31, name: 'Gallium', symbol: 'Ga', mass: 69.723, density: 5.907, electronegativity: 1.81, description: 'A soft, silvery-blue metal, used in the electronics industry.' },
    { number: 32, name: 'Germanium', symbol: 'Ge', mass: 72.630, density: 5.323, electronegativity: 2.01, description: 'A lustrous, hard, and brittle metalloid, used in semiconductors.' },
    { number: 33, name: 'Arsenic', symbol: 'As', mass: 74.922, density: 5.776, electronegativity: 2.18, description: 'A metalloid with both metallic and nonmetallic properties.' },
    { number: 34, name: 'Selenium', symbol: 'Se', mass: 78.971, density: 4.809, electronegativity: 2.55, description: 'A nonmetal with photovoltaic properties, used in solar cells.' },
    { number: 35, name: 'Bromine', symbol: 'Br', mass: 79.904, density: 0.007072, electronegativity: 2.96, description: 'A dark red liquid, the only nonmetallic element that is liquid at room temperature.' },
    { number: 36, name: 'Krypton', symbol: 'Kr', mass: 83.798, density: 0.003733, electronegativity: null, description: 'A colorless, odorless noble gas, used in certain lighting applications.' },
    { number: 37, name: 'Rubidium', symbol: 'Rb', mass: 85.468, density: 1.532, electronegativity: 0.82, description: 'A soft, silvery-white metal, closely related to potassium.' },
    { number: 38, name: 'Strontium', symbol: 'Sr', mass: 87.620, density: 2.64, electronegativity: 0.95, description: 'A soft silver-white metal, similar to calcium, used in fireworks.' },
    { number: 39, name: 'Yttrium', symbol: 'Y', mass: 88.906, density: 4.469, electronegativity: 1.22, description: 'A silvery-metallic transition metal, used in various alloys.' },
    { number: 40, name: 'Zirconium', symbol: 'Zr', mass: 91.224, density: 6.506, electronegativity: 1.33, description: 'A lustrous, grey-white, strong transition metal, often used in nuclear reactors.' },
    { number: 41, name: 'Niobium', symbol: 'Nb', mass: 92.906, density: 8.570, electronegativity: 1.6, description: 'A soft, grey, ductile transition metal, used in various superconducting materials.' },
    { number: 42, name: 'Molybdenum', symbol: 'Mo', mass: 95.951, density: 10.280, electronegativity: 2.16, description: 'A silvery-grey metal, with one of the highest melting points of all the elements.' },
    { number: 43, name: 'Technetium', symbol: 'Tc', mass: 98.000, density: null, electronegativity: 1.9, description: 'A silvery-grey, radioactive metal, often produced synthetically.' },
    { number: 44, name: 'Ruthenium', symbol: 'Ru', mass: 101.070, density: 12.37, electronegativity: 2.2, description: 'A rare transition metal, known for its hardness and resistance to corrosion.' },
    { number: 45, name: 'Rhodium', symbol: 'Rh', mass: 102.906, density: 12.41, electronegativity: 2.28, description: 'A rare, silvery-white, hard, and chemically inert transition metal.' },
    { number: 46, name: 'Palladium', symbol: 'Pd', mass: 106.420, density: 12.02, electronegativity: 2.20, description: 'A shiny, silvery-white metal, widely used in catalytic converters.' },
    { number: 47, name: 'Silver', symbol: 'Ag', mass: 107.870, density: 10.49, electronegativity: 1.93, description: 'A lustrous transition metal, valued for its beauty and conductivity.' },
    { number: 48, name: 'Cadmium', symbol: 'Cd', mass: 112.414, density: 8.65, electronegativity: 1.69, description: 'A soft, bluish-white metal, used in rechargeable batteries.' },
    { number: 49, name: 'Indium', symbol: 'In', mass: 114.818, density: 7.31, electronegativity: 1.78, description: 'A soft, malleable metal with a brilliant lustre, used in electronics.' },
    { number: 50, name: 'Tin', symbol: 'Sn', mass: 118.710, density: 7.29, electronegativity: 1.96, description: 'A malleable, ductile, and highly crystalline metal, used in various alloys.' },
    { number: 51, name: 'Antimony', symbol: 'Sb', mass: 121.760, density: 6.685, electronegativity: 2.05, description: 'A lustrous grey semi-metal, known for its use in flame retardants.' },
    { number: 52, name: 'Tellurium', symbol: 'Te', mass: 127.600, density: 6.24, electronegativity: 2.1, description: 'A brittle, mildly toxic, rare metalloid, often used in alloys.' },
    { number: 53, name: 'Iodine', symbol: 'I', mass: 126.904, density: 4.93, electronegativity: 2.66, description: 'A dark purple, sublimable solid, important in thyroid function.' },
    { number: 54, name: 'Xenon', symbol: 'Xe', mass: 131.293, density: 0.005887, electronegativity: null, description: 'A colorless, dense, odorless noble gas, used in various lighting applications.' },
    { number: 55, name: 'Cesium', symbol: 'Cs', mass: 132.905, density: 1.93, electronegativity: 0.79, description: 'A soft, silvery-gold alkali metal, highly reactive and pyrophoric.' },
    { number: 56, name: 'Barium', symbol: 'Ba', mass: 137.327, density: 3.62, electronegativity: 0.89, description: 'A soft, silvery alkaline earth metal, used in medical imaging.' },
    { number: 57, name: 'Lanthanum', symbol: 'La', mass: 138.905, density: 6.145, electronegativity: 1.1, description: 'A silvery-white metallic transition metal, part of the rare earth elements.' },
    { number: 58, name: 'Cerium', symbol: 'Ce', mass: 140.116, density: 6.770, electronegativity: 1.12, description: 'A soft, ductile, silvery-white metal, the most abundant of the rare earth elements.' },
    { number: 59, name: 'Praseodymium', symbol: 'Pr', mass: 140.907, density: 6.773, electronegativity: 1.13, description: 'A soft, silvery, malleable, and ductile metal, part of the rare earth elements.' },
    { number: 60, name: 'Neodymium', symbol: 'Nd', mass: 144.242, density: 7.007, electronegativity: 1.14, description: 'A soft, silvery, rare earth metal, used in powerful permanent magnets.' },
    { number: 61, name: 'Promethium', symbol: 'Pm', mass: 145.000, density: null, electronegativity: 1.13, description: 'A radioactive, rare earth metal, not naturally occurring in the Earth\'s crust.' },
    { number: 62, name: 'Samarium', symbol: 'Sm', mass: 150.360, density: 7.52, electronegativity: 1.17, description: 'A moderately hard silvery metal, part of the rare earth elements.' },
    { number: 63, name: 'Europium', symbol: 'Eu', mass: 151.964, density: 5.243, electronegativity: 1.2, description: 'A moderately hard, silvery metal, part of the rare earth elements.' },
    { number: 64, name: 'Gadolinium', symbol: 'Gd', mass: 157.250, density: 7.900, electronegativity: 1.20, description: 'A silvery-white, malleable, and ductile rare earth metal.' },
    { number: 65, name: 'Terbium', symbol: 'Tb', mass: 158.925, density: 8.219, electronegativity: 1.2, description: 'A fairly electropositive metal that reacts with water.' },
    { number: 66, name: 'Dysprosium', symbol: 'Dy', mass: 162.500, density: 8.550, electronegativity: 1.22, description: 'A rare-earth element with metallic silver luster.' },
    { number: 67, name: 'Holmium', symbol: 'Ho', mass: 164.930, density: 8.795, electronegativity: 1.23, description: 'A relatively soft and malleable silvery-white metal.' },
    { number: 68, name: 'Erbium', symbol: 'Er', mass: 167.259, density: 9.066, electronegativity: 1.24, description: 'A silvery-white, solid metal with a hardness similar to that of lead.' },
    { number: 69, name: 'Thulium', symbol: 'Tm', mass: 168.934, density: 9.321, electronegativity: 1.25, description: 'A bright, silvery luster rare-earth metal.' },
    { number: 70, name: 'Ytterbium', symbol: 'Yb', mass: 173.045, density: 6.965, electronegativity: 1.1, description: 'A soft, malleable, and ductile rare-earth element.' },
    { number: 71, name: 'Lutetium', symbol: 'Lu', mass: 174.966, density: 9.841, electronegativity: 1.27, description: 'A silvery white rare-earth metal.' },
    { number: 72, name: 'Hafnium', symbol: 'Hf', mass: 178.490, density: 13.31, electronegativity: 1.3, description: 'A shiny, silvery, ductile metal, commonly used in nuclear reactors.' },
    { number: 73, name: 'Tantalum', symbol: 'Ta', mass: 180.947, density: 16.65, electronegativity: 1.5, description: 'A hard, blue-grey, lustrous transition metal, highly corrosion-resistant.' },
    { number: 74, name: 'Tungsten', symbol: 'W', mass: 183.840, density: 19.25, electronegativity: 2.36, description: 'A rare metal with high density, used in electrical and military applications.' },
    { number: 75, name: 'Rhenium', symbol: 'Re', mass: 186.207, density: 21.02, electronegativity: 1.9, description: 'A silvery-gray, heavy, third-row transition metal.' },
    { number: 76, name: 'Osmium', symbol: 'Os', mass: 190.230, density: 22.59, electronegativity: 2.2, description: 'A hard, brittle, bluish-white transition metal, often used in alloys.' },
    { number: 77, name: 'Iridium', symbol: 'Ir', mass: 192.217, density: 22.56, electronegativity: 2.20, description: 'A dense, corrosion-resistant, and rare transition metal.' },
    { number: 78, name: 'Platinum', symbol: 'Pt', mass: 195.084, density: 21.45, electronegativity: 2.28, description: 'A dense, malleable, and ductile precious metal, often used in jewelry.' },
    { number: 79, name: 'Gold', symbol: 'Au', mass: 196.966, density: 19.32, electronegativity: 2.54, description: 'A soft, yellow, dense metal, prized for its beauty and rarity.' },
    { number: 80, name: 'Mercury', symbol: 'Hg', mass: 200.592, density: 13.534, electronegativity: 2.00, description: 'A heavy, silvery-white metal, the only metal that is liquid at standard conditions.' },
    { number: 81, name: 'Thallium', symbol: 'Tl', mass: 204.38, density: 11.85, electronegativity: 1.62, description: 'A soft, bluish-white metal, used in various electronic and optical applications.' },
    { number: 82, name: 'Lead', symbol: 'Pb', mass: 207.2, density: 11.34, electronegativity: 1.87, description: 'A heavy metal, dense and malleable, with a low melting point.' },
    { number: 83, name: 'Bismuth', symbol: 'Bi', mass: 208.980, density: 9.78, electronegativity: 2.02, description: 'A brittle, pinkish-white metal, often used in alloys with low-melting points.' },
    { number: 84, name: 'Polonium', symbol: 'Po', mass: 209.0, density: 9.196, electronegativity: 2.0, description: 'A highly radioactive metal, rare and extremely toxic.' },
    { number: 85, name: 'Astatine', symbol: 'At', mass: 210.0, density: null, electronegativity: 2.2, description: 'A highly radioactive halogen, the rarest naturally occurring halogen.' },
    { number: 86, name: 'Radon', symbol: 'Rn', mass: 222.0, density: 0.00973, electronegativity: null, description: 'A colorless, tasteless, and odorless radioactive gas.' },
    { number: 87, name: 'Francium', symbol: 'Fr', mass: 223.0, density: null, electronegativity: 0.7, description: 'A highly radioactive alkali metal, extremely rare and unstable.' },
    { number: 88, name: 'Radium', symbol: 'Ra', mass: 226.0, density: null, electronegativity: 0.9, description: 'A highly radioactive alkaline earth metal, historically used in medicine.' },
    { number: 89, name: 'Actinium', symbol: 'Ac', mass: 227.0, density: null, electronegativity: 1.1, description: 'A silvery-white, radioactive metal, part of the actinide series.' },
    { number: 90, name: 'Thorium', symbol: 'Th', mass: 232.037, density: 11.72, electronegativity: 1.3, description: 'A radioactive actinide metal, used in various nuclear applications.' },
    { number: 91, name: 'Protactinium', symbol: 'Pa', mass: 231.035, density: 15.37, electronegativity: 1.5, description: 'A dense, silvery-gray metal, part of the actinide series.' },
    { number: 92, name: 'Uranium', symbol: 'U', mass: 238.028, density: 19.05, electronegativity: 1.38, description: 'A heavy, silvery-white metal, used as fuel in nuclear reactors.' },
    { number: 93, name: 'Neptunium', symbol: 'Np', mass: 237.0, density: 20.25, electronegativity: 1.36, description: 'A radioactive actinide metal, typically produced in nuclear reactors.' },
    { number: 94, name: 'Plutonium', symbol: 'Pu', mass: 244.0, density: 19.86, electronegativity: 1.28, description: 'A radioactive actinide metal, used in nuclear weapons and reactors.' },
    { number: 95, name: 'Americium', symbol: 'Am', mass: 243.0, density: 13.67, electronegativity: 1.3, description: 'A synthetic radioactive metal, used in smoke detectors and nuclear batteries.' },
    { number: 96, name: 'Curium', symbol: 'Cm', mass: 247.0, density: 13.51, electronegativity: 1.3, description: 'A radioactive transuranium metal, part of the actinide series.' },
    { number: 97, name: 'Berkelium', symbol: 'Bk', mass: 247.0, density: 14.79, electronegativity: 1.3, description: 'A radioactive transuranium metal, part of the actinide series.' },
    { number: 98, name: 'Californium', symbol: 'Cf', mass: 251.0, density: 15.1, electronegativity: 1.3, description: 'A radioactive transuranium metal, synthesized in nuclear reactors.' },
    { number: 99, name: 'Einsteinium', symbol: 'Es', mass: 252.0, density: null, electronegativity: 1.3, description: 'A synthetic radioactive element, part of the actinide series.' },
    { number: 100, name: 'Fermium', symbol: 'Fm', mass: 257.0, density: null, electronegativity: 1.3, description: 'A synthetic radioactive element, part of the actinide series.' },
    { number: 101, name: 'Mendelevium', symbol: 'Md', mass: 258.0, density: null, electronegativity: 1.3, description: 'A synthetic radioactive element, part of the actinide series.' },
    { number: 102, name: 'Nobelium', symbol: 'No', mass: 259.0, density: null, electronegativity: 1.3, description: 'A synthetic radioactive element, part of the actinide series.' },
    { number: 103, name: 'Lawrencium', symbol: 'Lr', mass: 262.0, density: null, electronegativity: 1.3, description: 'A synthetic radioactive element, part of the actinide series.' },
    { number: 104, name: 'Rutherfordium', symbol: 'Rf', mass: 267.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 105, name: 'Dubnium', symbol: 'Db', mass: 270.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 106, name: 'Seaborgium', symbol: 'Sg', mass: 271.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 107, name: 'Bohrium', symbol: 'Bh', mass: 270.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 108, name: 'Hassium', symbol: 'Hs', mass: 277.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 109, name: 'Meitnerium', symbol: 'Mt', mass: 276.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 110, name: 'Darmstadtium', symbol: 'Ds', mass: 281.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 111, name: 'Roentgenium', symbol: 'Rg', mass: 280.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 112, name: 'Copernicium', symbol: 'Cn', mass: 285.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 113, name: 'Nihonium', symbol: 'Nh', mass: 284.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 114, name: 'Flerovium', symbol: 'Fl', mass: 289.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 115, name: 'Moscovium', symbol: 'Mc', mass: 288.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 116, name: 'Livermorium', symbol: 'Lv', mass: 293.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 117, name: 'Tennessine', symbol: 'Ts', mass: 294.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
    { number: 118, name: 'Oganesson', symbol: 'Og', mass: 294.0, density: null, electronegativity: null, description: 'A synthetic element, part of the transactinide series.' },
  ];
  
  
  function createElementBox(element) {
    return `<div class="element-box" onclick="toggleBump(this)">
              <h3>${element.number}</h3>
              <p>${element.name}</p>
              <p>${element.symbol}</p>
              <p>${element.mass}</p>
              <p>${element.density}</p>
              <p>${element.electronegativity}</p>
              <div class="element-description">
                <p>Description: ${element.description}</p>
              </div>
            </div>`;
  }
  
    function toggleBump(elementBox) {
      elementBox.classList.toggle('bumped');
    }
  
    function renderElements(elementsToRender = elements) {
      const elementsContainer = document.getElementById('elementsContainer');
      elementsContainer.innerHTML = elementsToRender.map(createElementBox).join('');
    }
  
    function searchElement() {
      const input = document.getElementById('searchInput').value.toLowerCase();
      const filteredElements = elements.filter(
        (element) =>
          element.name.toLowerCase().includes(input) ||
          element.symbol.toLowerCase().includes(input)
      );
      renderElements(filteredElements);
    }
  
    renderElements();