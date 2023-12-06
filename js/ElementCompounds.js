const compounds = [
    { name: 'Water', formula: 'H2O', molecularWeight: 18.015, density: 1.0, description: 'A simple molecule essential for life.' },
    { name: 'Methane', formula: 'CH4', molecularWeight: 16.04, density: 0.716, description: 'A colorless and odorless gas, a major component of natural gas.' },
    { name: 'Ethanol', formula: 'C2H5OH', molecularWeight: 46.07, density: 0.789, description: 'An alcohol found in alcoholic beverages.' },
    { name: 'Caffeine', formula: 'C8H10N4O2', molecularWeight: 194.19, density: null, description: 'A stimulant found in coffee and tea.' },
    { name: 'Aspirin', formula: 'C9H8O4', molecularWeight: 180.16, density: 1.4, description: 'A common medication with anti-inflammatory properties.' },
    { name: 'Benzene', formula: 'C6H6', molecularWeight: 78.11, density: 0.874, description: 'A colorless liquid with a sweet aroma, a fundamental component in organic chemistry.' },
    { name: 'Propane', formula: 'C3H8', molecularWeight: 44.10, density: 1.88, description: 'A hydrocarbon gas commonly used as fuel.' },
    { name: 'Oxygen', formula: 'O2', molecularWeight: 32.00, density: 0.001429, description: 'A vital gas for respiration and combustion.' },
    { name: 'Nitrogen', formula: 'N2', molecularWeight: 28.02, density: 0.0012506, description: 'A colorless and odorless gas, a major component of Earth\'s atmosphere.' },
    { name: 'Carbon Dioxide', formula: 'CO2', molecularWeight: 44.01, density: 0.001977, description: 'A greenhouse gas and essential for photosynthesis.' },
    { name: 'Hydrogen Peroxide', formula: 'H2O2', molecularWeight: 34.02, density: 1.45, description: 'A powerful oxidizer and bleaching agent.' },
    { name: 'Sulfuric Acid', formula: 'H2SO4', molecularWeight: 98.08, density: 1.84, description: 'A highly corrosive strong mineral acid.' },
    { name: 'Ammonia', formula: 'NH3', molecularWeight: 17.03, density: 0.73, description: 'A pungent-smelling gas, used in cleaning products and fertilizers.' },
    { name: 'Carbon Monoxide', formula: 'CO', molecularWeight: 28.01, density: 0.789, description: 'A colorless and odorless gas, toxic in high concentrations.' },
    { name: 'Acetic Acid', formula: 'CH3COOH', molecularWeight: 60.05, density: 1.05, description: 'The main component of vinegar.' },
    { name: 'Hydrochloric Acid', formula: 'HCl', molecularWeight: 36.46, density: 1.49, description: 'A strong acid used in various industrial processes.' },
    { name: 'Phosphoric Acid', formula: 'H3PO4', molecularWeight: 97.99, density: 1.88, description: 'Used in the production of fertilizers and soft drinks.' },
    { name: 'Boric Acid', formula: 'H3BO3', molecularWeight: 61.83, density: 1.44, description: 'Used in the production of glass and antiseptics.' },
    { name: 'Chloroform', formula: 'CHCl3', molecularWeight: 119.38, density: 1.49, description: 'Once used as anesthetic, now primarily a solvent.' },
    { name: 'Acetone', formula: 'C3H6O', molecularWeight: 58.08, density: 0.79, description: 'A common solvent with various industrial uses.' },
    { name: 'Methanol', formula: 'CH3OH', molecularWeight: 32.04, density: 0.79, description: 'Used as a solvent, antifreeze, and fuel.' },
    { name: 'Butane', formula: 'C4H10', molecularWeight: 58.12, density: 2.48, description: 'A hydrocarbon used as a fuel in lighters.' },
    { name: 'Ethylene', formula: 'C2H4', molecularWeight: 28.05, density: 0.97, description: 'Used in the production of plastics.' },
    { name: 'Propylene', formula: 'C3H6', molecularWeight: 42.08, density: 0.89, description: 'A major industrial chemical used in the production of plastics.' },
    { name: 'Butadiene', formula: 'C4H6', molecularWeight: 54.09, density: 0.62, description: 'Used in the production of synthetic rubber.' },
    { name: 'Styrene', formula: 'C8H8', molecularWeight: 104.15, density: 0.91, description: 'A monomer used in the production of polystyrene.' },
    { name: 'Methyl Ethyl Ketone', formula: 'C4H8O', molecularWeight: 72.11, density: 0.805, description: 'A solvent with various industrial uses.' },
    { name: 'Dimethyl Sulfoxide', formula: 'C2H6OS', molecularWeight: 78.13, density: 1.1, description: 'A solvent and polar aprotic liquid.' },
    { name: 'Hexane', formula: 'C6H14', molecularWeight: 86.18, density: 0.659, description: 'A solvent and component of gasoline.' },
    { name: 'Toluene', formula: 'C7H8', molecularWeight: 92.14, density: 0.87, description: 'Used as a solvent and in the production of chemicals.' },
    { name: 'Ethylene Glycol', formula: 'C2H6O2', molecularWeight: 62.07, density: 1.11, description: 'Used in antifreeze and as a precursor to polymers.' },
    { name: 'Glycerol', formula: 'C3H8O3', molecularWeight: 92.09, density: 1.26, description: 'Used in the food and pharmaceutical industries.' },
    { name: 'Formic Acid', formula: 'CH2O2', molecularWeight: 46.03, density: 1.22, description: 'Used in leather tanning and as a preservative.' },
    { name: 'Butyric Acid', formula: 'C4H8O2', molecularWeight: 88.11, density: 0.96, description: 'Found in butter and animal fat.' },
    { name: 'Acrylonitrile', formula: 'C3H3N', molecularWeight: 53.06, density: 0.81, description: 'Used in the production of synthetic fibers.' },
    { name: 'Acetylene', formula: 'C2H2', molecularWeight: 26.04, density: 1.10, description: 'Used in welding and as a precursor to various chemicals.' },
    { name: 'Carbon Tetrachloride', formula: 'CCl4', molecularWeight: 153.82, density: 1.59, description: 'A colorless heavy nonflammable liquid used in fire extinguishers.' },
    { name: 'Dimethyl Ether', formula: 'C2H6O', molecularWeight: 46.07, density: 0.667, description: 'Used as a propellant in aerosol products.' },
    { name: 'Ethyl Acetate', formula: 'C4H8O2', molecularWeight: 88.11, density: 0.902, description: 'A solvent used in nail polish remover and glue.' },
    { name: 'Isopropyl Alcohol', formula: 'C3H8O', molecularWeight: 60.05, density: 0.786, description: 'Used as a cleaning agent and solvent.' },
    { name: 'Methyl Isocyanate', formula: 'C2H3NO', molecularWeight: 57.05, density: 0.97, description: 'An intermediate chemical in the production of pesticides and plastics.' },
    { name: 'Perchloroethylene', formula: 'C2Cl4', molecularWeight: 165.83, density: 1.62, description: 'A solvent commonly used in dry cleaning.' },
    { name: 'Propyl Acetate', formula: 'C5H10O2', molecularWeight: 102.13, density: 0.889, description: 'Used as a solvent in the printing industry.' },
    { name: 'Sodium Hydroxide', formula: 'NaOH', molecularWeight: 39.997, density: 2.13, description: 'A strong alkaline chemical used in soap and paper production.' },
    { name: 'Sulfur Hexafluoride', formula: 'SF6', molecularWeight: 146.06, density: 6.17, description: 'An inert gas used in the electrical industry as an insulator.' },
    { name: 'Tetrahydrofuran', formula: 'C4H8O', molecularWeight: 72.11, density: 0.89, description: 'A solvent and precursor in the synthesis of polymers.' },
    { name: 'Trichloroethylene', formula: 'C2HCl3', molecularWeight: 131.39, density: 1.46, description: 'Used as an industrial solvent and in dry cleaning.' },
    { name: 'Vinyl Chloride', formula: 'C2H3Cl', molecularWeight: 62.50, density: 0.92, description: 'A key ingredient in the production of PVC.' },
    { name: 'Bromine', formula: 'Br2', molecularWeight: 159.808, density: 3.12, description: 'A dark red-brown liquid at room temperature, used in flame retardants.' },
    { name: 'Calcium Carbonate', formula: 'CaCO3', molecularWeight: 100.09, density: 2.71, description: 'A common substance found in rocks and the main component of shells.' },
    { name: 'Chlorine', formula: 'Cl2', molecularWeight: 70.906, density: 0.003214, description: 'A toxic gas used in water treatment and as a disinfectant.' },
    { name: 'Dichloromethane', formula: 'CH2Cl2', molecularWeight: 84.93, density: 1.33, description: 'A versatile solvent used in paint stripping and as a propellant.' },
    { name: 'Dimethylamine', formula: 'C2H7N', molecularWeight: 45.08, density: 0.681, description: 'A precursor in the production of agricultural chemicals.' },
    { name: 'Ethylene Oxide', formula: 'C2H4O', molecularWeight: 44.05, density: 0.88, description: 'Used in the sterilization of medical equipment and as a fumigant.' },
    { name: 'Formaldehyde', formula: 'CH2O', molecularWeight: 30.03, density: 0.815, description: 'A strong-smelling gas used in the production of resins.' },
    { name: 'Hydrogen Cyanide', formula: 'HCN', molecularWeight: 27.03, density: 0.687, description: 'A highly toxic gas used in the production of acrylic fibers.' },
    { name: 'Isobutanol', formula: 'C4H10O', molecularWeight: 74.12, density: 0.802, description: 'Used as a solvent and in the production of coatings and adhesives.' },
    { name: 'Lithium Carbonate', formula: 'Li2CO3', molecularWeight: 73.89, density: 2.11, description: 'Used in the treatment of bipolar disorder.' },
    { name: 'Methyl Methacrylate', formula: 'C5H8O2', molecularWeight: 100.12, density: 0.94, description: 'A monomer used in the production of acrylic plastics.' },
    { name: 'Nitric Acid', formula: 'HNO3', molecularWeight: 63.02, density: 1.51, description: 'A strong acid used in the production of fertilizers and explosives.' },
    { name: 'Phenol', formula: 'C6H6O', molecularWeight: 94.11, density: 1.07, description: 'Used in the production of resins, adhesives, and disinfectants.' },
    { name: 'Potassium Hydroxide', formula: 'KOH', molecularWeight: 56.11, density: 2.04, description: 'A strong alkaline chemical used in the production of soap and batteries.' },
    { name: 'Propylene Glycol', formula: 'C3H8O2', molecularWeight: 76.10, density: 1.04, description: 'Used in the food and pharmaceutical industries as a humectant.' },
    { name: 'Sodium Carbonate', formula: 'Na2CO3', molecularWeight: 105.99, density: 2.54, description: 'Commonly known as soda ash, used in glass and detergent production.' },
    { name: 'Stannous Chloride', formula: 'SnCl2', molecularWeight: 189.60, density: 2.71, description: 'Used in metallurgy and as a reducing agent in chemical reactions.' },
  { name: 'Sulfur Dioxide', formula: 'SO2', molecularWeight: 64.07, density: 2.64, description: 'A toxic gas, produced by burning sulfur-containing fuels.' },
  { name: 'Thiourea', formula: 'CH4N2S', molecularWeight: 76.12, density: 1.40, description: 'Used in photography and as a complexing agent in metal analysis.' },
  { name: 'Titanium Dioxide', formula: 'TiO2', molecularWeight: 79.87, density: 4.26, description: 'A white pigment used in paints, coatings, and sunscreen.' },
  { name: 'Trinitrotoluene (TNT)', formula: 'C7H5N3O6', molecularWeight: 227.09, density: 1.65, description: 'Commonly used as an explosive material.' },
  { name: 'Urea', formula: 'CO(NH2)2', molecularWeight: 60.06, density: 1.32, description: 'A nitrogen-containing compound used as fertilizer and in cosmetics.' },
  { name: 'Vanadium Pentoxide', formula: 'V2O5', molecularWeight: 181.88, density: 3.36, description: 'Used as a catalyst in various chemical reactions.' },
  { name: 'Vinyl Acetate', formula: 'C4H6O2', molecularWeight: 86.09, density: 0.93, description: 'A monomer used in the production of polyvinyl acetate.' },
  { name: 'Xylene', formula: 'C8H10', molecularWeight: 106.17, density: 0.88, description: 'A solvent used in printing, rubber, and leather industries.' },
  { name: 'Yttrium Oxide', formula: 'Y2O3', molecularWeight: 225.81, density: 5.01, description: 'Used in the production of phosphors for color television tubes.' },
  { name: 'Zinc Oxide', formula: 'ZnO', molecularWeight: 81.38, density: 5.61, description: 'Used in the manufacture of rubber, ceramics, and as a sunscreen.' },
  { name: 'Zirconium Dioxide', formula: 'ZrO2', molecularWeight: 123.22, density: 5.89, description: 'Used as a refractory material and in the production of ceramics.' },
  { name: 'Ammonium Nitrate', formula: 'NH4NO3', molecularWeight: 80.05, density: 1.73, description: 'Commonly used as a fertilizer and explosive material.' },
];

  function createElementBox(compound) {
    return `
      <div class="element-box" onclick="toggleBump(this)">
        <div class="element-name">${compound.name}</div>
        <div class="element-symbol">${compound.formula}</div>
        <div class="element-molecular-weight">${compound.molecularWeight}</div>
        <div class="element-density">${compound.density !== null ? compound.density : 'N/A'}</div>
        <div class="element-description">${compound.description}</div>
      </div>
    `;
  }

  function toggleBump(compoundBox) {
    compoundBox.classList.toggle('bumped');
  }

  function renderCompounds(compoundsToRender = compounds) {
    const elementsContainer = document.getElementById('elementsContainer');
    elementsContainer.innerHTML = compoundsToRender.map(createElementBox).join('');
  }

  function searchCompound() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredCompounds = compounds.filter(
      (compound) =>
        compound.name.toLowerCase().includes(input) ||
        compound.formula.toLowerCase().includes(input)
    );
    renderCompounds(filteredCompounds);
  }

  renderCompounds();